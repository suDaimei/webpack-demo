var htmlWebpackPlugin=require('html-webpack-plugin');
var lessPlugin=require('less-loader');
var path=require('path');
var webpack=require('webpack');


module.exports={
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'js/[name].bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include:path.resolve(__dirname,'src'),
                exclude:path.resolve(__dirname,'node_modules'),
                query:{
                    presets:['latest']
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.tpl/,
                loader:'ejs-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                loaders:[
                    'url-loader?limit=10000&name=image/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body',
            title:'webpack is app'
        }),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:[
                    require('autoprefixer')({
                        broswers:['last 5 versions']
                    })
                ]
            }
        })
    ]
};