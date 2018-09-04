const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/jqueryClass.js", //入口
  output: {
    // 出口
    path: __dirname,
    filename: "./release/bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js?$/, //解析那些文件
        exclude: /(node_modules)/, //忽略那个目录
        loader: "babel-loader" //用什么插件
      }
    ]
  },

  // 插件
  plugins: [
    /* 
      1.热更新
      2.将打包出来的bundle.js写入到index.html
    */
    new htmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "./release"), //根目录
    open: true, //自动打开浏览器
    port: 9000 //端口
  }
};
