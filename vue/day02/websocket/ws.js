//开启一个 WebSocket 的服务器， 端口为 8080

var socketServer = require('ws').Server;
var wss = new socketServer({
	port: 8080
});

wss.on('connection', function (client) {
            client.on('message', function (_message) {
                var _messageObj = JSON.parse(_message);
                //status = 1 表示正常聊天
                _messageObj.status = 1;
                this.message = _messageObj;
                //把客户端的消息广播给所有在线的用户
                wss.broadcast(_messageObj);
            });
        });