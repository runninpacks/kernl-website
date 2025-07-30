/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Framer/static hosting
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable static export for Vercel deployment
  ...(process.env.VERCEL && {
    output: undefined,
    trailingSlash: false
  })
}

module.exports = nextConfig 