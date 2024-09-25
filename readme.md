# Project Setup
## Steps
1. Initialize the project with npm
   ```
   npm init
   ```
2. Install husky and lint-staged
   ```
   npm install husky lint-staged --save-dev
   ```
3. Install typescript
   ```
   npm install typescript --save-dev
   ```
4. Initialize typescript
   ```
   npx tsc --init
   ```
5. Enable following in tsconfig.json
   - `"rootDir": "./src",`
   - `"outDir": "./dist",`
   - `"removeComments": true,`
   - `"noImplicitAny": true,`
   - `"strictNullChecks": true,`
   - `"strictFunctionTypes": true,`
   - `"strictPropertyInitialization": true,`
   - `"alwaysStrict": true,`
   - `"noUnusedLocals": true,`
   - `"noUnusedParameters": true,`
   - `"noImplicitReturns": true,`
6. Create src folder and index.ts file
7. Install @types/node and nodemon
   ```
   npm install @types/node --save-dev
   npm install nodemon --save-dev
   npm install ts-node --save-dev
   ```
9. Folder Structure
   - `/docker` => Folder for Dockerfiles
   - `/logs` => Folder for log files
   - `/nginx` => Folder for Nginx config files
   - `/public` => Folder for static files
   - `/script` => Folder for shell scripts or migration files
   - `/src` => Folder for source code
     - `/config` => Configuration files
     - `/constant` => Constant values
     - `/controller` => Controller files
     - `/middleware` => Middleware files
     - `/model` => Model files
     - `/router` => Router files
     - `/service` => Service files
     - `/types` => Type definitions
     - `/utils` => Utility functions
     - `/view` (Optional) => View files (EJS, Pug, etc.)
     - `app.ts` => Express app configuration
     - `server.ts` => Server configuration
   - `/test` => Folder for test files
   - `.env.development` => Development environment variables
   - `.env.production` => Production environment variables
   - `.env.sample` => Environment variables sample file
   - `.gitignore` => Git ignore file
   - `ecosystem.config.js` => PM2 configuration file
   - `nodemon.json` => Nodemon configuration file
10. Install Commit Lint
    ```
    npm install @commitlint/cli @commitlint/config-conventional -D
    ```
11. Configure Commit Lint. You can change the rules as you like.
    - Create `.husky/commit-msg` file
    - Add following code
      ```
      npx --no-install commitlint --edit "$1"
      ```
    - Create `commitlint.config.js` file
    - Add following code
      ```
      module.exports = {
        extends: ["@commitlint/cli", "@commitlint/config-conventional"],
        rules: {
          "type-enum": [
            2,
            "always",
            [
              "feat",
              "fix",
              "docs",
              "style",
              "refactor",
              "perf",
              "test",
              "build",
              "ci",
              "chore",
              "revert",
            ],
          ],
          "subject-case": [2, "always", "sentence-case"],
        },
      };      
      ```
12. Install typescript-eslint
    ```
    npm install --save-dev eslint @eslint/js @types/eslint__js typescript-eslint
    ```
13. Create `eslint.config.mjs` file. You can change the rules as you like.
    - Add following code
      ```
      // @ts-check

      import eslint from "@eslint/js";
      import tseslint from "typescript-eslint";

      export default tseslint.config({
        languageOptions: {
          parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
          },
        },
        files: ["**/*.ts"],
        extends: [
          eslint.configs.recommended,
          ...tseslint.configs.recommendedTypeChecked,
        ],
        rules: {
          "no-console": "error",
          quotes: ["error", { allowTemplateLiterals: true }],
        },
      });

      ```
14. Install Prettier
    ```
    npm install prettier --save-dev
    ```
15. Create `.prettierrc` file and your preferred settings
16. Install dotenv-flow
    ```
    npm install dotenv-flow
    ```
17. Install cross-env
    ```
    npm install cross-env
    ```
18. In `package.json`, add following scripts
    ```
    "dev": "cross-env NODE_ENV=development nodemon src/server.ts",
    "start": "cross-env NODE_ENV=production node dist/server.js",
    ```

# Express JS Setup
## Steps
1. Install express
   ```
   npm install express
   ```
2. Install winston: This package is used for logging
   ```
   npm i winston
   ```
3. Install source-map-support: This package is used to map the source code
   ```
   npm i source-map-support
   ```
4. Install @types/source-map-support
   ```
   npm i @types/source-map-support
   ```
5. Enable following in tsconfig.json
   - `"sourceMap": true,`

# Making Terminal Colorful
## Steps
1. Install colorette
   ```
   npm i colorette
   ```
2. Parse the log message through this function
   ```
   const colorizeLevel = (level: string) => {
     switch (level) {
       case 'ERROR': return red(level)
       case 'WARN': return yellow(level)
       case 'INFO': return green(level)
       default: return level
     }
   }
   ```

# Helmet JS Setup
## Steps
1. Install helmet
   ```
   npm i helmet
   ```
2. Use helmet in app
   ```
   app.use(helmet())
   ```

