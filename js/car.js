/**
 * Created by Dell on 2017/8/21.
 */
$(function () {
    //点击购物车删除按钮删除当前内容
    $(".car_delete_btn").each(function (index) {
        $(this).click(function () {
            $(".car_con_block").eq(index).remove();
        });
    });
    //编辑商品商品数量
    $(".edit_text").each(function (index) {
        $(this).click(function () {
            if($(this).html()=='编辑')
            {
                $(".car_d_num").val($(".good_num").eq(index).html());
                $(this).html("完成");
                $(".car_operate_action").eq(index).show();
                $(".car_d_num_sub").eq(index).click(function () {
                    var temp_num=$(".car_d_num").val();
                    temp_num--;
                    if(temp_num<=1)
                    {
                        temp_num=1;
                    }
                    $(".car_d_num").val(temp_num);
                });
                $(".car_d_num_add").eq(index).click(function () {
                    var temp_num=$(".car_d_num").val();
                    temp_num++;
                    $(".car_d_num").val(temp_num);
                });
            }
            else{
                $(".good_num").eq(index).html($(".car_d_num").val());
                $(".car_operate_action").eq(index).hide();
                $(this).html("编辑");
            }
            get_sum_money();
        });
    });
    //商品的全选
    $(".all").click(function () {
        if($(this).prop("checked"))
        {
            $(".sum_num").html($(".car_good_check").length);
            $(".car_good_check").prop("checked",true);
        }
        else{
            $(".sum_num").html(0);
            $(".car_good_check").prop("checked",false);
        }
        get_sum_money();
    });
    $(".car_good_check").click(function () {
        var len=$(".car_good_check").length;
        var checklen=0;
        $(".car_good_check").each(function (index) {
            if($(this).prop("checked"))
            {
                checklen++;
            }
        });
        if(len==checklen)
        {
            $(".all").prop("checked",true);
        }
        else
        {
            $(".all").prop("checked",false);
        }
        $(".sum_num").html(checklen);
        get_sum_money();
    });
    // 计算当前选中商品总价（全选或全不选）
    function get_sum_money() {
        var sum_money=0.00;
        $(".car_good_check").each(function (index) {
            if($(this).prop("checked"))
            {
                var price=Math.round($(".good_price").eq(index).html());
                var num=Math.round($(".good_num").eq(index).html());
                sum_money+=Math.round(price*num);
            }
        });
        $(".total_money").html("￥"+sum_money);
    }
    //商品结算
    $(".sum_pay").click(function () {
        var num=0;
        alert("您一共需要支付"+$(".total_money").html());
        $(".car_good_check").each(function (index) {
            if($(this).prop("checked"))
            {
                num++;
            }
            if(num==$(".car_con_block").length)
            {
                $(".car_content").html('');
            }
            else{
                if($(this).prop("checked"))
                {
                    $(".car_con_block").eq(index).remove();
                }
            }
        });
    });
})