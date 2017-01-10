<template id="">
	<div class="m-nangua">
		<header>
			<ul>
				<li class="yo-ico">
					<router-link v-bind:to="'/my'">
						&#xe68d;
					</router-link>
				</li>
				<li>我的南瓜</li>
				<li></li>
			</ul>
		</header>
		<section>
			<div>
				<p>今日获得</p>
				<p>0<span class="yo-ico">&#xe64c;</span></p>
				<p>总南瓜数:<span>7</span></p>
			</div>
			<p class="rw">南瓜任务</p>
			<ul>
				<li>
					<p>签到</p>
					<p><span>未签到</span><span>></span></p>
				</li>
				<li>
					<p>阅读文章</p>
					<p><span>0/3</span><span>></span></p>
				</li>
				<li>
					<p>评论文章</p>
					<p><span>0/5</span><span>></span></p>
				</li>
				<li>
					<p>分享新闻</p>
					<p><span>0/5</span><span>></span></p>
				</li>
			</ul>
		</section>
	</div>
</template>