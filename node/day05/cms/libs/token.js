var crypto = require("crypto");

var token = {
    //加密
    createToken:function(obj,timeout) {
        var obj2 = {
            data:obj,
            created:parseInt(Date.now()/1000),
            exp:parseInt(timeout) || 10
        };
        //payload信息 Buffer转数据
        var base64Str = Buffer.from(JSON.stringify(obj2),"utf-8").toString('base64');
        //添加签名，防篡改
        var secret = 'caiying.com';
        var hash = crypto.createHmac('sha256',secret);
        hash.update(base64Str);
        var signature = hash.digest('base64');
        return base64Str + "." + signature;
    },

    //解码
    decodeToken: function (token) {
        var decArr = token.split(".");
        if(decArr.length < 2) {
            return false;
        }
        var payload = {};
        //将payload json字符串 解析为对象
        try {
            payload = JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
        } catch (e) {
            return false;
        }
        //检验签名
        var secret = "caiying.com";
        var hash = crypto.createHmac('sha256',secret);
        hash.update(decArr[0]);
        var checkSignature = hash.digest('base64');
        return {
            payload:payload,
            signature:decArr[1],
            checkSignature:checkSignature
        }
    },
    //校验
    checkToken: function (token) {
        var resDecode = this.decodeToken(token);
        if(!resDecode) {
            return false;
        }
        //是否过期
        var expState = (parseInt(Date.now() / 1000) - parseInt(resDecode.payload.created)) > parseInt(resDecode.payload.exp) ? false : true;
        if (resDecode.signature === resDecode.checkSignature && expState) {
            return ture;
        }
        return false;
    }
}
module.exports = token;