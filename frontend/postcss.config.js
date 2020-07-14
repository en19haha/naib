module.exports = {
  plugins: [
    require("postcss-minify-font-values"),
    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
    }),
  ],
};
