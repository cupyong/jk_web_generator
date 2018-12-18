import React, {Component} from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/theme/macarons';

/*
* props参数说明
* chartId： chartId
* data：http获取的数据 一般为  数组格式
* model 小时或者天 1 ，2
* dataType 显示数据的属性 如acc等
* searchData 查询日期条件
* */
class Wrapper extends Component {

    render() {
        return (
            <EchartLine
                chartId={this.props.id}
                data={this.props.data}
                xAxis={this.props.xAxis}
                dataType={this.props.dataType}
                searchData={this.props.searchData}
                modal = {this.props.modal}
                // w={this.props.w}
                // setDataIndex={this.props.setDataIndex}
            />
        )
        // if (arr.length > 0) {
        //     return (
        //         <EchartLine
        //             chartId={this.props.id}
        //             data={[]}
        //             model={this.props.model}
        //             dataType={this.props.dataType}
        //             searchData={this.props.searchData} 
        //             w={this.props.w}
        //             setDataIndex={this.props.setDataIndex}

        //         />
        //     )
        // } else {
        //     return (
        //         <span>暂无数据</span> 
        //     )
        // }
    }
}

class EchartLine extends Component {
    componentDidMount() {
        this.init(this.props)
    }
    handleData = (props) => {
        let{ modal, data, xAxis, dataType, start, end } = props;
        let xAxisArr = []
        let valuesArr = []
        if (modal == 2) {
            data.forEach(item=>{
                valuesArr.push(item[dataType])
                xAxisArr.push(item[xAxis])
            })
            return {xAxisArr,valuesArr}
        }else{
            data.forEach((item,index) => {
                valuesArr.push(item[dataType])
                xAxisArr.push(index)
            })
            return { xAxisArr, valuesArr }
        }
    };

    componentWillReceiveProps(nextProps) {
        this.init(nextProps)
    }

    init = (props) => {
        let myChart = echarts.init(document.getElementById(props.chartId));
        let {xAxisArr,valuesArr} = this.handleData(props);
        let option = {
            title: {
                // text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox:{
                show:true,
                feature:{
                    dataView: {
                        show: false
                    },
                    // 还原
                    restore: {
                        show: true
                    },
                    // 区域缩放
                    dataZoom: {
                        show: false
                    },
                    // 保存图片
                    saveAsImage: {
                        show: true
                    },
                    //动态类型切换
                    magicType: {
                        type: ['line', 'bar']
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxisArr
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'line',
                    smooth:0.3,
                    // stack: '总量',
                    data: valuesArr
                },
            ]
        };

        myChart.setOption(option);

    }

    render() {
        return (
            <div id={this.props.chartId} style={{width: "100%", height: this.props.w || 350}}></div>
        );
    }
}

export default Wrapper;