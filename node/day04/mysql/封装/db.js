var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "students"
});
// 连接池可以执行连接和释放

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        // not connected!
        reject(err);
        throw err;
      } else {
        resolve(connection);
      }
      // Use the connection
    });
  });
};

const query = (connection, sql, params ) => {
  return new Promise((resolve, reject) => {
    connection.query(sql,[params ? params : ""], function (
      error,
      results,
      fields
    ) {
      console.log(results);
      // When done with the connection, release it.
      connection.release();
      // Handle error after the release.
      if (error) {
        reject(error);
        throw error;
      } else {
        resolve(results);
      }
      // Don't use the connection here, it has been returned to the pool.
    });
  });
};

//查
const find = async (table, params, callback) => {
  const connection = await getConnection();
  if (params) {
      callback(await query(connection, `SELECT * FROM ${table} where ?`, params));
  } else {
      callback(await query(connection, `SELECT * FROM ${table}`, null));
  }
}

//增
const add = async (table,params,callback) => {
    const connection = await getConnection();
    callback(await query(connection, `INSERT INTO ${table} set ?`, params));
    
};

//删
const del= async (table, params,callback) => {
  const connection = await getConnection();
  callback(await query(connection, `DELETE FROM ${table} WHERE ?`, params));
  
};

//改
const update = async (table, params1,params2) => {
    return new Promise(async (resolve,reject) => {
          const connection = await getConnection();
          connection.query(`UPDATE ${table} SET ? WHERE ?`, [{
            ...params1
          }, {
              ...params2
          }], (err, results, fields) => {
              !err ? resolve(results) : reject(err)
              connection.release();
          })
    })
    
};


module.exports = {
  find,
  add,
  del,
  update
};
