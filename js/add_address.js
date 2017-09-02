/**
 * Created by Dell on 2017/8/25.
 */
var reg_mobile= /^1[3458]{1}[0-9]{9}$/;                //验证手机
$(function () {
    var Index;
    // 点击功能
    $(".address_block").each(function (index) {
        $(this).on('click', function () {
            $(".address_block").css("border", "1px solid #ccc");
            $(".default_address").css("border", "1px solid #eb6100");
            $(this).css("border", "1px solid #eb6100");
            console.log(index);
            $(".address_change").hide();
            $(".address_change").eq(index).show();
        });
    });
    // 编辑收货地址
    $(".edit").each(function (index) {
        $(this).click(function () {
             Index=index;
            //显示修改页面
            $(".change_block").show();
            // 获得原始地址数据
            $(".name").val($(".address_name").eq(index).text());
            $(".tel").val($(".address_tel").eq(index).text());
            $(".address_text").val($(".address_dis").eq(index).text());
        });
    });
    //编辑收货地址，点击完成按钮保存修改
    $(".edit_ok").click(function () {
        console.log(Index);
        $(".address_dis").eq(Index).html($(".address_text").val());
        $(".address_tel").eq(Index).html($(".tel").val());
        $(".address_name").eq(Index).html($(".name").val());
        $(".change_block").hide();
    });
    //删除收货地址
    $(".delete").each(function (index) {
        $(this).click(function () {
            $(".address_block").eq(index).remove();
        });
    });
    //新增收货地址
    add_address();
    function add_address() {
        //点击新增收货地址按钮显示新增地址模态层
        $(".add_address").on('click', function () {
            $(".add_block").show();
        });
        // 点击按钮新增收货地址
        $(".edit_ok_add").on('click', function () {
            if ($(".name_add").val() != '' && $(".tel_add").val()) {
                if(reg_mobile.test($(".tel_add").val()))
                {
                    //创建div
                    var $div = $("<div class='address_block div_common '></div>");
                    var $p = $("<p></p>");
                    var $span1=$("<span class='address_name'></span>");
                    $span1.html($(".name_add").val());
                    var $span2=$("<span class='address_tel'></span>");
                    $span2.html($(".tel_add").val());
                    $p.append($span1);
                    $p.append($span2);
                    $div.append($p);
                    var $padd = $("<p class='address_dis'></p>");
                    $padd.html($(".address_text_add").val());
                    $div.append($padd);
                    var odiv = $("<div class='address_change'></div>");
                    var oedit=$("<span class=' edit address_operate glyphicon glyphicon-pencil'></span>");
                    //绑定事件，编辑地址函数
                    oedit.on('click',function () {
                        $(".change_block").show();
                        $(".name").val($span1.text());
                        $(".tel").val($span2.text());
                        $(".address_text").val($padd.text());
                        //点击完成按钮保存修改
                        $(".edit_ok").click(function () {
                            $padd.html($(".address_text").val());
                            $span2.html($(".tel").val());
                            $span1.html($(".name").val());
                            $(".change_block").hide();
                        });
                    });
                    odiv.append(oedit);
                    var odelete=$("<span  class=' delete address_operate glyphicon glyphicon-trash'></span> ");
                    //绑定事件，删除地址
                    odelete.on('click',function () {
                       $div.remove();
                    });
                    odiv.append(odelete);
                    $div.append(odiv);
                    //绑定事件，为新地址添加点击样式显示操作模块函数
                    $div.on('click',function () {
                        $(".address_block").css("border", "1px solid #ccc");
                        $(".default_address").css("border", "1px solid #eb6100");
                        $(this).css("border", "1px solid #eb6100");
                        $(".address_change").hide();
                        odiv.show();
                    });
                    $(".address_list").append($div);
                    $(".name_add").val("");
                    $(".tel_add").val("");
                    alert("添加收货地址成功");
                    $(".add_block").hide();
                }
                else{
                    alert("请输入正确手机号码");
                }
            }
            else{
                alert("请输入内容");
            }
        });
    }
});