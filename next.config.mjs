// import path from 'path'
// import { fileURLToPath } from 'url'
// const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ContentSecurityPolicy = `
  default-src 'self' data:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net www.googletagmanager.com www.recaptcha.net static.cloudflareinsights.com apis.google.com www.gstatic.com www.google.com *.googleapis.com *.youtube.com *.twitter.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com;
  img-src * blob: data:;
  object-src 'self';
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
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    minimumCacheTTL: 86400,
    domains: [
      'via.placeholder.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'graph.facebook.com',
      'tailwindui.com',
      '',
    ],
  },
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@/components': path.join(__dirname, 'components'),
  //     '@/contexts': path.join(__dirname, 'contexts'),
  //     '@/data': path.join(__dirname, 'data'),
  //     '@/models': path.join(__dirname, 'models'),
  //     '@/generated': path.join(__dirname, 'generated'),
  //     '@/graphql': path.join(__dirname, 'graphql'),
  //     '@/libs': path.join(__dirname, 'libs'),
  //     '@/pages': path.join(__dirname, 'pages'),
  //     '@/providers': path.join(__dirname, 'providers'),
  //     '@/services': path.join(__dirname, 'services'),
  //     '@/stores': path.join(__dirname, 'stores'),
  //     '@/styles': path.join(__dirname, 'styles'),
  //     '@/utils': path.join(__dirname, 'utils'),
  //     '@/public': path.join(__dirname, 'public'),
  //   }

  //   config.module.rules.push({
  //     test: /\.(graphql|gql)$/,
  //     exclude: /node_modules/,
  //     loader: 'graphql-tag/loader',
  //   })

  //   return config
  // },
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
            value: 'public, max-age=86_400, stale-while-revalidate=59',
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