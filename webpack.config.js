// This file export an object and this object
// lets you configure what webpack does


 // 1. entry property tells webpack where it should start proccessing your code
 // 2. we telling babel-loader to take our files parse them through react
 // get the output and run them through es2015 as well
 module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]

    }
};