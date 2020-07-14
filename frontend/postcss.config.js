module.exports = {
  plugins: [
    /*require('postcss-import')({
            path: ['app/assets/'],
        }),*/

    require("postcss-flexbugs-fixes"),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
    }),
  ],
};
