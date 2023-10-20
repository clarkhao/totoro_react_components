/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar-api.clarkhao.repl.co',
        port: '',
        pathname: '/6.x/pixel-art/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
