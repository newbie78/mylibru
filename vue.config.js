module.exports = {
  devServer: {
    disableHostCheck: true, // удаление ошибки Invalid Host header при использовани обратного прокси
    proxy: {
      '/api': {
        target: 'http://my-lib.ru',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      css: {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      postcss: {
        // options here will be passed to postcss-loader
      },
    },
  },
};
