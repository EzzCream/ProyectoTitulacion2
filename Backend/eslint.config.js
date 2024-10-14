import globals from 'globals';

export default [
	js.configs.recommended,
	{
		// languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
		},
		env: {
			browser: true,
			es2021: true,
			node: true,
		},
	},
];
