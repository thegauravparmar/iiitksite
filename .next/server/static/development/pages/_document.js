module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/apple-icon.png":
/*!***********************************!*\
  !*** ./assets/img/apple-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/img/favicon.png":
/*!********************************!*\
  !*** ./assets/img/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_DETAIL = 'export-detail.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.ROUTES_MANIFEST = 'routes-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;
exports.TEMPORARY_REDIRECT_STATUS = 307;
exports.PERMANENT_REDIRECT_STATUS = 308;
exports.STATIC_PROPS_ID = '__N_SSG';
exports.SERVER_PROPS_ID = '__N_SSP';

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/document-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ../lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "./node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "./node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, this.getPolyfillScripts(), page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\TheGauravParmar\\Documents\\GitHub\\iiitksite\\pages\\_document.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx("html", {
      lang: "en",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("link", {
      rel: "shortcut icon",
      href: __webpack_require__(/*! assets/img/favicon.png */ "./assets/img/favicon.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: __webpack_require__(/*! assets/img/apple-icon.png */ "./assets/img/apple-icon.png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("link", {
      href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("body", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      id: "page-transition",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    })))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
  return _objectSpread({}, initialProps, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: "styles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, initialProps.styles, sheets.getStyleElement())]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map