/*============调用封装的CRUD模块================ */
/*======只有增加可以直接使用id，其他操作都需要用ObjectId转换======*/

// 导入自定义模块中所有的对象函数
const {
    ObjectId,
    insert,
    find,
    update,
    remove
} = require('./db');



// 调用insert => 插入一条记录
// !(async () => {
//     let zengjia = await insert('user', [{
//         _id: "100",
//         name: "me",
//         pwd: "asd"
//     }]);
//     console.log("添加成功");
// })();


// 调用find => 查询id为'5d319065be9c821e70a23c0e'的记录
// !(async () => {
//     let cha = await find('user', {
//         _id: ObjectId("5d319065be9c821e70a23c0e")
//     });
//     console.log(cha);
// })();

// 调用find => 查询user表中全部的记录
// !(async () => {
//     let cha = await find('user', {});
//     console.log(cha);
// })();


// 调用update => 修改id为'5d319065be9c821e70a23c0e'的记录，把pwd改为'asdfaa'
// sql语句：update user set _id = "5d319065be9c821e70a23c0e" where name = "qiu";
// !(async () => {
//     let genggai = await update('user', {
//         _id: ObjectId("5d319065be9c821e70a23c0e")
//     }, {
//         $set: {
//             pwd: "asdfaa"
//         }
//     });
//     console.log("更改成功");
// })();



// 调用remove => 删除id为'5d319065be9c821e70a23c0e'的记录
// sql语句：delete from user where _id = "5d319065be9c821e70a23c0e";
!(async () => {
    await remove('user', {
        _id: ObjectId("5d319065be9c821e70a23c0e")
    });
    console.log("删除成功");
})();