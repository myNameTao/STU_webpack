const OS = require('os');//系统操作函数
module.exports = {
    port: 1234,
    IPv4: 'localhost',
    agentSev: 'http://192.168.2.12:8501',
    agentSevUploadPic: 'http://192.168.2.12:8800',//图片上传地址
    getAgent: function() {
        return {
            '/operator/*': {
                target: this.agentSev
            },
            '/upload/*': {
                target: this.agentSevUploadPic
            }
        }
    },
    getIP: function() {
        try {
            const network = OS.networkInterfaces();//获得网络接口列表。
            this.IPv4 = network[Object.keys(network)[0]][1].address
        } catch (e) {
            this.IPv4 = '127.0.0.1';
        } finally {
            const httpStr = 'http://' + this.IPv4 + ':' + this.port;
            const opn = require('opn');//需要使用opn插件
            setTimeout(function() {
                opn(httpStr);
            }, 20000);
            return this.IPv4;
        }
    }
};
