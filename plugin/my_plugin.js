//plugin的编写，是基于“发布订阅”的，也就是“事件驱动”模式的，
class my_plugin{
    constructor(options){
        console.log('my_plugin constructor',options)
    }
    //Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，
    //这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；
    //Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。
    //当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

    apply(compiler){
        //console.log('compiler:',compiler);
        //tapAsync:只能绑定异步,调用了callback才会向下执行
        //如果AsyncSeriesWaterfallHook是这样的需要传递结果的钩子
		//callback(null,数据);	绑定的下一个tapAsync的回调函数第一个参数即为传递结果 第一个参数为错误信息
        compiler.hooks.emit.tapAsync('my_plugin', (compilation, callback) => {
            console.log('生成资源到 output 目录之前')
            callback()
        })
    }
}
module.exports = my_plugin