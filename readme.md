# Steps
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
11. Install eslint
    ```
    npm install eslint --save-dev
    ```
12. Initialize eslint
