import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Minimal flat config to avoid compatibility issues with FlatCompat and ensure ESLint runs.
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser')
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks')
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // Add project-specific rules as needed
    }
  }
];
