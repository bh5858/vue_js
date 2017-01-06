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

	}, {
		path: '/my',
		component: my

	}]
}, {
	path: '/details/:id',
	component: details
}]
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

const app = new Vue({
	router
}).$mount('#app')