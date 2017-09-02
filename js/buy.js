/**
 * Created by Dell on 2017/8/19.
 */
$(function () {
    // 商品信息选项卡
    $(".d_info").show();
    $(".tdb_click").each(function (index) {
        $(this).click(function () {
            $(".d_info").hide();
            $(".d_buy_note").hide();
            $(".d_client_comment").hide();
            $(".d_client_ask").hide();
            if(index==0)
            {
                $(".d_info").show();
            }
            else if(index==1)
            {
                $(".d_buy_note").show();
            }
            else if(index==2)
            {
                $(".d_client_comment").show();
            }
            else{
                $(".d_client_ask").show();
            }
        });
    });

    //商品数量增减
    $(".d_num_sub").click(function () {
       var num=parseInt($(".d_num").val());
       num--;
       if(num<1)
       {
           num=1;
       }
       $(".d_num").val(num);
    });
    $(".d_num_add").click(function () {
        var num=parseInt($(".d_num").val());
        num++;
        $(".d_num").val(num);
    });
})