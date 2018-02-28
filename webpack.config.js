process.traceDeprecation = true;
const path = require('path');

module.exports = (env) => {
  const isProduction = env === "production";
  
  
 return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: 
            {
              presets:['react', 'es2015', ]
            }
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
  }
};
