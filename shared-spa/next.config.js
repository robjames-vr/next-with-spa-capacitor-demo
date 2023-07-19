/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

if (process.env.MOBILE_BUILD === "true") {
  nextConfig.output = "export";
}

module.exports = nextConfig;
