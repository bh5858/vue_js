var vue = require('../lib/vue.js');

var swiper = require('../lib/swiper.js')

new vue({
	el: '#m-index', //渲染根节点 写死的
	data: {
		swiper: null,
		navIndex: 0,
		nav: [{
			title: '足球现场',
			isActive: true,
		}, {
			title: '足球生活',
			isActive: false
		}, {
			title: '足球美女',
			isActive: false
		}],

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
					loop: false,
					onSlideChangeStart: function(swiper) {
						that.navIndex = swiper.activeIndex;
					}
				});
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