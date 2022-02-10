/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/index.js":
/*!***************************!*\
  !*** ./src/apis/index.js ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\src\\\\apis\\\\index.js: Unexpected token (1:1)\\n\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 1 |\\u001b[39m \\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 |\\u001b[39m \\u001b[36mimport\\u001b[39m mysql \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"mysql\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m \\u001b[36mimport\\u001b[39m files \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"./files\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:506:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:499:17)\\n    at Object.raise (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:460:17)\\n    at Object.unexpected (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3699:16)\\n    at Object.jsxParseIdentifier (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7451:12)\\n    at Object.jsxParseNamespacedName (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7461:23)\\n    at Object.jsxParseElementName (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7472:21)\\n    at Object.jsxParseOpeningElementAt (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7569:22)\\n    at Object.jsxParseElementAt (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7602:33)\\n    at Object.jsxParseElement (C:\\\\Users\\\\使用者\\\\Desktop\\\\shinnan\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7685:17)\");\n\n//# sourceURL=webpack://shinnan/./src/apis/index.js?");

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ \"./src/client/components/navbar.js\");\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie */ \"./src/client/cookie/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/client/routes/index.js\");\n\n\n\n\n\nfunction App(props) {\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  const cookie = props.cookies;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: cookie\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], location.pathname));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/app.js?");

/***/ }),

/***/ "./src/client/components/breadcrumb.js":
/*!*********************************************!*\
  !*** ./src/client/components/breadcrumb.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Breadcrumb)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Breadcrumb(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"breadcrumb\"\n  }, props.children?.map ? props.children.map(function (child, index, children) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, child), index != children.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"separator\"\n    }, props.separator ?? '/'));\n  }) : props.children);\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/breadcrumb.js?");

/***/ }),

/***/ "./src/client/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/client/components/carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _Carousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction Carousel({\n  children,\n  interval,\n  className,\n  ...props\n}) {\n  const items = children.filter(element => element);\n  const timeout = interval ?? 5000;\n  const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [isAnimating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [intervalObject, setIntervalObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  setIntervalObject(setInterval(function nextTurn() {\n    setCurrent(++current == items.length ? 0 : current);\n    setAnimating(true);\n  }, timeout));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {\n    if (!isAnimating) setTimeout(function () {\n      setAnimating(false);\n    }, 600);\n    return function componentWillUnMount() {\n      clearInterval(intervalObject);\n    };\n  }, [isAnimating]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n    className: ['carousel', className].filter(Boolean).join(\" \")\n  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"carousel-inner\"\n  }, items.map(function (item, index) {\n    const className = [\"carousel-item\", current == index && \"active\", (current == items.length - 1 ? 0 : current + 1) == index && \"next\", isAnimating && (current || items.length) - 1 == index && \"animating\", isAnimating && current == index && \"animating\"].filter(Boolean).join(\" \");\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: className,\n      key: index\n    }, item);\n  })));\n}\n\nclass _Carousel extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    const items = this.props.children;\n    this.state = {\n      items,\n      current: 0,\n      isAnimating: false,\n      timeout: this.props.interval ?? 5000\n    };\n    this.nextTurn = this.nextTurn.bind(this);\n    this.renderItems = this.renderItems.bind(this);\n  }\n\n  componentDidMount() {\n    this.setState({\n      interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)\n    });\n  }\n\n  componentWillUnmount() {\n    if (this.state.timeout) clearInterval(this.state.interval);\n  }\n\n  componentDidUpdate() {\n    if (this.state.isAnimating) setTimeout(function () {\n      this.setState({\n        isAnimating: false\n      });\n    }.bind(this), 1000);\n  }\n\n  nextTurn() {\n    this.setState({\n      current: ++this.state.current == this.state.items.length ? 0 : this.state.current,\n      isAnimating: true\n    });\n  }\n\n  renderItems() {\n    const {\n      current,\n      items,\n      isAnimating\n    } = this.state;\n    return items.map(function (item, index) {\n      const className = [\"carousel-item\", current == index && \"active\", (current == items.length - 1 ? 0 : current + 1) == index && \"next\", isAnimating && (current || items.length) - 1 == index && \"animating\", isAnimating && current == index && \"animating\"].filter(Boolean).join(\" \");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: className,\n        key: index\n      }, item);\n    }.bind(this));\n  }\n\n  render() {\n    const {\n      className,\n      children,\n      ...props\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: ['carousel', className].filter(Boolean).join(\" \")\n    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"carousel-inner\"\n    }, this.renderItems()));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/carousel.js?");

/***/ }),

/***/ "./src/client/components/navbar.js":
/*!*****************************************!*\
  !*** ./src/client/components/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie */ \"./src/client/cookie/index.js\");\n\n\n\nfunction Navbar() {\n  const [isCollapse, setCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [isLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [navbarCollapse, setNavbarCollapse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const cookie = (0,_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookie)();\n  const togglerProps = {\n    className: ['navbar-toggler', !isCollapse && 'active'].filter(Boolean).join(\" \"),\n    role: 'button',\n    'aria-label': 'navbar toggler',\n    onClick: toggleNavbar\n  };\n  const collapseProps = {\n    className: ['navbar-collapse', isCollapse && 'collapsed'].filter(Boolean).join(\" \"),\n    style: isCollapse ? null : {\n      height: navbarCollapse?.children[0].getBoundingClientRect().height\n    },\n    ref: setNavbarCollapse\n  };\n\n  function toggleNavbar() {\n    setCollapse(!isCollapse);\n  }\n\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cookie.getUser());\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    const listener = cookie.addListener('user', function () {\n      setUser(cookie.getUser());\n    });\n    return function () {\n      cookie.removeListener('user', listener);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    id: \"navbar\",\n    role: \"navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"navbar-brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/images/brand.svg\",\n    alt: \"\\u65B0\\u5357\\u667A\\u6167\\u8FB2\\u5712\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", togglerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", collapseProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-collapse-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"nav-link\"\n  }, \"\\u9996\\u9801\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/news\",\n    className: \"nav-link\"\n  }, \"\\u6700\\u65B0\\u6D88\\u606F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/market\",\n    className: \"nav-link\"\n  }, \"\\u7DDA\\u4E0A\\u5546\\u5E97\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/account\",\n    className: \"nav-link nav-option\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon\"\n  }, '\\uE77B'), \" \", user ? '會員中心' : '登入 / 註冊')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/cart\",\n    className: \"nav-link nav-option\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon\"\n  }, '\\uF342'), \" \\u6211\\u7684\\u5546\\u54C1\")))))));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/navbar.js?");

/***/ }),

/***/ "./src/client/components/searchbar.js":
/*!********************************************!*\
  !*** ./src/client/components/searchbar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Searchbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Searchbar(props) {\n  const [searchBox, getSearchBox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n\n  function submitHandler(event) {\n    event.preventDefault();\n    console.log(searchBox.value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"searchbar\",\n    onSubmit: submitHandler\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    ref: getSearchBox,\n    placeholder: \"\\u641C\\u7D22\\u2026\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"icon icon-alt icon-bold\"\n  }, '\\uE721')));\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/searchbar.js?");

/***/ }),

/***/ "./src/client/cookie/index.js":
/*!************************************!*\
  !*** ./src/client/cookie/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"cookieHandler\": () => (/* binding */ cookieHandler),\n/* harmony export */   \"useCookie\": () => (/* binding */ useCookie)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Cookie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\nfunction cookieHandler(cookie) {\n  const listeners = {};\n\n  function triggerEvent(...events) {\n    for (let event of events) {\n      const eventListeners = listeners[event];\n      let tmp = true;\n\n      for (let {\n        listener,\n        once\n      } of eventListeners) {\n        if (once) tmp = false;\n        listener();\n      }\n\n      ;\n      if (tmp) return;\n\n      for (let index = 0; index < eventListeners.length; index++) if (eventListeners[index].once) {\n        eventListeners.splice(index, 1);\n        index--;\n      }\n    }\n  }\n\n  return {\n    userLogin(userName, password) {\n      const reqBody = new FormData();\n      reqBody.append(\"userName\", userName);\n      reqBody.append(\"password\", password);\n      return new Promise(function (resolve, reject) {\n        fetch(\"/api/users/login\", {\n          method: \"post\",\n          body: reqBody\n        }).then(function (res) {\n          return res.json().then(function (token) {\n            if (token) {\n              cookie.save('userToken', token, {\n                path: '/'\n              });\n              return resolve(token);\n            }\n\n            ;\n            reject();\n          });\n        });\n      }).then(function (token) {\n        triggerEvent('user');\n        return token;\n      });\n    },\n\n    userLogout() {\n      cookie.remove(\"userToken\", {\n        path: \"/\"\n      });\n      triggerEvent('user');\n    },\n\n    userRegister(userName, password) {\n      const reqBody = new FormData();\n      reqBody.append(\"userName\", userName);\n      reqBody.append(\"password\", password);\n      return new Promise(function (resolve, reject) {\n        fetch(\"/api/users/register\", {\n          method: \"post\",\n          body: reqBody\n        }).then(function (res) {\n          return res.json().then(function (result) {\n            if (result.token) {\n              cookie.save('userToken', result.token, {\n                path: '/'\n              });\n              return resolve(result.token);\n            }\n\n            ;\n            reject();\n          });\n        });\n      }).then(function (token) {\n        triggerEvent('user');\n        return token;\n      });\n    },\n\n    cartSet(productId, count) {\n      const cart = cookie.load(\"cart\");\n      if (!cart) return cookie.save(\"cart\", {\n        [productId]: count\n      }, {\n        path: \"/\"\n      });\n      if (count) return cart[productId] = count;\n      delete cart[productId];\n    },\n\n    cartClear() {\n      cookie.remove(\"cart\", {\n        path: \"/\"\n      });\n    },\n\n    getUser() {\n      return cookie.load(\"userToken\");\n    },\n\n    checkUser() {\n      return new Promise(function (resolve, reject) {\n        const reqBody = new FormData();\n        reqBody.append(\"token\", cookie.load(\"userToken\"));\n        fetch(\"/api/users/token\", {\n          method: \"post\",\n          body: reqBody\n        }).then(function (res) {\n          return res.json().then(function (result) {\n            return result ? resolve() : reject();\n          });\n        });\n      });\n    },\n\n    getCart() {\n      return cookie.load(\"cart\");\n    },\n\n    addListener(event, listenerFunction, option) {\n      if (!listeners[event]) listeners[event] = [];\n      const listener = Object.assign({\n        listener: listenerFunction,\n        once: false\n      }, option);\n      listeners[event].push(listener);\n      return listener;\n    },\n\n    removeListener(event, listener) {\n      const eventListeners = listeners[event];\n\n      for (let index = 0; index < eventListeners.length; index++) if (eventListeners[index] == listener) {\n        eventListeners.splice(index, 1);\n        index--;\n      }\n    }\n\n  };\n}\n\nfunction useCookie() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Cookie);\n}\n\nCookie.cookieHandler = cookieHandler;\nCookie.useCookie = useCookie;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);\n\n\n//# sourceURL=webpack://shinnan/./src/client/cookie/index.js?");

/***/ }),

/***/ "./src/client/cookie/server.js":
/*!*************************************!*\
  !*** ./src/client/cookie/server.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cookieHandler)\n/* harmony export */ });\n/* harmony import */ var _user_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-manager */ \"./src/user-manager/index.js\");\n\nfunction cookieHandler(_cookie) {\n  const cookie = _cookie ?? {};\n  return {\n    getUser() {\n      return cookie.userToken;\n    },\n\n    getCart() {\n      return cookie.cart;\n    },\n\n    checkUser() {\n      const passed = _user_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser(cookie.userToken);\n      return Promise[passed ? 'resolve' : 'reject']();\n    }\n\n  };\n}\n\n//# sourceURL=webpack://shinnan/./src/client/cookie/server.js?");

/***/ }),

/***/ "./src/client/pages/account.js":
/*!*************************************!*\
  !*** ./src/client/pages/account.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Account)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie */ \"./src/client/cookie/index.js\");\n\n\n\nfunction Account() {\n  const cookie = (0,_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookie)();\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cookie.getUser());\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    cookie.checkUser().catch(function () {\n      cookie.userLogout();\n      setUser(null);\n    });\n  }, []);\n\n  function login(userName, password) {\n    return cookie.userLogin(userName, password).then(function (token) {\n      setUser(token);\n      return token;\n    });\n  }\n\n  function logout() {\n    cookie.userLogout();\n    setUser(null);\n  }\n\n  function register(userName, password) {\n    return cookie.userRegister(userName, password).then(function (token) {\n      setUser(token);\n      return token;\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"account\"\n  }, user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AccountDetail, {\n    logout: logout,\n    user: user\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Forms, {\n    login: login,\n    register: register\n  }));\n}\n\nfunction Forms({\n  login,\n  register\n}) {\n  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n\n  function setLogin() {\n    setForm(true);\n  }\n\n  function setRegister() {\n    setForm(false);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"form\",\n    className: \"navbar-space\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    onClick: setLogin,\n    \"data-current\": form\n  }, \"\\u6703\\u54E1\\u767B\\u5165\"), \" / \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    onClick: setRegister,\n    \"data-current\": !form\n  }, \"\\u8A3B\\u518A\\u65B0\\u6703\\u54E1\")), form ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LoginForm, {\n    login: login\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(RegisterForm, {\n    register: register\n  })));\n}\n\nfunction LoginForm({\n  login\n}) {\n  const [isLoading, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [userNameElement, setUserNameElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const [passwordElement, setPasswordElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function onSubmitHandle(event) {\n    event.preventDefault();\n    setLoadingState(true);\n    login(userNameElement.value, passwordElement.value).catch(function () {\n      setLoadingState(false);\n      setInputError(true);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: onSubmitHandle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"\\u7528\\u6236\\u540D\\u7A31\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    name: \"username\",\n    type: \"text\",\n    placeholder: \"\",\n    ref: setUserNameElement,\n    autoComplete: \"off\",\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"\\u7528\\u6236\\u5BC6\\u78BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"password\",\n    ref: setPasswordElement,\n    autoComplete: \"off\",\n    required: true\n  })), inputError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: \"error-message\"\n  }, \"\\u5E33\\u865F\\u6216\\u5BC6\\u78BC\\u932F\\u8AA4\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\",\n    \"aria-label\": \"\\u767B\\u5165\\u6309\\u9215\",\n    disabled: isLoading\n  }, isLoading ? '載入中' : '登入'));\n}\n\nfunction RegisterForm(props) {\n  const {\n    register\n  } = props;\n  const [isLoading, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [userNameElement, setUserNameElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const [passwordElement, setPasswordElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const [passwordConfirm, setPasswordConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const [inputError, setInputError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function onSubmitHandle(event) {\n    event.preventDefault();\n    let error = 0;\n\n    if (passwordConfirm.value !== passwordElement.value) {\n      error += 2;\n    }\n\n    ;\n\n    if (passwordElement.value.length < 8) {\n      error += 4;\n    }\n\n    ;\n    if (error) return setInputError(error);\n    register(userNameElement.value, passwordElement.value).catch(function () {\n      setInputError(1);\n      setLoadingState(false);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: onSubmitHandle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"\\u7528\\u6236\\u540D\\u7A31\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    ref: setUserNameElement,\n    name: \"username\",\n    autoComplete: \"off\",\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"\\u7528\\u6236\\u5BC6\\u78BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"password\",\n    ref: setPasswordElement,\n    autoComplete: \"off\",\n    placeholder: \"\\u6700\\u5C11\\u61C9\\u6709 8 \\u500B\\u5B57\\u5143\",\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"password\",\n    ref: setPasswordConfirm,\n    autoComplete: \"off\",\n    placeholder: \"\\u8ACB\\u518D\\u6B21\\u8F38\\u5165\\u5BC6\\u78BC\",\n    required: true\n  })), Boolean(inputError & 1) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: \"error-message\"\n  }, \"\\u4F7F\\u7528\\u8005\\u5E33\\u865F\\u5DF2\\u88AB\\u4F7F\\u7528\"), Boolean(inputError & 2) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: \"error-message\"\n  }, \"\\u8F38\\u5165\\u5BC6\\u78BC\\u4E26\\u4E0D\\u76F8\\u540C\"), Boolean(inputError & 4) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n    className: \"error-message\"\n  }, \"\\u5BC6\\u78BC\\u6700\\u5C11\\u61C9\\u6709 8 \\u500B\\u5B57\\u5143\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\",\n    \"aria-label\": \"\\u8A3B\\u518A\\u6309\\u9215\",\n    disabled: isLoading\n  }, isLoading ? '載入中' : '註冊'));\n}\n\nfunction AccountDetail(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, props.user);\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/account.js?");

/***/ }),

/***/ "./src/client/pages/homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel */ \"./src/client/components/carousel.js\");\n\n\nclass HomePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"homepage\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionAbout, null));\n  }\n\n}\n\nclass SectionHeader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      className: \"fade\",\n      interval: 4000\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/001.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/002.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/003.jpg)\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"images/white_vertical.svg\"\n    })));\n  }\n\n}\n\nclass SectionAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"about\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"\\u8FB2\\u696D \\xD7 \\u7269\\u9023\\u7DB2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"image\"\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/homepage.js?");

/***/ }),

/***/ "./src/client/pages/market.js":
/*!************************************!*\
  !*** ./src/client/pages/market.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Market)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchbar */ \"./src/client/components/searchbar.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\nclass Market extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productList\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n  }\n\n  componentDidMount() {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productList').then(function () {\n      this.setState({\n        data: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productList\n      });\n    }.bind(this));\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"market\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"navbar-space container\",\n      style: {\n        maxWidth: 'var(--max-width-container-xl)'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_searchbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/market.js?");

/***/ }),

/***/ "./src/client/pages/product-detail.js":
/*!********************************************!*\
  !*** ./src/client/pages/product-detail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoodDetailPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/breadcrumb */ \"./src/client/components/breadcrumb.js\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel */ \"./src/client/components/carousel.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\n\nfunction GoodDetailPage() {\n  const {\n    name\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].productDetail);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidUpdate() {\n    if (data?.name != name) _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].request('productDetail', name).then(setData);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"good-detail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/market\"\n  }, \"\\u7DDA\\u4E0A\\u5546\\u5E97\"), name), data?.name == name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GoodDetail, {\n    data: data\n  }) : \"LOADING\", JSON.stringify(data));\n}\n\nfunction GoodDetail({\n  data\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"good-detail-row\"\n  }, data?.images?.map ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"good-detail-images\"\n  }, data.images.map(function (name) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: `/api/files/${name}`,\n      alt: name,\n      key: name\n    });\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"good-detail-images\",\n    src: \"/api/files/default_product.svg\",\n    alt: data.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"good-detail-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"good-name\"\n  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"good-price\"\n  }, \"NT$ \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, data.price))));\n}\n\nGoodDetailPage.getInitialData = async function ({\n  name\n}) {\n  return _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].request('productDetail', name);\n};\n\n//# sourceURL=webpack://shinnan/./src/client/pages/product-detail.js?");

/***/ }),

/***/ "./src/client/pages/product-list.js":
/*!******************************************!*\
  !*** ./src/client/pages/product-list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/carousel */ \"./src/client/components/carousel.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\nfunction ProductList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"product-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-list-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductListComponent, null)));\n}\n\nProductList.getInitialData = async function () {\n  return _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productList');\n};\n\nfunction ProductListComponent(props) {\n  const {\n    page = 0,\n    prePage = 20\n  } = props;\n  const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productList);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function componentDidMount() {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].request('productList').then(setProductList);\n  }, []);\n  return productList?.slice ? productList.slice(page * prePage, (page + 1) * prePage).map(function (product, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      className: \"product-card\",\n      key: product.name,\n      to: product.name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"product-image\",\n      src: `/api/files/${product?.images?.[0] ?? \"default_product.svg\"}`,\n      alt: product.name\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-name\"\n    }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-intro\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-price\"\n    }, product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-detail\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-stock\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"icon\"\n    }, \"\\uEECB\"), \" \\u5EAB\\u5B58 \", product.stock))));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Loading\");\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/product-list.js?");

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_product_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/product-detail */ \"./src/client/pages/product-detail.js\");\n/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/homepage */ \"./src/client/pages/homepage.js\");\n/* harmony import */ var _pages_market__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/market */ \"./src/client/pages/market.js\");\n/* harmony import */ var _pages_product_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/product-list */ \"./src/client/pages/product-list.js\");\n/* harmony import */ var _pages_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/account */ \"./src/client/pages/account.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_homepage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n}, {\n  path: '/market',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_market__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n  children: [{\n    path: '/market',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }, {\n    path: '/market/:name',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product_detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }]\n}, {\n  path: '/account',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_account__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n}, {\n  path: '*',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)\n}]);\n\n//# sourceURL=webpack://shinnan/./src/client/routes/index.js?");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst store = function () {\n  const configs = {\n    productList: {\n      url: 'api/products/',\n      method: 'get'\n    },\n\n    productDetail(name) {\n      return {\n        url: encodeURI(`api/products/${name}`),\n        method: 'get'\n      };\n    }\n\n  };\n  const store = {\n    async request(name, ...arg) {\n      const config = configs[name] instanceof Function ? configs[name](...arg) : configs[name];\n      return await axios__WEBPACK_IMPORTED_MODULE_0___default().request(config).then(function (response) {\n        Object.assign(store, {\n          [name]: response.data\n        });\n        return response.data;\n      }.bind(this));\n    },\n\n    init() {\n      return Object.entries(configs).map(function ([name]) {\n        return store[name] = null;\n      });\n    }\n\n  };\n  store.init();\n  return store;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://shinnan/./src/client/store/index.js?");

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/app */ \"./src/client/app.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/routes */ \"./src/client/routes/index.js\");\n/* harmony import */ var _client_cookie_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/cookie/server */ \"./src/client/cookie/server.js\");\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = process.env.HOST ?? 'http://localhost:5000';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  return fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'index.html'), function (err, data) {\n    if (err) throw err;\n    res.set('content-type', 'text/html;charset=utf-8');\n    return Promise.all((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_client_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], req.path).map(function ({\n      params,\n      route: {\n        element\n      }\n    }) {\n      return element?.type.getInitialData && element.type.getInitialData(params);\n    })).then(function () {\n      const content = data.toString();\n      const replacement = {\n        base: path__WEBPACK_IMPORTED_MODULE_2___default().relative(req.path, \"/\") || '.',\n        content: react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, {\n          location: req.path\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_app__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          cookies: (0,_client_cookie_server__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(req.cookies)\n        }))))\n      };\n      return res.end(Object.entries(replacement).reduce(function (prev, [key, value]) {\n        return prev.replaceAll(`{{ ${key} }}`, value);\n      }, content));\n    });\n  });\n}\n\n//# sourceURL=webpack://shinnan/./src/default.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis */ \"./src/apis/index.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.disable('x-powered-by');\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(function (req, res, next) {\n  res.set('x-content-type-options', 'nosniff');\n  next();\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.all(['/api', '/api/:api', '/api/:api/:name', '/api/*'], _apis__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.get('*', _default__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst port = process.env.PORT ?? 5000;\napp.listen(port, function () {\n  console.log(`Your app is listening on port ${process.env.port ?? port}.`);\n});\n\n//# sourceURL=webpack://shinnan/./src/index.js?");

/***/ }),

/***/ "./src/user-manager/index.js":
/*!***********************************!*\
  !*** ./src/user-manager/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst userManager = {\n  users: {},\n\n  getUser(token) {\n    const user = this.users[token] ?? null;\n    this.clearExpiredUsers();\n    if (user?.expriedTime < Date.now()) return null;\n    return user;\n  },\n\n  setUser(user) {\n    const dateTime = Date.now();\n    const token = Buffer.concat([toBuffer(dateTime), new Buffer(generateToken(user))]).toString('base64url');\n    this.users[token] = Object.assign({}, user, {\n      expriedTime: Date.now() + 7 * 24 * 36e5\n    });\n    return token;\n  },\n\n  removeUser(token) {\n    return this.users[token] ? delete this.users[token] : false;\n  },\n\n  clearExpiredUsers() {\n    const {\n      users\n    } = this;\n    return new Promise(function (resolve) {\n      const now = Date.now();\n      Object.entries(users).forEach(function ([token, user]) {\n        if (user.expriedTime < now) delete users[token];\n      });\n      return resolve();\n    });\n  }\n\n};\n\nfunction generateToken({\n  userName,\n  password\n}) {\n  console.log(userName, password);\n  const charsetList = [...userName, ...password];\n  const tokenList = [];\n\n  for (let i in charsetList.slice(0, 10)) {\n    const index = Math.floor(charsetList.length * Math.random());\n    tokenList.push(charsetList[index]);\n    charsetList.splice(index, 1);\n  }\n\n  return tokenList.join('');\n}\n\nfunction toBuffer(number) {\n  const buffer = Buffer.alloc(Math.floor(Math.log2(number) / 8) + 1);\n\n  for (let [int, index] = [Math.floor(number), 0]; int != 0; [int, index] = [Math.floor(int / 256), index + 1]) buffer.writeUInt8(int % 256, index);\n\n  return buffer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userManager);\n\n//# sourceURL=webpack://shinnan/./src/user-manager/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-fileupload");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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