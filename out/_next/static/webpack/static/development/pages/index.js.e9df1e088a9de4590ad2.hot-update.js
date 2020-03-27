webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/home/HomeComponent.tsx":
/*!***********************************************!*\
  !*** ./src/containers/home/HomeComponent.tsx ***!
  \***********************************************/
/*! exports provided: HomeComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_chat_ChatComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/components/chat/ChatComponent */ "./src/components/chat/ChatComponent.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _locales_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/locales/i18n */ "./src/locales/i18n.ts");
/* harmony import */ var react_idle_timer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-idle-timer */ "./node_modules/react-idle-timer/dist/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_telarTextLogo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/layouts/telarTextLogo */ "./src/layouts/telarTextLogo/index.tsx");
/* harmony import */ var _components_homeHeader_HomeHeaderComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ~/components/homeHeader/HomeHeaderComponent */ "./src/components/homeHeader/HomeHeaderComponent.tsx");
/* harmony import */ var _store_actions_chatActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ~/store/actions/chatActions */ "./src/store/actions/chatActions.ts");
/* harmony import */ var _store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ~/store/actions/globalActions */ "./src/store/actions/globalActions.ts");
/* harmony import */ var _homeStyles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./homeStyles */ "./src/containers/home/homeStyles.ts");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./menuItems */ "./src/containers/home/menuItems.tsx");







var _jsxFileName = "/Users/Qolzam/projects/ts-ui/src/containers/home/HomeComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement;
// - Import react components














var CookieConsent = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");











var HomeComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(HomeComponent, _Component);

  /**
   * Portal Container
   */
  // Constructor
  function HomeComponent(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeComponent);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeComponent).call(this, props));
    _this.idleTimer = void 0;
    _this.container = null;

    _this.handleDrawerToggle = function () {
      _this.setState({
        drawerOpen: !_this.state.drawerOpen
      });
    };

    _this.idleTimer = react__WEBPACK_IMPORTED_MODULE_19___default.a.createRef(); // Default state

    _this.state = {
      drawerOpen: false
    }; // Binding function to `this`

    _this.toggleChat = _this.toggleChat.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onActive = _this.onActive.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onIdle = _this.onIdle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }
  /**
   * Handle drawer toggle
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
    /**
     * Toggle chat window to open/close
     */

  }, {
    key: "toggleChat",
    value: function toggleChat() {
      var _this$props = this.props,
          isChatOpen = _this$props.isChatOpen,
          openChat = _this$props.openChat,
          closeChat = _this$props.closeChat;

      if (isChatOpen) {
        closeChat();
      } else {
        openChat();
      }
    }
  }, {
    key: "onActive",
    value: function onActive() {
      console.log('time remaining', this.idleTimer.current.getRemainingTime());
    }
  }, {
    key: "onIdle",
    value: function onIdle() {
      console.log('last active', this.idleTimer.current.getLastActiveTime());
    }
    /**
     * Render DOM component
     */

  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          loaded = _this$props2.loaded,
          authed = _this$props2.authed,
          showSendFeedback = _this$props2.showSendFeedback,
          t = _this$props2.t,
          classes = _this$props2.classes,
          theme = _this$props2.theme,
          isChatOpen = _this$props2.isChatOpen;
      var drawerOpen = this.state.drawerOpen;

      var drawer = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, Object(_menuItems__WEBPACK_IMPORTED_MODULE_28__["menuItems"])(this.props.uid, showSendFeedback).map(function (item, index) {
        if (item.path) {
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            key: "home-menu-".concat(index),
            href: item.path,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
            style: {
              color: 'rgb(117, 117, 117)'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, item.icon), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: "home-menu-".concat(index),
            primary: item.label,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          })));
        } else if (item.onClick) {
          return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
            key: "home-menu-".concat(index),
            onClick: item.onClick,
            style: {
              color: 'rgb(117, 117, 117)'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, item.icon), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
            primary: item.label,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }));
        } else {
          return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: "home-menu-divider".concat(index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          });
        }
      }));

      var anchor = theme.direction === 'rtl' ? 'right' : 'left';

      var mainElement = __jsx("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("div", {
        className: classes.appFrame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(_components_homeHeader_HomeHeaderComponent__WEBPACK_IMPORTED_MODULE_24__["default"], {
        onToggleDrawer: this.handleDrawerToggle,
        drawerStatus: this.state.drawerOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
        mdUp: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "temporary",
        open: this.state.drawerOpen,
        classes: {
          paper: classes.drawerPaper
        },
        onClose: this.handleDrawerToggle,
        ModalProps: {
          keepMounted: true // Better open performance on mobile.

        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        className: classes.drawerHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(_layouts_telarTextLogo__WEBPACK_IMPORTED_MODULE_23__["default"], {
        viewBox: "0 0 700 100",
        className: classes.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          color: 'rgb(117, 117, 117)',
          width: '210px',
          paddingTop: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), drawer)))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
        smDown: true,
        implementation: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "persistent",
        open: this.state.drawerOpen,
        classes: {
          paper: classes.drawerPaperLarge
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: classes.menu,
        style: {
          color: 'rgb(117, 117, 117)',
          width: '210px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, drawer)))), __jsx("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.content, classes["content-".concat(anchor)], (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.contentShift, drawerOpen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes["contentShift-".concat(anchor)], drawerOpen), _classNames)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, this.props.children, ">")), __jsx(_components_chat_ChatComponent__WEBPACK_IMPORTED_MODULE_17__["default"], {
        open: isChatOpen,
        onToggle: this.toggleChat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }));

      return __jsx(react_idle_timer__WEBPACK_IMPORTED_MODULE_21__["default"], {
        ref: this.idleTimer,
        onActive: this.onActive,
        onIdle: this.onIdle,
        timeout: 1000 * 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, mainElement);
    }
  }]);

  return HomeComponent;
}(react__WEBPACK_IMPORTED_MODULE_19__["Component"]); // - Map dispatch to props

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    openChat: function openChat() {
      return dispatch(_store_actions_chatActions__WEBPACK_IMPORTED_MODULE_25__["openChat"]());
    },
    closeChat: function closeChat() {
      return dispatch(_store_actions_chatActions__WEBPACK_IMPORTED_MODULE_25__["closeChat"]());
    },
    loadData: function loadData() {
      return dispatch(_store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__["loadInitialData"]());
    },
    defaultDataDisable: function defaultDataDisable() {
      dispatch(_store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__["defaultDataDisable"]());
    },
    defaultDataEnable: function defaultDataEnable() {
      dispatch(_store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__["defaultDataEnable"]());
    },
    goTo: function goTo(url) {
      return next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push(url);
    },
    showSendFeedback: function showSendFeedback() {
      return dispatch(_store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__["showSendFeedback"]());
    },
    hideSendFeedback: function hideSendFeedback() {
      return dispatch(_store_actions_globalActions__WEBPACK_IMPORTED_MODULE_26__["hideSendFeedback"]());
    }
  };
};
/**
 * Map state to props
 */


var mapStateToProps = function mapStateToProps(state, ownProps) {
  var isChatOpen = state.getIn(['chat', 'chatOpen']);
  var uid = state.getIn(['authorize', 'uid'], {});
  var global = state.get('global', {});
  return {
    isChatOpen: isChatOpen,
    uid: uid,
    authed: state.getIn(['authorize', 'authed'], false),
    global: global,
    loaded: state.getIn(['user', 'loaded']) && state.getIn(['imageGallery', 'loaded']) && state.getIn(['circle', 'loaded']) && state.getIn(['global', 'defaultLoadDataStatus'])
  };
}; // - Connect component to redux store


var translateWrapper = Object(_locales_i18n__WEBPACK_IMPORTED_MODULE_20__["withTranslation"])('common')(HomeComponent);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_18__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_22__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_15__["withStyles"])(_homeStyles__WEBPACK_IMPORTED_MODULE_27__["homeStyles"], {
  withTheme: true
})(translateWrapper))));

/***/ })

})
//# sourceMappingURL=index.js.e9df1e088a9de4590ad2.hot-update.js.map