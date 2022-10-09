/**
 * An import map which is used to remap imports when modules are loaded.
 * See the Deno Documentation for more information.
 * @see https://deno.land/manual@v1.6.0/linking_to_external_code/import_maps
 */
export type ImportMap = {
  $schema?:
    "https://denopkg.com/denoland/vscode_deno/schemas/import_map.schema.json";
  /**
   * A map of specifiers to their remapped specifiers.
   *
   * The key is the specifier or partial specifier to match, with a value that
   * represents the target specifier or resolved specifier URL.
   */
  imports?: {
    /**
     * The key is the specifier or partial specifier to match, with a value
     * that represents the target specifier.
     */
    [specifier: string]: string;
  };
  /**
   * Define a scope which remaps a specifier in only a specified scope.
   *
   * For example, this remaps the `preact` specifier to a module on `esm.sh`,
   * but **only** within the scope of `preact-render-to-string`:
   * @example ```json
   * "scopes": {
   *   "preact-render-to-string": {
   *     "preact": "https://esm.sh/preact@10.10.6"
   *   }
   * }
   * ```
   */
  scopes?: {
    /**
     * A definition of a scoped remapping.
     */
    [scope: string]: {
      /**
       * The key is the specifier or partial specifier to match within the
       * referring scope, with a value that represents the target
       * specifier.
       */
      [specifier: string]: string;
    };
  };
};
