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
8. Install eslint
   `npm install eslint --save-dev`
9. Initialize eslint
