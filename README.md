<div align="center">

# [![deno911/typedefs - Type Guards and Utilities for Deno and Deno Deploy](https://raw.githubusercontent.com/deno911/typedefs/main/.github/banner.png)](https://deno.land/x/typedefs)

</div><br>

## Schemas

> **Note**: You can also import any type from the default module, `./mod.ts`

### deno.json

```ts
import { type DenoJson } from "https://deno.land/x/typedefs@0.0.1/deno-json.d.ts";
```

#### `DenoJson`

```ts
interface DenoJson {
  $schema: "https://denopkg.com/denoland/deno/cli/schemas/config-file.v1.json";
  compilerOptions: {
    allowJs: boolean;
    allowUnreachableCode: boolean;
    allowUnusedLabels: boolean;
    checkJs: boolean;
    experimentalDecorators: boolean;
    ... 22 more ...;
    suppressImplicitAnyIndexErrors?: boolean;
  };
  importMap: string;
  fmt: DenoJson.Fmt;
  lint: DenoJson.Lint;
  tasks: DenoJson.Tasks;
  test: DenoJson.Test;
}
```

### import_map.json

Type for [deno's `import_map.json` file](https://deno.land/manual@v1.6.0/linking_to_external_code/import_maps).

```ts
import { type ImportMapJson } from "https://deno.land/x/typedefs@0.0.1/import-map-json.d.ts";
```

#### `ImportMapJson`

```ts
interface ImportMap {
  $schema:
    "https://denopkg.com/denoland/vscode_deno/schemas/import_map.schema.json";
  imports: {
    [specifier: string]: string;
  };
  scopes: {
    [scope: string]: {
      [specifier: string]: string;
    };
  };
}
```

### egg.json (or egg.yaml)

Type for [nest.land's `egg.json` file](https://docs.nest.land/eggs/configuration) used by the `eggs` CLI.

```ts
import { type EggJson } from "https://deno.land/x/typedefs@0.0.1/egg-json.d.ts";
```

#### `EggJson`

```ts
interface EggJson {
  $schema: "https://x.nest.land/eggs@0.3.10/src/schema.json";
  name: string;
  description: string;
  repository: string;
  homepage: string;
  ... 12 more ...;
  checkTests: boolean | string;
}
```

### package.json

Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript, PNPM, Yarn. Based on the [type-fest](https://github.com/sindresorhus/type-fest) package.json definition by Sindre Sorhus, with some added support for PNPM.

```ts
import { type PackageJson } from "https://deno.land/x/typedefs@0.0.1/package-json.d.ts";
```

#### `PackageJson`

```ts
interface PackageJson {
  name?: string | undefined;
  version?: string | undefined;
  description?: string | undefined;
  keywords?: string[] | undefined;
  homepage?: "." | {} | undefined;
  bugs?: string | {
      url?: string | undefined;
      email?: string | undefined;
  } | undefined;
  ... 44 more ...;
  pnpm?: {
      ...;
  } | undefined;
}
```

### tsconfig.json

Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).

```ts
import { type TsConfigJson } from "https://deno.land/x/typedefs@0.0.1/tsconfig-json.d.ts";
```

> **Note**: Taken from the [type-fest](https://github.com/sindresorhus/type-fest) project by Sindre Sorhus.

#### `TsConfigJson`

```ts
interface TsConfigJson {
  compilerOptions?: {
      charset?: string | undefined;
      composite?: boolean | undefined;
      declaration?: boolean | undefined;
      declarationDir?: string | undefined;
      diagnostics?: boolean | undefined;
      ... 97 more ...;
      explainFiles?: boolean | undefined;
  } | undefined;
  ... 7 more ...;
  references?: {
      ...;
  }[] | undefined;
}
```

---

## Contributing

This section assumes you have [**the GitHub CLI**](https://cli.github.com).

### Open in GitHub Codespaces

Create a new instance with the GitHub CLI, or just create one from your
repository homepage on github.com.

```sh
gh codespace create --repo deno911/typedefs
```

### [Open in a Gitpod Workspace](https://gitpod.io/#https://github.com/deno911/typedefs)

Open a new workspace by prepending `https://gitpod.io/#` to your repository URL
and visiting it in your browser:

```md
https://gitpod.io/#https://github.com/deno911/typedefs
```

### Fork and clone the repository locally

```sh
gh repo fork deno911/typedefs --clone
```

### Create a new branch for your changes

```sh
git checkout -b fix/typo-in-readme
```

### Make small changes and concise commits

```sh
# hack hack hack...

git commit README.md -m "fix: typos in README.md" && git push
```

> **Note**: keep the scope of your changes relevant and concise.

### If fixing a bug, create an Issue

Unless, of course, you're fixing a bug for which an issue already exists!

This allows the issue to be connected to your Pull Request, creating a permanent
record of your contribution to the project. It also makes it easier for
maintainers to track project progression.

Creating an issue also ensures you're given proper credit for fixing that bug ;)

### Open a Pull Request

```sh
gh pr create --title "fix: typos in README.md"
```

**Or just open your repo on GitHub.com and follow the prompts.**

> **Warning**: make sure you select the upstream repo for your PR!

<br>

---

<div align="center">

### [🅓🅔🅝🅞⑨①①][deno911]

</div>

[deno.land]: https://deno.land "Deno.land - Official Module Registry"
[deno911]: https://github.com/deno911 "Projects by deno911 on GitHub"
