type ReleaseType =
  | "major"
  | "minor"
  | "patch"
  | "pre"
  | "premajor"
  | "preminor"
  | "prepatch"
  | "prerelease";

export interface EggJson {
  $schema?: "https://x.nest.land/eggs@0.3.10/src/schema.json";
  /**
   * The name of your module/repository.
   */
  name?: string;
  /**
   * Your module/repository description.
   */
  description?: string;
  /**
   * A link to your repository.
   * @default null
   */
  repository?: string;
  /**
   * A link to your homepage. (Note: Usually a repository.)
   * @default null
   */
  homepage?: string;
  /**
   * Increment the version by release type. Accepted values are:
   * - `patch` - Increment the next patch version. (`1.0.0` -> `1.0.1`)
   * - `minor` - Increment the next minor version.
   * - `major` - Increment the next major version.
   * - `pre` - Increment the prerelease version.
   * - `prepatch` - Increment to the next patch version and down to a prerelease.
   * - `preminor` - Increment to the next minor version and down to a prerelease.
   * - `premajor` - Increment to the next major version and down to a prerelease.
   * - `prerelease` - Increment the prerelease version or increment the patch version from a non-prerelease version.
   * @default patch
   * @see {@linkcode EggJson.releaseType}
   */
  bump?: ReleaseType;
  /**
   * Increment the version by release type. Accepted values are:
   * - `patch` - Increment the next patch version. (`1.0.0` -> `1.0.1`)
   * - `minor` - Increment the next minor version.
   * - `major` - Increment the next major version.
   * - `pre` - Increment the prerelease version.
   * - `prepatch` - Increment to the next patch version and down to a prerelease.
   * - `preminor` - Increment to the next minor version and down to a prerelease.
   * - `premajor` - Increment to the next major version and down to a prerelease.
   * - `prerelease` - Increment the prerelease version or increment the patch version from a non-prerelease version.

   * @default patch
   * @see https://docs.nest.land/eggs/configuration.html#field-information
   */
  releaseType?: ReleaseType;
  /**
   * Current version of the module. Must adhere to Semantic Versioning (SemVer)
   * specification version 2.0.
   * @see https://semver.org
   */
  version?: string;
  /**
   * Should people be able to find this module/version on the gallery?
   * @note If `true`, the module is hidden from search and gallery views.
   * @default false
   */
  unlisted?: boolean;
  /**
   * Is this version unstable? Default is auto-determined by SemVer rules.
   */
  unstable?: boolean;
  /**
   * The index file of your project. This is what users will see when they
   * try to import your module from our registry!
   * @default './mod.ts'
   */
  entry?: string;
  /**
   * All the files to be uploaded to nest.land. Supports file globbing.
   *
   * @important Do not use '.\/**\/\*' for the files field! This
   * has been known to cause errors in the publishing process. See below.
   *
   * Using an expanded double-glob ('.\/\*\*\/\*') will include *all* of the
   * files in your .git folder, and possibly secret files like .env as well!
   *
   * **You can't delete the version or module once it is published!** Nest.land
   * is different from Deno.land, all modules are immutable and published to
   * the [Arweave](https://arweave.org) blockchain.
   */
  files?: string[];
  /**
   * All the files that should be ignored when uploading to nest.land.
   * Supports file globbing.
   * @see https://docs.nest.land/eggs/configuration#eggignore
   */
  ignore?: string[];
  /**
   * Performs all checks.
   * @default true
   * @see {@linkcode EggJson.checkAll}
   */
  check?: boolean;
  /**
   * Performs all checks.
   * @default true
   * @see {@linkcode EggJson.check}
   */
  checkAll?: boolean;
  /**
   * Automatically format your code before publishing to the blockchain.
   *
   * - Accepts a `boolean` or a `string` (user defined command).
   * - Executes `deno fmt --check` if `true`
   * @default false
   */
  checkFormat?: boolean | string;
  /**
   * Simulates a dummy installation and check for missing files in the
   * dependency tree.
   * @default false
   */
  checkInstallation?: boolean;
  /**
   * Run tests to ensure module is not broken.
   *
   * - Accepts a boolean or a string (user defined command).
   * - Executes `deno test -A --unstable` if `true`.
   *
   * @default false
   */
  checkTests?: boolean | string;
}
