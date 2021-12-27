const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);   //path.join(__dirname) 设置绝对路径 双下划线
}


module.exports = {
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    chainWebpack: (config) => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "集创网";
                return args;
            })
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('page',resolve('./src/page'))
            .set('assets',resolve('./src/assets'))
            //...可以继续自定义别名
             //set 第一个参数：设置的别名；第二个参数：原来默认的路径
    }
}