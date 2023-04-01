var qie=0;
function qiehuanmima(){
    document.getElementById('yonghuming').placeholder="账号名/邮箱/手机号";
    document.getElementById('mima/yanzheng').placeholder="请输入密码登录";
    document.getElementById('huoquyanzhengma').style.display="none";
    document.getElementById('mima/yanzheng').style.width="300px";
    document.getElementById('qiehuanmima').style.color="#fc8d07";
    document.getElementById('qiehuanduanxin').style.color="black";
    qie=0;
}
function qiehuanduanxin(){
    document.getElementById('yonghuming').type="num";
    document.getElementById('yonghuming').placeholder="请输入手机号";
    document.getElementById('mima/yanzheng').placeholder="请输入验证码";
    document.getElementById('huoquyanzhengma').style.display="inline-block";
    document.getElementById('mima/yanzheng').style.width="210px";
    document.getElementById('qiehuanmima').style.color="black";
    document.getElementById('qiehuanduanxin').style.color="#fc8d07";
    qie=1;
}
function yan(){
    alert("23456")
}

