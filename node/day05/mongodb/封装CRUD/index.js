const {
    find,
    remove,
    update,
    insert,
    ObjectId
} = require('./db');


//查
//调用find => 查询id为 '5d327388b204dc1eacb27b47'的记录
// (async() => {
//     let cha = await find('students',{
//         _id: ObjectId('5d327388b204dc1eacb27b47')
//     });
//     console.log(cha);
// })();
// 调用find => 查询user表中全部的记录
// !(async () => {
//     let cha = await find('students', {});
//     console.log(cha);
// })();


//删
//调用remove => 查询id为 '5d327388b204dc1eacb27b47'的记录
// (async() => {
//     let shan = await remove('students',{
//         _id: ObjectId('5d327388b204dc1eacb27b47')
//     });
//     console.log(删除成功);
// })();


// 调用update => 修改id为'5d319065be9c821e70a23c0e'的记录，把pwd改为'asdf'
// sql语句：update students set _id = "5d319065be9c821e70a23c0e" where name = "cai";
// !(async () => {
//     let genggai = await update('students', {
//         _id: ObjectId("5d31931434e9430b683a2627")
//     }, {
//         $set: {
//             pwd: "asdf"
//         }
//     });
//     console.log("更改成功");
// })();


// 调用insert => 插入一条记录
!(async () => {
    let zengjia = await insert('students', [{
        _id: "100",
        name: "qiu",
        age:'18',
        pwd: "asd"
    }]);
    console.log("添加成功");
})();


