# How Nativewind was set up

Reference: https://www.nativewind.dev/quick-starts/expo

NativeWind uses Tailwind CSS as scripting language to create a universal styling system.

1. Install Nativewind and dev dependencies

   ```
   npm install nativewind
   npm install --save-dev tailwindcss@3.3.2
   ```

2. Create tailwind.config.js

   ```
   npx tailwindcss init
   ```

3. Modify your tailwind.config.js

   ```
   // tailwind.config.js

   module.exports = {
   - content: [],
   + content: ["./app/**/*.{js,jsx,ts,tsx}", ".components/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
   },
   plugins: [],
   }
   ```

4. Modify your babel.config.js

   ```
   // babel.config.js
   module.exports = function (api) {
      api.cache(true);
      return {
         presets: ["babel-preset-expo"],
      +  plugins: ["nativewind/babel"],
      };
   };
   ```

5. Create nativewind-env.d.ts at root

   ```
   /// <reference types="nativewind/types" />
   ```

   This extends React Native types via declaration merging
   Reference: https://www.nativewind.dev/getting-started/typescript
