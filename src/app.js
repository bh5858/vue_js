require('./styles/usage/app.scss')

var common = require('./scripts/utils/util.com.js')

var layout = require('./scripts/tpls/layout.string')

common.render(layout)

// require('./scripts/views/index.js')

import index from './scripts/components/index.vue'
import home from './scripts/components/home.vue'
import video from './scripts/components/video.vue'
import newspaper from './scripts/components/newspaper.vue'
import my from './scripts/components/my.vue'
import details from './scripts/components/details.vue'
import detail from './scripts/components/detail.vue'
import flexible from './scripts/components/flexible.vue'
import shc from './scripts/components/shc.vue'
import pl from "./scripts/components/pl.vue"
import nangua from "./scripts/components/nangua.vue"
import propose from "./scripts/components/propose.vue"

const routes = [{
	path: '/',
	component: index,
	children: [{
		path: '/',
		component: home

	}, {
		path: '/video',
		component: video

	}, {
		path: '/newspaper',
		component: newspaper

	},{
		path: '/my',
		component: my

	}
	]
}, {
	path: '/details/:id',
	component: details
},{
	path: '/detail',
	component: detail
},{
	path: '/flexible',
	component: flexible
},{
	path: '/shc',
	component: shc
},{
	path: '/pl',
	component: pl
},{
	path: '/nangua',
	component: nangua
},{
	path: '/propose',
	component: propose
}

]
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

const app = new Vue({
	router
}).$mount('#app')