const config = {
    // serviceUrl: "http://wyw03.jikedata.com:6001",
    serviceUrl: "http://x-note.jikedata.com:6001",
    orgTypes: [
        {
            name: "媒体",
            key: 1
        },
        {
            name: "广告主",
            key: 2
        },
        {
            name: "4A",
            key: 3
        },
        {
            name: "代理",
            key: 4
        },
    ],
    orgStatus: {
        0: '未知状态',
        1: '待审核',
        2: '审核成功'
    },
    taskStatus: {
        0: '未知状态',
        1: '待处理',
        2: '处理中',
        3: '已完成',
    },
    industry: [
        {
            key: '1',
            name: '电商'
        },
        {
            key: '2',
            name: '互联网金融'
        },
        {
            key: '3',
            name: '企业服务类'
        },
        {
            key: '4',
            name: '零售'
        },
        {
            key: '5',
            name: '文娱'
        },
        {
            key: '6',
            name: '在线教育'
        },
        {
            key: '7',
            name: '手游'
        },
        {
            key: '8',
            name: '证券'
        },
        {
            key: '9',
            name: '银行'
        },
        {
            key: '10',
            name: '汽车'
        },
        {
            key: '11',
            name: '其他'
        },
    ],
    regionId: '1156000000',
    adType: [{
        key: '0',
        name: '开机'
    },
    {
        key: '1',
        name: '贴片'
    },
    {
        key: '2',
        name: '暂停'
    },
    {
        key: '3',
        name: '其他'
    },
],
    listRegion: [
        // { id: '1000000000',value:0 ,uv:0,pv:0,ip:0,avaTime:0,name: '全部', uName: 'Quanbu' },
        { id: '1156110000', value: 0,   name: '北京', uName: 'Beijing' },
        { id: '1156120000', value: 0,   name: '天津', uName: 'Tianjin' },
        { id: '1156130000', value: 0,   name: '河北', uName: 'Hebei' },
        { id: '1156140000', value: 0,   name: '山西', uName: 'Shanxi' },
        { id: '1156150000', value: 0,   name: '内蒙古', uName: 'Inner Mongolia' },
        { id: '1156210000', value: 0,   name: '辽宁', uName: 'Liaoning' },
        { id: '1156220000', value: 0,   name: '吉林', uName: 'Jilin' },
        { id: '1156230000', value: 0,   name: '黑龙江', uName: 'Heilongjiang' },
        { id: '1156310000', value: 0,   name: '上海', uName: 'Shanghai' },
        { id: '1156320000', value: 0,   name: '江苏', uName: 'Jiangsu' },
        { id: '1156330000', value: 0,   name: '浙江', uName: 'Zhejiang' },
        { id: '1156340000', value: 0,   name: '安徽', uName: 'Anhui' },
        { id: '1156350000', value: 0,   name: '福建', uName: 'Fujian' },
        { id: '1156360000', value: 0,   name: '江西', uName: 'Jiangxi' },
        { id: '1156370000', value: 0,   name: '山东', uName: 'Shandong' },
        { id: '1156410000', value: 0,   name: '河南', uName: 'Henan' },
        { id: '1156420000', value: 0,   name: '湖北', uName: 'Hubei' },
        { id: '1156430000', value: 0,   name: '湖南', uName: 'Hunan' },
        { id: '1156440000', value: 0,   name: '广东', uName: 'Guangdong' },
        { id: '1156450000', value: 0,   name: '广西', uName: 'Guangxi' },
        { id: '1156460000', value: 0,   name: '海南', uName: 'Hainan' },
        { id: '1156500000', value: 0,   name: '重庆', uName: 'Chongqing' },
        { id: '1156510000', value: 0,   name: '四川', uName: 'Sichuan' },
        { id: '1156520000', value: 0,   name: '贵州', uName: 'Guizhou' },
        { id: '1156530000', value: 0,   name: '云南', uName: 'Yunnan' },
        { id: '1156540000', value: 0,   name: '西藏', uName: 'Tibet' },
        { id: '1156610000', value: 0,   name: '陕西', uName: 'Shaanxi' },
        { id: '1156620000', value: 0,   name: '甘肃', uName: 'Gansu' },
        { id: '1156630000', value: 0,   name: '青海', uName: 'Qinghai' },
        { id: '1156640000', value: 0,   name: '宁夏', uName: 'Ningxia' },
        { id: '1156650000', value: 0,   name: '新疆', uName: 'Xinjiang' },
        { id: '1156710000', value: 0,   name: '台湾', uName: 'TaiWan' },
        { id: '1156810000', value: 0,   name: '香港', uName: 'XiangGang' },
        { id: '1156820000', value: 0,   name: '澳门', uName: 'AoMen' },
        { id: '1156920000', value: 0,   name: '南海诸岛', uName: 'NanHaiZhuDao' },
    ],
    errCfg: [
        {
            title: "曝光分布",
            code: "001",
            value: '',
            checkBox: true,
            unit: '分钟',
        },
        {
            title: "OS版本分布",
            code: "002",
            value: '',
            checkBox: true,
            unit: '',
        },
        {
            title: "UserAgent分布",
            code: "003",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "浏览器分布",
            code: "004",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "曝光碰撞",
            code: "005",
            value: '',
            checkBox: true,
            unit: '秒'
        },
        {
            title: "曝光过度",
            code: "006",
            value: '',
            checkBox: true,
            unit: '分钟'
        },
        {
            title: "某时间段曝光过高",
            code: "007",
            value: '',
            checkBox: true,
            unit: '分钟'
        },
        {
            title: "总量统计",
            code: "008",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "模拟曝光或测试曝光数量，宏替换数量<3，特定UA字符串",
            code: "010",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "黑名单曝光",
            code: "011",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "UUID/IMEI/DEVICEID/UA等一对多",
            code: "012",
            value: '',
            checkBox: true,
            unit: ''
        },
        {
            title: "规律曝光",
            code: "013",
            value: '',
            checkBox: true,
            unit: '秒'
        },
    ],
    dataType:{
        click:'点击率',
        uv1 :'UV',
        pv:'PV'
    }

}
// 1 超级管理员
// 2 机构管理员
// 3 普通用户

// 媒体审核 
// 1 待审核
// 2 审核成功
//click／pv 转换率    pv/1000/cpm  完成率

export default config