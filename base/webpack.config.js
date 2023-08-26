const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const PORT = 3000
const PATH = `http://localhost:${PORT}/`

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: PATH ,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  optimization: {
    splitChunks: false
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "base",
      filename: "remoteEntry.js",
      remotes: {
        home: 'home@http://localhost:3001/remoteEntry.js',
        about: 'about@http://localhost:3003/remoteEntry.js',
        contact: 'contact@http://localhost:3004/remoteEntry.js'
      },
      exposes: {
        './config': './config'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
