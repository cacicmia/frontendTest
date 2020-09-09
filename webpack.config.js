const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    mode: 'development', 
    entry: path.resolve(__dirname, './src/js/index.js'),
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: 'index.js',
    //     path: path.resolve(__dirname, './dist/js/'),

    },
    // context: path.resolve(__dirname, '../d'),
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader',
                
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.svg$/,
                use: [
                  'babel-loader',
                  'vue-svg-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
          
          ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}