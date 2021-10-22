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
};
