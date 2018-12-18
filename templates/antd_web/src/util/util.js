import cfg from './config'
import moment from 'moment'
import {notification} from 'antd';

export const noop = function noop() { }

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type]
        return reducer ? reducer(state, action.payload.data, action.params) : state
    }
}

const fixNumber = function (date) {
    const dateLength = 13;
    const len = date.length;

    let diffLen = dateLength - len;
    let diff = '';

    while (diffLen) {
        diff += '0';
        diffLen--;
    }

    return date + diff;
};

export function dateFormat(date, format) {
    let _format = format || 'yyyy-MM-dd';

    const d = date;
    const o = {
        'M+': d.getMonth() + 1, // month
        'd+': d.getDate(), // day
        'h+': d.getHours(), // hour
        'm+': d.getMinutes(), // minute
        's+': d.getSeconds(), // second
        'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
        'S': d.getMilliseconds() // millisecond
    };

    if (/(y+)/.test(_format)) {
        _format = _format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
        if (o.hasOwnProperty(k) && new RegExp('(' + k + ')').test(_format)) {
            _format = _format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }

    return _format;
}

// export function imgTrustUrl (url) {
//   if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
//     return IMAGE_HOST_TEST + url
//   } else if (process.env.NODE_ENV === 'production') {
//     return IMAGE_HOST_PROD + url
//   } else {
//     return url
//   }
// }

export function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function'
    }
}
export function orgType(value) {
    for (let index = 0; index < cfg.orgTypes.length; index++) {
        let item = cfg.orgTypes[index]
        if (item.key == value) {
            return item.name
        }
    }
    return ''
}
export function orgStatusName(status) {
    return cfg.orgStatus[status]
}

export function getYesterday(mo = moment()) {
    let yesterday = mo.add(-1, 'days')
    return yesterday
}
export function getLastWeekDays(mo = moment()) {
    let weekOfday = parseInt(mo.format('d')) // 计算今天是这周第几天  周日为一周中的第一天  
    if (weekOfday == 0) {
        let end = moment().subtract(7, 'day')
        let start = moment().subtract(13, 'day')
        return ({ start, end })
    } else {
        let start = moment().subtract(weekOfday + 6, 'days') // 周一日期  
        let end = moment().subtract(weekOfday, 'days') // 周日日期  
        return { start, end }
    }
}

export function getCurrWeekDays(mo = moment()) {
    let weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天 周日为一周中的第一天 
    if (weekOfday == 0) {
        let start = moment().subtract(6, 'days')// 周一日期  
        let end = moment()   // 周日日期 
        return { start, end }
    } else {
        let start = moment().subtract(weekOfday - 1, 'days')// 周一日期  
        let end = moment()   // 周日日期 
        return { start, end }
    }
}
export function getLastMonthDays(mo = moment()) {
    let end = moment(mo.format('YYYY-MM-DD')).subtract(1, 'months').endOf('month')
    let start = mo.subtract(1, 'months').startOf('month')
    return { start, end }
}
export function getCurrMonthDays(mo = moment()) {
    let end = moment()
    let start = mo.startOf('month')
    return { start, end }
}

export function getBeforeDays(day, mo = moment(),) {
    let start = moment(mo.format("YYYY-MM-DD")).subtract(day-1, 'days')
    let end = mo

    return { start, end }
}

export function getThirtyDays(mo = moment()) {
    let end = moment()
    let start = mo.startOf('month')
    return { start, end }
}
export function openNotificationWithIcon(type, msg = ''){
    notification[type]({
        message: msg,
    });
};

export function formatTime(moment, style = 'YYYY-MM-DD'){
    return moment.format(style)
}
export function objectMap(obj, fn) {
    return Object.keys(obj).map((key) => fn(obj[key], key))
}
 export function getRegionName(base1,str){
     try {
         let json = {}
         base1.map(item => {
             json[item.regionId] = item
         })
         let names = str.split(";").map(i => {
             return json[i]['chinese_name']
         }).join(";")
         return names == "全球" ? '全国' : names
     } catch (error) {
         return '-'
     }
 }

 export function returnNull(str){
     return !!str?str:'--'
 }
 export function getAdTypeName(str){
    let arr = cfg.adType.filter(item=> item.key==str)
    return arr.length? arr[0].name:"未知"
}
export function deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Function) {
        var n = new Function("return " + o.toString())();
        return n
    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}
export function  handleData(arr){
    let initObj =
    {
        title: "中国",
        key: '1156000000',
        value: '1156000000',
    }

    function getChildRen(obj) {
        let childrenList = arr.filter(item => {
            return item.parent_regionId == obj.value
        })
        childrenList = childrenList.map(item => {
            return {
                title: item.chinese_name,
                key: item.regionId,
                value: item.regionId,
            }
        })
        if (childrenList.length > 0) {
            for (let i = 0; i < childrenList.length; i++) {
                let children = getChildRen(childrenList[i])
            }
        }
        obj.children = childrenList
        return obj
    }
    function getAllRegion() {
        let allObj = getChildRen(initObj)
        return allObj
    }
    return [getAllRegion()]
}