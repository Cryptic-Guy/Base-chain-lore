/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This fixes the 'createMapValueFn' error by pre-processing these libraries
  transpilePackages: [
    '@rainbow-me/rainbowkit',
    'wagmi',
    'viem',
    '@vanilla-extract/sprinkles'
  ],
  // This helps Web3 libraries find the correct dependencies on Netlify's servers
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
}

module.exports = nextConfig
