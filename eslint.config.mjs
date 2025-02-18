import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';

export default [
  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      "no-multiple-empty-lines": [ "error", { max: 1, maxEOF: 1, maxBOF: 1 } ],
      "no-multi-spaces": [ "error", { ignoreEOLComments: false } ],
      "no-duplicate-imports": [ "error", { includeExports: true } ],
      "no-empty-character-class": "error",
      "default-case": "error",
      "no-empty-pattern": "error",
      "eqeqeq": [ "error", "always" ],
      "no-duplicate-case": "error",
      "comma-dangle": [ "error", "never" ],
      "quotes": [ "error", "double" ],
      "semi": [ "error", "never" ],
      "indent": [ "error", 2 ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "object-curly-spacing": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "space-infix-ops": [ "error", { int32Hint: false } ],
      "space-in-parens": [ "error", "never" ],
      "space-before-blocks": [ "error", "always" ]
    }
  },
];