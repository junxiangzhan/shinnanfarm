/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/files/delete.js":
/*!**********************************!*\
  !*** ./src/apis/files/delete.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _delete)
/* harmony export */ });
function _delete(req, res, conn) {
  const {
    name
  } = req.params;
  if (!name) return res.send({
    type: 'error',
    message: 'The parameter \'name\' must be given.'
  });
  const queryString = 'DELETE FROM `files` WHERE `name` = ?;';
  conn.query(queryString, [name], function (err, result) {
    res.send({
      name,
      results: 'failed',
      [err ? 'reason' : 'results']: err ?? 'success'
    });
  });
}

/***/ }),

/***/ "./src/apis/files/get.js":
/*!*******************************!*\
  !*** ./src/apis/files/get.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get)
/* harmony export */ });
function get(req, res, conn) {
  const {
    name
  } = req.params;
  if (!name) return res.send({
    type: 'error',
    message: 'The parameter \'name\' must be given.'
  });
  return conn.query('SELECT `files`.*, `file_data`.`data_id`, `file_data`.`data` FROM `files` JOIN `file_data` ON `id` = `file_id` WHERE `name` = ?;', [name], function (err, results) {
    if (err) return res.send({
      type: 'error',
      reason: err
    });
    if (!results?.length) return res.send({
      type: 'error',
      message: `The file:'${name}' was not found.`
    });
    const {
      type
    } = results?.[0];
    res.set('content-type', type);
    res.send(Buffer.concat(results.map(function ({
      data
    }) {
      return data;
    })));
  });
}

/***/ }),

/***/ "./src/apis/files/index.js":
/*!*********************************!*\
  !*** ./src/apis/files/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ files)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/apis/files/list.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get */ "./src/apis/files/get.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload */ "./src/apis/files/upload.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./src/apis/files/update.js");
/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete */ "./src/apis/files/delete.js");





function files(req, res, conn) {
  res.set('content-type', 'application/json');
  const {
    method: requestMethod,
    params: {
      name: fileName
    }
  } = req;
  const methods = {
    GET: _get__WEBPACK_IMPORTED_MODULE_1__["default"],
    POST: _upload__WEBPACK_IMPORTED_MODULE_2__["default"],
    PUT: _update__WEBPACK_IMPORTED_MODULE_3__["default"],
    DELETE: _delete__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  if (!fileName) return (0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res, conn);
  return (methods[requestMethod] ?? function (req, res) {
    res.send({
      type: 'error',
      message: `Undefined request method: '${requestMethod}' was used.`
    });
  })(req, res, conn);
}
;

/***/ }),

/***/ "./src/apis/files/list.js":
/*!********************************!*\
  !*** ./src/apis/files/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ list)
/* harmony export */ });
function list(req, res, conn) {
  const queryString = 'SELECT *, CONCAT(\'/api/files/\', `files`.`name`) AS `url` FROM `files`;';
  conn.query(queryString, [], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
}

/***/ }),

/***/ "./src/apis/files/update.js":
/*!**********************************!*\
  !*** ./src/apis/files/update.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ update)
/* harmony export */ });
function update(req, res, conn) {
  const {
    file
  } = req.files ?? {};
  const {
    name
  } = req.params;
  const result = {
    name
  };
  return new Promise(function (resolve, reject) {
    return conn.query('SELECT * FROM `files` WHERE `name` = ?;', [name], function (err, results) {
      if (err) return reject(['reason', err]);
      if (!results.length) return reject(['msg', {
        type: 'error',
        message: `The file:'${name}' was not found.`
      }]);
      const {
        id: fileId,
        name: fileName,
        type,
        details
      } = results[0];
      const newName = req.body?.name;
      const result = Array(2);
      return Promise.allSettled([new Promise(function (resolve, reject) {
        return conn.query('UPDATE `files` SET `name`= ?,`type`= ?,`details`= ? WHERE `name` = ?;', [newName ?? fileName, file?.mimetype ?? type, JSON.stringify(Object.assign(JSON.parse(details), {
          latestUpdateDateTime: new Date().toISOString()
        })), fileName], function (err, result) {
          return err ? reject(err) : resolve();
        });
      }).catch(function (reason) {
        result[0] = reason;
      }), file && new Promise(function (resolve, reject) {
        const {
          data
        } = file;
        const fragments = [];

        for (let i = 0; i < data.length / 65535; i++) {
          fragments.push(data.slice(i * 65535, (i + 1) * 65535));
        }

        const results = [];
        return conn.query('DELETE FROM `file_data` WHERE `file_id` = ?;', [fileId], function (err) {
          return err ? reject(err) : Promise.allSettled(fragments.map(function (fragment, index) {
            results[index] = null;
            return new Promise(function (resolve, reject) {
              return conn.query('INSERT INTO `file_data`(`file_id`, `data_id`, `data`) VALUES ( ?, ?, BINARY(?));', [fileId, index, fragment], function (err, result) {
                if (err) return reject(err);
                return resolve(result);
              });
            }).then(function (result) {
              return results[index] = result;
            }).catch(function (reason) {
              return results[index] = reason;
            });
          })).then(function (promises) {
            Promise.all(promises).then(function () {
              return resolve(results);
            }).catch(function () {
              return reject(results);
            });
          });
          ;
        });
      })]).then(function (promises) {
        return Promise.all(promises).then(resolve, function () {
          return reject(['reason', result.filter(Boolean)]);
        });
      });
    });
  }).then(function () {
    return res.send(Object.assign(result, {
      result: 'success'
    }));
  }).catch(function ([key, value]) {
    return res.send(Object.assign(result, {
      result: 'fail',
      [key]: value
    }));
  });
}

/***/ }),

/***/ "./src/apis/files/upload.js":
/*!**********************************!*\
  !*** ./src/apis/files/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ upload)
/* harmony export */ });
function upload(req, res, conn) {
  const {
    file
  } = req.files ?? {};
  const {
    name
  } = req.params;
  if (!file) return res.send({
    type: 'error',
    message: 'There aren\'t any files need to be uploaded, request with files by naming \'file\'.'
  });
  const {
    mimetype,
    data
  } = file;
  const result = {
    name,
    mimetype
  };
  return new Promise(function (resolve, reject) {
    return conn.query('INSERT INTO `files`(`name`, `type`, `details`) VALUES ( ?, ?, ? )', [name, mimetype, JSON.stringify({
      uploadDateTime: new Date().toISOString()
    })], function (err, result) {
      if (err) return reject(err);
      const {
        insertId: fileId
      } = result;
      const fragments = [];

      for (let i = 0; i < data.length / 65535; i++) {
        fragments.push(data.slice(i * 65535, (i + 1) * 65535));
      }

      const results = [];
      return Promise.allSettled(fragments.map(function (fragment, index) {
        results[index] = null;
        return new Promise(function (resolve, reject) {
          return conn.query('INSERT INTO `file_data`(`file_id`, `data_id`, `data`) VALUES ( ?, ?, BINARY(?))', [fileId, index, fragment], function (err, result) {
            if (err) return reject(err);
            return resolve(result);
          });
        }).then(function (result) {
          return results[index] = result;
        }).catch(function (reason) {
          return results[index] = reason;
        });
      })).then(function (promises) {
        Promise.all(promises).then(function () {
          return resolve(results);
        }).catch(function () {
          return reject(results);
        });
      });
    });
  }).then(function () {
    return res.send(Object.assign(result, {
      result: 'success'
    }));
  }).catch(function (reason) {
    return res.send(Object.assign(result, {
      result: 'fail',
      reason
    }));
  });
}

/***/ }),

/***/ "./src/apis/index.js":
/*!***************************!*\
  !*** ./src/apis/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql */ "./src/apis/mysql/index.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files */ "./src/apis/files/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./src/apis/products/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users */ "./src/apis/users/index.js");




const DBhost = process.env.DBHOST ?? 'http://203.68.249.7/shinnan/sql.php';
const DBaccount = process.env.DBACCOUNT ?? 'root';
const DBpassword = process.env.DBPASSWORD ?? '1qaz@WSX3edc';
const DBname = process.env.DBNAME ?? 'shinnanfarm';
const connection = _mysql__WEBPACK_IMPORTED_MODULE_0__["default"].createConnection({
  host: DBhost,
  user: DBaccount,
  password: DBpassword,
  database: DBname
});
const apiList = {
  files: _files__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _products__WEBPACK_IMPORTED_MODULE_2__["default"],
  users: _users__WEBPACK_IMPORTED_MODULE_3__["default"]
};

function apis(req, res) {
  const {
    params: {
      api
    }
  } = req;
  return (apiList[api] ?? function (req, res) {
    res.send({
      type: 'error',
      message: `Unknown api: '${api}' had been request.`
    });
  })(req, res, connection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apis);
const routes = ['/api', '/api/:api', '/api/:api/:name', '/api/*'];

/***/ }),

/***/ "./src/apis/mysql/index.js":
/*!*********************************!*\
  !*** ./src/apis/mysql/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const types = {
  [["VAR_STRING", "STRING"]]: String,
  [["TINY", "SHORT", "LONG", "LONGLONG", "INT24", "DOUBLE"]]: Number,
  [["DATETIME", "DATE", "TIMESTAMP"]]: Date,
  [["BLOB"]]: Buffer.from
};
const errorCodes = {};

class Connection {
  #connectConfigs;
  #afterFatalError = false;

  constructor(configs) {
    const defaultConfigs = {
      connectTimeout: 1e4
    };
    this.#connectConfigs = Object.assign(defaultConfigs, configs);
    this.query = this.query.bind(this);
  }

  get configs() {
    return this.#connectConfigs;
  }

  query(queryString, values, callback) {
    const {
      configs: {
        host,
        ...connectionConfigs
      }
    } = this;
    const queryObject = {
      queryString,
      values,
      callback
    };

    const OnFatalErrorHappen = function () {
      this.#afterFatalError = true;
    }.bind(this);

    const promise = new Promise(function (resolve, reject) {
      const request = axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: host,
        method: "post",
        data: {
          connection: JSON.stringify(connectionConfigs),
          query: JSON.stringify({
            queryString,
            values
          })
        }
      }).then(function ({
        data: result
      }) {
        return result.error ? reject(result.error) : resolve(result);
      }).catch(function (reason) {
        return reject({
          errorInfo: reason,
          isFatal: true
        });
      });
    }).then(function (result) {
      const {
        results: datarows,
        fields
      } = result;
      const results = [];

      for (let row of datarows) {
        const result = {};

        for (let field of fields) {
          const {
            name,
            native_type
          } = field;

          for (let [nativeTypes, method] of Object.entries(types)) {
            if (nativeTypes.includes(native_type)) {
              result[name] = method(row[name]);
              break;
            }
          }
        }

        results.push(result);
      }

      if (callback instanceof Function) callback(null, results, fields);
      return result;
    }).catch(function (error) {
      if (callback instanceof Function) callback(error);
      if (error?.isFatal) OnFatalErrorHappen();
    });
    return queryObject;
  }

}

const mysql = {
  createConnection(configs) {
    return new Connection(configs);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mysql);

/***/ }),

/***/ "./src/apis/products/all.js":
/*!**********************************!*\
  !*** ./src/apis/products/all.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ all)
/* harmony export */ });
function all(req, res, conn) {
  const {
    includeAll
  } = req.body ?? {};
  const queryString = `SELECT \`products\`.\`name\`, \`products\`.\`price\`, \`products\`.\`stock\`, \`product_details\`.\`value\` AS \`images\` FROM \`products\` LEFT OUTER JOIN \`product_details\` ON \`products\`.\`id\` = \`product_details\`.\`product_id\` WHERE ( \`product_details\`.\`name\` = "IMG" OR \`product_details\`.\`name\` IS NULL )${includeAll ? '' : ' AND `products`.`released`'} ORDER BY \`products\`.\`id\`;`;
  conn.query(queryString, [], function (err, results) {
    if (err) return res.send({
      type: 'error',
      reason: err
    });
    return res.send(results.map(function ({
      images,
      ...values
    }) {
      return { ...values,
        images: JSON.parse(images)
      };
    }));
  });
}

/***/ }),

/***/ "./src/apis/products/details.js":
/*!**************************************!*\
  !*** ./src/apis/products/details.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detail)
/* harmony export */ });
// 指定細項名稱與對應處理方法
const diction = {
  IMG: ['images', JSON.parse],
  INFO: ['information'],
  INTRO: ['introduce']
};
function detail(req, res, conn) {
  // 利用 JOIN 加入 [products]、[product_details] 共 2 張資料表
  // 使用 LEFT OUTER 關鍵字確保所有商品至少會有一項出現於查詢結果中，不論是否有任何的詳細資料
  const queryString = '\
    SELECT \
    `products`.*, `product_details`.`name` AS `detail_name`, `product_details`.`value` \
    FROM `products` \
    LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` \
    WHERE `products`.`name` = ?;';
  const values = [req.params.name];
  conn.query(queryString, values, function (err, results) {
    // 若查詢有誤，則印出錯誤原因
    if (err) return res.send({
      type: 'error',
      reason: err
    }); // 若無回傳資料，則印出查無商品

    if (!results.length) return res.send({
      type: 'error',
      message: `Not found product named: '${req.params.name}'.`
    }); // 由第一筆資料取得名稱、價格、庫存資訊

    const {
      name,
      price,
      stock
    } = results[0]; // 利用 Array 物件的 reduce 方法將對應的細項加入物件，並打印之

    return res.send(results.reduce(function (productDetail, {
      detail_name,
      value
    }) {
      if (value == null) return productDetail;
      const [key, method] = diction[detail_name] ?? []; // 利用 Object 物件的 assign 方法將對應的細項以指定的方法處理後，以對應的細項名稱加入物件

      return Object.assign(productDetail, {
        [key ?? detail_name]: method ? method(value) : value
      });
    }, {
      name,
      price,
      stock
    }));
  });
}

/***/ }),

/***/ "./src/apis/products/index.js":
/*!************************************!*\
  !*** ./src/apis/products/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ product)
/* harmony export */ });
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ "./src/apis/products/all.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./src/apis/products/details.js");


function product(req, res, conn) {
  res.set('content-type', 'application/json');
  const {
    method: requestMethod,
    params: {
      name: fileName
    }
  } = req;
  const methods = {
    GET: _details__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  if (!fileName) return (0,_all__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res, conn);
  return (methods[requestMethod] ?? function (req, res) {
    res.send({
      type: 'error',
      message: `Undefined request method: '${requestMethod}' was used.`
    });
  })(req, res, conn);
}
;

/***/ }),

/***/ "./src/apis/users/details.js":
/*!***********************************!*\
  !*** ./src/apis/users/details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ details)
/* harmony export */ });
/* harmony import */ var _user_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-manager */ "./src/user-manager/index.js");

const diction = {
  NAME: ["name"]
};
function details(req, res, conn) {
  const {
    token,
    detailed
  } = req.body ?? {};
  const {
    userName,
    authority
  } = _user_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getUser(token) ?? {};
  const user = {
    userName,
    authority
  };
  if (!Boolean(userName)) return res.send(false);
  if (!detailed) return res.send(user);
  return Promise.all([new Promise(function (resolve, reject) {
    return conn.query("SELECT `user_details`.`name`, `user_details`.`value` FROM `users` JOIN `user_details` ON `users`.`id` = `user_details`.`user_id` WHERE `users`.`account` = ?", [userName], function (error, results) {
      if (error) return reject(error);
      results.forEach(function ({
        name,
        value
      }, index) {
        const [key, method] = diction[name] ?? {};
        return Object(user, {
          [key ?? name]: method ? method(value) : value
        });
      });
      return resolve(user);
    });
  }), new Promise(function (resolve, reject) {
    return conn.query("SELECT `orders`.`id`, `orders`.`details`, `products`.`name`, `products`.`price`, `product_details`.`value` AS `images`, `order_content`.`amount` FROM `orders` JOIN `users` ON `orders`.`user_id` = `users`.`id` JOIN `order_content` ON `orders`.`id` = `order_content`.`order_id` JOIN `products` ON `order_content`.`product_id` = `products`.`id` LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` WHERE ( `product_details`.`name` = \"IMG\" OR `product_details`.`name` IS NULL ) AND `users`.`account` = ? ORDER BY `orders`.`id`, `products`.`id`", [userName], function (error, results) {
      if (error) return reject(error);
      user.orders = Object.values(results.reduce(function (orders, {
        id,
        details,
        name,
        price,
        images,
        amount
      }) {
        if (!orders[id]) orders[id] = { ...JSON.parse(details || {}),
          items: []
        };
        orders[id].items.push({
          name,
          price,
          images: JSON.parse(images),
          amount
        });
        return orders;
      }, {}));
      return resolve(user);
    });
  })]).then(function () {
    return res.send(user);
  }).catch(function (reason) {
    return res.send({
      type: 'error',
      reason
    });
  });
}
/**
 * SELECT `products`.`name`, `products`.`price`, `order_content`.`amount`, `product_details`.`value` AS `images` FROM `orders` JOIN `users` ON `orders`.`user_id` = `users`.`id` JOIN `order_content` ON `orders`.`id` = `order_content`.`order_id` JOIN `products` ON `order_content`.`product_id` = `products`.`id` LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` WHERE `product_details`.`name` = "IMG" OR `product_details`.`name` IS NULL AND `users`.`id` = 1
 */

/***/ }),

/***/ "./src/apis/users/index.js":
/*!*********************************!*\
  !*** ./src/apis/users/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ users)
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/apis/users/login.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./src/apis/users/details.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./src/apis/users/register.js");



function users(req, res, conn) {
  res.set('content-type', 'application/json');
  const {
    params: {
      name: method
    }
  } = req;
  const methods = {
    login: _login__WEBPACK_IMPORTED_MODULE_0__["default"],
    details: _details__WEBPACK_IMPORTED_MODULE_1__["default"],
    register: _register__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  return (methods[method] ?? function (req, res) {
    res.send({
      type: 'error',
      message: `Undefined request method: '${method}' was used.`
    });
  })(req, res, conn);
}
;

/***/ }),

/***/ "./src/apis/users/login.js":
/*!*********************************!*\
  !*** ./src/apis/users/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _user_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-manager */ "./src/user-manager/index.js");

function login(req, res, conn) {
  const queryString = "SELECT * FROM `users` WHERE `account` = ? AND `password` = ?";
  const {
    userName,
    password
  } = req.body ?? {};
  if (!userName || !password) return res.send({
    type: 'error',
    message: 'Parameters named \'account\' and \'password\' must been given.'
  });
  return conn.query(queryString, [userName, password], function (err, results) {
    if (err) return res.send({
      type: 'error',
      reason: err
    });
    if (!results.length) return res.send(false);
    const user = {
      userId: results[0].id,
      userName: results[0].account,
      password: results[0].password,
      authority: results[0].authority
    };
    const token = _user_manager__WEBPACK_IMPORTED_MODULE_0__["default"].setUser(user);
    return res.send(JSON.stringify(token));
  });
}

/***/ }),

/***/ "./src/apis/users/register.js":
/*!************************************!*\
  !*** ./src/apis/users/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _user_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-manager */ "./src/user-manager/index.js");

function register(req, res, conn) {
  const queryString = "INSERT INTO `users`(`account`, `password`) VALUES ( ?, ? )";
  const {
    userName,
    password
  } = req.body ?? {};
  if (!userName || !password) return res.send({
    type: 'error',
    message: 'Parameters named \'userName\' and \'password\' must been given.'
  });
  return conn.query(queryString, [userName, password], function (err) {
    if (err) return res.send({
      type: 'error',
      reason: err
    });
    const user = {
      userName,
      password
    };
    const token = _user_manager__WEBPACK_IMPORTED_MODULE_0__["default"].setUser(user);
    return res.send({
      userName,
      result: 'success',
      token
    });
  });
}

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./src/client/components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/client/components/footer.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/client/routes/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/client/service/index.js");






function App(props) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const service = props.cookies;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    service.checkUser();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_service__WEBPACK_IMPORTED_MODULE_5__.ServiceProvider, {
    cookies: service
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-body"
  }, (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(_routes__WEBPACK_IMPORTED_MODULE_4__["default"], location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./src/client/components/breadcrumb.js":
/*!*********************************************!*\
  !*** ./src/client/components/breadcrumb.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumb)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Breadcrumb(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "breadcrumb"
  }, props.children?.map ? props.children.map(function (child, index, children) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, child), index != children.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "separator"
    }, props.separator ?? '/'));
  }) : props.children);
}

/***/ }),

/***/ "./src/client/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/client/components/carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _Carousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Carousel({
  children,
  interval,
  className,
  ...props
}) {
  const items = children.filter(element => element);
  const timeout = interval ?? 5000;
  const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isAnimating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [intervalObject, setIntervalObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  setIntervalObject(setInterval(function nextTurn() {
    setCurrent(++current == items.length ? 0 : current);
    setAnimating(true);
  }, timeout));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {
    if (!isAnimating) setTimeout(function () {
      setAnimating(false);
    }, 600);
    return function componentWillUnMount() {
      clearInterval(intervalObject);
    };
  }, [isAnimating]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: ['carousel', className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-inner"
  }, items.map(function (item, index) {
    const className = ["carousel-item", current == index && "active", (current == items.length - 1 ? 0 : current + 1) == index && "next", isAnimating && (current || items.length) - 1 == index && "animating", isAnimating && current == index && "animating"].filter(Boolean).join(" ");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className,
      key: index
    }, item);
  })));
}

class _Carousel extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    const items = this.props.children;
    this.state = {
      items,
      current: 0,
      isAnimating: false,
      timeout: this.props.interval ?? 5000
    };
    this.nextTurn = this.nextTurn.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.setState({
      interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)
    });
  }

  componentWillUnmount() {
    if (this.state.timeout) clearInterval(this.state.interval);
  }

  componentDidUpdate() {
    if (this.state.isAnimating) setTimeout(function () {
      this.setState({
        isAnimating: false
      });
    }.bind(this), 1000);
  }

  nextTurn() {
    this.setState({
      current: ++this.state.current == this.state.items.length ? 0 : this.state.current,
      isAnimating: true
    });
  }

  renderItems() {
    const {
      current,
      items,
      isAnimating
    } = this.state;
    return items.map(function (item, index) {
      const className = ["carousel-item", current == index && "active", (current == items.length - 1 ? 0 : current + 1) == index && "next", isAnimating && (current || items.length) - 1 == index && "animating", isAnimating && current == index && "animating"].filter(Boolean).join(" ");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: className,
        key: index
      }, item);
    }.bind(this));
  }

  render() {
    const {
      className,
      children,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      className: ['carousel', className].filter(Boolean).join(" ")
    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel-inner"
    }, this.renderItems()));
  }

}

/***/ }),

/***/ "./src/client/components/footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


class Footer extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/images/brand_white.svg",
      alt: "brand"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u7DB2\u7AD9\u5C0E\u89BD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, "\u9996\u9801 - Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/news"
    }, "\u6700\u65B0\u6D88\u606F - News")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/market"
    }, "\u7DDA\u4E0A\u5546\u5E97 - Market")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u5C08\u984C\u4ECB\u7D39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/AIweb",
      target: "_blank"
    }, "\u5C08\u984C\u4ECB\u7D39\u7DB2\u7AD9"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u76F8\u95DC\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u5730\u5740: 263\u5B9C\u862D\u7E23\u58EF\u570D\u9109\u65B0\u5357\u8DEF\u4E8C\u6BB515\u865F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u96FB\u8A71: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "tel:+88639254086"
    }, "03 925 4086")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u96FB\u5B50\u90F5\u4EF6: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:kotyosis588696@gmail.com"
    }, "kotyosis588696@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u76F8\u95DC\u9023\u7D50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://www.tanosecure.com.tw/"
    }, "\u5929\u9F8D\u5B89\u5168\u79D1\u6280\u5B98\u5206\u7DB2\u7AD9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://www.facebook.com/ProfessorPlanted/"
    }, "\u535A\u58EB\u7A2E\u7684 Facebook \u7C89\u7D72\u5C08\u9801")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://www.facebook.com/\u65B0\u5357\u8FB2\u5712-1234272356657626/"
    }, "\u65B0\u5357\u8FB2\u5712 Facebook \u7C89\u7D72\u5C08\u9801")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "copyright"
    }, "Copyright \xA9 2021, All rights reserved."));
  }

}

/***/ }),

/***/ "./src/client/components/navbar.js":
/*!*****************************************!*\
  !*** ./src/client/components/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");



function Navbar() {
  const [isCollapse, setCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [navbarCollapse, setNavbarCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const service = (0,_service__WEBPACK_IMPORTED_MODULE_2__.useService)();
  const togglerProps = {
    className: ['navbar-toggler', !isCollapse && 'active'].filter(Boolean).join(" "),
    role: 'button',
    'aria-label': 'navbar toggler',
    onClick: toggleNavbar
  };
  const collapseProps = {
    className: ['navbar-collapse', isCollapse && 'collapsed'].filter(Boolean).join(" "),
    style: isCollapse ? null : {
      height: navbarCollapse?.children[0].getBoundingClientRect().height
    },
    ref: setNavbarCollapse
  };

  function toggleNavbar() {
    setCollapse(!isCollapse);
  }

  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(service.getUser());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    const listener = service.addListener('user', function () {
      setUser(service.getUser());
    });
    return function () {
      service.removeListener('user', listener);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "navbar",
    role: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "navbar-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/brand.svg",
    alt: "\u65B0\u5357\u667A\u6167\u8FB2\u5712"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", togglerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", collapseProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-collapse-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "nav-link"
  }, "\u9996\u9801")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/news",
    className: "nav-link"
  }, "\u6700\u65B0\u6D88\u606F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/market",
    className: "nav-link"
  }, "\u7DDA\u4E0A\u5546\u5E97")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/account",
    className: "nav-link nav-option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon"
  }, '\uE77B'), " ", user ? '會員中心' : '登入 / 註冊')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/cart",
    className: "nav-link nav-option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon"
  }, '\uF342'), " \u6211\u7684\u5546\u54C1")))))));
}

/***/ }),

/***/ "./src/client/components/searchbar.js":
/*!********************************************!*\
  !*** ./src/client/components/searchbar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Searchbar(props) {
  const [searchBox, getSearchBox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  function submitHandler(event) {
    event.preventDefault();
    console.log(searchBox.value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "searchbar",
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: getSearchBox,
    placeholder: "\u641C\u7D22\u2026"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-alt icon-bold"
  }, '\uE721')));
}

/***/ }),

/***/ "./src/client/pages/account.js":
/*!*************************************!*\
  !*** ./src/client/pages/account.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account),
/* harmony export */   "useAccountInformation": () => (/* binding */ useAccountInformation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");



function Account() {
  const service = (0,_service__WEBPACK_IMPORTED_MODULE_2__.useService)();
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(service.getUser());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    const listenter = service.addListener('user', function () {
      const user = service.getUser();
      setUser(user);
    });
    return function () {
      service.removeListener('user', listenter);
    };
  }, []);

  function login(userName, password) {
    return service.userLogin(userName, password).then(function (token) {
      setUser(token);
      return token;
    });
  }

  function logout() {
    service.userLogout();
    setUser(null);
  }

  function register(userName, password) {
    return service.userRegister(userName, password).then(function (token) {
      setUser(token);
      return token;
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "account"
  }, user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountDetail, {
    logout: logout,
    user: user
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Forms, {
    login: login,
    register: register
  }));
}

function Forms({
  login,
  register
}) {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  function setLogin() {
    setForm(true);
  }

  function setRegister() {
    setForm(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "form",
    className: "navbar-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: setLogin,
    "data-current": form
  }, "\u6703\u54E1\u767B\u5165"), " / ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: setRegister,
    "data-current": !form
  }, "\u8A3B\u518A\u65B0\u6703\u54E1")), form ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoginForm, {
    login: login
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RegisterForm, {
    register: register
  })));
}

function LoginForm({
  login
}) {
  const [isLoading, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [userNameElement, setUserNameElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [passwordElement, setPasswordElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function onSubmitHandle(event) {
    event.preventDefault();
    setLoadingState(true);
    login(userNameElement.value, passwordElement.value).catch(function () {
      setLoadingState(false);
      setInputError(true);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmitHandle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u7528\u6236\u540D\u7A31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "username",
    type: "text",
    placeholder: "",
    ref: setUserNameElement,
    autoComplete: "off",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u7528\u6236\u5BC6\u78BC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    ref: setPasswordElement,
    autoComplete: "off",
    required: true
  })), inputError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u5E33\u865F\u6216\u5BC6\u78BC\u932F\u8AA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    "aria-label": "\u767B\u5165\u6309\u9215",
    disabled: isLoading
  }, isLoading ? '載入中' : '登入'));
}

function RegisterForm(props) {
  const {
    register
  } = props;
  const [isLoading, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [userNameElement, setUserNameElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [passwordElement, setPasswordElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [passwordConfirm, setPasswordConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function onSubmitHandle(event) {
    event.preventDefault();
    let error = 0;

    if (passwordConfirm.value !== passwordElement.value) {
      error += 2;
    }

    ;

    if (passwordElement.value.length < 8) {
      error += 4;
    }

    ;
    if (error) return setInputError(error);
    register(userNameElement.value, passwordElement.value).catch(function () {
      setInputError(1);
      setLoadingState(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmitHandle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u7528\u6236\u540D\u7A31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setUserNameElement,
    name: "username",
    autoComplete: "off",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u7528\u6236\u5BC6\u78BC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    ref: setPasswordElement,
    autoComplete: "off",
    placeholder: "\u6700\u5C11\u61C9\u6709 8 \u500B\u5B57\u5143",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    ref: setPasswordConfirm,
    autoComplete: "off",
    placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
    required: true
  })), Boolean(inputError & 1) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u4F7F\u7528\u8005\u5E33\u865F\u5DF2\u88AB\u4F7F\u7528"), Boolean(inputError & 2) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u8F38\u5165\u5BC6\u78BC\u4E26\u4E0D\u76F8\u540C"), Boolean(inputError & 4) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u5BC6\u78BC\u6700\u5C11\u61C9\u6709 8 \u500B\u5B57\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    "aria-label": "\u8A3B\u518A\u6309\u9215",
    disabled: isLoading
  }, isLoading ? '載入中' : '註冊'));
}

const AccountInformation = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

function AccountDetail(props) {
  const {
    user: userToken
  } = props;
  const [user, setUserDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_service__WEBPACK_IMPORTED_MODULE_2__.store.userDetail);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!user) _service__WEBPACK_IMPORTED_MODULE_2__.store.request('userDetail', userToken).then(setUserDetail);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-space container account-layout",
    style: {
      maxWidth: "var(--max-width-container-xl)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountMenu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountInformation.Provider, {
    value: user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));
}

function AccountMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/account"
  }, "\u7528\u6236\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/account/orders"
  }, "\u8A02\u55AE\u8A18\u9304"));
}

function useAccountInformation() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccountInformation);
}

/***/ }),

/***/ "./src/client/pages/cart.js":
/*!**********************************!*\
  !*** ./src/client/pages/cart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");

 // 購物車的頁面

function Cart() {
  const service = (0,_service__WEBPACK_IMPORTED_MODULE_1__.useService)(); // 使用 useState Hook 建立 cart、products State

  const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(service.getCart());
  const [products, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_service__WEBPACK_IMPORTED_MODULE_1__.store.productList ?? []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 監聽購物車，若有任何變動，則更新 cart State 內容
    const listener = service.addListener("cart", function () {
      return setCart(service.getCart());
    }); // 當組件將要卸載，註消監聽器

    return function () {
      return service.removeListener("cart", listener);
    };
  }, []); // 若沒有取得商品清單，則嘗試取得，並將結果儲存至 products State

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!products) _service__WEBPACK_IMPORTED_MODULE_1__.store.request('productList').then(setProductList);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "cart-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-space container",
    style: {
      maxWidth: "var(--max-width-container-xl)"
    }
  }, // 若購物車中有任何商品，則在商品清單載入後顯示頁面內容
  Object.entries(cart).length ? products ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartComponent, {
    cart: cart,
    productList: products
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loading, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartEmpty, null)));
}

Cart.getInitialData = function () {
  return _service__WEBPACK_IMPORTED_MODULE_1__.store.request('productList');
};

function CartComponent(props) {
  const {
    cart,
    productList
  } = props;
  const products = Object.fromEntries(productList.map(function ({
    name,
    ...rest
  }) {
    return [name, rest];
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartList, {
    cart,
    products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartSummary, {
    cart,
    products
  }));
}

function CartList(props) {
  const {
    cart,
    products
  } = props;

  function renderCartItems(cart, products) {
    return Boolean(products) && Object.entries(cart).sort().map(function ([name, count]) {
      const {
        price,
        images
      } = products[name] ?? {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "product-row",
        key: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "product-image",
        src: `/api/files/${images?.[0] ?? "default_product.svg"}`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "product-name"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "product-price"
      }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "product-count"
      }, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "product-price"
      }, count * price));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-row product-title-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u5546\u54C1\u5716\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u5546\u54C1\u540D\u7A31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u50F9\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u6578\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u5C0F\u8A08")), renderCartItems(cart, products));
}

function Loading() {
  return "Loading...";
}

function CartSummary(props) {
  const {
    cart,
    products
  } = props;
  const [selectElement, setSelectElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  function count() {
    return Object.values(cart).reduce(function (prev, amount) {
      return prev + amount;
    }, 0);
  }

  function total() {
    return Object.entries(cart).reduce(function (prev, [name, amount]) {
      return prev + amount * products[name].price;
    }, 0);
  }

  function orderTotal() {
    return total() + +(selectElement?.value ?? 50);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-header"
  }, "\u7E3D\u8A08\u6458\u8981"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-items-count summary-row"
  }, "\u7E3D\u6578", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, count())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-items-total summary-row"
  }, "\u7E3D\u50F9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, total())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-shipping-fees"
  }, "\u904B\u8CBB", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    defaultValue: 50,
    ref: setSelectElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 50
  }, "\u6A19\u6E96\u904B\u8CBB - NT$ 50.00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-order-total summary-row"
  }, "\u5408\u8A08", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, orderTotal())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u6536\u4EF6\u4EBA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    placeholder: "\u6536\u4EF6\u4EBA\u59D3\u540D",
    title: "\u8ACB\u8F38\u5165\u6536\u4EF6\u4EBA\u7684\u59D3\u540D"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u806F\u7D61\u96FB\u8A71", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "tel",
    placeholder: "\u624B\u6A5F\u6216\u96FB\u8A71\u865F\u78BC",
    pattern: "[0-9]",
    title: "\u8ACB\u8F38\u5165\u60A8\u7684\u624B\u6A5F\u6216\u96FB\u8A71\u865F\u78BC"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u9001\u8CA8\u5730\u5740", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "address",
    placeholder: "\u50C5\u9650\u53F0\u7063\u3001\u6F8E\u6E56\u3001\u91D1\u9580\u4EE5\u53CA\u99AC\u7956\u5730\u5340",
    title: "\u8ACB\u8F38\u5165\u9001\u8CA8\u7684\u6536\u4EF6\u5730\u5740"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-text"
  }, "\u203B\u532F\u6B3E\u5E33\u6236\uFF1A[12346789]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-text"
  }, "\u203B\u532F\u6B3E\u6642\uFF0C\u8ACB\u5728\u5099\u8A3B\u6B04\u586B\u5BEB\u60A8\u7684\u59D3\u540D\u3001\u806F\u7D61\u65B9\u5F0F\u4EE5\u53CA\u8A02\u55AE\u6458\u8981\uFF0C\u4EE5\u4FBF\u65BC\u8655\u7406\u3002 \u8A02\u55AE\u6458\u8981\u5C07\u5728\u9001\u51FA\u8A02\u55AE\u5F8C\u751F\u6210\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-text"
  }, "\u203B\u8ACB\u65BC 3 \u65E5\u5167\u5B8C\u6210\u532F\u6B3E\uFF0C\u5426\u5247\u5C07\u81EA\u52D5\u53D6\u6D88\u8A02\u55AE\u3002 \u82E5\u6709\u4EFB\u4F55\u554F\u984C\u8ACB\u806F\u7D61\u5BA2\u670D\u4EBA\u54E1\uFF0C\u6211\u5011\u5C07\u70BA\u60A8\u670D\u52D9\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "summary-clear"
  }, "\u6E05\u7A7A\u8CFC\u7269\u8ECA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "summary-checkout"
  }, "\u9001\u51FA\u8A02\u55AE"))));
}

function CartEmpty(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u8CFC\u7269\u8ECA\u5C1A\u7121\u4EFB\u4F55\u5546\u54C1\u54E6!");
}

/***/ }),

/***/ "./src/client/pages/homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel */ "./src/client/components/carousel.js");


class HomePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "homepage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionAbout, null));
  }

}

class SectionHeader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "fade",
      interval: 4000
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "img",
      style: {
        backgroundImage: "url(images/001.jpg)"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "img",
      style: {
        backgroundImage: "url(images/002.jpg)"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "img",
      style: {
        backgroundImage: "url(images/003.jpg)"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "images/white_vertical.svg"
    })));
  }

}

class SectionAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "about"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u8FB2\u696D \xD7 \u7269\u9023\u7DB2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "info"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "image"
    }))));
  }

}

/***/ }),

/***/ "./src/client/pages/market.js":
/*!************************************!*\
  !*** ./src/client/pages/market.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Market)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Market() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "market"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-space container",
    style: {
      maxWidth: 'var(--max-width-container-xl)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));
}

/***/ }),

/***/ "./src/client/pages/order-history.js":
/*!*******************************************!*\
  !*** ./src/client/pages/order-history.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function OrderHistory() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}

/***/ }),

/***/ "./src/client/pages/product-detail.js":
/*!********************************************!*\
  !*** ./src/client/pages/product-detail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoodDetailPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remarkable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remarkable */ "remarkable");
/* harmony import */ var remarkable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remarkable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/breadcrumb */ "./src/client/components/breadcrumb.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/carousel */ "./src/client/components/carousel.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");






function GoodDetailPage() {
  const {
    name
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_service__WEBPACK_IMPORTED_MODULE_5__.store[`product-${name}`]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidUpdate() {
    if (data?.name != name) _service__WEBPACK_IMPORTED_MODULE_5__.store.request('productDetail', `product-${name}`, name).then(setData);
  }, []);
  console.log(data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "good-detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/market"
  }, "\u7DDA\u4E0A\u5546\u5E97"), name), data?.name == name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GoodDetail, {
    data: data
  }) : "LOADING");
}

function GoodDetail({
  data
}) {
  const service = (0,_service__WEBPACK_IMPORTED_MODULE_5__.useService)();
  const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(service.getCart());
  const [numberInput, setNumberInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [cartCount, setCartCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cart[data.name]);
  let [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cartCount ?? 1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    const cartListener = service.addListener('cart', function () {
      const cart = service.getCart();
      setCart(cart);
      setCartCount(cart[data.name]);
    });
    return function () {
      service.removeListener('cart', cartListener);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (numberInput) numberInput.value = cartCount ?? count;
  }, [numberInput]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    service.cartSet(data.name, cartCount && count);
  }, [count]);

  function increase() {
    let change = ++count > data.stock ? data.stock : count;
    setCount(change);
    numberInput.value = change;
  }

  function decrease() {
    let change = --count < 1 ? 1 : count;
    setCount(--count < 1 ? 1 : count);
    numberInput.value = change;
  }

  function changeHandler() {
    let change = numberInput.value > 0 ? numberInput.value > data.stock ? data.stock : numberInput.value : 1;
    setCount(change);
    numberInput.value = change;
  }

  function cartToggler() {
    const count = numberInput.value;
    service.cartSet(data.name, cartCount ? 0 : count);
  }

  const md = new remarkable__WEBPACK_IMPORTED_MODULE_2__.Remarkable();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-detail-row"
  }, data?.images?.map ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "good-detail-images fade"
  }, data.images.map(function (name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: `/api/files/${name}`,
      alt: name,
      key: name
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "good-detail-images",
    src: "/api/files/default_product.svg",
    alt: data.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-detail-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "good-name"
  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-price"
  }, "NT$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-info"
  }, data.information), data.stock ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "icon",
    "aria-label": "decrease",
    onClick: decrease,
    disabled: count == 1
  }, "\uE949"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: changeHandler,
    ref: setNumberInputElement,
    type: "number",
    max: data.stock,
    min: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "icon",
    "aria-label": "increase",
    onClick: increase,
    disabled: count == data.stock
  }, "\uE948")), cartCount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "good-cart-remove",
    onClick: cartToggler
  }, "\u79FB\u51FA\u8CFC\u7269\u8ECA") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "good-cart-add",
    onClick: cartToggler
  }, "\u52A0\u5165\u8CFC\u7269\u8ECA")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "good-cart-add",
    disabled: true
  }, "\u76EE\u524D\u5C1A\u7121\u5EAB\u5B58")))), Boolean(data.introduce) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "good-detail-intro",
    dangerouslySetInnerHTML: {
      __html: md.render(data.introduce)
    }
  }));
}

GoodDetailPage.getInitialData = async function ({
  name
}) {
  return _service__WEBPACK_IMPORTED_MODULE_5__.store.request('productDetail', `product-${name}`, name);
};

/***/ }),

/***/ "./src/client/pages/product-list.js":
/*!******************************************!*\
  !*** ./src/client/pages/product-list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchbar */ "./src/client/components/searchbar.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");




function ProductList() {
  const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_service__WEBPACK_IMPORTED_MODULE_3__.store.productList);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {
    if (!productList) _service__WEBPACK_IMPORTED_MODULE_3__.store.request('productList').then(setProductList);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "product-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_searchbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-list-container"
  }, productList ? productList.type ? "ERROR" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductListComponent, {
    productList: productList
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")));
}

ProductList.getInitialData = function () {
  return _service__WEBPACK_IMPORTED_MODULE_3__.store.request('productList');
};

function ProductListComponent(props) {
  const {
    page = 0,
    prePage = 20,
    productList
  } = props;
  return productList.slice(page * prePage, (page + 1) * prePage).map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "product-card",
      key: product.name,
      to: product.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "product-image",
      src: `/api/files/${product?.images?.[0] ?? "default_product.svg"}`,
      alt: product.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-name"
    }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-intro"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-price"
    }, product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-detail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-stock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "icon"
    }, "\uEECB"), " \u5EAB\u5B58 ", product.stock))));
  });
}

/***/ }),

/***/ "./src/client/pages/user-detail.js":
/*!*****************************************!*\
  !*** ./src/client/pages/user-detail.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/client/service/index.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account */ "./src/client/pages/account.js");



function UserDetail() {
  const user = (0,_account__WEBPACK_IMPORTED_MODULE_2__.useAccountInformation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "user-detail"
  }, Boolean(user) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u7528\u6236\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AccountInfoForm, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserInfoForm, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrderDefaultForm, null)));
}

function AccountInfoForm() {
  const service = (0,_service__WEBPACK_IMPORTED_MODULE_1__.useService)();
  const user = (0,_account__WEBPACK_IMPORTED_MODULE_2__.useAccountInformation)() ?? {};
  const [isLoading, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [userNameInput, setUserNameInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [passwordInput, setPasswordInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [comfirmInput, setPasswordComfirmElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function submitHandler(event) {
    event.preventDefault();
    let error = 0;

    if (passwordConfirm.value !== passwordElement.value) {
      error += 2;
    }

    ;

    if (passwordElement.value.length < 8) {
      error += 4;
    }

    ;
    if (error) return setInputError(error);
    return;
    service.register(userNameElement.value, passwordElement.value).catch(function () {
      setInputError(1);
      setLoadingState(false);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u5E33\u6236\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u5E33\u865F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setUserNameInputElement,
    placeholder: "\u5E33\u865F",
    title: "\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",
    defaultValue: user.userName,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u5BC6\u78BC", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    ref: setPasswordInputElement,
    placeholder: "\u6700\u5C11\u61C9\u6709 8 \u500B\u5B57\u5143",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    ref: setPasswordComfirmElement,
    placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
    required: true
  })), Boolean(inputError & 1) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u4F7F\u7528\u8005\u5E33\u865F\u5DF2\u88AB\u4F7F\u7528"), Boolean(inputError & 2) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u8F38\u5165\u5BC6\u78BC\u4E26\u4E0D\u76F8\u540C"), Boolean(inputError & 4) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "error-message"
  }, "\u5BC6\u78BC\u6700\u5C11\u61C9\u6709 8 \u500B\u5B57\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: isLoading
  }, isLoading ? '載入中' : '更改'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "reset"
  }, "\u91CD\u8A2D"));
}

function UserInfoForm() {
  const user = (0,_account__WEBPACK_IMPORTED_MODULE_2__.useAccountInformation)();
  const [nameInput, setNameInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [emailInput, setEmailInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function submitHandler(event) {
    event.preventDefault();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u4F7F\u7528\u8005\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u59D3\u540D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setNameInputElement,
    placeholder: "\u4F7F\u7528\u8005\u59D3\u540D",
    title: "\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",
    defaultValue: user.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u96FB\u5B50\u90F5\u4EF6", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    ref: setEmailInputElement,
    placeholder: "\u4F7F\u7528\u8005\u7684\u96FB\u5B50\u90F5\u4EF6",
    pattern: "[0-9]",
    title: "\u8ACB\u8F38\u5165\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6",
    defaultValue: user.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "\u66F4\u6539"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "reset"
  }, "\u91CD\u8A2D"));
}

function OrderDefaultForm() {
  const user = (0,_account__WEBPACK_IMPORTED_MODULE_2__.useAccountInformation)() ?? {};
  const [nameInput, setNameInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [telInput, setTelInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [AddrInput, setAddrInputElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function submitHandler(event) {
    event.preventDefault();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u8A02\u55AE\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u4EE5\u4E0B\u8CC7\u6599\u5C07\u4F5C\u70BA\u9810\u8A2D\u7684\u8A02\u55AE\u8CC7\u8A0A\uFF0C\u8A02\u55AE\u9001\u51FA\u524D\u53EF\u518D\u4F5C\u4FEE\u6539\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u6536\u4EF6\u4EBA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setNameInputElement,
    placeholder: "\u6536\u4EF6\u4EBA\u59D3\u540D",
    title: "\u8ACB\u8F38\u5165\u6536\u4EF6\u4EBA\u7684\u59D3\u540D",
    defaultValue: user.recipient
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u806F\u7D61\u96FB\u8A71", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setTelInputElement,
    placeholder: "\u624B\u6A5F\u6216\u96FB\u8A71\u865F\u78BC",
    pattern: "[0-9]",
    title: "\u8ACB\u8F38\u5165\u60A8\u7684\u624B\u6A5F\u6216\u96FB\u8A71\u865F\u78BC",
    defaultValue: user.tel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "summary-form"
  }, "\u9001\u8CA8\u5730\u5740", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    ref: setAddrInputElement,
    placeholder: "\u50C5\u9650\u53F0\u7063\u3001\u6F8E\u6E56\u3001\u91D1\u9580\u4EE5\u53CA\u99AC\u7956\u5730\u5340",
    title: "\u8ACB\u8F38\u5165\u9001\u8CA8\u7684\u6536\u4EF6\u5730\u5740",
    defaultValue: user.address
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "\u66F4\u6539"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "reset"
  }, "\u91CD\u8A2D"));
}

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_product_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/product-detail */ "./src/client/pages/product-detail.js");
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/homepage */ "./src/client/pages/homepage.js");
/* harmony import */ var _pages_market__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/market */ "./src/client/pages/market.js");
/* harmony import */ var _pages_product_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/product-list */ "./src/client/pages/product-list.js");
/* harmony import */ var _pages_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/account */ "./src/client/pages/account.js");
/* harmony import */ var _pages_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/cart */ "./src/client/pages/cart.js");
/* harmony import */ var _pages_user_detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/user-detail */ "./src/client/pages/user-detail.js");
/* harmony import */ var _pages_order_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/order-history */ "./src/client/pages/order-history.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_homepage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}, {
  path: '/market',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_market__WEBPACK_IMPORTED_MODULE_4__["default"], null),
  children: [{
    path: '/market',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_list__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, {
    path: '/market/:name',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_detail__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }]
}, {
  path: '/account',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_account__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  children: [{
    path: '/account',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_user_detail__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }, {
    path: '/account/orders',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_order_history__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }]
}, {
  path: '/cart',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_cart__WEBPACK_IMPORTED_MODULE_7__["default"], null)
}, {
  path: '*',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)
}]);

/***/ }),

/***/ "./src/client/service/index.js":
/*!*************************************!*\
  !*** ./src/client/service/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useService": () => (/* binding */ useService),
/* harmony export */   "ServiceProvider": () => (/* binding */ ServiceProvider),
/* harmony export */   "cookieHandler": () => (/* binding */ cookieHandler),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const ServiceContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
ServiceContext.displayName = "Service";
function useService() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ServiceContext);
}
function ServiceProvider(props) {
  const {
    cookies,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ServiceContext.Provider, {
    value: cookies
  }, children);
}
function cookieHandler(cookie) {
  const listeners = {};

  function triggerEvent(...events) {
    const cookies = cookie.loadAll();

    for (let event of events) {
      const eventListeners = listeners[event] ?? [];
      let tmp = true;

      for (let {
        listener,
        once
      } of eventListeners) {
        if (once) tmp = false;
        listener(cookies);
      }

      ;
      if (tmp) return;

      for (let index = 0; index < eventListeners.length; index++) if (eventListeners[index].once) {
        eventListeners.splice(index, 1);
        index--;
      }
    }
  }

  return {
    userLogin(userName, password) {
      const reqBody = new FormData();
      reqBody.append("userName", userName);
      reqBody.append("password", password);
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_1___default().request({
          url: "/api/users/login",
          method: "post",
          data: {
            userName,
            password
          }
        }).then(function (res) {
          const token = res.data;

          if (token) {
            cookie.save('userToken', token, {
              path: '/'
            });
            return resolve(token);
          }

          ;
          reject();
        });
      }).then(function (token) {
        triggerEvent('user');
        return token;
      });
    },

    userLogout() {
      cookie.remove("userToken", {
        path: "/"
      });
      triggerEvent('user');
    },

    userRegister(userName, password) {
      const reqBody = new FormData();
      reqBody.append("userName", userName);
      reqBody.append("password", password);
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_1___default().request({
          url: "/api/users/register",
          method: "post",
          data: {
            userName,
            password
          }
        }).then(function (res) {
          const {
            token
          } = res.data;

          if (token) {
            cookie.save('userToken', token, {
              path: '/'
            });
            return resolve(token);
          }

          ;
          reject();
        });
      }).then(function (token) {
        triggerEvent('user');
        return token;
      });
    },

    cartSet(productName, _count) {
      const cart = cookie.load("userCart") ?? {};
      const count = _count instanceof Function ? _count(cart[productName] ?? 0) : +_count;
      cart[productName] = count;
      if (!count) delete cart[productName];
      cookie.save("userCart", cart, {
        path: "/"
      });
      triggerEvent('cart');
      return count;
    },

    cartClear() {
      cookie.remove("userCart", {
        path: "/"
      });
      triggerEvent('cart');
    },

    getUser() {
      return cookie.load("userToken");
    },

    checkUser() {
      return new Promise(function (resolve) {
        const token = cookie.load("userToken");
        if (!token) return resolve(false);
        axios__WEBPACK_IMPORTED_MODULE_1___default().request({
          url: "/api/users/details",
          method: "post",
          data: {
            token
          }
        }).then(function ({
          data: result
        }) {
          if (!result) {
            cookie.remove("userToken", {
              path: "/"
            });
            triggerEvent('user');
          }

          console.log('hi');
          return result;
        });
      });
    },

    getCart() {
      return cookie.load("userCart") ?? {};
    },

    addListener(event, listenerFunction, option) {
      if (!listeners[event]) listeners[event] = [];
      const listener = Object.assign({
        listener: listenerFunction,
        once: false
      }, option);
      listeners[event].push(listener);
      return listener;
    },

    removeListener(event, listener) {
      const eventListeners = listeners[event];

      for (let index = 0; index < eventListeners.length; index++) if (eventListeners[index] == listener) {
        eventListeners.splice(index, 1);
        index--;
      }
    }

  };
}
;
const store = function () {
  const configs = {
    productList: {
      url: 'api/products/',
      method: 'get'
    },

    productDetail(name) {
      return {
        url: encodeURI(`api/products/${name}`),
        method: 'get'
      };
    },

    userDetail(token) {
      return {
        url: `api/users/details`,
        method: 'post',
        data: {
          token,
          detailed: true
        }
      };
    }

  };
  const store = {
    async request(name, key, ...arg) {
      const config = configs[name] instanceof Function ? configs[name](...arg) : configs[name];
      return await axios__WEBPACK_IMPORTED_MODULE_1___default().request(config).then(function (response) {
        Object.assign(store, {
          [key || name]: response.data
        });
        return response.data;
      }.bind(this));
    }

  };
  return store;
}();

/***/ }),

/***/ "./src/client/service/server.js":
/*!**************************************!*\
  !*** ./src/client/service/server.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cookieHandler)
/* harmony export */ });
/* harmony import */ var _user_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-manager */ "./src/user-manager/index.js");

function cookieHandler(_cookie) {
  const cookie = _cookie ?? {};
  return {
    getUser() {
      return cookie.userToken;
    },

    getCart() {
      return JSON.parse(cookie.userCart ?? "{}");
    },

    checkUser() {
      const passed = _user_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getUser(cookie.userToken);
      return Promise[passed ? 'resolve' : 'reject']();
    }

  };
}

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialData": () => (/* binding */ getInitialData),
/* harmony export */   "defaultRequestHandler": () => (/* binding */ defaultRequestHandler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/app */ "./src/client/app.js");
/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/routes */ "./src/client/routes/index.js");
/* harmony import */ var _client_service_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/service/server */ "./src/client/service/server.js");










(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = process.env.HOST ?? 'http://localhost:5000';
function getInitialData(req, res, next) {
  const tasks = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_client_routes__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pathname: req.path
  }).map(function ({
    params,
    route: {
      element
    }
  }) {
    return element?.type.getInitialData && element.type.getInitialData(params);
  });
  res.set('content-type', 'text/html;charset=utf-8');
  return Promise.all(tasks).then(function () {
    return next();
  });
}
function defaultRequestHandler(req, res) {
  return fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'index.html'), function (err, data) {
    if (err) throw err;
    const content = data.toString();
    const replacement = {
      PUBLIC_URL: path__WEBPACK_IMPORTED_MODULE_2___default().relative(req.path, "/") || '.',
      CONTENT: react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, {
        location: req.path
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_app__WEBPACK_IMPORTED_MODULE_7__["default"], {
        cookies: (0,_client_service_server__WEBPACK_IMPORTED_MODULE_9__["default"])(req.cookies)
      })))))
    };
    return res.end(Object.entries(replacement).reduce(function (content, [replaceKey, replaceValue]) {
      return content.replaceAll(`%${replaceKey}%`, replaceValue);
    }, content));
  });
}

/***/ }),

/***/ "./src/user-manager/index.js":
/*!***********************************!*\
  !*** ./src/user-manager/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const userManager = {
  users: {},

  getUser(token) {
    const user = this.users[token] ?? null;
    this.clearExpiredUsers();
    if (user?.expriedTime < Date.now()) return null;
    return user;
  },

  setUser(user) {
    const dateTime = Date.now();
    const token = Buffer.concat([toBuffer(dateTime), new Buffer(generateToken(user))]).toString('base64url');
    this.users[token] = Object.assign({}, user, {
      expriedTime: Date.now() + 7 * 24 * 36e5
    });
    return token;
  },

  removeUser(token) {
    return this.users[token] ? delete this.users[token] : false;
  },

  clearExpiredUsers() {
    const {
      users
    } = this;
    return new Promise(function (resolve) {
      const now = Date.now();
      Object.entries(users).forEach(function ([token, user]) {
        if (user.expriedTime < now) delete users[token];
      });
      return resolve();
    });
  }

};

function generateToken({
  userName,
  password
}) {
  const charsetList = [...userName, ...password];
  const tokenList = [];

  for (let i in charsetList.slice(0, 10)) {
    const index = Math.floor(charsetList.length * Math.random());
    tokenList.push(charsetList[index]);
    charsetList.splice(index, 1);
  }

  return tokenList.join('');
}

function toBuffer(number) {
  const buffer = Buffer.alloc(Math.floor(Math.log2(number) / 8) + 1);

  for (let [int, index] = [Math.floor(number), 0]; int != 0; [int, index] = [Math.floor(int / 256), index + 1]) buffer.writeUInt8(int % 256, index);

  return buffer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userManager);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "remarkable":
/*!*****************************!*\
  !*** external "remarkable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("remarkable");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ "express-fileupload");
/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis */ "./src/apis/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default */ "./src/default.js");





const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.disable('x-powered-by');
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
app.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(function (req, res, next) {
  res.set('x-content-type-options', 'nosniff');
  next();
});
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('public'));
app.all(_apis__WEBPACK_IMPORTED_MODULE_3__.routes, _apis__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.get('*', _default__WEBPACK_IMPORTED_MODULE_4__.getInitialData, _default__WEBPACK_IMPORTED_MODULE_4__.defaultRequestHandler);
const port = process.env.PORT ?? 5000;
app.listen(port, function () {
  console.log(`Your app is listening on port ${process.env.port ?? port}.`);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map