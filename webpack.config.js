var path = require("path");
module.exports = {
  entry: "./src/index.jsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "umd"),
    filename: "hsbar.min.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: path.join(__dirname, "node_modules")
    }
  },
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require("@babel/plugin-proposal-object-rest-spread")]
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
