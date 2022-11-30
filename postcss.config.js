// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      // 忽略要转换的文件
      selectorBlackList: ["favor"]
    },
  },
};