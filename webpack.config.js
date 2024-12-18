const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		trello: './themes/astralab/scripts/trello/index.tsx',
		main: './themes/astralab/scripts/main/main.tsx',
	},
	resolve: {
		...defaultConfig.resolve, // Retain existing resolution options
		alias: {
			...defaultConfig.resolve?.alias, // Preserve any existing aliases
			'@': path.resolve(__dirname, 'themes/astralab/scripts'), // Add custom alias
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'], // Ensure TypeScript and JavaScript files are resolved
	},
};
