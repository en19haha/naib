var path = require("path");
const ansiRegex = require("ansi-regex");
module.exports = {
  lintOnSave: false,
  assetsDir: process.env.BASE_URL,
  outputDir: path.resolve(__dirname, "../backend/src/public/"),
  transpileDependencies: [ansiRegex],
  devServer: {
    overlay: false,
  },
};
