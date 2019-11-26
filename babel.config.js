module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    "@babel/plugin-transform-runtime",

    "@babel/plugin-proposal-class-properties",

    ["@babel/plugin-transform-modules-commonjs", { strictMode: false }]
  ],
  ignore: ["./assets/mui/js/mui.js"]
};
