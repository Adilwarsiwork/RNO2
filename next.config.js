/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	images: {
		domains: ['images.pexels.com', 'images.unsplash.com', 'cdn-icons-png.flaticon.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
