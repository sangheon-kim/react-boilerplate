var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "bundle[chunkHash].js",
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
        test: /\.(png|jp?g|gif|bmp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8000,
              name: "static/images/[name]-[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.inline.svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 10000,
          name: "images/[hash]-[name].[ext]"
        }
      },
      {
        test: /^(?!.*\.inline\.svg$).*\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "static/fonts/[name]-[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["build"]
    }),
    new MiniCssExtractPlugin({
      filename: "main-[chunkHash].css"
    }),
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
