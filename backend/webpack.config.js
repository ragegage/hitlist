module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
      path: `${__dirname}/frontend`,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map'
};
