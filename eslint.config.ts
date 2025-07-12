import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**'],
	},
	{
		languageOptions: {
			globals: {
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				setTimeout: 'readonly',
				setInterval: 'readonly',
				URL: 'readonly',
				File: 'readonly',
				Image: 'readonly',
				// Node.js globals (if needed)
				process: 'readonly',
				global: 'readonly',
			},
		},
		rules: {
			'vue/multi-word-component-names': 'off',
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: { max: 1 },
					multiline: { max: 1 },
				},
			],
			// Allow unused variables that start with underscore
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			// Turn off some strict rules for development
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-undef': 'off', // TypeScript handles this better
		},
	}
);
