<template>
  <div>
       <swiper :lubotuList="lubotuList" :isfull="true"></swiper>
    
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
		                   <img src="../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>                       
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                   <img src="../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		           
		        </ul> 
		
  </div>
</template>

<script >
import swiper from '../news/swiper.vue'
import {Toast} from 'mint-ui'
export default {
  data(){
      return{
           lubotuList:[]//保存轮播图的数组
      }
  },
  created() {
    this.getLunbotu();
  },
  methods: {
       getLunbotu(){
         this.$http.get("api/getlunbo").then(result => {
            if(result.body.status==0){
                  this.lubotuList=result.body.message;
                  
            }else{
                     Toast("获取数据失败");
            }
         })
       }
  },
  components:{
    swiper
  }
};
</script>
<style scoped lang="less">
  
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img{
      width: 40px;
      height: 40px;
    }
    .mui-media-body{
      font-size: 13px;
    }
   
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border: none;
    }
    
</style>