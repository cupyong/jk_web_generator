import axios from 'axios'
import cookies from 'react-cookies'
import cfg from '../util/config'
const ad_token = cookies.load('ad_token')
const baseURI = cfg.serviceUrl
export function regionList() {
    let path = '/regionAll'
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'get',
            url: baseURI+ path,
            params: { token: ad_token },
        }).then(function (response) {
            resolve(response.data.data)
        }).catch(function (err) {
                reject(err)
            });
    })
}

export function userAdd({ username, password, orgId }) {
    let path = '/user'
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'post',
            url: ad_token ? baseURI + path + "?token=" + ad_token : baseURI + path,
            data: { username, password, orgId }
        }).then(function (response) {
            resolve(response.data.data)
        })
            .catch(function (err) {
                reject(err)
            });
    })
}
export function del_task(id) {
    let path = '/task/' + id
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'delete',
            url: baseURI + path,
            params: { token: ad_token },
            data: {}
        }).then(function (response) {
            resolve(response.data.data)
        })
            .catch(function (err) {
                reject(err)
            });
    })
}
export function del_campaign(id) {
    let path = '/campaign/' + id
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'delete',
            url: baseURI + path,
            params: { token: ad_token },
            data: {}
        }).then(function (response) {
            resolve(response.data.data)
        }).catch(function (err) {
            reject(err)
        });
    })
}
export function chackOrg(id) {
    let path = '/org/check/' + id
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'post',
            url: baseURI + path,
            params: { token: ad_token },
            data: {}
        }).then(function (response) {
            resolve(response.data.data)
        }).catch(function (err) {
            reject(err)
        });
    })
}
export function delOrg(id) {
    let path = '/org/' + id
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'delete',
            url: baseURI + path,
            params: { token: ad_token },
            data: {}
        }).then(function (response) {
            resolve(response.data.data)
        }).catch(function (err) {
            reject(err)
        });
    })
}
export function delUser(id) {
    let path = '/user/' + id
    return new Promise((resolve, reject) => {
        axios.request({
            headers: '',
            method: 'delete',
            url: baseURI + path,
            params: { token: ad_token },
            data: {}
        }).then(function (response) {
            resolve(response.data.data)
        }).catch(function (err) {
            reject(err)
        });
    })
}