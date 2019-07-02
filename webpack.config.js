const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => {
  const isProduction = env.MODE === "production";
  const isClient = env.TARGET === "client";
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      bundle: isClient ? "./entry-client.tsx" : "./entry-server.tsx"
    },
    output: {
      filename: isClient ? `static/js/[name].js` : "[name].js",
      path: path.resolve(__dirname, isClient ? "client" : "server"),
      publicPath: "/",
      libraryTarget: isClient ? "var" : "commonjs2"
    },
    mode: isProduction ? "production" : "development",
    target: isClient ? "web" : "node",
    watch: false,
    devtool: isProduction ? undefined : "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          enforce: "pre",
          use: isProduction
            ? ["babel-loader", "awesome-typescript-loader", "tslint-loader"]
            : [
                "cache-loader",
                "babel-loader",
                "awesome-typescript-loader",
                "tslint-loader"
              ]
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
      host: "0.0.0.0",
      port: 3202,
      contentBase: path.resolve(__dirname, "client"),
      publicPath: "/",
      headers: {
        "Service-Worker-Allowed": "/"
      },
      historyApiFallback: {
        rewrites: [
          {
            from: /^\/$/,
            to: "/index.html"
          },
          {
            from: /./,
            to: "/index.html"
          }
        ]
      },
      inline: true,
      watchOptions: {
        watch: true
      },
      disableHostCheck: true,
      compress: true
    },
    plugins: isClient
      ? [
          new webpack.DefinePlugin({
            "process.env.MODE": JSON.stringify(env.MODE),
            "process.env.TARGET": JSON.stringify(env.TARGET)
          }),
          new HTMLPlugin({
            template: path.resolve(__dirname, "src/index.ejs")
          })
        ]
      : [
          new webpack.DefinePlugin({
            "process.env.MODE": JSON.stringify(env.MODE),
            "process.env.TARGET": JSON.stringify(env.TARGET)
          })
        ],
    optimization: {
      splitChunks: isClient
        ? {
            chunks: "async",
            minSize: 300,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
              vendor: {
                chunks: "initial",
                test: path.resolve(__dirname, "node_modules"),
                name: "vendor",
                enforce: true
              }
            }
          }
        : false
    }
  };
};
