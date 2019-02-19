import axios from 'axios';
import bridge from '../bridge/index';
import getToken from '../tools/token';

// axios.defaults.baseURL = "http://192.168.10.245:8799";	//吴伟	    		
// axios.defaults.baseURL = "http://47.95.252.113:8799"; //测试
axios.defaults.baseURL = "http://47.110.247.100:8081";	//生产	    		
// axios.defaults.baseURL = "http://192.168.10.181:8799/api";	//刘杨	    		
// axios.defaults.baseURL = "/";				                //线上部署IP
axios.defaults.headers['Content-Type'] = "application/json; charset=utf-8";
getToken.then((res) => {
    const { token, uuid } = res;
    axios.defaults.headers['token'] = token;
    axios.defaults.headers['app-uuid'] = uuid;
}).catch(() => {
    
});


axios.interceptors.response.use(response => {
    var data = response.data;
    if (data.code == 3) {
        bridge((bridge) => {
            bridge.callHandler('nologin', {});
        });
    }
    return data;
}, error => {
    var errorMsg = "";
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                errorMsg = '错误请求'
                break;
            case 401:
                errorMsg = '未授权，请重新登录'
                break;
            case 403:
                errorMsg = '拒绝访问'
                break;
            case 404:
                errorMsg = '请求错误,未找到该资源'
                break;
            case 405:
                errorMsg = '请求方法未允许'
                break;
            case 408:
                errorMsg = '请求超时'
                break;
            case 500:
                errorMsg = '服务器端出错'
                break;
            case 501:
                errorMsg = '网络未实现'
                break;
            case 502:
                errorMsg = '网络错误'
                break;
            case 503:
                errorMsg = '服务不可用'
                break;
            case 504:
                errorMsg = '网络超时'
                break;
            case 505:
                errorMsg = 'http版本不支持该请求'
                break;
            default:
                errorMsg = `连接错误${err.response.status}`
        }
    } else {
        errorMsg = "连接到服务器失败"
    }
    alert(errorMsg);
    return Promise.reject();
});
