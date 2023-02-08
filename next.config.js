process.env.KAKAO_API_KEY = '51b2609483f18c181b76031c296f8316';
/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/apart',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
