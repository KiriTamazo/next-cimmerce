/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

    // serverComponentsExternalPackages: ["mongoose"],
  },
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
  env: {
    MONGODB_URL:
      "mongodb+srv://tama80:tama80@cluster0.3ifrs0t.mongodb.net/next-commerce?retryWrites=true&w=majority",
    API_URL: "http://localhost:3000",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
