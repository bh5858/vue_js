<template>
<div class="m-index" id="m-index">
	<router-view></router-view>
	<footer>
		<ul>
			<li @click="changeNav(index)" :class="{active: navIndex==index}" v-for="(item,index) in footerNav">
				<router-link :to="item.router">
				<i class="yo-ico" v-html="item.icon"></i>
				<b>{{item.footerName}}</b>
				</router-link>
			</li>
			
			
			
		</ul>
	</footer>
</div>
</template>

<script>
	module.exports={
		data:function(){
			return {
				navIndex:0,
				footerNav:[{
					router:"/",
					icon:"&#xe609;",
					footerName:"要闻"
				},
				{
					router:"/video",
					icon:"&#xe63f;",
					footerName:"视频"
				},{
					router:"/newspaper",
					icon:"&#xe62b;",
					footerName:"报纸"
				},{
					router:"/my",
					icon:"&#xe66e;",
					footerName:"我的"
				}]
				
			}
		},
		methods:{
			changeNav:function(index){

				this.navIndex=index;
				//console.log(navIndex) 不写this要报错
			}
		}

	}
</script>