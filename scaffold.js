/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var layout = __webpack_require__(3);

	window.metadevLayout = layout;


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: "<%\nvar styles = require('./index.css');\nvar header = require('./components/header');\nvar graphPaper = require('./components/graph-paper');\n%>\n<%- graphPaper() %>\n<div class=\"page\">\n  <%- header() %>\n	<%- body %>\n</div>\n",
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push("");
	                __stack.lineno = 1;
	                var styles = __webpack_require__(10);
	                var header = __webpack_require__(5);
	                var graphPaper = __webpack_require__(6);
	                buf.push("\n", (__stack.lineno = 6, graphPaper()), '\n<div class="page">\n  ', (__stack.lineno = 8, header()), "\n	", (__stack.lineno = 9, body), "\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var styles = __webpack_require__(19);
	var html = __webpack_require__(21);

	module.exports = function () {
	  return html;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var graphPaper = __webpack_require__(26)();

	module.exports = function () {
	  return graphPaper;
	}


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/index.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, "\nbody {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n\tfont-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tfont-size: 15px;\n\tline-height: 1.42857143;\n  background-color: #EEE;\n}\n\nbody, a {\n  color: #23232F;\n}\n\n.page {\n  color: #23232F;\n  background: white;\n  max-width: 1200px;\n  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.12);\n  margin: 0 auto 0 auto;\n  box-sizing: border-box;\n  padding: 2rem;\n  padding-bottom: 4em;\n}\n\n.page-title {\n  padding-left: 2rem;\n  font-size: 24px;\n}\n\n\n.team {\n  /*box-shadow: 0 0 16px 1px rgba(0,0,0,0.52);*/\n  /*border-top: 1px solid #B32B2B;*/\n  margin: 5px auto 0 auto;\n}\n\n.contact-us {\n  background: #333;\n}\n\n.contact-us h2 {\n  color: #DDD;\n}\n.contact-col {\n  padding: 5px 80px;\n}\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #b4bcc2;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 39px;\n}\nh2,\n.h2 {\n  font-size: 32px;\n}\nh3,\n.h3 {\n  font-size: 26px;\n}\nh4,\n.h4 {\n  font-size: 19px;\n}\nh5,\n.h5 {\n  font-size: 15px;\n}\nh6,\n.h6 {\n  font-size: 13px;\n}\np {\n  margin: 0 0 10.5px;\n}\n", ""]);

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/header/header.css", function() {
			var newContent = require("!!/home/dsont/dev/metadev/client/node_modules/css-loader/index.js!/home/dsont/dev/metadev/client/src/components/header/header.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, ".page-nav {\n\tline-height: 60px;\n  padding: 0 60px;\n\tmax-width: 1200px;\n\tmargin: auto;\n}\n\n.page-nav .title {\n\tpadding: 0 15px;\n  font-size: 120%;\n}\n\n.page-nav a {\n\tpadding: 0 15px;\n\ttext-decoration: none;\n  font-size: 105%;\n}\n", ""]);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"row between-xs page-nav\">\n  <div>\n\t\t<span class=\"page-title\">MetaDev Foundation</span>\n  </div>\n\n\t<div class=\"box\">\n\t\t<a href=\"http://forum.metadevfoundation.org\">Forums</a>\n\t\t<a href=\"http://blog.metadevfoundation.org\">Blog</a>\n\t\t<a href=\"http://shop.metadevfoundation.org\">Shop</a>\n\t</div>\n</div>\n";

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n<%\n	var total = 75;\n\n	var width = 1000;\n	var height = 1000;\n%>\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to side -->\n					<line	x1="0" x2="<%= width %>" y1="<%= dy %>" y2="<%= dy %>" />\n					<line	x1="<%= dx %>" x2="<%= dx %>" y1="0" y2="<%= height %>" />\n				<% } %>\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to bottom -->\n				<% } %>\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push("<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n");
	                __stack.lineno = 22;
	                var total = 75;
	                var width = 1e3;
	                var height = 1e3;
	                buf.push('\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				');
	                __stack.lineno = 37;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push('\n					<!-- corner to side -->\n					<line	x1="0" x2="', escape((__stack.lineno = 41, width)), '" y1="', escape((__stack.lineno = 41, dy)), '" y2="', escape((__stack.lineno = 41, dy)), '" />\n					<line	x1="', escape((__stack.lineno = 42, dx)), '" x2="', escape((__stack.lineno = 42, dx)), '" y1="0" y2="', escape((__stack.lineno = 42, height)), '" />\n				');
	                    __stack.lineno = 43;
	                }
	                buf.push("\n\n				");
	                __stack.lineno = 45;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push("\n					<!-- corner to bottom -->\n				");
	                    __stack.lineno = 49;
	                }
	                buf.push('\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n');
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ]);