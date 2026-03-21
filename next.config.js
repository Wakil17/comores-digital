/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/comoresdigital',
  images: { unoptimized: true }
}

module.exports = nextConfig