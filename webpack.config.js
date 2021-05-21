const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'src/db'),
                    path.resolve(__dirname, 'src/parts'),
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
}