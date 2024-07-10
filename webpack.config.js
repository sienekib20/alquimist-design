const path = require('path');

module.exports = {
   entry: './src/js/main.js',
   output: {
      filename: 'typos.js',
      path: path.resolve(__dirname, 'dist/js'),
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
      ],
   },
   devtool: 'source-map',
   mode: 'development',
};
