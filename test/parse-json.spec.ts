// deno-lint-ignore-file no-unused-vars
import type { Expect, Equal } from "../utils.d.ts";
import type { ParseJson } from "../parse-json.d.ts";

const json = `{
  "compilerOptions": {
    "strict": true,
    "lib": [
      "deno.ns",
      "deno.window",
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "types": [
      "./mod.d.ts"
    ]
  }
}` as const;

type ExpectedParsedJson = {
  compilerOptions: {
      strict: true;
      lib: ["deno.ns", "deno.window", "dom", "dom.iterable", "esnext"];
      types: ["./mod.d.ts"];
  };
};

type ActualParsedJson = ParseJson<typeof json>;

type ParseJsonTests = [
  Expect<Equal<ExpectedParsedJson, ActualParsedJson>>,
  Expect<Equal<
    ExpectedParsedJson['compilerOptions']['strict'],
    ActualParsedJson['compilerOptions']['strict']
  >>,
]
