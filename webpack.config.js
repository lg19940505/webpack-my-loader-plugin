const path=require('path')
const MyPlugin=require('./plugin/my_plugin')
module.exports={
    mode:'production',
    entry:{
        index:'./index.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'   
    },
    //loader
    module:{
        rules:[
            {
                test:/\.txt/,
                use:[
                    './loader/my_upper_loader.js','./loader/insert_space_loader.js'
                ]
            }
        ]
    },
    plugins:[
        new MyPlugin({
            name: 'my_plugin'
      })
    ]
}