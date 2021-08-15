// 将时间戳转为2021-08-11 10:22 的格式
function changeTime(timestamp){
    var date = new Date(timestamp);
    var year =date.getFullYear()
    // toString转为字符串  padStart补0
    var month = (date.getMonth() + 1).toString().padStart(2,0);//返回月份 -- 0：一月
    var day = (date.getDate()).toString().padStart(2,'0');
    var hour = (date.getHours()).toString().padStart(2,'0');
    var minute = (date.getMinutes()).toString().padStart(2,'0');

    return year + '-' +month + '-' +day+'  '+hour+':'+minute;
}

export default changeTime;

