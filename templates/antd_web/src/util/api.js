import axios from 'axios'
import cfg from './config.js'
import cookie from 'react-cookies'
const methods = [
    'get',
    'head',
    'post',
    'put',
    'delete',
    'options',
    'patch',
];

class _Api {
    constructor(opts) {
        this.opts = opts || {};
        if (!this.opts.baseURI)
            throw new Error('baseURI option is required');
        methods.forEach(method =>
            this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
                const ad_token = cookie.load('ad_token')
                    axios.request({
                        headers: this.opts.headers,
                        method: method,
                        url: ad_token ? this.opts.baseURI + path + "?token=" + ad_token : this.opts.baseURI + path,
                        params: params,
                        data: data
                    }).then(function (response) {
                            resolve(response.data)
                    })
                    .catch(function (err) {
                            reject(err)
                    });
                })
        );
    }
    download(path, { params }) {
        const token = cookie.load('ad_token');
        if (params) {
            params.token = token
            params.export = "excel"
        } else {
            params = {
                token: token,
                export: "excel"
            }
        }
        let url = this.opts.baseURI + path;

        var searchParams = Object.keys(params).map((key) => {
            if (typeof params[key] != 'undefined') {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }
        }).join('&');
        if (url.indexOf('?') > -1) {
            url = url + "&" + searchParams
        } else {
            url = url + "?" + searchParams
        }
        // window.location.href = url
        window.open(url)
    }
}
const api = new _Api({
    baseURI: cfg.serviceUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export default api
