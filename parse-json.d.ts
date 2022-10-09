export type ParseJson<Json extends string> =
  ParseJson.ParseValue<ParseJson.TrimLeft<Json>> extends
    [infer Parsed, infer Tail extends string] ? [Parsed] extends [never] ? never
    : ParseJson.TrimLeft<Tail> extends "" ? Parsed
    : never
    : never;

declare namespace ParseJson {
  type TrimLeft<Json extends string> = Json extends
    `${" " | "\n" | "\t"}${infer R}` ? TrimLeft<R>
    : Json;

  type ParseValue<Json extends string> = Json extends `undefined${infer R}`
    ? [undefined, TrimLeft<R>]
    : Json extends `null${infer R}` ? [null, TrimLeft<R>]
    : Json extends `true${infer R}` ? [true, TrimLeft<R>]
    : Json extends `false${infer R}` ? [false, TrimLeft<R>]
    : Json extends `"${infer Str}"${infer R}` ? [ParseString<Str>, TrimLeft<R>]
    : Json extends `[${infer R}`
      ? TrimLeft<R> extends `]${infer R}` ? [[], TrimLeft<R>]
      : ParseArray<`,${TrimLeft<R>}`>
    : Json extends `{${infer R}`
      ? TrimLeft<R> extends `}${infer R}` ? [{}, TrimLeft<R>]
      : ParseObject<`,${TrimLeft<R>}`>
    : never;

  type ParseString<S extends string> = S extends
    `${infer L}\\${infer C extends keyof EscChars}${infer R}`
    ? ParseString<`${L}${EscChars[C]}${R}`>
    : S;

  type EscChars = { n: "\n"; t: "\t"; r: "\r"; b: "\b"; f: "\f" };

  type ParseArray<Json extends string, Arr extends any[] = []> = Json extends
    `]${infer R}` ? [Arr, TrimLeft<R>]
    : Json extends `,${infer R}`
      ? ParseValue<TrimLeft<R>> extends [infer Value, infer R extends string]
        ? [Value] extends [never] ? never
        : ParseArray<TrimLeft<R>, [...Arr, Value]>
      : never
    : never;

  type ParseObject<Json extends string, Obj extends object = {}> = Json extends
    `}${infer R}` ? [Merge<Obj>, TrimLeft<R>]
    : Json extends `,${infer R}`
      ? ParseKey<TrimLeft<R>> extends [infer Key extends string, infer R]
        ? R extends `:${infer R}`
          ? ParseValue<TrimLeft<R>> extends
            [infer Value, infer R extends string]
            ? ParseObject<TrimLeft<R>, Obj & { [K in Key]: Value }>
          : never
        : never
      : never
    : never;

  type ParseKey<Json extends string> = Json extends `"${infer Key}"${infer R}`
    ? [ParseString<Key>, TrimLeft<R>]
    : never;

  type Merge<T> = T extends object ? { [K in keyof T]: Merge<T[K]>; } : T;
}
