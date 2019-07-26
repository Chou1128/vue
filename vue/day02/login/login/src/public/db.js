const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'userinf';

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                throw err;
            } else {
                resolve(client);
            }
        });
    })
}

//查
const find = (col, params) => {
    return (new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
    collection.find(params).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        // 关闭连接
        client.close();

    }))
}

//增
const insert = function (col, params) {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(params),
            function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        client.close();
    })
}

//删
const del = function (col, params) {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(params),
            function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        client.close();
    })
}

//改
const update = function (col, updatedata, data) {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(updatedata, {
            $set: data
        }, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
        client.close();
    })
}


module.exports = {
    connect,
    find,
    insert,
    del,
    update,
    ObjectId
}