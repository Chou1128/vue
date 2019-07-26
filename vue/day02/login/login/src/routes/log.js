var express = require('express');
let app = express();
var bodyParser = require('body-parser');
var router = express.Router();
const {
    find,
    ObjectId,
    insert,
    del,
    update
} = require('../public/db');

app.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/find', (req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    let {
        username,
        password
    } = req.body;
    // console.log(username, password);
    (async () => {
        let data = await find('user', {
            'username': username,
            'password': password
        });
        if (data.length) {
            res.send('1');
        } else {
            res.send('0');
        }

    })();
});

router.post('/finduser', (req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    let {
        username
    } = req.body;
    // console.log(username);
    (async () => {
        let data = await find('user', {
            'username': username
        });
        if (data.length) {
            res.send('1');
        } else {
            res.send('0');
        }

    })();
});

router.post('/reg',(req,res,next)=>{
    res.append('Access-Control-Allow-Origin','*');
    let{
        username,
        password
    } = req.body;
    (async()=>{
        await insert('user',[{
            'username':username,
            'password':password
        }]);
    })();
})
module.exports = router;