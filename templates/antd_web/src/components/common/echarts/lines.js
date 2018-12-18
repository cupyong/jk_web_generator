import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import commonFun from '../../../util/commonFun'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/theme/macarons';
import _  from 'lodash'
// import Bref from '../common/Bref'
/*
* props参数说明
* chartId： chartId
* data：http获取的数据 一般为  数组格式
* model 小时或者天 1 ，2
* dataType 显示数据的属性 如acc等
* searchData 查询日期条件
* */
class Wrapper extends Component{

    render() {

        let arr = this.props.data
        if ( _.isArray() && arr.length > 0) {
            return (
                <EchartLine
                    chartId={this.props.id}
                    data={arr}
                    model={this.props.model}
                    dataType={this.props.dataType}
                    searchData={this.props.searchData}
                    w={this.props.w}
                    setDataIndex={this.props.setDataIndex}

                />
            )
        } else {
            return (
                <span>没有数据</span>
            )
        }
    }
}
class EchartLine extends Component {
    componentDidMount() {
        this.init(this.props)
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.data != nextProps.data || this.props.model != nextProps.model || this.props.searchData != nextProps.searchData || this.props.dataType != nextProps.dataType) {
            this.init(nextProps)
        // }
    }

    convertData = (props) => {
        let chartParams = {};
        let legend = commonFun.getLeglend(props.searchData, props.model);
        let xAxisData = commonFun.getHourLegend();
        if (props.model == 2) {
            xAxisData = commonFun.getDayLegend()
        }
        let datas = [];
        let length = props.data.length;
        for (let i = 0; i < length; i++) {
            let data = commonFun.chartSeries(props.data[i],props.dataType,props.model);
            datas.push(data)
        }
        chartParams.xAxisData = xAxisData;
        chartParams.datas = datas;
        if (legend.length > 0) {
            chartParams.legend = legend
        }

        return chartParams
    };


    init = (props) => {
        let myChart = echarts.init(document.getElementById(props.chartId));
        let data = this.convertData(props);
        let xAxisData = data.xAxisData;
        let legend = data.legend;
        let datas = data.datas;
        let series = [];
        for (let i = 0; i < datas.length; i++) {
            series.push({
                name: legend ? legend[i] : "",
                type: 'line',
                smooth: 0.3,
                data: datas[i],
                lineStyle: {
                    normal: {
                        type: !i ? 'solid' : 'dashed',
                        width: !i ? 1.5 : 1,
                    }
                }
            })
        }
        // let tooltip = ()=>{
        //     props.setDataIndex
        // }
        let option = {
            title: {},
            toolbox: {
                show: true,
            },
            tooltip: {
                trigger: 'axis',
                formatter: props.setDataIndex? function (params, ticket, callback) {
                    if(props.setDataIndex){
                        props.setDataIndex(params[0].dataIndex);
                    }
                }:''
            },
            legend: legend ? {
                data: legend,
                top: "bottom"
            } : {},
            grid: {
                y: "20px",
                x: "60px",
                x2: "25px",
                y2: "60px",
            },
            color: ["#00a0ea", "#fc735e", "#717cc9", "#60d0fd", "#90ce72", "#fdb869"],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxisData,
                    axisLine: {
                        lineStyle: {
                            color: '#000',
                            width: 1,
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            width: 1,//这里是为了突出显示加上的
                            // 使用深浅的间隔色
                            color: ['#999999']
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#000',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                }
            ],
            series: series
        };
        myChart.setOption(option);

    }

    render() {
        return (
            <div id={this.props.chartId} style={{ width: "100%", height: this.props.w || 300 }}></div>
        );
    }
}

export default Wrapper;