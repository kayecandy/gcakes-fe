/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL
  }
}

module.exports = nextConfig
