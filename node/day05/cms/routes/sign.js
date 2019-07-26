var express = require('express');
var router = express.Router();
var {
    find
} = require('../libs/db');

var {
    createToken,
    decodeToken,
    checkToken
} = require('../libs/token');

// 解析请求体的模块
const bodyParser = require('body-parser');

//  bodyParser是用来解析请求体的数据，识别的是x-www-form-urlencoded数据
router.use(bodyParser.urlencoded({
    extended: false
}));

/* GET users listing. */
router.post('/login',async function (req, res, next) {
    // res.send('respond with a resource');
    let {
        inputEmail,
        inputPassword
    } = req.body; //接收前端的数据，并解构出来

    let data = await find('user', { 
        'email': inputEmail,
        'pwd': inputPassword
    });
    // res.json(data);
    //根据data长度判断是否存在
    if(data.length) {
        res.send('登录成功')
    }else {
        res.send('登录失败')
    }
});

// router.post('/token', async function (req, res, next) {
//     console.log(req.cookies)
//     let {
//         username,
//         password,
//     } = req.body;
//     // 先去数据库查询是否存在该用户，如果有就发牌
//     let token = createToken({
//         username
//     }, 300)
//     res.json({
//         status: 'success',
//         token
//     })
// });

router.post('/token', async function (req, res, next) {
    console.log(req.cookies)
    let {
        inputEmail,
        inputPassword
    } = req.body; //接收前端的数据，并解构出来

    // 先去数据库查询是否存在该用户，如果有就发牌
    let data = await find('user', {
        'email': inputEmail,
        'pwd': inputPassword
    });
    // res.json(data);
    //根据data长度判断是否存在
    if (data.length) {
        res.send('登录成功')
        let token = createToken({
            username
        }, 300)
        res.json({
            status: 'success',
            token
        })
    } else {
        res.send('登录失败')
    }
});
module.exports = router;