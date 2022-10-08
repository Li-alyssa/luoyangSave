module.exports = {
    //关闭eslint
    lintOnSave: false,
    devServer: {
        // 配置不同的后台API地址
        proxy: {
            '/api': {
                target: 'http://115.25.46.178:9001/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
