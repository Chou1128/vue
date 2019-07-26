var {
    createServer
} = require('http');
createServer((req,res) => {
    console.log(req);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('name', 'cai');
    res.write('<p style="color:red">123</p>');
    res.end();
}).listen(54321);
console.log('启动服务器');