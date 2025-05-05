import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        ignores: ['__tests__/**', '**/*.test.ts', 'dist/**', 'example/**'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
        languageOptions: {
            parser: tsParser, // Use the TypeScript parser
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin, // Load TypeScript ESLint plugin
        },
        rules: {
            ...tsPlugin.configs.recommended.rules, // Use recommended rules from the plugin
            "quotes": ["error", "single"],
            "indent": ["error", 2, {
                "SwitchCase": 1, // Indent switch case statements
                "VariableDeclarator": 1, // Indent variable declarations
                "outerIIFEBody": 1, // Indent outer function bodies
                "MemberExpression": 1, // Indent member expressions
            }],
            "object-curly-newline": [
                "error",
                {
                    "ObjectExpression": { "multiline": true, "consistent": true },
                    "ObjectPattern": { "multiline": true, "consistent": true },
                    "ImportDeclaration": { "multiline": true, "consistent": true },
                    "ExportDeclaration": { "multiline": true, "consistent": true }
                },
            ],
            "comma-dangle": ["error", "always-multiline"],
            "key-spacing": [
                "error",
                {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "strict"
                }
            ],
            "space-infix-ops": ["error"], // Enforces spaces around operators
            "key-spacing": [
                "error",
                {
                    beforeColon: false, // No space before the colon
                    afterColon: true,  // Require a space after the colon
                },
            ],
            'object-curly-spacing': ["error", "always", {
                arraysInObjects: false, // Disable extra spaces for arrays in objects
                objectsInObjects: false, // Disable extra spaces for objects in objects
            }],
            "no-multi-spaces": "error", // Disallows multiple spaces
            "no-trailing-spaces": "error", // Disallows trailing spaces
            "space-before-function-paren": ["error", "never"], // No space before function parentheses
            "keyword-spacing": ["error", { "before": true, "after": true }], // Ensures spacing around keywords
            'no-unused-vars': 'off',
            // Enable TypeScript-specific no-unused-vars rule
            '@typescript-eslint/no-unused-vars': [
                'warn', // Set to 'error' if you want an error instead of a warning
                {
                    vars: 'all', // Check all variables
                    args: 'after-used', // Ignore unused arguments after the last used one
                    ignoreRestSiblings: true, // Ignore unused variables in destructuring assignments
                    varsIgnorePattern: '^_', // Ignore variables starting with an underscore
                    argsIgnorePattern: '^_', // Ignore arguments starting with an underscore
                },
            ],
            semi: ['error', 'always'],
            'eol-last': ['error', 'always'],
        },
    },
    {
        files: ['**/*.js', '**/*.js'], // Target JavaScript files
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        rules: {
            "quotes": ["error", "single"],  // Enforce single quotes for strings
        },
    },
];
