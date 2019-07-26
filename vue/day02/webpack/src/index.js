// 引入第三方模块
var $ = require('jquery');

// 引入自定义模块
var {plus} = require('./tools');

// 引入css模块，非JS模块
require('./styles/index.css');

var template = require('./template/index.html');

console.log(plus(123,234));
console.log(123);
$('body').html(template);