module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: ['airbnb', 'prettier'],
    globals: {
        expect: 'readonly',
        describe: 'readonly',
        test: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/indent': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
