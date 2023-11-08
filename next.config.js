/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'export',
};

module.exports = nextConfig;
