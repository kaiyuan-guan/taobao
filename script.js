var panding=0;
function zhuxiao(){
    localStorage.clear();
}
function genghuantouxiang(thisform){
    var root=document.getElementById("yonghuming").value;
    var pas=document.getElementById("mima/yanzheng").value;
    // var qie=document.getElementById("mima/yanzheng").style.width;

    if (qie==0)
    {
        if (root == "master" && pas == "123456")
        {
            localStorage.setItem("touxiang", "1");
            window.document.f.action = "index.html";
            window.document.f.submit();
        }
        else
            {
            alert("用户名或密码错误");
        }
     }
    else {
        if (root=="15890919164"&&pas=="23456")
        {
            localStorage.setItem("touxiang", "1");
            window.document.f.action = "index.html";
            window.document.f.submit();
        }
        else
            {
                alert("手机号或验证码错误");
            }

    }
}
var num=0;
var arr=new Array();
arr[0]="img/1.jpg";
arr[1]="img/2.jpg";
arr[2]="img/3.jpg";
arr[3]="img/4.jpg";
var tim=5000;
setInterval(lun,tim);
function lun(){
    var obj=document.getElementById("lun");
    if (num==0){
       num+=1
    }
    else {
        if(num<3){
            num+=1;
        }
        else{
            num=0;
        }

    }
    obj.src=arr[num];
}
var tim1=1;
setInterval(lunanniu,tim1);
function lunanniu(){

    if (num==0){
        document.getElementById("xia1").style.background="red";
        document.getElementById("xia4").style.background="white";
        document.getElementById("xia3").style.background="white";
        document.getElementById("xia2").style.background="white";
    }
    else if (num==1){
        document.getElementById("xia2").style.background="red";
        document.getElementById("xia1").style.background="white";
        document.getElementById("xia4").style.background="white";
        document.getElementById("xia3").style.background="white";
    }
    else if (num==2){
        document.getElementById("xia3").style.background="red";
        document.getElementById("xia2").style.background="white";
        document.getElementById("xia1").style.background="white";
        document.getElementById("xia4").style.background="white";
    }
    else {
        document.getElementById("xia4").style.background="red";
        document.getElementById("xia3").style.background="white";
        document.getElementById("xia2").style.background="white";
        document.getElementById("xia1").style.background="white";
    }
}
function anl(){
    var num2=num;
    var obj=document.getElementById("lun");
    if (num2<=0){
        num2=3;
        obj.src=arr[num2];
        num=num2;
    }
    else{
        num2-=1
        obj.src=arr[num2];
        num=num2;
    }

}
function anr(){
    var num1=num;
    var obj=document.getElementById("lun");
    if (num1>=3){
        num1=0;
        obj.src=arr[num1];
        num=num1;
    }
    else {
        num1+=1;
        obj.src=arr[num1];
         num=num1;
    }

}

function an1(){
    var obj=document.getElementById("lun");
    obj.src=arr[0];
    num=0;
}
function an2(){
    var obj=document.getElementById("lun");
    obj.src=arr[1];
    num=1;
}
function an3(){
    var obj=document.getElementById("lun");
    obj.src=arr[2];
    num=2;
}
function an4(){
    var obj=document.getElementById("lun");
    obj.src=arr[3];
    num=3;
}
setInterval(jiancetou,tim1);
function jiancetou(){
    panding=localStorage.getItem("touxiang");
    if(panding!=null){
        document.getElementById('mytouxiang').src="img/touxiang1.jpg";
    }
    else{
        document.getElementById('mytouxiang').src="img/touxiang.jpg";
    }
}
function wai(){
    window.location.href="https://ishop.taobao.com/openshop/tb_open_shop_landing.htm#/";
}