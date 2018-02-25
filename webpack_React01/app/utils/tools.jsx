/**
 * Ajax请求
 */
export const ajax = (config = {}) => {
    if (config.async == undefined)
        config.async = true;
    let request = new XMLHttpRequest();
    let sign = config.url.indexOf('?') > -1 ?
        '&' :
        '?';
    let data = HttpService.formatParams(config.data);
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                config.success(request.responseText);
            } else {
                config.fail(status);
                Tips('连接网络失败');
            }
        }
    };

    if (config.type == 'post') {
        request.open('POST', config.url, config.async);
        request.send(config.data);
    } else {
        request.open('GET', config.url + sign + paramType(config.data), config.async);
        request.send(null);
    }
};

/**
 * Tips提示消息
 * @param msg
 * @param duration
 * @constructor
 */
export let msgTout = null;
export const Tips = (msg = '未获取到信息', duration = 3) => {
    let msgObj = document.querySelector('.tips'),
        msgSpan = msgObj ?
            msgObj.querySelector('span') :
            null;
    if (msgObj == undefined) {
        msgObj = document.createElement('div');
        msgSpan = document.createElement('span');
        msgObj.appendChild(msgSpan);
        msgObj.className = 'tips';
        document.body.appendChild(msgObj);
    }
    msgSpan.innerHTML = msg;
    msgObj.style.bottom = '10rem';
    msgObj.style.display = 'block';
    setTimeout(() => {
        msgObj.style.bottom = '11rem';
        msgObj.style.opacity = '1';
    }, 10);
    clearTimeout(msgTout);
    if (duration == 0)
        return;
    if (msg == '关闭')
        msgObj.style.display = 'none';
    msgTout = setTimeout(function() {
        msgObj.style.display = 'none';
        msgObj.style.bottom = '10rem';
        msgObj.style.opacity = '0';
    }, duration * 1000);
};