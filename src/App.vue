<template>
  <div id="app"  class="app-container">
    <!--头部位-->
   <mt-header fixed title="郑洪坤学习Vue" >
     <span slot="left"  @click="goBack" v-show="flag">
     <mt-button icon="back">返回</mt-button>
     </span>

   </mt-header>
   <transition> 
      <router-view></router-view>

   </transition>
   
<!--脚部位-->
   	<nav class="mui-bar mui-bar-tab">
			
			<router-link to="/home" class="mui-tab-itemllb">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
	     	</router-link>
			<router-link to="/member" class="mui-tab-itemllb" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/car" class="mui-tab-itemllb" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-itemllb">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			
		</nav>
  </div>
</template>
<script>
export default {
    data(){
      return{
        flag:false,
      }
    },
    created() {
       if(this.$route.path==='/home'){
           this.flag=false;
       }
       else{
         this.flag=true;
       }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    },
    watch:{
        '$route.path':function(newVal){
             if(newVal==='/home'){
                  this.flag=false;
             }else{
                 this.flag=true;
             }
        }
    }
}
</script>
<style lang="less">

.app-container {
  padding-top: 40px;
  padding-bottom: 55px;
  /*避免PC端网页在页面切换的时候出现的水平滚动条*/
  overflow: hidden;
    .mint-header{
     z-index: 99;
     }
   
} 
.v-enter.v-leave-to{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;/*让文件离开的实话脱离文档流就可以让进来的动画不从下往上了*/
}
.v-enter-active,.v-leave-active{
	transition: all 0.3s ease;
}
//改类名 解决torb无法点击
    .mui-tab-itemllb{
      display: table-cell;
    overflow: hidden;

    width: 1%;
    height: 50px;

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #929292;
	}
	.mui-bar-tab .mui-tab-itemllb.mui-active
{
    color: #007aff;
}
.mui-bar-tab .mui-tab-itemllb .mui-icon
{
    top: 3px;

    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itemllb .mui-icon ~ .mui-tab-label
{
    font-size: 11px;

    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-itemllb .mui-icon:active
{
    background: none;
}
</style>
