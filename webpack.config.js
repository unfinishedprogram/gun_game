const path = require('path');

module.exports = {
    entry: './client/src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, './client/src'),
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    }
}