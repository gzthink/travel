var reg_email= /^\w+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;  //验证邮箱
var reg_password=/^(?!\d{1,8}$)[\S]{6,16}$/;          //密码应该为6-16位,无空格,且9位以下纯数字不合法
var reg_mobile= /^1[3458]{1}[0-9]{9}$/;                //验证手机
var pass1='';
function zhuce() {
    if(all_right())
    {
        var arr=[];
        if(localStorage.user)
        {
            arr=eval(localStorage.user);
            for(e in arr)
            {
                if($(".r_name").val()==arr[e].loginName)
                {
                    alert("该账号已被注册");
                    clear();
                    return;
                }
            }
        }
        var user={'loginName':$(".r_name").val(),'loginPsd':$(".r_pass").val()};
        arr.push(user);
        localStorage.user=JSON.stringify(arr);
        alert("注册成功");
        clear();
    }
}
//正则检验内容是否合法功能
function check(str,value) {
    return str.test(value);
}
// 清空注册页面表单内容
function clear() {
    $(".r_name").val('');
    $(".r_pass").val('');
    $(".r_pass_repeat").val('');
    $(".r_tel").val('');
}
// 验证表单的内容是否非空且合法
function all_right() {
    if($(".r_name").val()=='')
    {
        alert("用户名不能为空");
        return false;
    }
    else if($(".r_pass").val()=='')
    {
        alert("密码不能为空");
        return false;
    }
    else if($(".r_pass_repeat").val()=='')
    {
        alert("重复密码不能为空");
        return false;
    }
    else if($(".r_tel").val()=='')
    {
        alert("手机号码不能为空");
        return false;
    }
    else if(!name())
    {
        return false;
    }
    else if(!password1())
    {
        return false;
    }
    else if(!password2())
    {
        return false;
    }
    else if(!mobile())
    {
        return false;
    }
    else{
        return true;
    }
}
// 验证用户名
function name() {
    if($(".r_name").val()!='')
    {
        if(!check(reg_email,$(".r_name").val())&& !check(reg_mobile,$(".r_name").val()))
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
// 验证密码格式
function password1() {
    if($(".r_pass").val()!=''){
        if(check(reg_password,$(".r_pass").val()))
        {
            pass1=$(".r_pass").val();
            return true;
        }
        else{
            alert("密码应该为6-16位,无空格,且9位以下纯数字不合法");
            return false;
        }
    }
}
// 验证重复密码
function password2() {
    if($(".r_pass_repeat").val()!='')
    {
        if($(".r_pass_repeat").val()==pass1)
        {
            return true;
        }
        else{
            alert("密码不一致");
            return false;
        }
    }
}
// 验证手机号码
function mobile() {
    if($(".r_tel").val()!='')
    {
        if(check(reg_mobile,$(".r_tel").val()))
        {
            return true;
        }
        else{
            alert("请输入正确手机号");
            return false;
        }
    }
}