<template id="">
	<div class="m-propose">
		<header>
			<ul>
				<li class="yo-ico">
					<router-link v-bind:to="'/my'">
						&#xe68d;
					</router-link>
				</li>
				<li>意见反馈</li>
				<li>提交</li>
			</ul>
		</header>
		<section>
			<textarea placeholder="请输入反馈，我们将不断为您改进"></textarea>
			<input type="text" placeholder="请输入手机号码或邮箱"/>
		</section>
	</div>
</template>