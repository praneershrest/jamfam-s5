# How husky was set up

Reference: https://typicode.github.io/husky/

Husky enhances commits by adding scripts that execute at specific points in the Git lifecycle

1. Install husky

   ```
   npm install --save-dev husky
   ```

2. Create pre-commit script in .husky and updates the prepare script in package.json

   ```
   npx husky init
   ```
