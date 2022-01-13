// import path from 'path'
// import { fileURLToPath } from 'url'
// const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ContentSecurityPolicy = `
  default-src 'self' data:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net www.googletagmanager.com www.recaptcha.net static.cloudflareinsights.com apis.google.com www.gstatic.com www.google.com *.googleapis.com *.youtube.com *.twitter.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com;
  img-src * blob: data:;
  object-src data: 'self';
  media-src 'self';
  frame-src 'self' https://www.youtube.com/ https://www.youtube-nocookie.com/ https://www.google.com/ https://www.recaptcha.net/ https://nongcalcal-cf9db.firebaseapp.com/;
  connect-src *;
  font-src 'self' fonts.googleapis.com;
`

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), fullscreen=*',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=59',
          },
        ],
      },
      {
        source: '/_next/data/:path*(json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86_400, stale-while-revalidate=59',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|ttf|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=63072000, stale-while-revalidate=59',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/project',
        destination: '/project/aip',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
