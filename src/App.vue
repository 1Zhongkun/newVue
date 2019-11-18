<template>
  <div id="app"  class="app-container">
    <!--头部位-->
   <mt-header fixed title="郑洪坤学习Vue"></mt-header>
   <transition> 
      <router-view></router-view>

   </transition>
   
<!--脚部位-->
   	<nav class="mui-bar mui-bar-tab">
			
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
	     	</router-link>
			<router-link to="/member" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/car" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			
		</nav>
  </div>
</template>

<style lang="less">
.app-container {
  padding-top: 40px;
  padding-bottom: 55px;
  /*避免PC端网页在页面切换的时候出现的水平滚动条*/
  overflow: hidden;
   
} 
.v-enter.v-leave-to{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 1s ease;
}
</style>
