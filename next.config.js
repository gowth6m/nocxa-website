/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production'
  ? 'https://gowth6mxxx.github.io/nocxa-website/'
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
