var $ = require('../../node_modules/jquery/dist/jquery');

$('#log').click(() => {
    let u = $.trim($('#user').val());
    let p = $.trim($('#password').val());
    if (u && p) {
        $.ajax({
            datatype: 'json',
            type: 'post',
            url: 'http://localhost:3002/log/find',
            data: {
                'username': u,
                'password': p
            },
            success: data => {
                if (data == '1') {
                    alert('登录成功');
                } else {
                    alert('账号或密码错误，请重试');
                }
            }
        })
    } else {
        alert('请填写用户名与密码');
    }
});

$('#reg').click(() => {
    let u = $.trim($('#user').val());
    let p = $.trim($('#password').val());
    if (u && p) {
        $.ajax({
            datatype: 'json',
            type: 'post',
            url: 'http://localhost:3002/log/finduser',
            data: {
                'username': u
            },
            success: data => {
                if (data == '1') {
                    alert('用户名已存在，请重试');
                } else {
                    $.ajax({
                        datatype: 'json',
                        type: 'post',
                        url: 'http://localhost:3002/log/reg',
                        data: {
                            'username': u,
                            'password': p
                        },
                        success: {}
                    })
                    alert('注册成功')
                }
            }
        })
    } else {
        alert('请填写用户名与密码');
    }
})