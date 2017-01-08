<template>
  <div class="m-detail">
    <header>
    	<ul>
    		<li class="yo-ico">
    			<router-link v-bind:to="'/my'">
    				&#xe68d;
    			</router-link>
    		</li>
    		<li>登录南方周末</li>
    		<li></li>
    	</ul>
    </header>
    <section>
    	<div>
    		<input type="text" placeholder="手机号/邮箱" />
		  	<input type="password" placeholder="密码" />
    	</div>
    	<p>
    		<router-link v-bind:to="'/my'">
    		登录
    		</router-link>
    	</p>
    	<p>---第三方账号登录---</p>
    	<ul>
    		<li class="yo-ico">&#xe675;</li>
    		<li class="yo-ico">&#xe606;</li>
    		<li class="yo-ico">&#xe6ee;</li>
    	</ul>
    </section>
    <footer>
    	<span>创建账号</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>忘记密码？</span>
    </footer>
  </div>
</template>
