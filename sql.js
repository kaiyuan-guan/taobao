var mysql = require('mysql');
function sql(){
    var text=document.getElementById("text").value;
    var pas=document.getElementById("pas").value;
    var conn = mysql.createConnection({
    host:'localhost',   // 主机名 （服务器地址）
    user:'root',    //用户名
    password:'12345678',    // 密码
    database:'Taobao',  // 写上自己要连接的数据库名字
})
// 4 生成sql语句 增删改查操作
let sql = 'insert into Taobao(id,password,zhanghao) value(2,+text+,+pas+)';
//5  执行sql语句
conn.query(sql,(err,result)=>{
    if (err) {
        console.error("插入失败" + err.message);
        result;
    }
    console.log("插入成功");
    document.alert("注册成功")
});}