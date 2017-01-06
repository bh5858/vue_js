// var vue = require('../lib/vue.js');

// var swiper = require('../lib/swiper.js')
var common = require('../utils/util.com.js');
new Vue({
	el: '#m-index', //渲染根节点 写死的
	data: {
		swiper: null,
		navIndex: 0,
		list: []
	},

	mounted: function() {

		// setTimeout(function() {
		// 	this.nav[0].title = "足球";
		// 	console.log(this.nav[0].title);

		// }.bind(this), 1000)

		fetch('/api/tit').then(response => response.json())
			.then(res => {
				var that = this;
				that.list = res;

				that.swiper = new Swiper('#index-swiper', {
					loop: true,
					onSlideChangeStart: function(swiper) {
						that.navIndex = swiper.activeIndex;
					}
				});

				setTimeout(function() {
					common.scroll(that);
				}, 1000);

			})
			.catch(e => console.log("Oops, error", e));


	},
	methods: {
		changeT: function(index) {
			this.swiper.slideTo(index);
			this.navIndex = index;
		}
	}

})