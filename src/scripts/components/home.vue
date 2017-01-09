<template>
<div class="container">
	
	<nav>
		<ul>
			<li  v-on:click="changeT(index)" v-for="(item,index) in list" :class="{active:index==navIndex}" >{{item.title}}</li>
		</ul>
		<i class="yo-ico">&#xe62a;</i>
	</nav>
	<section>
		<div class="swiper-container" id="index-swiper">
			<div class="swiper-wrapper">
				<div :id="'index-scroll'+ index" class="swiper-slide" v-for="(item,index) in list"  >
					<div class="scroll-container">
						<div class="head hide">
							<img src="/images/arrow.png" width="40" height="40"/>
							<span>下拉刷新...</span>
						</div>
						<div class="section-container">
							<div class="banner">
								<router-link :to="'/details/' +item.id">
								<img :src="item.banImgSrc">
								
								<p>{{item.banTitle}}</p>
								<div>
									<span>{{item.banType}}</span>
									<ul>
										<li class="yo-ico">&#xe775;{{item.banShare}}</li>
									</ul>
									<span>{{item.banTime}}</span>
								</div>
								</router-link>
							</div>
							<dl   v-for="(lists,index) in item.lists">
								
								<dt>
								<router-link :to="'/details/'+ lists.listId">
								<img :src="lists.listImgSrc">
								</router-link>
								</dt>
								<dd>
								<router-link :to="'/details/' +lists.listId">
								<p>{{lists.listTitle}}</p>
								<ul>
									<li>
										<span>{{lists.listPre}}</span>
										<span class="yo-ico">&#xe63e;{{lists.listComment}}</span>
										<span class="yo-ico">&#xe775;{{lists.listShare}}</span>
									</li>
									<li>
										<span>{{lists.listTime}}</span>
									</li>
								</ul>
								</router-link>
								</dd>
								
							</dl>
						</div>
						<div class="foot hide">
							<img src="/images/arrow.png" width="40" height="40"/>
							<span>上拉加载更多...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
</template>
<script>
	var common = require('../utils/util.com.js');
	
module.exports={
			data: function(){
				return {
					swiper: null,
					navIndex: 0,
					list: []
				}
			},
			mounted: function() {
				
				fetch('/api/tit').then(response => response.json())
					.then(res => {
						var that = this;
						that.list = res;
						that.swiper = new Swiper('#index-swiper', {
							  observer:true,//修改swiper自己或子元素时，自动初始化swiper
        						observeParents:true,//修改swiper的父元素时，自动初始化swiper
							loop: true,
							onSlideChangeStart: function(swiper) {
								that.navIndex = swiper.activeIndex;
							}
						});
						//common.isAllLoaded('#index-scroll .section-container', function () {
							setTimeout(function(){
								common.scroll(that);

							},1000)
							
					
						//})
					})
					.catch(e => console.log("Oops, error", e));
			},
			methods: {
				changeT: function(index) {
					this.swiper.slideTo(index);
					this.navIndex = index;
				}
			}
}
</script>