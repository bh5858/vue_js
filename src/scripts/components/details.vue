<template>
<div class="m-details">
	
	<article >
		<!-- {{$route.params.id}} -->
		<div class="d-header" >
			
			
			<hgroup>
					<h2 v-for="item in dList.dH2">{{item}}</h2>
			
			</hgroup>
			
			
			<ul class="d-title">
				
				<li v-for="item in dList.dTitle"><span v-for="t in item.title ">{{t}}</span> </li>
				
			</ul>
			
			<figure>
				<img :src="dImgMes.dImg"  />
				<figcaption>{{dImgMes.dMes}}
				</figcaption>
				
			</figure>
		</div>
		<div class="d-details">
			<p v-for="item in dList.dDetails">{{item}}</p>

		<div class="author">
			<span v-for="item in dList.dAuthor">{{item}}</span>
			

		</div>
		<h2>标签</h2>

		<div class="label">
			<span v-for="item in dList.dLabel">{{item}}</span>
		</div>
		
		<div class="read">
			<mark>继续阅读</mark>
			<dl>
				<dt> <img :src="dRead.dImg"> </dt>
				<dd>
					
					<p>{{dRead.dTitle}}</p>
					<span>{{dRead.dDetails}}</span>
				</dd>
			</dl>
		</div>


		</div>

		
			
	
	</article>
	<footer>
		<ul>
			<li>
				<router-link to="/">
			<i class="yo-ico">&#xe604;</i>
				</router-link>
			</li>
			<li>
				<i class="yo-ico">&#xe602;</i>
				<i class="yo-ico">&#xe623;</i>
				<i class="yo-ico">&#xe628;<span>2</span></i>
				<i class="yo-ico">&#xe63e;</i>
				<i class="yo-ico">&#xe775;<span>32</span></i>
			</li>
		</ul>
	</footer>
</div>
</template>

<script>
	module.exports={
		
			data:function(){
				
				return{
					dList:[],
					dImgMes:[],
					dRead:[]

				}	
			},
			mounted:function(){
				fetch("/api/dList").then(res=>res.json()).then(data=>{
					for(var i in data){
						if(this.$route.params.id==data[i].id){
							this.dList=data[i];
							this.dImgMes=data[i].dImgMes;
							this.dRead=data[i].dRead;
						}
						

					}

					
				})
			},
			methods:{
				
			}

		
	}
</script>