var express = require('express');
var {
    find
} = require('../libs/db');
var router = express.Router();

// 解析请求体的模块
const bodyParser = require('body-parser');

//  bodyParser是用来解析请求体的数据，识别的是x-www-form-urlencoded数据
router.use(bodyParser.urlencoded({
    extended: false
}));



/* GET sign listing. */
// 里面不能同时有两个res.send
router.post('/login', async function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*"); //允许前端跨域
    // console.log(req.body); //前端传过来的数据
    let {
        inputEmail,
        inputPassword
    } = req.body; //接收前端的数据，并解构出来
    // console.log(inputEmail, inputPassword); 
    /* 
      登陆逻辑：数据库返回的data是一个数组，若存在就有数据，若不存在就是空数组
          如果前端输入的邮件和密码跟数据库的一致，则data存在，即登录成功；
          否则data不存在，即登录不成功；
    */
    let data = await find('user2', {
        'email': inputEmail,
        'pwd': inputPassword
    });
    // console.log(data);[{}]
    if (data.length) { //存在
        res.send('登录成功');
    } else { //不存在
        res.send('登录失败');
    }
});


module.exports = router;