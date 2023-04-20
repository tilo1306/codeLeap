module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'tsconfigRootDir': __dirname,
		'project': 'tsconfig.json',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'@typescript-eslint',
		'prettier',
	],
	'rules': {
		'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-console': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'lines-between-class-members': 'off',
		'max-len': ['error', { 'code': 80 }],
		'prettier/prettier': 'error',
		'prettier/prettier': ['error', { 'semi': false }],
		'indent':['error', 2, { SwitchCase: 1 }],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': ['error', 'single', { avoidEscape: true }],
    	'@typescript-eslint/no-empty-function': 'off',
    	'react/display-name': 'off',
    	'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/no-unsafe-return': 0,
		'@typescript-eslint/no-misused-promises': [
        'error',
        {
          'checksVoidReturn': false
        }
	},
  settings: {
    react: {
      version: 'detect',
    	},
	}
}
