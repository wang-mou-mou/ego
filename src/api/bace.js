// 请求数据 接口信息
const bace ={
    baceUrl:'https://yspm.api.storeapi.net',//wa数据接口 基本路径
    virusInfo:'http://api.tianapi.com/txapi/ncov/index?key=202abd7cdd7619cc0e8b1f25e2405005',//病毒信息接口

    chinaData:'/api/94/219',//国内疫情数据

    foreignData:'/api/94/220',//世界疫情数据

    cityUrl:'/api/94/221',//城市疫情接口
    virusImg:'http://iwenwiki.com/wapicovid19/ncovimg.php',//疫情数据分析图

    cityTrip:'/api/springTravel/citys',//城市清单数据

    cityInfo:'/api/springTravel/query',//根据出入城市，查询出行防疫政策

}


export default bace;