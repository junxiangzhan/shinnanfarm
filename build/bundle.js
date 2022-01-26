/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/files/index.js":
/*!*********************************!*\
  !*** ./src/apis/files/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ files)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/apis/files/list.js\");\n/* harmony import */ var _uploadForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadForm */ \"./src/apis/files/uploadForm.js\");\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload */ \"./src/apis/files/upload.js\");\n\n\n\nfunction files(req, res, conn) {\n  const {\n    params: {\n      method\n    }\n  } = req;\n\n  const [sqlString, values, callback] = ({\n    list: _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    uploadform: _uploadForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    upload: _upload__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }[method] ?? (() => []))(req, res);\n\n  if (!sqlString) return callback ? callback(conn) : res.send({\n    type: 'error',\n    message: `Unknown method: '${method}' had been request.`\n  });\n  conn.query(sqlString, values ?? [], callback ?? function defaultCallback(err, results, fields) {\n    if (err) throw err;\n    res.send(results);\n  });\n}\n;\n\n//# sourceURL=webpack://shinnan/./src/apis/files/index.js?");

/***/ }),

/***/ "./src/apis/files/list.js":
/*!********************************!*\
  !*** ./src/apis/files/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ list)\n/* harmony export */ });\nfunction list() {\n  const queryString = 'SELECT *, \\'/api/files/get?name=\\' & `files`.`name` AS `url` FROM `files`;';\n  const values = null;\n  const callback = null;\n  return [queryString, values, callback];\n}\n\n//# sourceURL=webpack://shinnan/./src/apis/files/list.js?");

/***/ }),

/***/ "./src/apis/files/upload.js":
/*!**********************************!*\
  !*** ./src/apis/files/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ upload)\n/* harmony export */ });\nfunction upload(req, res) {\n  const {\n    files: _files\n  } = req.files;\n  if (!_files) return [null, null, () => res.send({\n    type: 'error',\n    message: 'There aren\\'t any files need to be uploaded, request with files by naming \\'files\\'.'\n  })];\n  const files = [];\n\n  if (_files instanceof Array) {\n    files.push(..._files);\n  } else files.push(_files);\n\n  return [null, null, function (conn) {\n    Promise.all(files.map(function ({\n      name,\n      mimetype,\n      data\n    }) {\n      const buffer = [];\n\n      for (let i = 0; i < data.length / 63; i++) buffer.push(data);\n\n      return new Promise(function (resolve, reject) {\n        resolve(buffer);\n      });\n    })).then(res.send);\n  }];\n}\n\n//# sourceURL=webpack://shinnan/./src/apis/files/upload.js?");

/***/ }),

/***/ "./src/apis/files/uploadForm.js":
/*!**************************************!*\
  !*** ./src/apis/files/uploadForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction list(req, res) {\n  return [null, null, () => res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    method: \"post\",\n    encType: \"multipart/form-data\",\n    action: \"upload\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"file\",\n    name: \"files\",\n    required: true,\n    multiple: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, \"\\u4E0A\\u50B3\\u6A94\\u6848\"))))];\n}\n\n//# sourceURL=webpack://shinnan/./src/apis/files/uploadForm.js?");

/***/ }),

/***/ "./src/apis/index.js":
/*!***************************!*\
  !*** ./src/apis/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files */ \"./src/apis/files/index.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ \"./src/apis/products/index.js\");\n\n\n\nconst DBhost = process.env.DBHOST ?? 'localhost';\nconst DBaccount = process.env.DBACCOUNT ?? 'root';\nconst DBpassword = process.env.DBPASSWORD ?? '';\nconst DBname = process.env.DBNAME ?? 'shinnanfarm';\nconst connection = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n  host: DBhost,\n  user: DBaccount,\n  password: DBpassword,\n  database: DBname\n});\n\nfunction apis(req, res) {\n  const {\n    params: {\n      api\n    }\n  } = req;\n  return (this[api] ?? function (req, res) {\n    res.send({\n      type: 'error',\n      message: `Unknown api: '${api}' had been request.`\n    });\n  })(req, res, connection);\n}\n\napis.files = _files__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(apis);\napis.products = _products__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(apis);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apis.bind(apis));\n\n//# sourceURL=webpack://shinnan/./src/apis/index.js?");

/***/ }),

/***/ "./src/apis/products/all.js":
/*!**********************************!*\
  !*** ./src/apis/products/all.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ all)\n/* harmony export */ });\nfunction all() {\n  const queryString = 'SELECT * FROM `products`;';\n  const values = null;\n  const callback = null;\n  return [queryString, values, callback];\n}\n\n//# sourceURL=webpack://shinnan/./src/apis/products/all.js?");

/***/ }),

/***/ "./src/apis/products/details.js":
/*!**************************************!*\
  !*** ./src/apis/products/details.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ all)\n/* harmony export */ });\nfunction all({\n  query: {\n    name\n  }\n}, res) {\n  if (!name) return [null, null, () => res.send({\n    type: 'error',\n    message: 'When using method \\'details\\', parameter \\'name\\' must be given.'\n  })];\n  const queryString = 'SELECT * FROM `products` WHERE `products`.`name` = ?;';\n  const values = [name];\n\n  const callback = function callback(err, results, fields) {\n    if (err) throw err;\n    res.send(results);\n  };\n\n  return [queryString, values, callback];\n}\n\n//# sourceURL=webpack://shinnan/./src/apis/products/details.js?");

/***/ }),

/***/ "./src/apis/products/index.js":
/*!************************************!*\
  !*** ./src/apis/products/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ product)\n/* harmony export */ });\n/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ \"./src/apis/products/all.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ \"./src/apis/products/details.js\");\n\n\nfunction product(req, res, conn) {\n  const {\n    params: {\n      method\n    },\n    query\n  } = req;\n  res.set('content-type', 'application/json; charset=utf-8');\n\n  const [sqlString, values, callback] = ({\n    all: _all__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    details: _details__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }[method] ?? (() => []))(query, res);\n\n  if (!sqlString) return res.send({\n    type: 'error',\n    message: `Unknown method: '${method}' had been request.`\n  });\n  conn.query(sqlString, values ?? [], callback ?? function defaultCallback(err, results, fields) {\n    if (err) throw err;\n    res.send(results);\n  });\n}\n;\n\n//# sourceURL=webpack://shinnan/./src/apis/products/index.js?");

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ \"./src/client/components/navbar.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/client/routes/index.js\");\n\n\n\n\nfunction App() {\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], location.pathname));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/app.js?");

/***/ }),

/***/ "./src/client/components/breadcrumb.js":
/*!*********************************************!*\
  !*** ./src/client/components/breadcrumb.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Breadcrumb)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Breadcrumb(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"breadcrumb\"\n  }, props.children?.map ? props.children.map(function (child, index, children) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, child), index != children.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"separator\"\n    }, props.separator ?? '/'));\n  }) : props.children);\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/breadcrumb.js?");

/***/ }),

/***/ "./src/client/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/client/components/carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _Carousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction Carousel({\n  children,\n  interval,\n  className,\n  ...props\n}) {\n  const items = children.filter(element => element);\n  const timeout = interval ?? 5000;\n  const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [isAnimating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [intervalObject, setIntervalObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  setIntervalObject(setInterval(function nextTurn() {\n    setCurrent(++current == items.length ? 0 : current);\n    setAnimating(true);\n  }, timeout));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {\n    if (!isAnimating) setTimeout(function () {\n      setAnimating(false);\n    }, 600);\n    return function componentWillUnMount() {\n      clearInterval(intervalObject);\n    };\n  }, [isAnimating]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n    className: ['carousel', className].filter(Boolean).join(\" \")\n  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"carousel-inner\"\n  }, items.map(function (item, index) {\n    const className = [\"carousel-item\", current == index && \"active\", (current == items.length - 1 ? 0 : current + 1) == index && \"next\", isAnimating && (current || items.length) - 1 == index && \"animating\", isAnimating && current == index && \"animating\"].filter(Boolean).join(\" \");\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: className,\n      key: index\n    }, item);\n  })));\n}\n\nclass _Carousel extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    const items = this.props.children.filter(element => element);\n    this.state = {\n      items,\n      current: 0,\n      isAnimating: false,\n      timeout: this.props.interval ?? 5000\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n    this.componentWillUnmount = this.componentWillUnmount.bind(this);\n    this.componentDidUpdate = this.componentDidUpdate.bind(this);\n    this.nextTurn = this.nextTurn.bind(this);\n    this.renderItems = this.renderItems.bind(this);\n  }\n\n  componentDidMount() {\n    this.setState({\n      interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)\n    });\n  }\n\n  componentWillUnmount() {\n    if (this.state.timeout) clearInterval(this.state.interval);\n  }\n\n  componentDidUpdate() {\n    if (this.state.isAnimating) setTimeout(function () {\n      this.setState({\n        isAnimating: false\n      });\n    }.bind(this), 1000);\n  }\n\n  nextTurn() {\n    this.setState({\n      current: ++this.state.current == this.state.items.length ? 0 : this.state.current,\n      isAnimating: true\n    });\n  }\n\n  renderItems() {\n    const {\n      current,\n      items,\n      isAnimating\n    } = this.state;\n    return items.map(function (item, index) {\n      const className = [\"carousel-item\", current == index && \"active\", (current == items.length - 1 ? 0 : current + 1) == index && \"next\", isAnimating && (current || items.length) - 1 == index && \"animating\", isAnimating && current == index && \"animating\"].filter(Boolean).join(\" \");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: className,\n        key: index\n      }, item);\n    }.bind(this));\n  }\n\n  render() {\n    const {\n      className,\n      children,\n      ...props\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: ['carousel', className].filter(Boolean).join(\" \")\n    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"carousel-inner\"\n    }, this.renderItems()));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/carousel.js?");

/***/ }),

/***/ "./src/client/components/navbar.js":
/*!*****************************************!*\
  !*** ./src/client/components/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Navbar() {\n  const [isCollapse, setCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [isLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [navbarCollapse, setNavbarCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const togglerProps = {\n    className: ['navbar-toggler', !isCollapse && 'active'].filter(Boolean).join(\" \"),\n    role: 'button',\n    'aria-label': 'navbar toggler',\n    onClick: toggleNavbar\n  };\n  const collapseProps = {\n    className: ['navbar-collapse', isCollapse && 'collapsed'].filter(Boolean).join(\" \"),\n    style: isCollapse ? null : {\n      height: navbarCollapse?.children[0].getBoundingClientRect().height\n    },\n    ref: setNavbarCollapse\n  };\n\n  function toggleNavbar() {\n    setCollapse(!isCollapse);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    id: \"navbar\",\n    role: \"navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"navbar-brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/images/brand.svg\",\n    alt: \"\\u65B0\\u5357\\u667A\\u6167\\u8FB2\\u5712\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", togglerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", collapseProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-collapse-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"nav-link\"\n  }, \"\\u9996\\u9801\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/news\",\n    className: \"nav-link\"\n  }, \"\\u6700\\u65B0\\u6D88\\u606F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/market\",\n    className: \"nav-link\"\n  }, \"\\u7DDA\\u4E0A\\u5546\\u5E97\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/account\",\n    className: \"nav-link nav-option\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon\"\n  }, '\\uE77B'), \" \", isLogin ? '會員中心' : '登入 / 註冊')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/cart\",\n    className: \"nav-link nav-option\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon\"\n  }, '\\uF342'), \" \\u6211\\u7684\\u5546\\u54C1\")))))));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/navbar.js?");

/***/ }),

/***/ "./src/client/components/searchbar.js":
/*!********************************************!*\
  !*** ./src/client/components/searchbar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Searchbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Searchbar(props) {\n  const [searchBox, getSearchBox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n\n  function submitHandler(event) {\n    event.preventDefault();\n    console.log(searchBox.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"searchbar\",\n    onSubmit: submitHandler\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    ref: getSearchBox,\n    placeholder: \"\\u641C\\u7D22\\u2026\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon icon-alt icon-bold\"\n  }, '\\uE721')));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/searchbar.js?");

/***/ }),

/***/ "./src/client/pages/homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel */ \"./src/client/components/carousel.js\");\n\n\nclass HomePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"homepage\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionAbout, null));\n  }\n\n}\n\nclass SectionHeader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      className: \"fade\",\n      interval: 4000\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/001.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/002.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/003.jpg)\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"images/white_vertical.svg\"\n    })));\n  }\n\n}\n\nclass SectionAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"about\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"\\u8FB2\\u696D \\xD7 \\u7269\\u9023\\u7DB2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"image\"\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/homepage.js?");

/***/ }),

/***/ "./src/client/pages/market.js":
/*!************************************!*\
  !*** ./src/client/pages/market.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Market)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchbar */ \"./src/client/components/searchbar.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\nclass Market extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productList\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n  }\n\n  componentDidMount() {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productList').then(function () {\n      this.setState({\n        data: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productList\n      });\n    }.bind(this));\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"market\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"navbar-space container\",\n      style: {\n        maxWidth: 'var(--max-width-container-lg)'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_searchbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/market.js?");

/***/ }),

/***/ "./src/client/pages/product-detail.js":
/*!********************************************!*\
  !*** ./src/client/pages/product-detail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoodDetail)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/breadcrumb */ \"./src/client/components/breadcrumb.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\nfunction GoodDetail() {\n  const {\n    id\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productDetail);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidUpdate() {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productDetail', id).then(setData);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"good_detail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/market\"\n  }, \"\\u7DDA\\u4E0A\\u5546\\u5E97\"), data.name), JSON.stringify(data));\n}\n\nGoodDetail.getInitialData = async function ({\n  id\n}) {\n  return _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productDetail', id);\n};\n\n//# sourceURL=webpack://shinnan/./src/client/pages/product-detail.js?");

/***/ }),

/***/ "./src/client/pages/product-list.js":
/*!******************************************!*\
  !*** ./src/client/pages/product-list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\nfunction ProductList(props) {\n  const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].productList);\n  console.log(productList);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {\n    _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request('productList').then(setProductList);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"product-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, productList?.map && productList.map(function (product, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: `/market/${index}`\n    }, product.name));\n  })));\n}\n\nProductList.getInitialData = async function () {\n  return _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request('productList');\n};\n\n//# sourceURL=webpack://shinnan/./src/client/pages/product-list.js?");

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_product_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/product-detail */ \"./src/client/pages/product-detail.js\");\n/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/homepage */ \"./src/client/pages/homepage.js\");\n/* harmony import */ var _pages_market__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/market */ \"./src/client/pages/market.js\");\n/* harmony import */ var _pages_product_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/product-list */ \"./src/client/pages/product-list.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_homepage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n}, {\n  path: '/market',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_market__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n  children: [{\n    path: '/market',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }, {\n    path: '/market/:id',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }]\n}, {\n  path: '*',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)\n}]);\n\n//# sourceURL=webpack://shinnan/./src/client/routes/index.js?");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst store = function () {\n  const configs = {\n    productList: {\n      url: 'api/product/all',\n      method: 'get'\n    },\n\n    productDetail(id) {\n      return {\n        url: `api/product/detail?id=${id}`,\n        method: 'get'\n      };\n    }\n\n  };\n  const store = {\n    async request(name, ...arg) {\n      const config = configs[name] instanceof Function ? configs[name](...arg) : configs[name];\n      return await axios__WEBPACK_IMPORTED_MODULE_0___default().request(config).then(function (response) {\n        Object.assign(store, {\n          [name]: response.data\n        });\n        return response.data;\n      }.bind(this));\n    },\n\n    init() {\n      return Object.entries(configs).map(function ([name]) {\n        return store[name] = null;\n      });\n    }\n\n  };\n  store.init();\n  return store;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://shinnan/./src/client/store/index.js?");

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/app */ \"./src/client/app.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/routes */ \"./src/client/routes/index.js\");\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = process.env.HOST ?? 'http://localhost:5000';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  return fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'index.html'), function (err, data) {\n    if (err) throw err;\n    res.set('content-type', 'text/html;charset=utf-8');\n    return Promise.all((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_client_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], req.path).map(function ({\n      params,\n      route: {\n        element\n      }\n    }) {\n      return element?.type.getInitialData && element.type.getInitialData(params);\n    })).then(function () {\n      const content = data.toString();\n      const replacement = {\n        base: path__WEBPACK_IMPORTED_MODULE_2___default().relative(req.path, \"/\") || '.',\n        content: react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, {\n          location: req.path\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_app__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))))\n      };\n      return res.end(Object.entries(replacement).reduce(function (prev, [key, value]) {\n        return prev.replaceAll(`{{ ${key} }}`, value);\n      }, content));\n    });\n  });\n}\n\n//# sourceURL=webpack://shinnan/./src/default.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis */ \"./src/apis/index.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.disable('x-powered-by');\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(function (req, res, next) {\n  res.set('x-content-type-options', 'nosniff');\n  next();\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.all(['/api', '/api/:api', '/api/:api/:method', '/api/*'], _apis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get('*', _default__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst port = process.env.PORT ?? 5000;\napp.listen(port, function () {\n  console.log(`Your app is listening on port ${process.env.port ?? port}.`);\n});\n\n//# sourceURL=webpack://shinnan/./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;