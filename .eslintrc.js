module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'jest',
		'simple-import-sort',
		'import',
	],
	parserOptions: {
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:jest/recommended',
	],
	rules: {
		'no-console': 0,
		'prettier/prettier': 2,
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 0,
		'@typescript-eslint/no-unused-vars': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	env: {
		es6: true,
		'jest/globals': true,
		node: true,
	},
};