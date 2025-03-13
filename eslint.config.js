module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks',
		'jsx-a11y',
		'import',
		'simple-import-sort',
		'unused-imports',
		'@typescript-eslint',
		'prettier',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/order': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
};
