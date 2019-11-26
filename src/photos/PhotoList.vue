<template>
   <div>
       <!--滑动区-->
       	<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ',item.id==0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotolist(item.id)">
							{{item.title}}
						</a>
						
						
					</div>
				</div>

			</div>
            <!--图片列表区域-->
            <ul class="photo-list">
               <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in imglist" :key="item.id">
               <img v-lazy="item.img_url" >
               <div class="info">
                   <h1 class="info-title">{{item.title}}</h1>
                       <div class="info-body">
                           {{item.zhaiyao}}
                       </div>
                   
               </div>
               </router-link>
           </ul>

    </div> 
</template>
<style lang="less" scope>
   *{
       touch-action: pan-y;
     
   }
  
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    margin-bottom: 0px; 
        li{
              background-color: #ccc;
              text-align: center;
              margin-bottom: 10px; 
              box-shadow:  0 0 9px #999;
              position: relative;
              img{
                  width: 100%;
                  vertical-align: middle;
              }
            img[lazy="loading"] {
                 width: 40px;
                 height: 300px;
                 margin: auto;
            }
            .info{
                color: white;
                position: absolute;
                 text-align: left;
                 bottom: 0px;
                 background-color: rgba(0, 0, 0, 0.4);
                   max-height: 84px;
                 .info-title{
                    font-size: 14px ;
                 }
                  .info-body{
                     font-size: 13px ;
                   
                 }
            }
        }
}
   
</style>
<script>
   import {Toast} from 'mint-ui';
  //到入js文件
   import mui from '../lib/mui/js/mui.js'
   // 初始化滑动控件
  
export default {
     data() {
         return {
             cates:[],//所以分类的数组
             imglist:[],//获取图片
         }
     },
     created() {
         this.getAllCatgegory();
         this.getPhotolist(0);//默认进入页面就主动请求所以图片列表数据
     },
      mounted() {
         //当组件中的dom结构被渲染好并放到页面中后会执行此钩子函数
         //如果要操作元素了最好在mountend中
          mui('.mui-scroll-wrapper').scroll({
            deceleration:0.0005
            //flick 减速系数，系数越大速度越慢，滚动距离越小，默认值0.0006
              })
            },
     methods:{
                  getAllCatgegory(){
                      this.$http.get("api/getimgcategory").then(result=>{
                           if(result.body.status===0){
                        //送懂添加完整的分类
                           result.body.message.unshift({title:"全部",id:0})
                           this.cates=result.body.message;
                   }else{
                      
                      Toast("获取评论数据失败");
                   }
                      })
                  },
                  getPhotolist(cateid){
                      //根据图片id获取图片
                       this.$http.get("api/getimages/"+cateid).then(result=>{
                           if(result.body.status===0){
                        //送懂添加完整的分类
                         
                           this.imglist=result.body.message;
                   }else{
                      
                      Toast("获取评论数据失败");
                   }
                      })
                  }
    
         }
}
</script>