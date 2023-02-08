/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/apart",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
