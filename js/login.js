/**
 * Created by Dell on 2017/8/17.
 */
var reg_email= /^\w+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;  //验证邮箱
var reg_mobile= /^1[3458]{1}[0-9]{9}$/;                //验证手机
function login() {
    //不存在内容为空的情况
    if(all_right())
    {
        alert("正确");
       if(localStorage.user)
       {
           var arr=eval(localStorage.user);
           var k=0;
           for(e in arr)
           {
               if($(".login_name").val()==arr[e].loginName)
               {
                   if($(".login_pass").val()==arr[e].loginPsd)
                   {
                       alert("登陆成功！");
                       window.location.href="index.html";
                       clear();
                       k=0;
                       return;
                   }
                   else{
                       alert("密码错误！");
                       clear();
                       k=0;
                       return;
                   }
               }
               else{
                   k=1;
               }
           }
           if(k==1)
           {
               alert('用户名不存在');
               clear();
           }
       }
       else{
           alert("用户名不存在");
           clear();
       }
    }
    else{
        alert("12345");
    }
}
// 清空登录界面的输入内容
function clear() {
    $(".login_name").val('');
    $(".login_pass").val('');
}
//正则检验内容是否合法功能
function check(str,value) {
    return str.test(value);
}
// 判断内容是否为空
function all_right() {
    if($(".login_name").val()=="")
    {
        alert("用户名不能为空！");
        return false;
    }
    else if($(".login_pass").val()=="")
    {
        alert("密码不能为空！");
        return false;
    }
    else if(!name())
    {
        return false;
    }
    else{
        return true;
    }
}
// 验证用户名
function name() {
    if($(".login_name").val()!='')
    {
        if(!check(reg_email,$(".login_name").val())&&!check(reg_mobile,$(".login_name").val()))
        {
            alert("请输入正确的邮箱或手机号码");
            return false;
        }
        else
        {
            return true;
        }
    }
}
