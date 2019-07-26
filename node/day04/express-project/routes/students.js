var express = require('express');
var router = express.Router();
var {find} = require('../libs/db');

/* GET home page. */
router.get('/find', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    find('students',null,(results) => {
        console.log(results);
        res.send(JSON.stringify(results));
    })
});

module.exports = router;
