let path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: 'css-loader',
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    }
};
