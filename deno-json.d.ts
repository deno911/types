/**
 * A JSON representation of a Deno configuration file, modeled directly from
 * the official Schema for the `deno.{json,jsonc}` format (Deno 1.25.4)
 *
 * @category File
 */
export interface DenoJson {
  $schema?: "https://denopkg.com/denoland/deno/cli/schemas/config-file.v1.json";

  /**
   * Instructs the TypeScript compiler how to compile .ts files.
   */
  compilerOptions?: DenoJson.CompilerOptions;

  /**
   * Configuration for formatter
   */
  fmt?: DenoJson.Fmt;

  /**
   * The location of an import map to be used when resolving modules. If an
   * import map is explicitly specified, it will override this value.
   * @see {@link Deno.ImportMap}
   */
  importMap?: string;

  /**
   * Configuration for linter
   */
  lint?: DenoJson.Lint;

  /**
   * Configuration for deno task
   */
  tasks?: DenoJson.Tasks;

  /**
   * Configuration for deno test
   */
  test?: DenoJson.Test;
}

/** @internal */
declare namespace DenoJson {
  /**
   * Configuration for formatter
   */
  export type Fmt = {
    files?: {
      /**
       * List of files or directories that will not be formatted.
       */
      exclude?: string[];
      /**
       * List of files or directories that will be formatted.
       */
      include?: string[];
    };
    options?: {
      /**
       * The number of characters for an indent.
       * @default 2
       */
      indentWidth?: number;
      /**
       * The width of a line the printer will try to stay under. Note that
       * the printer may exceed this width in certain cases.
       * @default 80
       */
      lineWidth?: number;
      /**
       * Define how prose should be wrapped in Markdown files.
       * @default always
       */
      proseWrap?: "always" | "never" | "preserve";
      /**
       * Whether to use single quote (true) or double quote (false) for
       * quotation.
       * @default false
       */
      singleQuote?: boolean;
      /**
       * Whether to use tabs (true) or spaces (false) for indentation.
       * @default false
       */
      useTabs?: boolean;
    };
  };

  /**
   * Configuration for linter
   */
  export type Lint = {
    files?: {
      /**
       * List of files or directories that will not be linted.
       */
      exclude?: string[];
      /**
       * List of files or directories that will be linted.
       */
      include?: string[];
    };
    rules?: {
      /**
       * List of rule names that will be excluded from configured tag sets.
       * If the same rule is in `include` it be run.
       */
      exclude?: string[];
      /**
       * List of rule names that will be run. Even if the same rule is in
       * `exclude` it will be run.
       */
      include?: string[];
      /**
       * List of tag names that will be run. Empty list disables all tags and
       * will only use rules from `include`.
       */
      tags?: string[];
    };
  };

  /**
   * Configuration for deno task
   */
  export type Tasks = {
    /**
     * Command to execute for this task name.
     */
    [task: string]: string;
  };

  /**
   * Configuration for deno test
   */
  export type Test = {
    files?: {
      /**
       * List of files or directories that will not be searched for tests.
       */
      exclude?: string[];
      /**
       * List of files or directories that will be searched for tests.
       */
      include?: string[];
    };
  };

  /**
   * Instructs the TypeScript compiler how to compile .ts files.
   */
  export type CompilerOptions = {
    /**
     * Allow JavaScript files to be a part of your program. Use the `checkJS`
     * option to get errors from these files.
     * @default true
     */
    allowJs?: boolean;
    /**
     * Disable error reporting for unreachable code.
     * @default false
     */
    allowUnreachableCode?: boolean;
    /**
     * Disable error reporting for unused labels.
     * @default false
     */
    allowUnusedLabels?: boolean;
    /**
     * Enable error reporting in type-checked JavaScript files.
     * @default false
     */
    checkJs?: boolean;
    /**
     * Enable experimental support for TC39 stage 2 draft decorators.
     * @default true
     */
    experimentalDecorators?: boolean;
    /**
     * Specify what JSX code is generated.
     * @see {@link Config.Deno.Jsx}
     * @default react
     */
    jsx?: CompilerOptions.JSX;
    /**
     * Specify the JSX factory function used when targeting React JSX emit,
     * e.g. `'React.createElement'` or `'h'`
     * @default React.createElement
     */
    jsxFactory?: string;
    /**
     * Specify the JSX Fragment reference used for fragments when targeting
     * React JSX emit e.g. `'React.Fragment'` or `'Fragment'`.
     * @default React.Fragment
     */
    jsxFragmentFactory?: string;
    /**
     * Specify module specifier used to import the JSX factory functions when
     * using jsx: `'react-jsx*'`
     * @default react
     */
    jsxImportSource?: string;
    /**
     * Make keyof only return strings instead of string, numbers or symbols.
     * Legacy option.
     * @default false
     */
    keyofStringsOnly?: boolean;
    /**
     * Specify a set of bundled library declaration files that describe the
     * target runtime environment.
     * @default ["deno.window"]
     */
    lib?: CompilerOptions.Lib[];
    /**
     * Enable error reporting for fallthrough cases in switch statements.
     * @default false
     */
    noFallthroughCasesInSwitch?: boolean;
    /**
     * Enable error reporting for expressions and declarations with an
     * implied `any` type..
     * @default true
     */
    noImplicitAny?: boolean;
    /**
     * Ensure overriding members in derived classes are marked with an
     * override modifier.
     * @default false
     */
    noImplicitOverride?: boolean;
    /**
     * Enable error reporting for codepaths that do not explicitly return in
     * a function.
     * @default false
     */
    noImplicitReturns?: boolean;
    /**
     * Enable error reporting when `this` is given the type `any`.
     * @default true
     */
    noImplicitThis?: boolean;
    /**
     * Disable adding 'use strict' directives in emitted JavaScript files.
     * @default true
     */
    noImplicitUseStrict?: boolean;
    /**
     * Disable strict checking of generic signatures in function types.
     * @default false
     */
    noStrictGenericChecks?: boolean;
    /**
     * Add `undefined` to a type when accessed using an index.
     * @default false
     */
    noUncheckedIndexedAccess?: boolean;
    /**
     * Enable error reporting when a local variables aren't read.
     * @default false
     */
    noUnusedLocals?: boolean;
    /**
     * Raise an error when a function parameter isn't read
     * @default false
     */
    noUnusedParameters?: boolean;
    /**
     * Enable all strict type checking options.
     * @default true
     */
    strict?: boolean;
    /**
     * Check that the arguments for `bind`, `call`, and `apply` methods match
     * the original function.
     * @default true
     */
    strictBindCallApply?: boolean;
    /**
     * When assigning functions, check to ensure parameters and the return
     * values are subtype-compatible.
     * @default true
     */
    strictFunctionTypes?: boolean;
    /**
     * When type checking, take into account `null` and `undefined`.
     * @default true
     */
    strictNullChecks?: boolean;
    /**
     * Check for class properties that are declared but not set in the
     * constructor.
     * @default true
     */
    strictPropertyInitialization?: boolean;
    /**
     * Disable reporting of excess property errors during the creation of
     * object literals.
     * @default false
     */
    suppressExcessPropertyErrors?: boolean;
    /**
     * Suppress `noImplicitAny` errors when indexing objects that lack index
     * signatures.
     * @default false
     */
    suppressImplicitAnyIndexErrors?: boolean;
  };

  namespace CompilerOptions {
    /**
     * Specify what JSX code is generated.
     */
    export type JSX =
      | "preserve"
      | "react"
      | "react-jsx"
      | "react-jsxdev"
      | "react-native";

    export type Lib =
      | "DOM"
      | "DOM.AsyncIterable"
      | "DOM.Extras"
      | "DOM.Iterable"
      | "Deno.NS"
      | "Deno.Shared_Globals"
      | "Deno.Unstable"
      | "Deno.Window"
      | "Deno.Worker"
      | "Deno_webgpu"
      | "ES2015"
      | "ES2015.Collection"
      | "ES2015.Core"
      | "ES2015.Generator"
      | "ES2015.Iterable"
      | "ES2015.Promise"
      | "ES2015.Proxy"
      | "ES2015.Reflect"
      | "ES2015.Symbol"
      | "ES2015.Symbol.WellKnown"
      | "ES2016"
      | "ES2016.Array.Include"
      | "ES2016.Full"
      | "ES2017"
      | "ES2017.Full"
      | "ES2017.Intl"
      | "ES2017.Object"
      | "ES2017.SharedMemory"
      | "ES2017.String"
      | "ES2017.TypedArrays"
      | "ES2018"
      | "ES2018.AsyncGenerator"
      | "ES2018.AsyncIterable"
      | "ES2018.Full"
      | "ES2018.Intl"
      | "ES2018.Promise"
      | "ES2018.RegExp"
      | "ES2019"
      | "ES2019.Array"
      | "ES2019.Full"
      | "ES2019.Object"
      | "ES2019.String"
      | "ES2019.Symbol"
      | "ES2020"
      | "ES2020.BigInt"
      | "ES2020.Date"
      | "ES2020.Full"
      | "ES2020.Intl"
      | "ES2020.Number"
      | "ES2020.Promise"
      | "ES2020.SharedMemory"
      | "ES2020.String"
      | "ES2020.Symbol.WellKnown"
      | "ES2021"
      | "ES2021.Full"
      | "ES2021.Intl"
      | "ES2021.Promise"
      | "ES2021.String"
      | "ES2021.WeakRef"
      | "ES2022"
      | "ES2022.Array"
      | "ES2022.Error"
      | "ES2022.Full"
      | "ES2022.Intl"
      | "ES2022.Object"
      | "ES2022.SharedMemory"
      | "ES2022.String"
      | "ES5"
      | "ES6"
      | "ESNext"
      | "ESNext.Array"
      | "ESNext.Full"
      | "ESNext.Intl"
      | "ScriptHost"
      | "TypeScript"
      | "WebWorker"
      | "WebWorker.ImportScripts"
      | "WebWorker.Iterable"
      | "deno.ns"
      | "deno.shared_globals"
      | "deno.unstable"
      | "deno.window"
      | "deno.worker"
      | "deno_webgpu"
      | "dom"
      | "dom.asynciterable"
      | "dom.extras"
      | "dom.iterable"
      | "es2015"
      | "es2015.collection"
      | "es2015.core"
      | "es2015.generator"
      | "es2015.iterable"
      | "es2015.promise"
      | "es2015.proxy"
      | "es2015.reflect"
      | "es2015.symbol"
      | "es2015.symbol.wellknown"
      | "es2016"
      | "es2016.array.include"
      | "es2016.full"
      | "es2017"
      | "es2017.full"
      | "es2017.intl"
      | "es2017.object"
      | "es2017.sharedmemory"
      | "es2017.string"
      | "es2017.typedarrays"
      | "es2018"
      | "es2018.asyncgenerator"
      | "es2018.asynciterable"
      | "es2018.full"
      | "es2018.intl"
      | "es2018.promise"
      | "es2018.regexp"
      | "es2019"
      | "es2019.array"
      | "es2019.full"
      | "es2019.object"
      | "es2019.string"
      | "es2019.symbol"
      | "es2020"
      | "es2020.bigint"
      | "es2020.date"
      | "es2020.full"
      | "es2020.intl"
      | "es2020.number"
      | "es2020.promise"
      | "es2020.sharedmemory"
      | "es2020.string"
      | "es2020.symbol.wellknown"
      | "es2021"
      | "es2021.full"
      | "es2021.intl"
      | "es2021.promise"
      | "es2021.string"
      | "es2021.weakref"
      | "es2022"
      | "es2022.array"
      | "es2022.error"
      | "es2022.full"
      | "es2022.intl"
      | "es2022.object"
      | "es2022.sharedmemory"
      | "es2022.string"
      | "es5"
      | "es6"
      | "esnext"
      | "esnext.array"
      | "esnext.full"
      | "esnext.intl"
      | "scripthost"
      | "typescript"
      | "webworker"
      | "webworker.importscripts"
      | "webworker.iterable";
  }
}
