/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"json-server\""); }());
	module.exports = __webpack_require__(23);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(2);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(5);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _video = __webpack_require__(9);
	
	var _video2 = _interopRequireDefault(_video);
	
	var _newspaper = __webpack_require__(11);
	
	var _newspaper2 = _interopRequireDefault(_newspaper);
	
	var _my = __webpack_require__(13);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _details = __webpack_require__(15);
	
	var _details2 = _interopRequireDefault(_details);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(18);
	
	var common = __webpack_require__(7);
	
	var layout = __webpack_require__(22);
	
	common.render(layout);
	
	// require('./scripts/views/index.js')
	
	var routes = [{
		path: '/',
		component: _index2.default,
		children: [{
			path: '/',
			component: _home2.default
	
		}, {
			path: '/video',
			component: _video2.default
	
		}, {
			path: '/newspaper',
			component: _newspaper2.default
	
		}, {
			path: '/my',
			component: _my2.default
	
		}]
	}, {
		path: '/details/:id',
		component: _details2.default
	}];
	var router = new VueRouter({
		routes: routes // （缩写）相当于 routes: routes
	});
	
	var app = new Vue({
		router: router
	}).$mount('#app');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3d32a8c3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3d32a8c3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				navIndex: 0,
				footerNav: [{
					router: "/",
					icon: "&#xe609;",
					footerName: "要闻"
				}, {
					router: "/video",
					icon: "&#xe63f;",
					footerName: "视频"
				}, {
					router: "/newspaper",
					icon: "&#xe62b;",
					footerName: "报纸"
				}, {
					router: "/my",
					icon: "&#xe66e;",
					footerName: "我的"
				}]
	
			};
		},
		methods: {
			changeNav: function (index) {
	
				this.navIndex = index;
				//console.log(navIndex) 不写this要报错
			}
		}
	
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-index",
	    attrs: {
	      "id": "m-index"
	    }
	  }, [_c('router-view'), _vm._v(" "), _c('footer', [_c('ul', _vm._l((_vm.footerNav), function(item, index) {
	    return _c('li', {
	      class: {
	        active: _vm.navIndex == index
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeNav(index)
	        }
	      }
	    }, [_c('router-link', {
	      attrs: {
	        "to": item.router
	      }
	    }, [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(item.icon)
	      }
	    }), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.footerName))])])], 1)
	  }))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3d32a8c3", module.exports)
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1807ea7e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1807ea7e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var common = __webpack_require__(7);
	
	module.exports = {
		data: function () {
			return {
				swiper: null,
				navIndex: 0,
				list: []
			};
		},
		mounted: function () {
	
			fetch('/api/tit').then(response => response.json()).then(res => {
				var that = this;
				that.list = res;
				that.swiper = new Swiper('#index-swiper', {
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					loop: true,
					onSlideChangeStart: function (swiper) {
						that.navIndex = swiper.activeIndex;
					}
				});
				//common.isAllLoaded('#index-scroll .section-container', function () {
				setTimeout(function () {
					common.scroll(that);
				}, 1000);
	
				//})
			}).catch(e => console.log("Oops, error", e));
		},
		methods: {
			changeT: function (index) {
				this.swiper.slideTo(index);
				this.navIndex = index;
			}
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var common = {
	  render: function render(str) {
	    var body = document.body;
	    body.innerHTML = str + body.innerHTML;
	  },
	
	  isAllLoaded: function isAllLoaded(scope, cb) {
	    var t_img; // 定时器
	    var isLoad = true; // 控制变量
	
	    // 判断图片加载状况，加载完成后回调
	    return isImgLoad(cb);
	
	    // 判断图片加载的函数
	    function isImgLoad(callback) {
	      // 查找所有图片，迭代处理
	      $(scope).find('img').each(function () {
	        // 找到为0就将isLoad设为false，并退出each
	        if (this.height === 0) {
	          isLoad = false;
	          return false;
	        }
	      });
	      // 为true，没有发现为0的。加载完毕
	      if (isLoad) {
	        clearTimeout(t_img); // 清除定时器
	        // 回调函数
	        callback();
	        // 为false，因为找到了没有加载完成的图，将调用定时器递归
	      } else {
	        isLoad = true;
	        t_img = setTimeout(function () {
	          isImgLoad(callback); // 递归扫描
	        }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	      }
	    }
	  },
	
	
	  scroll: function scroll(that) {
	    var myScroll = new IScroll('#index-scroll0', {});
	
	    var scrollHeight = 40;
	    $('.head.hide').removeClass('hide');
	    $('.foot.hide').removeClass('hide');
	    myScroll.scrollBy(0, -scrollHeight);
	
	    var head = $('.head img'),
	        topImgHasClass = head.hasClass('up');
	    var foot = $('.foot img'),
	        bottomImgHasClass = head.hasClass('down');
	    myScroll.on('scroll', function () {
	      var y = this.y,
	          maxY = this.maxScrollY - y;
	      if (y >= 0) {
	        !topImgHasClass && head.addClass('up');
	        return '';
	      }
	      if (maxY >= 0) {
	        !bottomImgHasClass && foot.addClass('down');
	        return '';
	      }
	    });
	
	    myScroll.on('scrollEnd', function () {
	      if (this.y >= -scrollHeight && this.y < 0) {
	        myScroll.scrollTo(0, -scrollHeight);
	        head.removeClass('up');
	      } else if (this.y >= 0) {
	        head.attr('src', '/images/ajax-loader.gif');
	        //TODO ajax下拉刷新数据
	
	        setTimeout(function () {
	          myScroll.scrollTo(0, -scrollHeight);
	          head.removeClass('up');
	          head.attr('src', '/images/arrow.png');
	        }, 500);
	      }
	
	      var maxY = this.maxScrollY - this.y;
	      if (maxY > -scrollHeight && maxY < 0) {
	        var self = this;
	        myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
	        foot.removeClass('down');
	      } else if (maxY >= 0) {
	        foot.attr('src', '/images/ajax-loader.gif');
	        //TODO ajax上拉加载数据
	        var self = this;
	        fetch('/api/more').then(function (response) {
	          return response.json();
	        }).then(function (res) {
	          for (var i = 0; i < that.list.length; i++) {
	            that.list[i].lists = that.list[i].lists.concat(res);
	          }
	
	          myScroll.refresh();
	
	          // myScroll.scrollTo(0, self.y + scrollHeight);
	          myScroll.scrollTo(0, self.maxScrollY);
	          foot.removeClass('down');
	          foot.attr('src', '/images/arrow.png');
	        });
	      }
	    });
	  }
	};
	
	module.exports = common;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_vm._m(0), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.list), function(item, index) {
	    return _c('li', {
	      class: {
	        active: index == _vm.navIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeT(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item.title))])
	  })), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])]), _vm._v(" "), _c('section', [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "index-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, _vm._l((_vm.list), function(item, index) {
	    return _c('div', {
	      staticClass: "swiper-slide",
	      attrs: {
	        "id": 'index-scroll' + index
	      }
	    }, [_c('div', {
	      staticClass: "scroll-container"
	    }, [_vm._m(1, true), _vm._v(" "), _c('div', {
	      staticClass: "section-container"
	    }, [_c('div', {
	      staticClass: "banner"
	    }, [_c('router-link', {
	      attrs: {
	        "to": '/details/' + item.id
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": item.banImgSrc
	      }
	    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.banTitle))]), _vm._v(" "), _c('div', [_c('span', [_vm._v(_vm._s(item.banType))]), _vm._v(" "), _c('ul', [_c('li', {
	      staticClass: "yo-ico"
	    }, [_vm._v("" + _vm._s(item.banShare))])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.banTime))])])])], 1), _vm._v(" "), _vm._l((item.lists), function(lists, index) {
	      return _c('dl', [_c('dt', [_c('router-link', {
	        attrs: {
	          "to": '/details/' + lists.listId
	        }
	      }, [_c('img', {
	        attrs: {
	          "src": lists.listImgSrc
	        }
	      })])], 1), _vm._v(" "), _c('dd', [_c('router-link', {
	        attrs: {
	          "to": '/details/' + lists.listId
	        }
	      }, [_c('p', [_vm._v(_vm._s(lists.listTitle))]), _vm._v(" "), _c('ul', [_c('li', [_c('span', [_vm._v(_vm._s(lists.listPre))]), _vm._v(" "), _c('span', {
	        staticClass: "yo-ico"
	      }, [_vm._v("" + _vm._s(lists.listComment))]), _vm._v(" "), _c('span', {
	        staticClass: "yo-ico"
	      }, [_vm._v("" + _vm._s(lists.listShare))])]), _vm._v(" "), _c('li', [_c('span', [_vm._v(_vm._s(lists.listTime))])])])])], 1)])
	    })], 2), _vm._v(" "), _vm._m(2, true)])])
	  }))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', {}, [_c('img', {
	    attrs: {
	      "src": "/images/ic_activity.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/pic_nav_logo_white.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/ic_nav_search_white.png"
	    }
	  })])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot hide"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1807ea7e", module.exports)
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\video.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8670d028", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8670d028", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] video.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-video"
	  }, [_c('header', [_c('ul', [_c('li', {}, [_c('img', {
	    attrs: {
	      "src": "/images/ic_activity.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/pic_nav_logo_white.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/ic_nav_search_white.png"
	    }
	  })])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8670d028", module.exports)
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\newspaper.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-227bc28a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-227bc28a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] newspaper.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-newspaper"
	  }, [_c('header', [_c('ul', [_c('li', {}, [_c('img', {
	    attrs: {
	      "src": "/images/ic_activity.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/pic_nav_logo_white.png"
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/ic_nav_search_white.png"
	    }
	  })])])]), _vm._v("\n\nnewspaper\n")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-227bc28a", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\my.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c8fa6aea", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c8fa6aea", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] my.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-my"
	  }, [_c('section', [_vm._v("\n\t\t1111\n\t")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c8fa6aea", module.exports)
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(16)
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue\\vue_js\\src\\scripts\\components\\details.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-30e607f3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-30e607f3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] details.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	
		data: function () {
	
			return {
				dList: [],
				dImgMes: [],
				dRead: []
	
			};
		},
		mounted: function () {
			fetch("/api/dList").then(res => res.json()).then(data => {
				for (var i in data) {
					if (this.$route.params.id == data[i].id) {
						this.dList = data[i];
						this.dImgMes = data[i].dImgMes;
						this.dRead = data[i].dRead;
					}
				}
	
				console.log(this.dList);
			});
		},
		methods: {}
	
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-details"
	  }, [_c('article', [_c('div', {
	    staticClass: "d-header"
	  }, [_c('hgroup', _vm._l((_vm.dList.dH2), function(item) {
	    return _c('h2', [_vm._v(_vm._s(item))])
	  })), _vm._v(" "), _c('ul', {
	    staticClass: "d-title"
	  }, _vm._l((_vm.dList.dTitle), function(item) {
	    return _c('li', _vm._l((item.title), function(t) {
	      return _c('span', [_vm._v(_vm._s(t))])
	    }))
	  })), _vm._v(" "), _c('figure', [_c('img', {
	    attrs: {
	      "src": _vm.dImgMes.dImg
	    }
	  }), _vm._v(" "), _c('figcaption', [_vm._v(_vm._s(_vm.dImgMes.dMes) + "\r\n\t\t\t\t")])])]), _vm._v(" "), _c('div', {
	    staticClass: "d-details"
	  }, [_vm._l((_vm.dList.dDetails), function(item) {
	    return _c('p', [_vm._v(_vm._s(item))])
	  }), _vm._v(" "), _c('div', {
	    staticClass: "author"
	  }, _vm._l((_vm.dList.dAuthor), function(item) {
	    return _c('span', [_vm._v(_vm._s(item))])
	  })), _vm._v(" "), _c('h2', [_vm._v("标签")]), _vm._v(" "), _c('div', {
	    staticClass: "label"
	  }, _vm._l((_vm.dList.dLabel), function(item) {
	    return _c('span', [_vm._v(_vm._s(item))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "read"
	  }, [_c('mark', [_vm._v("继续阅读")]), _vm._v(" "), _c('dl', [_c('dt', [_c('img', {
	    attrs: {
	      "src": _vm.dRead.dImg
	    }
	  })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v(_vm._s(_vm.dRead.dTitle))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.dRead.dDetails))])])])])], 2)]), _vm._v(" "), _c('footer', [_c('ul', [_c('li', [_c('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])], 1), _vm._v(" "), _vm._m(0)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v(""), _c('span', [_vm._v("2")])]), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v(""), _c('span', [_vm._v("32")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-30e607f3", module.exports)
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">	<router-view></router-view></div>"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var lists = __webpack_require__(24);
	var moreList = __webpack_require__(25);
	var dList = __webpack_require__(26);
	module.exports = function () {
		return {
			"tit": lists, //tit 表示  例如localhost/api/tit  不用写后缀名,可以直接访问json
			"more": moreList,
			"dList": dList
		};
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	 [{
	 	"id": 7,
	 	"title": "推荐",
	 	"banImgSrc": "/images/bank.jpg",
	 	"banTitle": "央行新规：现金交易五万上报 支付宝等机构被监管",
	 	"banType": "金融",
	 	"banShare": "8",
	 	"banTime": "刚刚",
	 	"lists": [{
	 		"listId": 701,
	 		"listImgSrc": "/images/timg.jpg",
	 		"listTitle": "京津冀将遭受跨年雾霾",
	 		"listPre": "环境",
	 		"listComment": 2,
	 		"listShare": 8,
	 		"listTime": "刚刚"
	 	}, {
	 		"listId": 702,
	 		"listImgSrc": "/images/wechat.jpg",
	 		"listTitle": "朋友圈投票,你都不看内容直接投票的啊",
	 		"listPre": "互联网",
	 		"listComment": 64,
	 		"listShare": 14,
	 		"listTime": "1小时前"
	 	}, {
	 		"listId": 703,
	 		"listImgSrc": "/images/oldman.jpg",
	 		"listTitle": "老人该有多孤单：想找一位“女儿”去三亚旅游",
	 		"listPre": "生活",
	 		"listComment": 32,
	 		"listShare": 18,
	 		"listTime": "2小时前"
	 	}, {
	 		"listId": 704,
	 		"listImgSrc": "/images/shi.jpg",
	 		"listTitle": "京津冀将遭受跨年雾霾",
	 		"listPre": "文化",
	 		"listComment": 14,
	 		"listShare": 30,
	 		"listTime": "3小时前"
	 	}]
	
	
	 }, {
	 	"id": 1,
	 	"title": "重磅",
	 	"banImgSrc": "/images/shanxi.jpg",
	 	"banTitle": "扶贫干部竟用扶贫经费送礼 广东省民宗委多名厅处级干部被查处",
	 	"banType": "新闻",
	 	"banShare": "36",
	 	"banTime": "2016-12-31",
	 	"lists": [{
	 		"listId": 101,
	 		"listImgSrc": "/images/sang.jpg",
	 		"listTitle": "四川出台严厉办法:查处打听干预纪律审查行为",
	 		"listPre": "时政",
	 		"listComment": 20,
	 		"listShare": 83,
	 		"listTime": "2016-12-31"
	 	}, {
	 		"listId": 102,
	 		"listImgSrc": "/images/henan.jpg",
	 		"listTitle": "广东今年查处省管干部97人",
	 		"listPre": "新闻",
	 		"listComment": 56,
	 		"listShare": 14,
	 		"listTime": "2016-12-30"
	 	}, {
	 		"listId": 103,
	 		"listImgSrc": "/images/animal.jpg",
	 		"listTitle": "用好问责这个利器",
	 		"listPre": "时政",
	 		"listComment": 12,
	 		"listShare": 18,
	 		"listTime": "2016-12-29"
	 	}, {
	 		"listId": 104,
	 		"listImgSrc": "/images/qianlong.jpg",
	 		"listTitle": "从二次元进入奥运会",
	 		"listPre": "奥运",
	 		"listComment": 18,
	 		"listShare": 36,
	 		"listTime": "2016-12-29"
	 	}]
	
	 }, {
	 	"id": 2,
	 	"title": "时局",
	 	"banImgSrc": "/images/plan.jpg",
	 	"banTitle": "步亿航后尘，零度智控被曝裁员上百人",
	 	"banType": "IT",
	 	"banShare": "51",
	 	"banTime": "5小时前",
	 	"lists": [{
	 		"listId": 201,
	 		"listImgSrc": "/images/fanke.jpg",
	 		"listTitle": "十年的顶峰与低谷 凡客陈年：“声名狼藉者的生活”",
	 		"listPre": "科技",
	 		"listComment": 20,
	 		"listShare": 81,
	 		"listTime": "6小时前"
	 	}, {
	 		"listId": 202,
	 		"listImgSrc": "/images/yamaxun.jpg",
	 		"listTitle": "亚马逊Alexa误听指令 向孩子提供成人内容",
	 		"listPre": "互联网",
	 		"listComment": 6,
	 		"listShare": 1,
	 		"listTime": "10小时前"
	 	}, {
	 		"listId": 203,
	 		"listImgSrc": "/images/sang.jpg",
	 		"listTitle": "韩媒：三星查明Note7爆炸原因 将于1月中旬宣布",
	 		"listPre": "科技",
	 		"listComment": 19,
	 		"listShare": 12,
	 		"listTime": "21小时前"
	 	}, {
	 		"listId": 204,
	 		"listImgSrc": "/images/factory.jpg",
	 		"listTitle": "揭秘郑州“苹果城”：世界最大iPhone工厂这样造就",
	 		"listPre": "互联网",
	 		"listComment": 64,
	 		"listShare": 30,
	 		"listTime": "2017-01-01"
	 	}]
	
	 }, {
	 	"id": 3,
	 	"title": "社会",
	 	"banImgSrc": "/images/life2.jpg",
	 	"banTitle": "84岁老人凌晨捡废品 卖钱捐助学生",
	 	"banType": "社会",
	 	"banShare": "16",
	 	"banTime": "2016-12-31",
	 	"lists": [{
	 		"listId": 301,
	 		"listImgSrc": "/images/factory.jpg",
	 		"listTitle": "中国花10亿造的这座大桥 让英美网友炸开了",
	 		"listPre": "社会",
	 		"listComment": 21,
	 		"listShare": 18,
	 		"listTime": "2017-01-01"
	 	}, {
	 		"listImgSrc": "/images/huanbao.jpg",
	 		"listId": 302,
	 		"listTitle": "学生电子学籍消失半年补不上 疑为学校操作不当",
	 		"listPre": "生活",
	 		"listComment": 14,
	 		"listShare": 62,
	 		"listTime": "2017-01-01"
	 	}, {
	 		"listImgSrc": "/images/life.jpg",
	 		"listId": 303,
	 		"listTitle": "老人该有多孤单：想找一位“女儿”去三亚旅游",
	 		"listPre": "生活",
	 		"listComment": 32,
	 		"listShare": 18,
	 		"listTime": "21小时前"
	 	}, {
	 		"listImgSrc": "/images/henan.jpg",
	 		"listId": 304,
	 		"listTitle": "京津冀将遭受跨年雾霾",
	 		"listPre": "环保",
	 		"listComment": 14,
	 		"listShare": 36,
	 		"listTime": "23小时前"
	 	}]
	
	 }, {
	 	"id": 4,
	 	"title": "经济",
	 	"banImgSrc": "/images/bank.jpg",
	 	"banTitle": "央行新规：现金交易五万上报 支付宝等机构被监管",
	 	"banType": "金融",
	 	"banShare": "8",
	 	"banTime": "刚刚",
	 	"lists": [{
	 		"listId": 401,
	 		"listImgSrc": "/images/timg.jpg",
	 		"listTitle": "京津冀将遭受跨年雾霾",
	 		"listPre": "环境",
	 		"listComment": 2,
	 		"listShare": 8,
	 		"listTime": "刚刚"
	 	}, {
	 		"listId": 402,
	 		"listImgSrc": "/images/wechat.jpg",
	 		"listTitle": "朋友圈投票,你都不看内容直接投票的啊",
	 		"listPre": "互联网",
	 		"listComment": 64,
	 		"listShare": 14,
	 		"listTime": "1小时前"
	 	}, {
	 		"listId": 403,
	 		"listImgSrc": "/images/oldman.jpg",
	 		"listTitle": "老人该有多孤单：想找一位“女儿”去三亚旅游",
	 		"listPre": "生活",
	 		"listComment": 32,
	 		"listShare": 18,
	 		"listTime": "2小时前"
	 	}, {
	 		"listId": 404,
	 		"listImgSrc": "/images/shi.jpg",
	 		"listTitle": "京津冀将遭受跨年雾霾",
	 		"listPre": "文化",
	 		"listComment": 14,
	 		"listShare": 30,
	 		"listTime": "3小时前"
	 	}]
	
	 }, {
	 	"id": 5,
	 	"title": "茶座",
	 	"banImgSrc": "/images/factory.jpg",
	 	"banTitle": "老赖妻子账户有30万元 却要求分期还清3万欠款",
	 	"banType": "生活",
	 	"banShare": "81",
	 	"banTime": "2017-01-01",
	 	"lists": [{
	 		"listId": 501,
	 		"listImgSrc": "/images/plan.jpg",
	 		"listTitle": "迷之修复！看粉刷匠秒补云南裂缝宿舍楼",
	 		"listPre": "环境",
	 		"listComment": 24,
	 		"listShare": 82,
	 		"listTime": "13小时前"
	 	}, {
	 		"listId": 502,
	 		"listImgSrc": "/images/yamaxun.jpg",
	 		"listTitle": "你好2017，这些科技大佬都说了什么？",
	 		"listPre": "互联网",
	 		"listComment": 64,
	 		"listShare": 14,
	 		"listTime": "11小时前"
	 	}, {
	 		"listId": 503,
	 		"listImgSrc": "/images/sang.jpg",
	 		"listTitle": "老人该有多孤单：想找一位“女儿”去三亚旅游",
	 		"listPre": "生活",
	 		"listComment": 32,
	 		"listShare": 18,
	 		"listTime": "2小时前"
	 	}, {
	 		"listId": 504,
	 		"listImgSrc": "/images/fanke.jpg",
	 		"listTitle": "加州车主起诉特斯拉：停车状态突然加速",
	 		"listPre": "科技",
	 		"listComment": 34,
	 		"listShare": 30,
	 		"listTime": "3小时前"
	 	}]
	
	 }, {
	 	"id": 6,
	 	"title": "文化",
	 	"banImgSrc": "/images/wenhua.jpg",
	 	"banTitle": "《长城》：恐怖隐喻与全球商业之间",
	 	"banType": "文化",
	 	"banShare": "16",
	 	"banTime": "刚刚",
	 	"lists": [{
	 		"listId": 601,
	 		"listImgSrc": "/images/qianlong.jpg",
	 		"listTitle": "夏侯家族最后战将竟死于相思",
	 		"listPre": "环境",
	 		"listComment": 18,
	 		"listShare": 84,
	 		"listTime": "3小时前"
	 	}, {
	 		"listId": 602,
	 		"listImgSrc": "/images/shanxi.jpg",
	 		"listTitle": "应该恢复冬至传统节日的五大理由",
	 		"listPre": "互联网",
	 		"listComment": 64,
	 		"listShare": 14,
	 		"listTime": "1小时前"
	 	}, {
	 		"listId": 603,
	 		"listImgSrc": "/images/oldman.jpg",
	 		"listTitle": "老人该有多孤单：想找一位“女儿”去三亚旅游",
	 		"listPre": "生活",
	 		"listComment": 32,
	 		"listShare": 18,
	 		"listTime": "2小时前"
	 	}, {
	 		"listId": 604,
	 		"listImgSrc": "/images/new.jpg",
	 		"listTitle": "新中国书画之'最'：人民大会堂藏品",
	 		"listPre": "文化",
	 		"listComment": 14,
	 		"listShare": 30,
	 		"listTime": "3小时前"
	 	}]
	
	 }]

/***/ },
/* 25 */
/***/ function(module, exports) {

	[{
		"listId": 705,
		"listImgSrc": "/images/sang.jpg",
		"listTitle": "1四川出台严厉办法:查处打听干预纪律审查行为",
		"listPre": "时政",
		"listComment": 20,
		"listShare": 83,
		"listTime": "2016-12-31"
	}, {
		"listId": 706,
		"listImgSrc": "/images/henan.jpg",
		"listTitle": "2广东今年查处省管干部97人",
		"listPre": "新闻",
		"listComment": 56,
		"listShare": 14,
		"listTime": "2016-12-30"
	}, {
		"listId": 707,
		"listImgSrc": "/images/animal.jpg",
		"listTitle": "3用好问责这个利器",
		"listPre": "时政",
		"listComment": 12,
		"listShare": 18,
		"listTime": "2016-12-29"
	}, {
		"listId": 708,
		"listImgSrc": "/images/qianlong.jpg",
		"listTitle": "4从二次元进入奥运会",
		"listPre": "奥运",
		"listComment": 18,
		"listShare": 36,
		"listTime": "2016-12-29"
	}]

/***/ },
/* 26 */
/***/ function(module, exports) {

	[{
		"id": 7,
		"dH2": ["摩拜单车再获2015亿美元融资", "摩拜单车CEO王晓峰：将造更多车，招更多人"],
		"dTitle": [{
			"title": ["南方周末记者", "谢鹏"]
		}, {
			"title": ["1小时前", "公司"]
		}],
		"dImgMes": {
			"dImg": "/images/img1.png",
			"dMes": "2016年12月27号,在深圳地铁11号线后海站旁,一名男子准备使用一辆摩拜单车.(新华记者毛思倩/图)"
		},
	
		"dDetails": ["摩拜单车，英文名mobike，是由胡玮炜创办的北京摩拜科技有限公司研发的互联网短途出行解决方案，是无桩借还车模式的智能硬件。人们通过智能手机就能快速租用和归还一辆摩拜单车，用可负担的价格来完成一次几公里的市内骑行 。2016年4月22日，北京摩拜科技有限公司在上海召开发布会，正式宣布摩拜单车服务登陆申城。以倡导绿色出行的方式给世界地球日“一份礼物”", "2017年1月4日晚，智能共享单车平台摩拜单车宣布完成新一轮（D轮）2.15亿美元（约合人民币15亿元）的股权融资", "摩拜单车经过专业设计，将全铝车身，防爆轮胎，轴传动等高科技手段集于一体，使其坚固耐用，进而降低维护成本。定制的单车外形在街头有较高的辨识度", "使用摩拜单车智能手机应用，用户可以用自己的手机查看单车位置，继而预约并找到该车。通过扫描车身上的二维码开锁即可开始骑行。到达目的地后, 在街边任意画白线区域内手动锁车完成归还手续", "随时随地，在线找车-打开app，即可看到身边的摩拜单车。用车用车(4张)一键扫码，快速开锁-只需用摩拜单车手机应用扫码车头上或车锁上的二维码，车锁就会自动打开。城市白线，便捷还车。停车后手动合上车锁，自动结束计费", "2016年9月，摩拜单车已经完成超过1亿美元的C轮融资，由高瓴资本、华平投资集团领投，多家机构跟投，包括红杉资本、启明创投和摩拜单车早期投资方"],
		"dAuthor": ["网络编辑:lee", "责任编辑:顾策"],
		"dLabel": ["膜拜", "融资", "王晓峰"],
		"dRead": {
			"dImg": "/images/animal.jpg",
			"dTitle": "膜拜完成新一轮融资：净投放智能共享单车平台摩拜单车宣布完成新一轮",
			"dDetails": "2017年1月4日晚，智能共享单车平台摩拜单车宣布完成新一轮（D轮）2.15亿美元（约合人民币15亿元）的股权融资",
			"dId": 701
	
		}
	
	}, {
		"id": 701,
		"dH2": ["国防部回应“中国军队网络间谍说”：拙劣抹黑行为"],
		"dTitle": [{
			"title": ["南方周末记者", "小兵"]
		}, {
			"title": ["3小时前", "深圳"]
		}],
		"dImgMes": {
			"dImg": "/images/img2.jpg",
			"dMes": "中国日报北京1月6日电（记者 张之豪）国防部新闻局今日回应“中国军队以北京海淀区两家饭店作为网络间谍行动总部” 时表示，有关指责毫无根据，是拙劣的抹黑行为"
		},
		"dDetails": ["美国媒体日前引述美陆军一份报告称，中国军队以北京海淀区两家饭店作为网络间谍行动总部。报道称，中方可能将此作为情报侦搜的据点，请予以证实", "有关指责毫无根据，是拙劣的抹黑行为。中国军队从未支持过任何黑客活动，中国政府一贯坚决反对并依法打击包括网络攻击在内的相关犯罪活动。美方不应无端指责中方，相反，美方应就“棱镜门”事件向中方和国际社会作出清楚解释", "摩拜单车经过专业设计，将全铝车身，防爆轮胎，轴传动等高科技手段集于一体，使其坚固耐用，进而降低维护成本。定制的单车外形在街头有较高的辨识度", "本届政府成立以来，连续5年，每年标志性的开场常务会，必扣“放管服”改革。紧紧牵住“牛鼻子”，咬定青山不放松。这“青山”，就是转变政府职能、处理好政府和市场关系。同时，架“当头炮”的阵地年年不断推进，棋局已大不同。", "要想描述改革推进的“棋局”，一些关键数字的罗列是必要的：目前所达前沿阵地背后，是分9批取消下放的国务院部门行政审批618项、分两批取消中央指定地方实施行政审批230项、分两批清理规范中介服务事项303项。这些数字丈量出的，是政府职能转变的实绩，更是惠及市场主体的路径。", "事实上，李克强总理所说的“当头炮”，不仅强调的是意志，更是实打实的举措。施策上步步推进，逻辑上也层层递进，从中体现出内在的“棋理”。从最早的强调简政放权，激发市场活力首先就要放开；到简政放权、放管结合，管得好才能真正放得开；再到简政放权、放管结合、优化服务，服好务市场主体才能助其茁壮成长。"],
		"dAuthor": ["网络编辑:pou", "责任编辑:JJ"],
		"dLabel": ["国家", "经济", "小李", "老王"],
		"dRead": {
			"dImg": "/images/bank.jpg",
			"dTitle": "1月4日的常务会，决定再取消一批中央指定地方实施的行政许可并清理规范一批行政审批中介服务事项，审议通过“十三五”市场监管规划，部署创新政府管理优化政府服务。3项议题，分别紧扣3个关键字：放、管、服",
			"dId": 702
		}
	
	}, {
		"id": 702,
		"dH2": ["奢侈品市场遇冷   奥特莱斯逆流而上"],
		"dTitle": [{
			"title": ["蓝瘦"]
		}, {
			"title": ["2017-1-7", "公司"]
		}],
		"dImgMes": {
			"dImg": "/images/img3.jpg",
			"dMes": "2016年被认为是新零售元年，这一年也是零售业、实体店转型的关键一年，全球范围的零售行业都在上演大洗牌。数据显示，受宏观经济增速下滑、居民出境购物频次增加以及互联网消费快速发展的冲击，奢侈品品牌在国内市场的发展遭遇寒流，如奢侈品品牌关闭国内实体店的新闻早已不再新鲜。与此同时，奥特莱斯却在遇冷的大环境下逆流而上，引人注目。"
		},
	
		"dDetails": ["面对经济大环境、消费者境外购物等的冲击，全球奢侈品市场在一定程度上受到了打击。据全球第二大奢侈品集团瑞士奢侈品巨头历峰集团公布的截至2016年9月30日的2016/2017财年上半年财务数据显示：销售额同比下降12.6%至50.9亿欧元，利润同比下跌51%至5.4亿欧元，营业利润7.98亿欧元，同比下跌43%。亚太地区销售额17.69亿欧元，按实际汇率计算同比下降10%，占集团总销售额35%，中国香港和内地是最大市场。",
			"但是，作为亚太区最大的奢侈品市场，国内的奢侈品情况也并不怎么乐观。从消费情况来看，中国作为全球主要的奢侈品消费国，近年来消费规模一直在稳定增长，然而国内的销售规模并没有显著增长，消费者仍然以海外消费为主。",
			"如据财富品质研究院2015年发布的《中国奢侈品报告》显示，2015年中国消费者全球奢侈品消费达1168亿美元，全年中国人买走全球46%的奢侈品。其中910亿美元在国外发生，占到总额的78%。也就是说，中国人近八成的奢侈品消费发生在国外；此外，在腾讯时尚约5万人参与的用户调查中，40%的用户购买奢侈品的方式是亲朋好友旅游代买，30%的用户通过网上代购交易平台，只有不到30%的用户选择在国内奢侈品门店购买，也就是说选择在国内奢侈品门店购买产品的用户不足三成。",
			"虽然2016年还没有结束，最终的更新数据也还没有出来，但是，目前来看，今年国内奢侈品主要来自境外购物的情况可能无出其右。据Glob-alBlueUK数据，2016年6月底，受英国脱欧公投影响，中国大陆游客占据英国旅游免税品消费市场约四分之一份额，而11月份消费更是增长了63%。实际上自7月份以来，英国免税品市场就非常蓬勃，7-10月增幅分别为7%、37%、29%、41%，远超国内奢侈品市场。",
			"尽管如此，在国内传统奢侈品零售业继续遭受重创的同时，奥特莱斯却逆流而上，取得了不错的成绩，不仅以年增20家的开业数量一路上扬，部分优秀者营业额更以30%左右的速度增长。"
		],
		"dAuthor": ["网络编辑:you", "责任编辑:顾策"],
		"dLabel": ["金融", "小玉"],
		"dRead": {
			"dImg": "/images/new.jpg",
			"dTitle": "其次，在模式发展上，奥特莱斯除了借鉴欧美奥特莱斯的商业模式外，也在不断地进行本土化转变",
			"dDetails": "结合中国市场的实际情况，开创了一套独到的商业运营模式，如燕莎奥特莱斯。作为中国奥莱业态的创始者，燕莎奥特莱斯可谓开创了中国商业的新模式，也为中国消费者带来了全新的购物体验",
			"dId": 703
		}
	
	}, {
		"id": 703,
		"dH2": ["电影《玩命直播》口碑惊艳 '狂嗨'嘉年华掀翻京城"],
		"dTitle": [{
			"title": ["记者", "大鹏"]
		}, {
			"title": ["36小时前", "生活"]
		}],
		"dImgMes": {
			"dImg": "/images/img4.jpg",
			"dMes": "电影《玩命直播》在近日举办了全国观影场，不但获得了同样身为网红的主播们一直好评，更是被许多普通观众称赞类型新颖，许多观众表示从没看过这样类型的影片，甚至表示给电影打9.5分，剩下0.5分因为太刺激吓到自己。"
		},
	
		"dDetails": ["而对于电影中一次次“极限挑战”的大冒险，许多观众表示“从来没有在低谷，都是在高潮”、“从来没看过这样的电影，看得自己热血澎湃”、“无论是喜欢看剧情的、刺激的、浪漫的，都应该来看看这部电影”。而这个影片的全新表现形式，也被许多观众啧啧称奇。",
			"在《玩命直播》“狂嗨”嘉年华上，众多青春靓丽主播掀起了直播狂潮，不但借着《玩命直播》发起的盛大活动将自己人气再一次拉升，更是激流勇进地参加了一系列和电影息息相关的大冒险， 每次大冒险挑战都掀起了场内的高潮。",
			"活动中“90s换衣”和“蒙眼飞镖”考验了主播们的体力与注意力，不得不提的是，考验众主播颜值和人气的“亲吻陌生人”，不但高度还原了电影《玩命直播》中的初次任务，更是将全场的气氛带到了最高潮，甚至有现场嘉宾迫不及待就要冲锋陷阵。最终人气网红们的团长力压众人取得了本次嘉年华的最终大奖。",
			"电影《玩命直播》由好莱坞“四小花旦”之一艾玛·罗伯茨与“戴兰兰”戴夫·弗兰科强势加盟，片中通过惊险刺激的挑战环节引爆每一位观众眼球。电影《玩命直播》将于1月6日登陆全国院线。邀你直播，共同冒险！"
		],
		"dAuthor": ["网络编辑:欧欧", "责任编辑:皮具"],
		"dLabel": ["电影", "生活", "文化"],
		"dRead": {
			"dImg": "/images/life.jpg",
			"dTitle": "《我的诗篇》引发方励青春共鸣 温暖力量席卷全国轮",
			"dDetails": "近日，继知名主持人汪涵鼎力支持后，曾为文艺片《百鸟朝凤》“惊天一跪”的著名制片人方励，更于腊八节当天，在微博上罕有地连发三条微博，力荐《我的诗篇》，后又与电影主创见面表达支持，引发网友强势围观。",
			"dId": 704
		}
	
	}, {
		"id": 704,
		"dH2": ["《我的诗篇》引发方励青春共鸣 温暖力量席卷全国"],
		"dTitle": [{
			"title": ["南方周末", "谢鹏"]
		}, {
			"title": ["2017-1-4", "公司"]
		}],
		"dImgMes": {
			"dImg": "/images/img4.jpg",
			"dMes": "继在吴晓波频道年终秀上在线宣布定档1月13日全国公映后，电影《我的诗篇》发起了一场温暖又诗意的“陌生人，我也为你祝福”赠票看电影活动，名人大V纷纷支持响应。近日，继知名主持人汪涵鼎力支持后，曾为文艺片《百鸟朝凤》“惊天一跪”的著名制片人方励，更于腊八节当天，在微博上罕有地连发三条微博，力荐《我的诗篇》，后又与电影主创见面表达支持，引发网友强势围观。这部方励2017年力挺的第一部电影，真实记录了6个平凡劳动者的诗意人生，继百城千场众筹放映感动万千观众，创造了电影由观众口碑推动实现全国公映的奇迹后，有望以其充满现实诗意的赠票祝福陌生人的活动，持续润泽心灵，激发人们或已遗忘的浪漫情感，进而演变成一场温暖全国的社会文化事件。"
		},
	
		"dDetails": ["“腊者，逐疫迎春”。2016年，著名制片人方励曾为文艺片《百鸟朝凤》不惜“惊天一跪”，而2017年的腊八节，他选择推荐的第一部电影就是《我的诗篇》。从1月5日凌晨起，方励连发三条微博力挺《我的诗篇》。他评价这部电影“记录时代，平民英雄”，更颇有感触地写道：“平凡的共鸣也勾起我17岁铁路大桥的高空混凝土作业，悬崖断壁上凿岩放炮，18岁隧道掘进德炸药硝烟，19岁内燃机轰鸣的各种青春回忆……迷茫绝望的季节也会有浪漫诗意的时刻”，更自曝电影《观音山》火车顶上的一场戏，正是方励18岁时，从贵州龙里扒火车回成都替父打架报仇的青春岁月的真实再现，引发网友强势围观。", "据了解，《我的诗篇》自发布定档信息以来，不仅是方励，那些曾被电影深深感动的社会各界人士都纷纷自发行动起来，通过各种渠道积极宣传并支持电影。著名独立媒体人袁岳称赞这部电影：“用真实的语言把真实的情感传递出来，然后产生了一种真实的震撼。那种震撼即使过去了很长的时间，它依然会留在我的心间。我觉得那非常有助于我们拓展自己的想象力，也非常有助于吸引我们情感中的一些已经荒芜或者冷僻的部分。我觉得如果你看了《我的诗篇》，你一定不会后悔。如果你看了《我的诗篇》，一定会找到你生命中间另外一些独特的脉络。”国际著名诗人杨炼更表示“这些工人的作品诞生于他们人生的最深处。将是中国三千年诗歌史上最真实、最原创、最感人的一段时间”。而作为《我的诗篇》的总策划，吴晓波说：“这是一年多来最让我骄傲的一件事。我希望更多朋友走进影院，通过《我的诗篇》，深入了解亿万劳动者的生活境遇和精神世界。这是我们做这部电影的初心。”", "为此，电影出品方联合格瓦拉票务平台，发起了“给陌生人送场电影”的活动，大家可以买一张或几张电影票，分享给陌生人，犹如一场生命之间的奇妙邂逅，让两个彼此陌生的心灵因电影的感动而奇妙相遇，彼此温暖相连。令人振奋的是，从12月30日活动正式发起，已经有数以千计的观众加入到“给陌生人送场电影”的活动当中来，名人大V也是积极参与。究竟谁会领到吴晓波、袁岳、杨炼、方励、汪涵他们送出的票？随着这张票陌生的朋友收到的寄语又是什么？如果想参与“给陌生人送场电影”活动，可搜索微信公众号“我的诗篇”，在主页上即可参加活动。我们在兴奋期待之余，更有理由相信，人与人之间的缘分，也许就只有一张电影票的距离。",
			"平凡人也有非凡的诗意。《我的诗篇》聚焦6个平凡而富于诗性与尊严的灵魂，蕴含着对陌生人最深切的祝福。他们是每个人身边最熟悉的陌生人，作为中国最底层的劳动者，漂泊于故乡与异乡之间，忙碌于幽深的矿井与轰鸣的流水线，饱经人间冷暖，将生活化作动人的诗篇，如同写下一封封送给亲人与世界的情书，同时也真实地记录下这个时代。"
		],
		"dAuthor": ["编辑:  uyt"],
		"dLabel": ["文化", "传媒", "刘静", "老李"],
		"dRead": {
			"dImg": "/images/oldman.jpg",
			"dTitle": "水有助于加快新陈代谢速度、排出体内的杂质与毒素，减轻肝脏的负担。每天起床后就先喝一杯温的白开水，它可以唤醒全身的机能。",
			"dDetails": "十字花科蔬菜包括甜菜、萝卜、卷心菜、紫甘蓝和芝麻菜等，或是含有硫元素的蔬菜，如洋葱、大蒜、花椰菜，它们都可以增强身体的排毒功能。每天吃两份十字花科蔬菜就能增强肝脏的解毒功能。",
			"dId": 7
		}
	
	}]

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map