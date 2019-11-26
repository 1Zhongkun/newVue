<template>
    <div class="photo-con">
        <h3>{{imglist.title}}</h3>
        <p class="subtitle">
            <span>发表时间{{imglist.add_time|dataFormat}}</span>
            <span>点击{{imglist.click}}次</span>
        </p>
        <hr>
         <!---->
          <infobox :infoid="this.id"></infobox>
         <div class="content" v-html="imglist.content">
           
         </div>
         <cm-box :newsid="this.id"></cm-box>


    </div>
</template>
<style lang="less" scoped>
   .photo-con{
        padding: 3px;//挤压内容3px；
        h3{
            color: blue;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
             display: flex;
             justify-content: space-between;
             font-size: 13px;
        }
        .content{
            font-size: 13px;
            text-align: center;
        }
   }
</style>
<script>
import {Toast} from 'mint-ui';
import  Comment from '../news/Comment.vue'
import Thumbs from "../photos/Thumbs.vue";
export default {
    
    data() {
        return {
            id:this.$route.params.id,//获取页面上的id
            imglist:{},
           

        }
    },
    created() {
        this.getPhotoInfo();
    },
    methods: {
         handleClose () {
        console.log('close event')
      },
        getPhotoInfo(){
           
                      this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                           if(result.body.status===0){
                      
                         
                           this.imglist=result.body.message[0];
                   }else{
                      
                      Toast("获取数据失败");
                   }
                      })
                 
        },
      

    },
    components:{
        'cm-box':Comment,
         'infobox':Thumbs

    }
}
</script>