var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/a.js',
        c:'./src/script/c.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-[hash].js',
        publicPath:'http://cdn.com/'//上线替换路径
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'index.html',
            inject:false,
            title:'webpack is a',
            //chunks:['main','a'],
            excludeChunks:['b','c']//排除chunks
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html',
            inject:false,
            title:'webpack is b',
            //chunks:['main','b'],
            excludeChunks:['a','c']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html',
            inject:false,
            title:'webpack is c',
           /* minify:{//压缩属性
                removeComments:true,
                collapseWhitespace:true
            },*/
            //chunks:['main','c'],
            excludeChunks:['a','b']
        })
    ]
};