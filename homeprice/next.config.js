/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",

        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/api/:path*"
            : "/api/", // Proxy to Backend
      },
    ];
  },
};
