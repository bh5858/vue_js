<template>
	<div class="m-my">
		
		<div>
			<p class="yo-ico">
				<router-link :to="'/detail'">
					&#xe66e;
				</router-link>
			</p>
			<p>请登录</p>
			<p class="yo-ico">&#xe61a;</p>
		</div>
		
		<section>
			<ul>
				<router-link :to="'/shc'">
				<li>
					<p><span class="yo-ico">&#xe629;</span><b>我的收藏</b></p>
					<span>></span>
				</li>
				</router-link>
				<router-link :to="'/pl'">
				<li>
					<p><span class="yo-ico">&#xe61c;</span><b>我的评论</b></p>
					<span>></span>
				</li>
				</router-link>
				<router-link :to="'/nangua'">
				<li>
					<p><span class="yo-ico">&#xe64c;</span><b>我的南瓜</b></p>
					<p><span>0个</span><span>></span></p>
				</li>
				</router-link>
				<router-link :to="'/flexible'">
					<li>
						<p><span class="yo-ico">&#xe610;</span><b>我的活动</b></p>
						<span>></span>
					</li>
				</router-link>
				<router-link :to="'/propose'">
				<li>
					<p><span class="yo-ico">&#xe600;</span><b>意见反馈</b></p>
					<span>></span>
				</li>
				</router-link>
				
			</ul>
		</section>
	</div>
</template>

