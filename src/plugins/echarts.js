import echarts from 'echarts';

// 引入map.js
import '../utils/map'

// 国家名字 中英映射
import country from'../utils/country'

/**
 * Object.defineProperties(obj,props)
 * obj:要定义属性的对象
 * props:要定义其可枚举属性或修改的属性描述符的对象
 */
//创建函数install 
function install(Vue) {
    Object.defineProperties(Vue.prototype, {
        $echarts: {
            get() {
                return {
                    //方法1：折线图------------------------
                    line(id) {
                        // 基于准备好的dom，初始化echarts实例
                        var myChart = echarts.init(document.getElementById(id));

                        // 指定图表的配置项和数据
                        var option = {
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            legend: {
                                data: ['销量']
                            },
                            xAxis: {
                                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'bar',
                                data: [5, 20, 36, 10, 10, 20]
                            }]
                        };

                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    },
                    //方法2：中国地图---------------------------------------
                    chinaMap(id, data) {
                        var china_chart = echarts.init(document.getElementById(id));
                        var option = {
                            title: {
                                // text: 'xx地图',
                            },
                            tooltip: {
                                // 提示框的事件
                                triggerOn:'click',
                                enterable:true,
                                formatter: function (params) {
                                    // console.log(params);
                                    return `<a href='/city/${params.name}' style='color:#fff'>${params.name} 确诊:${params.value}</a>`;
                                }
                            },
                            //地图的视觉映射 组件
                            visualMap: [{
                                type: 'piecewise',//颜色的值是不连续，使用不同的颜色代表了不同的区间
                                //自定义 不连续组件的取值范围和颜色
                                bottom:0,
                                pieces: [
                                    { min: 400, label: ">400", color: "#4F070D" },
                                    { min: 200, max: 400, color: "#9C3708" },
                                    { min: 100, max: 200, color: "#E55A4E" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 1, max: 10, color: "#FDFDCF" },
                                    { min: 0, max: 0, color: '#fff' }
                                ]
                            }],
                            //地图的核心区域
                            geo: {
                                //地图的类型
                                map: 'china',
                                //缩放比例 
                                zoom: 1,
                                //地图上的文字
                                label: {
                                    show: true
                                },
                                //地图 图片距容器上边 距离
                                top:'5%',
                                //高亮选中
                                emphasis: {
                                    label: {
                                        show: true
                                    },
                                    itemStyle: {
                                        areaColor: '#888'
                                    }
                                }
                            },
                            //系列
                            series: [{
                                name: '中国',
                                type: 'map',
                                geoIndex: 0,
                                // 接收的参数数据
                                data
                                // data: [{ name: '北京', value: 4 }, { name: '上海', value: 350, name: '新疆', value: 100 }]
                            }]
                        };
                        //渲染视图
                        china_chart.setOption(option);
                    },

                    //方式3：世界地图-----------------------------------------
                    worldMap(id, data) {
                        var china_chart = echarts.init(document.getElementById(id));
                        var option = {
                            title: {
                                // text: 'xx地图',
                            },
                            tooltip: {
                                // 提示框的事件
                                triggerOn:'click',
                                enterable:true,
                                formatter: function (params) {
                                    // console.log(params);
                                    return params.name +'确诊:'+params.value;
                                }
                            },
                            //地图的视觉映射 组件
                            visualMap: [{
                                type: 'piecewise',//颜色的值是不连续，使用不同的颜色代表了不同的区间
                                //自定义 不连续组件的取值范围和颜色
                                bottom:0,
                                pieces: [
                                    { min: 15000, label: ">15000", color: "#4F070D" },
                                    { min: 10000, max: 15000, color: "#9C3708" },
                                    { min: 5000, max: 10000, color: "#E55A4E" },
                                    { min: 1000, max: 5000, color: "#FE9E83" },
                                    { min: 1, max: 1000, color: "#FDFDCF" },
                                    { min: 0, max: 0, color: '#fff' }
                                ]
                            }],
                            //地图的核心区域
                            geo: {
                                //地图上的文字
                                label: {
                                    // show: true
                                },
                                //地图 图片距容器上边 距离
                                top:'5%',
                                //高亮选中
                                emphasis: {
                                    label: {
                                        show: true
                                    },
                                    itemStyle: {
                                        areaColor: '#888'
                                    }
                                }
                            },
                            //系列
                            series: [{
                                name: "国",
                                type: "map",
                                map: "world",
                                zoom: 1.15,//缩放比例 
                                roam: true,
                                top:50,//地图距容器上边距
                                nameMap:country,//自定义地区的名称映射
                                // 接收的参数数据
                                data
                            }]
                        };
                        //渲染视图
                        china_chart.setOption(option);
                    },

                    //方法4：城市地图 -------------------------------------------
                    cityMap(id,cityname, data) {
                        var china_chart = echarts.init(document.getElementById(id));
                        var option = {
                            title: {
                                // text: 'xx地图',
                            },
                            tooltip: {
                                // 提示框的事件
                                triggerOn:'click',
                                enterable:true,
                                formatter: function (params) {
                                    // console.log(params);
                                    return `<a href='/city/${params.name}' style='color:#fff'>${params.name} 确诊:${params.value}</a>`;
                                }
                            },
                            //地图的视觉映射 组件
                            visualMap: [{
                                type: 'piecewise',//颜色的值是不连续，使用不同的颜色代表了不同的区间
                                //自定义 不连续组件的取值范围和颜色
                                bottom:0,
                                pieces: [
                                    { min: 400, label: ">400", color: "#4F070D" },
                                    { min: 200, max: 400, color: "#9C3708" },
                                    { min: 100, max: 200, color: "#E55A4E" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 1, max: 10, color: "#FDFDCF" },
                                    { min: 0, max: 0, color: '#fff' }
                                ]
                            }],
                            //地图的核心区域
                            geo: {
                                //地图的类型
                                map: cityname,
                                //缩放比例 
                                zoom: 1,
                                //地图上的文字
                                label: {
                                    show: true
                                },
                                //地图 图片距容器上边 距离
                                top:'5%',
                                //高亮选中
                                emphasis: {
                                    label: {
                                        show: true
                                    },
                                    itemStyle: {
                                        areaColor: '#888'
                                    }
                                }
                            },
                            //系列
                            series: [{
                                name: '市',
                                type: 'map',
                                //地图的类型
                                map: cityname,
                                geoIndex: 0,
                                // 接收的参数数据
                                data
                            }]
                        };
                        //渲染视图
                        china_chart.setOption(option);
                    }
                }
            }
        }
    })
}

export default install;