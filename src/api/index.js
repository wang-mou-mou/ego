import bace from "./bace";
import axios from '../utils/request'
import secret from "./secret";
import md5 from 'js-md5'

// 请求数据的方法
const api={
    /**
     * 请求病毒信息
    */ 
    getVirusInfo(){
        return axios.get(bace.virusInfo) 
    },

    /**
     * 请求国内城市疫情数据
     */
    getChinaData(){
        return axios.get(bace.baceUrl + bace.chinaData + secret.chinaSign)
    },

    /**
     * 请求国外疫情数据
     */
    getForeignData(){
        return axios.get(bace.baceUrl + bace.foreignData+ secret.foreignSign)
    },

    /**
     * 请求城市数据
     */
    getCityData(params){
        let sign = md5('appid10088city_name'+params.cityName+'formatjson'+secret.secretKey)
        let canshu = '?format=json&appid=10088&city_name='+params.cityName+'&sign=' +sign;
        let url = bace.baceUrl + bace.cityUrl +canshu;
        return axios.get(url);
    },

    /**
     * 请求疫情数据分析图
     */
    getVirusImg(){
        return axios.get(bace.virusImg)
    },


    /**
     * 城市清单
     */

    getCitys(){
        return axios.get(bace.cityTrip +'?key='+ secret.key1)
    },

    /**
     * 城市出行防疫政策
     */
    getCityInfo(params){
        return axios.get(bace.cityInfo ,{params})
    }
}

export default api;