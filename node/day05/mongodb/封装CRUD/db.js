const {MongoClient,ObjectId} = require('mongodb');
// 踊跃测试
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'text';

//连接
const connect = () => {
    return new Promise((resolve,rejest) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                rejest(err);
                throw err;
            }else {
                resolve(client);
            }
        });
    })
}

/*
    查询：
        table => 表名
        params => 查询的内容，可以是全部查询或指定条件查询；
            全部查询格式：{}
            指定条件查询格式：{ 'a': 3 } => 可以有一个条件也可以有多个条件 => 若是查询id需要用ObjectId的方法
*/
const find = (col,params) => {
    return new Promise(async (resolve,reject) => {
        //连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(params).toArray(function (err, docs) {
            if(err) {
                reject(err);
                throw err;
            } else {
                resolve(docs);
            }
            
        });
        // 关闭连接
        client.close();
    })
}

/*
    删除：delete from students where name = "aa";
        table => 表名
        params => 删除的条件 => 格式：{ name: "qiu" }
*/
const remove = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选择需要连中的数据库
        // Get the documents collection
        const collection = db.collection(table);
        // Delete document where a is 3
        collection.deleteOne(params, function (err, result) {
            if (err != null) {
                reject(err);
                throw err;
            } else {
                resolve(result);
                console.log("Removed the document successfully");
            }
        });
    })
}

/*
    更改：update students set _id = "5d319065be9c821e70a23c0e" where name = "aa";
        table => 表名
        params1 => 更改的条件 => 格式：{ name: "qiu" }
        params2 => 修改的内容 => 格式：{ pwd: "asdf" }
*/
const update = (table, params1, params2) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选择需要连中的数据库
        // Get the documents collection
        const collection = db.collection(table);
        // Update document where a is 2, set b equal to 1
        collection.updateOne(params1, params2, function (err, result) {
            if (err != null) {
                reject(err);
                throw err;
            } else {
                resolve(result);
                console.log("Updated the document successfully");
            }
        });
    })
}

/*
    插入：
        table => 表名
        params => 插入的内容，可以是多条或者一条；格式：[{
            _id: "100",
            name: "me",
            pwd: "asd"
        }]
*/
const insert = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选择需要连中的数据库

        const collection = db.collection(table); //选择需要脸肿的数据库中的表
        // Insert some documents ：插入语句
        collection.insertMany(params, function (err, result) {
            if (err != null) {
                reject(err);
                throw err;
            } else {
                resolve(result);
                console.log("Inserted successfully");
            }
        });
        client.close(); //关闭连接
    })
}

module.exports = {
    connect,
    find,
    insert,
    remove,
    update,
    ObjectId
}

