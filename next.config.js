/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	// webpack: (config) => {
	// 	config.module.rules.push({
	// 		test: /\.md$/,
	// 		use: 'raw-loader',
	// 	});

	// 	return config;
	// },
	images: {
		domains: ['images.unsplash.com','blog.dynopii.com']
	},
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	assetPrefix:  process.env.NEXT_PUBLIC_BASE_PATH
};
