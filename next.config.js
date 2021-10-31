const { join } = require("path");

const ContentSecurityPolicy = `
  default-src 'self' data:;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net d.la1-c1cs-ukb.salesforceliveagent.com www.googletagmanager.com www.recaptcha.net static.cloudflareinsights.com apis.google.com www.gstatic.com www.google.com *.googleapis.com *.youtube.com *.twitter.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com;
  img-src * blob: data:;
  object-src 'self';
  media-src 'self';
  frame-src 'self' https://www.youtube.com/ https://www.youtube-nocookie.com/ https://www.google.com/ https://www.recaptcha.net/ https://nongcalcal-cf9db.firebaseapp.com/;
  connect-src *;
  font-src 'self' fonts.googleapis.com;
  report-uri https://o963227.ingest.sentry.io/api/5911441/security/?sentry_key=28d226f03a2f48459831f61bb927a2c9
`;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    loader: "default",
    path: "/_next/image",
    minimumCacheTTL: 86400,
    domains: [
      "storage.googleapis.com",
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
      "graph.facebook.com",
      "tailwindui.com",
      "",
    ],
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": join(__dirname, "components"),
      "@/contexts": join(__dirname, "contexts"),
      "@/data": join(__dirname, "data"),
      "@/models": join(__dirname, "models"),
      "@/generated": join(__dirname, "generated"),
      "@/graphql": join(__dirname, "graphql"),
      "@/libs": join(__dirname, "libs"),
      "@/pages": join(__dirname, "pages"),
      "@/providers": join(__dirname, "providers"),
      "@/services": join(__dirname, "services"),
      "@/stores": join(__dirname, "stores"),
      "@/styles": join(__dirname, "styles"),
      "@/utils": join(__dirname, "utils"),
      "@/public": join(__dirname, "public"),
    };

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\n/g, ""),
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), fullscreen=*",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86_400, stale-while-revalidate=59",
          },
        ],
      },
      {
        source: "/_next/data/:path*(json)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86_400, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/project/plc",
        permanent: true,
      },
    ];
  },
};
