/**
 * Created by Dell on 2017/8/21.
 */
// 商品加入购物车
var add_img;
var add_price;
var add_num;
var add_name;


$(function () {
    $(".add_car").each(function (index) {
        $(this).click(function () {
            add_img=$(".d_block_img").eq(index).attr("src");
            add_price=$(".d_price2").eq(index).html();
            add_num=$(".d_num").eq(index).val();
            add_name=$.trim($(".detail_title").eq(index).text());
            alert("已加入购物车的商品信息如下：商品图片路径:"+add_img+"商品名称:"+add_name+"商品单价："+add_price+"商品数量："+add_num);
        });
    });
})