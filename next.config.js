/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ai/text",
        destination: "http://localhost:5002/ai/text",
      },
    ];
  },
};

module.exports = nextConfig;
