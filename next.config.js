/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    esmExternals: true,
    // swcMinify: true,
    // swcLoader: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    loader: "default",
    path: "/_next/image",
    minimumCacheTTL: 86_400,
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
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      })
    );

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
