module.exports = {
	plugins: [
		'import',
		'@typescript-eslint',
		'jest-dom',
		'testing-library',
		'cypress',
	],
	root: true,
	env: {
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:cypress/recommended',
	],
	ignorePatterns: ['**/*.js'],
	rules: {
		'no-underscore-dangle': 'off',
		camelcase: 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-types': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
	},
};
