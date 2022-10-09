export type Maybe<T> = T | null | undefined;

export type NotNullish<T> = T & {};

export type Arrayable<T> = T | T[];

export type MergeInsertions<T> =
  | T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

/**
 * Remove the `readonly` directive from all of an object's properties.
 *
 * @note This only affects the top-most level of properties.
 * @see {@linkcode DeepMutable} for a recursive version of this utility.
 */
export type Mutable<T extends {}> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * Recursively remove the `readonly` directive from all properties within an
 * object and any of its children.
 */
export type DeepMutable<T extends {}> = {
  -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K];
};

/**
 * Recursively adds the `readonly` directive too all properties within an
 * object and any child objects it may contain as well. A recursive version
 * of the Readonly type that comes builtin with TypeScript.
 *
 * @see {@linkcode DeepMutable} if you need to remove the `readonly` directives
 */
export type DeepReadonly<T extends {}> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/**
 * Recursively makes all properties of an object (and any objects within it)
 * optional, adding the `?` directive. Essentially the recursive counterpart of
 * TypeScript's builtin Partial type.
 */
export type DeepPartial<T extends {}> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * Recursively make all of an object's properties (and any objects within it)
 * required, removing the `?` directive. Opposite of {@linkcode DeepPartial}.
 * Essentially the recursive counterpart of TypeScript's builtin Required type.
 */
export type DeepRequired<T extends {}> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};

export type Expand<U> = U extends infer T extends object
  ? { [K in keyof T]: T[K] extends object ? Expand<T[K]> : NotNullish<T[K]> }
  : never;
