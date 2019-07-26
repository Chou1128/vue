// 原生模块，处理路径
const path = require('path');
// 导出模块
module.exports = {
  watch:true,
  mode: 'development',
  // mode: 'production',
  //入口
  entry: './src/index.js',
  //出口
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 加载器
  module: {
      rules: [{
            // 匹配后缀为css的文件
            test: /\.css$/,
            // 用两个加载器style-loader和css-loader
            use: ['style-loader', 'css-loader']
          }, {
            // 匹配后缀为css的文件
            test: /\.html|htm$/,
            // 用两个加载器style-loader和css-loader
            use: ['html-loader']
          }
          // }, {
          //   test: /\.js$/,
          //   // 除了node_modules和bower_components之外
          //   exclude: /(node_modules|bower_components)/,
          //   use: {
          //     loader: 'babel-loader',
          //     options: {
          //       presets: ['@babel/preset-env']
          //     }
          //   }
          // }
        ]
  },
  // 插件
  plugins: [
    // new UglifyJsPlugin()
  ]
};