import moment from 'moment'
import _ from 'lodash'

class CommonFun {
    compareType1(com_data) {
        let data = {
            start: moment().subtract(8, 'days').format("YYYY-MM-DD"),
            end: moment().subtract(2, 'days').format("YYYY-MM-DD"),
            type: 1
        }
        if (com_data == data) {
            return true
        } else {
            return false
        }
    }

    compareType2(com_data) {
        let data = {
            start: moment().subtract(2, 'days').format("YYYY-MM-DD"),
            end: moment().subtract(2, 'days').format("YYYY-MM-DD"),
            type: 2
        }
        if (com_data == data) {
            return true
        } else {
            return false
        }
    }

    datedifference(sDate1, sDate2) {
        let dateSpan,
            tempDate,
            iDays;
        sDate1 = Date.parse(sDate1);
        sDate2 = Date.parse(sDate2);
        dateSpan = sDate2 - sDate1;
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays
    };

    setStartEndByType(start, end, type) {
        switch (type) {
            case "day":
                if (commonFun.datedifference(start, end) > 10) {
                    start = moment(end).subtract(10, 'days').format("YYYY-MM-DD")
                }
                break;
            case "week":
                if (commonFun.datedifference(start, end) > 56) {
                    start = moment(end).subtract(56, 'days').format("YYYY-MM-DD")
                }
                break;
            case "month":
                if (commonFun.datedifference(start, end) > 360) {
                    start = moment(end).subtract(360, 'days').format("YYYY-MM-DD")
                }
                break;
        }
        return start
    }

    getChartMinValue(list) {
        list = list.map((item, index) => {
            return parseFloat(item)
        })
        let min = _.min(list, function (item) {
            return item;
        })
        let max = _.max(list, function (item) {
            return item;
        })
        let a = min - (max - min) / 4

        let r = /^[0-9]*[1-9][0-9]*$/　　//正整数
        if ((r.test(min) || min == 0) && (r.test(max) || max == 0)) {
            a = parseInt(a);
        } else {
            a = parseFloat(a.toFixed(2));
        }
        return a > 0 ? a : 0
    }

    getHourLegend() {
        let legend = [];
        for (let i = 0; i < 24; i++) {
            if (i < 10) {
                legend.push("0" + i.toString())
            } else {
                legend.push(i.toString())
            }
        }
        return legend
    }

    getDayLegend() {
        let legend = [];
        for (let i = 1; i < 32; i++) {
            if (i < 10) {
                legend.push("0" + i.toString())
            } else {
                legend.push(i.toString())
            }
        }
        return legend
    }

    getxData(list, prop, type) {
        // if (list < 2) {
        //     return []
        // }
        let data = [];
        if (type == 1) { //小时
            for (let i = 0; i < 24; i++) {
                data.push(0)
            }
            for (let i = 0; i < list.length; i++) {
                data[list[i].hour] = list[i][prop]
            }
        } else {
            for (let i = 1; i < 32; i++) {
                data.push(0)
            }
            for (let i = 0; i < list.length; i++) {
                let date = new Date(list[i].startDate).getDate();
                data[date-1] = list[i][prop]
            }
        }
        let dataLength = 0;
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i] != 0) {
                dataLength = i + 1
                break
            }
        }
        data = data.slice(0, dataLength)
        return data
    }

    getLeglend(searchDate, type) {
        let result = [];
        for (let i = 0; i < searchDate.length; i++) {
            if (type == 1) {
                result.push(searchDate[i].date)
            } else {
                result.push(moment(new Date(searchDate[i].start)).format("YY/MM"))
            }
        }
        return result
    }

    exTotalData(list) {
        let data = list.map(item => {
            if (item.length > 0) {
                return item.slice(1)
            } else {
                return item
            }
        })
        return data
    }

    getaxisLabel(date) {
        let day = moment(date).weekday()
        let dayName = "周日"
        switch (day) {
            case 1:
                dayName = "周一";
                break;
            case 2:
                dayName = "周二";
                break;
            case 3:
                dayName = "周三";
                break;
            case 4:
                dayName = "周四";
                break;
            case 5:
                dayName = "周五";
                break;
            case 6:
                dayName = "周六";
                break;
            case 0:
                dayName = "周日";
                break;
        }
        return moment(date).format("MM/DD") + "\n" + dayName
    }

    monthDays = () => {
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1
        if (month < 10) {
            month = "0" + month
        }
        let start = year + '-' + month + '-' + "01";
        let end = year + '-' + month + '-' + new Date(year, month, 0).getDate()
        return {
            start: start,
            end: end
        }
    };
    chartSeries = (arr,dataType,modal)=>{
        let num = [];
        if(modal == 2){
            arr.forEach(item=>{
                let date = item.Date? item.Date: item.startDate
                let index = parseInt(date.substr(-2)-1)
                num[index] = item[dataType]
            });

        }else {
            arr.forEach(item=>{
                let index = parseInt(item.hour);
                num[index] = item[dataType]
            });
        }
        // for (let i = 0; i < num.length; i++) {
        //     let item = num[i];
        //     if(typeof item == 'undefined'){
        //         num[i]=0
        //     }
        // }
        return  num
    }
}

var commonFun = new CommonFun()
export default commonFun