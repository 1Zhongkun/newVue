<template>
  <div id="app"  class="app-container">
    <!--头部位-->
   <mt-header fixed title="郑洪坤学习Vue"></mt-header>

<!--脚部位-->
   	<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
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
</style>
