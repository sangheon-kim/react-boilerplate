var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jp?g)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      favicon: path.join(__dirname, "public/favicon.ico"),
      filename: path.join(__dirname, "build/index.html")
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: "sourcemap"
};
