module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.ts",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
