/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['static.tvmaze.com'],
		minimumCacheTTL: 60,
		formats: ['image/avif', 'image/webp']
	}
};

export default nextConfig;
