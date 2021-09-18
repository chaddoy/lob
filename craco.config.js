/* eslint global-require: "error" */
module.exports = {
  style: {
    postcss: {
      /* eslint-disable global-require */
      plugins: [require("tailwindcss"), require("autoprefixer")],
      /* eslint-enable global-require */
    },
  },
};
