/**
 * Created by Dell on 2017/8/12.
 */
$(function () {
    //禁止广告
    $("#ad_3v").hide();
    //点击导航栏按钮，导航菜单滑动显示
    $(".nav_list").click(function () {
        $(".head_nav").animate({"left":"0"},1000,"linear");
    }).mouseleave(function () {
        //离开导航栏区域，或点击某个导航栏链接，导航菜单消失
        $(".head_nav").animate({"left":"-100%"},1000,"linear");
    });
    //轮播部分
    var num=0;
    setInterval(function () {
        num--;
        if(num<0)
        {
            $(".ul_img_list").css('marginLeft',"-200%");
            num=$(".img_lists").length-1;
        }
        $(".ul_img_list").css({"marginLeft":-num*100+"%"},1000,"linear");
        $(".img_index").css("background","transparent");
        $(".img_index").eq(num).css("background","white");
    },2000);
    //点击排序种类，字体颜色改变
    $(".sort_type>li>a:first").css("color","orange");
    $(".sort_type>li>a").each(function () {
        $(this).click(function () {
            $(".sort_type>li>a").css("color","#666");
            $(this).css("color","orange");
        });
    });
});