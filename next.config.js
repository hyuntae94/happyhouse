/** @type {import('next').NextConfig} */
process.env.KAKAOMAP_APPKEY = "76762cf6a01747d186c356dce2345e77";

const nextConfig = {
  // swcMinify: true,
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
