// 修改配置后一定要 重新npm run serve !!!
module.exports = {
    devServer: {
        // vue项目启动时的ip地址和端口
        host: '192.168.0.144',
        port: 8080,
        proxy: {
            // 匹配所有以 /api 开头的url
            '/index.php': {
                // 请求的目标主机
                target: 'http://digital.haoshuzhi.cn',
                changeOrigin: true,
                ws: true,
                // 这样重写会把路径中 /api 消去
                // pathRewrite: {
                //     '^/index.php': ''
                // }
            }
        }
    }
}