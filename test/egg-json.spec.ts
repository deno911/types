import { EggJson } from "../egg-json.d.ts";

const nestConfig: EggJson = {
  "name": "module-name",
  "entry": "./src/main.ts",
  "description": "Your brief module description",
  "homepage": "https://github.com/your_name/your_project",
  "unstable": true,
  "unlisted": false,
  "version": "0.0.1",
  "releaseType": "patch",
  "files": ["./mod.ts", "./src/**/*", "./README.md"],
  "ignore": [".git"],
  "checkFormat": "deno fmt",
  "checkTests": "deno test",
  "checkInstallation": true,
  "check": false,
};
