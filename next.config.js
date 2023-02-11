/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production'
  ? 'https://gowth6m.github.io/nocxa-website/'
  : '';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  },
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
}

module.exports = nextConfig
