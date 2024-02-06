module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csodaasvanyok-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "csodaasvanyok-bucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
