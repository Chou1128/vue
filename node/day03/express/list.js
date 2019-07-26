const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

//app.use全局使用
app.use(bodyParser.urlencoded({
    extended:false
}));
//全局添加
app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin','*');//解决跨域
    next();
})
app.get('/list',async (req,res) => {
    let data = await new Promise((resolve,reject) => {
        fs.readFile('./list.json',(err,data) => {
            // if (err) {
            //     reject(err);
            // }else {
            //     resolve(data);
            // }
            err ? reject(err) : resolve(data);
        })
    })
    res.send(data);
})
app.listen(54321);
console.log('启动服务器');