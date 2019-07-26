// 在cmd打开数据库：mongod --dbpath D:\mongodb\data\db\database，在浏览器输入：http://localhost:27017/ 检测是否成功

//  连接数据库
const {
    MongoClient,
    ObjectId
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

// 创建连接
connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err != null) {
                reject(err);
                throw err;
            } else {
                resolve(client);
            }
            // console.log("Connected successfully to server");
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

/*
    查询：
        table => 表名
        params => 查询的内容，可以是全部查询或指定条件查询；
            全部查询格式：{}
            指定条件查询格式：{ 'a': 3 } => 可以有一个条件也可以有多个条件 => 若是查询id需要用ObjectId的方法
*/
const find = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName); //选择需要连中的数据库
        // Get the documents collection
        const collection = db.collection(table);
        // Find some documents
        collection.find(params).toArray(function (err, docs) {
            if (err != null) {
                reject(err);
                throw err;
            } else {
                resolve(docs);
                console.log("Found the following records");
            }
        });
    })
}


/*
    更改：update user set _id = "5d319065be9c821e70a23c0e" where name = "qiu";
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
    删除：delete from user where name = "qiu";
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


// 导出自定义模块
module.exports = {
    ObjectId,
    connect,
    insert,
    find,
    update,
    remove
}