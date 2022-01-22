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

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ \"./src/client/components/navbar.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/client/routes/index.js\");\n\n\n\nclass App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderRoutes, null));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/app.js?");

/***/ }),

/***/ "./src/client/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/client/components/carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carousel\": () => (/* binding */ Carousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nclass Carousel extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    const items = this.props.children.filter(element => element);\n    this.state = {\n      items,\n      current: 0,\n      isAnimating: false,\n      timeout: this.props.interval ?? 5000\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n    this.componentWillUnmount = this.componentWillUnmount.bind(this);\n    this.componentDidUpdate = this.componentDidUpdate.bind(this);\n    this.nextTurn = this.nextTurn.bind(this);\n    this.renderItems = this.renderItems.bind(this);\n  }\n\n  componentDidMount() {\n    this.setState({\n      interval: this.state.timeout && setInterval(this.nextTurn, this.state.timeout < 1000 ? 1000 : this.state.timeout)\n    });\n  }\n\n  componentWillUnmount() {\n    if (this.state.timeout) clearInterval(this.state.interval);\n  }\n\n  componentDidUpdate() {\n    if (this.state.isAnimating) setTimeout(function () {\n      this.setState({\n        isAnimating: false\n      });\n    }.bind(this), 1000);\n  }\n\n  nextTurn() {\n    this.setState({\n      current: ++this.state.current == this.state.items.length ? 0 : this.state.current,\n      isAnimating: true\n    });\n  }\n\n  renderItems() {\n    const {\n      current,\n      items,\n      isAnimating\n    } = this.state;\n    return items.map(function (item, index) {\n      const className = [\"carousel-item\", current == index && \"active\", (current == items.length - 1 ? 0 : current + 1) == index && \"next\", isAnimating && (current || items.length) - 1 == index && \"animating\", isAnimating && current == index && \"animating\"].filter(Boolean).join(\" \");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: className,\n        key: index\n      }, item);\n    }.bind(this));\n  }\n\n  render() {\n    const {\n      className,\n      children,\n      ...props\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: ['carousel', className].filter(Boolean).join(\" \")\n    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"carousel-inner\"\n    }, this.renderItems()));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/carousel.js?");

/***/ }),

/***/ "./src/client/components/navbar.js":
/*!*****************************************!*\
  !*** ./src/client/components/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nclass Navbar extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isCollapse: true\n    };\n    this.collapseProps = this.collapseProps.bind(this);\n    this.togglerProps = this.togglerProps.bind(this);\n    this.getCollaspe = this.getCollaspe.bind(this);\n    this.toggleNavbar = this.toggleNavbar.bind(this);\n    this.closeNavbar = this.closeNavbar.bind(this);\n  }\n\n  toggleNavbar() {\n    this.setState({\n      isCollapse: !this.state.isCollapse\n    });\n  }\n\n  closeNavbar() {\n    this.setState({\n      isCollapse: true\n    });\n  }\n\n  getCollaspe(navbarCollapse) {\n    this.setState({\n      navbarCollapse\n    });\n  }\n\n  collapseProps() {\n    return {\n      className: ['navbar-collapse', this.state.isCollapse && 'collapsed'].filter(Boolean).join(\" \"),\n      style: this.state.isCollapse ? null : {\n        height: this.state.navbarCollapse?.children[0].getBoundingClientRect().height\n      }\n    };\n  }\n\n  togglerProps() {\n    return {\n      className: ['navbar-toggler', !this.state.isCollapse && 'active'].filter(Boolean).join(\" \"),\n      role: 'button',\n      'aria-label': 'navbar toggler',\n      onClick: this.toggleNavbar\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n      id: \"navbar\",\n      role: \"navigation\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"navbar-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/\",\n      className: \"navbar-brand\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"/images/brand.svg\",\n      alt: \"\\u65B0\\u5357\\u667A\\u6167\\u8FB2\\u5712\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", this.togglerProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"navbar-toggler-icon\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({}, this.collapseProps(), {\n      ref: this.getCollaspe\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"navbar-collapse-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"navbar-nav\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/\",\n      className: \"nav-link\",\n      onClick: this.closeNavbar\n    }, \"\\u9996\\u9801\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/news\",\n      className: \"nav-link\",\n      onClick: this.closeNavbar\n    }, \"\\u6700\\u65B0\\u6D88\\u606F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/market\",\n      className: \"nav-link\",\n      onClick: this.closeNavbar\n    }, \"\\u7DDA\\u4E0A\\u5546\\u5E97\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/account\",\n      className: \"nav-link nav-option\",\n      onClick: this.closeNavbar\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"icon\"\n    }, '\\uE77B'), \" \", this.state.isLogin ? '會員中心' : '登入 / 註冊')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"nav-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/cart\",\n      className: \"nav-link nav-option\",\n      onClick: this.closeNavbar\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"icon\"\n    }, '\\uF342'), \" \\u6211\\u7684\\u5546\\u54C1\")))))));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/components/navbar.js?");

/***/ }),

/***/ "./src/client/pages/homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel */ \"./src/client/components/carousel.js\");\n\n\nclass HomePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"homepage\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionAbout, null));\n  }\n\n}\n\nclass SectionHeader extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n      className: \"fade\",\n      interval: 4000\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/001.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/002.jpg)\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"img\",\n      style: {\n        backgroundImage: \"url(images/003.jpg)\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"images/white_vertical.svg\"\n    })));\n  }\n\n}\n\nclass SectionAbout extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n      className: \"about\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"\\u8FB2\\u696D \\xD7 \\u7269\\u9023\\u7DB2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"image\"\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack://shinnan/./src/client/pages/homepage.js?");

/***/ }),

/***/ "./src/client/pages/market.js":
/*!************************************!*\
  !*** ./src/client/pages/market.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Market)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\nclass Market extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].goodlists\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n  }\n\n  componentDidMount() {\n    _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request('goodlists').then(function () {\n      this.setState({\n        data: _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].goodlists\n      });\n    }.bind(this));\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"market\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"reserve\"\n    }), JSON.stringify(this.state.data));\n  }\n\n}\n\nMarket.getInitialData = async function () {\n  return _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request('goodlists');\n};\n\n//# sourceURL=webpack://shinnan/./src/client/pages/market.js?");

/***/ }),

/***/ "./src/client/routes/index.js":
/*!************************************!*\
  !*** ./src/client/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/homepage */ \"./src/client/pages/homepage.js\");\n/* harmony import */ var _pages_market__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/market */ \"./src/client/pages/market.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst routes = [];\n\nroutes.renderRoutes = function ({\n  routes = this\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, routes.map(function ({\n    component: Component,\n    componentProps = {},\n    ...props\n  }, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({\n      key: index,\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, componentProps)\n    }, props));\n  }.bind(this)));\n}.bind(routes);\n\nroutes.matchRoutes = function matchRoutes(rawPath, routes = this, root = \"\") {\n  return routes.reduce(function (matches, route) {\n    const comparePath = `${root}/${route.path}`.replaceAll(/\\//gm, '//').replaceAll(/\\/:.*?\\//gm, '/*/').replaceAll(/\\/+/gm, '/');\n\n    if ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.matchPath)(comparePath, rawPath)) {\n      matches.push(route);\n\n      if (route.component == this.renderRoutes) {\n        matches.push(...this.matchRoutes(rawPath, route.componentProps.routes, comparePath.substring(0, comparePath.length - 2)));\n      }\n    }\n\n    return matches;\n  }.bind(this), []);\n}.bind(routes);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(routes, [{\n  exact: true,\n  path: '/',\n  component: _pages_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/market/*',\n  component: routes.renderRoutes,\n  componentProps: {\n    routes: [{\n      path: '/',\n      component: _pages_market__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }]\n  }\n}]));\n\n//# sourceURL=webpack://shinnan/./src/client/routes/index.js?");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function store() {\n  const store = {};\n  const configs = {\n    userlist: {\n      url: 'https://reqres.in/api/users?page=1',\n      method: 'get'\n    }\n  };\n\n  store.init = function () {\n    return Object.entries(configs).map(function ([name]) {\n      return store[name] = {};\n    });\n  }.bind(store);\n\n  store.request = async function (name) {\n    return await axios__WEBPACK_IMPORTED_MODULE_0___default().request(configs[name]).then(function (response) {\n      return Object.assign(store[name], response.data);\n    }.bind(this));\n  }.bind(store);\n\n  store.init();\n  return store;\n})());\n\n//# sourceURL=webpack://shinnan/./src/client/store/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/app */ \"./src/client/app.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/routes */ \"./src/client/routes/index.js\");\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.disable('x-powered-by');\napp.use(function (req, res, next) {\n  res.set('x-content-type-options', 'nosniff');\n  next();\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.get('*', function (req, res) {\n  return fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, 'index.html'), function (err, data) {\n    if (err) throw err;\n    res.set('content-type', 'text/html;charset=utf-8');\n    return Promise.all(_client_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].matchRoutes(req.path).map(function ({\n      component\n    }) {\n      return component.getInitialData && component.getInitialData();\n    })).then(function () {\n      const content = data.toString();\n      const replacement = {\n        base: path__WEBPACK_IMPORTED_MODULE_2___default().relative(req.path, \"/\") || '.',\n        content: react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n          location: req.path\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_app__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))))\n      };\n      return res.end(Object.entries(replacement).reduce(function (prev, [key, value]) {\n        return prev.replaceAll(`{{ ${key} }}`, value);\n      }, content));\n    });\n  });\n});\nconst port = process.env.PORT ?? 5000;\napp.listen(port, function () {\n  console.log(`Your app is listening on port ${process.env.port ?? port}.`);\n});\n\n//# sourceURL=webpack://shinnan/./src/index.js?");

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