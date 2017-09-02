/**
 * Created by Dell on 2017/8/18.
 */
// 倒计时部分功能实现方法
// 暂时只能实现一个
var firsttime=new Date(2017,9,10,12,0,0).getTime();
$(function () {
    timer(firsttime);
    setInterval(function () {
        timer(firsttime);
    },1000);
});
function timer(inittime){
    var date=new Date().getTime();
    inittime=inittime-date;
    var day=0;
    var hour=0;
    var minute=0;
    var second=0;
    if(inittime>0)
    {
        day = Math.floor(inittime/1000/60/60/24);
        hour = Math.floor(inittime/1000/60/60%24);
        minute = Math.floor(inittime/1000/60%60);
        second = Math.floor(inittime/1000%60);
    }
    if(minute<=9){
        minute='0'+minute;
    }
    if(second<=9){
        second='0'+second;
    }
    if(hour<=9){
        hour='0'+hour;
    }
    $("#jsdays1").html(day+"天");
    $("#jshours1").html(hour+"时");
    $("#jsmins1").html(minute+"分");
    $("#jssecs1").html(second+"秒");
}