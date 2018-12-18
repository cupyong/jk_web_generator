import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/theme/macarons';
import 'echarts/map/js/china';
import cfg from '../../../util/config'
import { extend } from 'zrender/lib/core/util';

const randomValue = () => {
    return parseInt(Math.random() * 1000)
}

class Map extends Component {
    componentDidMount() {
        this.init(this.props)
    }

    componentWillReceiveProps(nextProps) {

        // if (this.props.dataKey != nextProps.dataKey) {
        this.init(nextProps)
        // }
    }
    handleData = (data, propsData, key) => {
        data.forEach(item => {
            propsData.forEach(ite => {
                if (item.id == ite.regionId) {
                    item.value = ite[key]
                }
            })
        });
        return data
    }
    getMax = (data) => {
        let max = 2000;
        for (let i = 1; i < data.length; i++) {
            if (max < data[i]['value']) {
                max = data[i]['value'];
            }
        }
        return max
    }
    init = (props) => {
        let myChart = echarts.init(document.getElementById(props.chartId));
        let data = [...cfg.listRegion]
        let propsData = props.data
        data = this.handleData(data, propsData, props.dataKey)
        const option = {
            grid: {
                y: "0px",
                x: "0px",
                x2: "0px",
                y2: "0px",
            },
            tooltip: {},
            toolbox: {
                show: true,
                feature: {
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
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: this.getMax(data),
                left: 'left',
                top: 'bottom',
                text: ['High', 'Low'],
                seriesIndex: [1],
                inRange: {
                    color: ['RGB(234, 237, 242)', '#006edd']
                },
                calculable: true
            },
            geo: {
                map: 'china',
                roam: false,
                zoom: 1, //地图缩放多少倍
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbolSize: 20,
                    symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                    symbolRotate: 35,
                    label: {
                        normal: {
                            // formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F06C00'
                        }
                    }
                },
                {
                    name: props.dataKey,
                    type: 'map',
                    geoIndex: 0,
                    data: data
                }
            ]
        };
        myChart.setOption(option);
    }
    render() {
        return (
            <div id={this.props.chartId} style={{ width: "100%", height: this.props.w || 600 }}></div>
        );
    }
}

export default Map;
