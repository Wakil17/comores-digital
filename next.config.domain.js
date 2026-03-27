/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist-domain',
  images: { unoptimized: true }
}
module.exports = nextConfig
