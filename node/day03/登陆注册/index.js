const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
})
app.post('/login',(req,res) => {
    console.log(req.body);
    let {
        username,
        password
    } = req.body;
    if(username === 'cai' && password === '1128'){
        res.send('登陆成功');
    }else {
        res.send('登陆失败');
    }
})
app.listen(1999);
console.log('启动服务器');