const path = require("path");

module.exports = {
  reactStrictMode: false,
  // useFileSystemPublicRoutes: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
