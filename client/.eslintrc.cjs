module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        'codegen.ts',
        'vite.config.ts',
        'src/generated/*.ts',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-refresh',
    ],
    root: true,
    rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/lines-between-class-members': ['warn', 'always'],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'eqeqeq': ['error', 'always'],
        'max-classes-per-file': ['error', 1],
        'no-empty-function': [
            'error',
            {
                'allow': [
                    'getters',
                    'setters',
                    'constructors',
                    'generatorMethods',
                    'generatorFunctions',
                ],
            },
        ],
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': true,
                'argsIgnorePattern': '^_',
            },
        ],
        'no-use-before-define': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
            alias: {
                extensions: ['.ts', '.tsx', '.json'],
                map: [
                    ['@', './src'],
                    ['@components', './src/components'],
                    ['@hooks', './src/hooks'],
                    ['@routes', './src/routes'],
                    ['@stores', './src/stores'],
                    ['@assets', './src/assets'],
                    ['@themes', './src/themes'],
                    ['@configs', './src/configs'],
                    ['@modules', './src/modules'],
                    ['@clients', './src/clients'],
                    ['@public', './public'],
                    ['@common', './src/common'],
                    ['@graphql', './src/graphql'],
                ],
            },
            'node': {
                'paths': [
                    'src',
                ],
                'extensions': [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
            },
        },
        'react': {
            'version': 'detect',
        },
    },
};
