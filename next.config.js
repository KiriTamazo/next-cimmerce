/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  env: {
    DB_URL:
      "mongodb+srv://tama80:tama80@cluster0.3ifrs0t.mongodb.net/next-commerce?retryWrites=true&w=majority",
    API_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
