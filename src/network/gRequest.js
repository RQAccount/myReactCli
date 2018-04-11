import axios from 'axios';
import extend from 'extend'

const defaultConfig = {
    withCredentials: false,
    timeout: 30000,
};

/**
 * 统一处理所有http请求和响应, 在请求发出与返回时进行拦截
 * 可以做loading页面的展示与隐藏, token失效是否跳转到登录页等事情;
 * @param config
 * @param axiosInstance
 */
function interceptors(config, axiosInstance) {

    const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
    const APICancelToken = axios.CancelToken;
    const removePending = (config) => {
        for (let p = 0; p < pending.length; p += 1) {
            // 当前请求在数组中存在时，执行函数体移除此pending状态
            if (pending[p].u === `${config.url}&${config.method}`) {
                pending[p].f(); // 执行取消操作
                pending.splice(p, 1); // 把这条记录从数组中移除
            }
        }
    };

    axiosInstance.interceptors.request.use((request) => {
        // Do something before request is sent

        // 在一个ajax发送前执行一下取消操作，将原处于pending状态的请求移除
        removePending(request);

        config.cancelToken = new APICancelToken((c) => {
            // ajax标识采用请求地址&请求方式拼接，也可以选择其他方式
            pending.push({u: `${request.url}&${request.method}`, f: c});
        });

        return request;

    }, error => Promise.reject(error));


    axiosInstance.interceptors.response.use((response) => {
        // Do something with response data

        // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        removePending(response.config);

        if (response.data && response.data.code && response.data.code !== 0) {
            alert(response.data.message || response.data.data || '操作失败!');

        } else if (response.data && response.data.code === 0) {
            if (response.config && response.config.params && response.config.params.showMsg) {
                alert(response.data.message || '操作成功!');
            }
        }

        return {
            data: response.data,
        };

    }, (error) => {
        // Do something with response error

        if (error && error.response && error.response.status === '401') {
            const ssoURL = (error && error.response && error.response.data && error.response.data.data) || '';
            document.location.href = ssoURL + encodeURIComponent(document.location.href);

        } else if (error && error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);

        } else if (error && error.message) {
            alert(error.message);
        }

        return Promise.reject(error.response && error.response.data);
    });
}


/**
 * 为 axios 添加请求和响应拦截
 * @param config
 * @returns {AxiosInstance}
 */
export default function gRequest(config) {
    const conf = extend(true, {}, defaultConfig, config);
    const axiosInstance = axios.create(conf);
    interceptors(axiosInstance);

    return axiosInstance;
}
