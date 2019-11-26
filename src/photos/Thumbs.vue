<template>
<div>
     <vue-preview :slides="slide1"></vue-preview>
</div>
 
</template>
 
<script>
import {Toast} from 'mint-ui';
export default {
    data () {
      return {
        slide1: []
      }
    },
    created() {
        this.getThumbsList();
    },
    methods: {

         getThumbsList(){
            this.$http.get("api/getthumimages/"+this.infoid).then(result => {
                if ( result.body.status == 0) {        
                     result.body.message.forEach(item => {
                        item.w = 600;   //设置以大图浏览时的宽度
                        item.h = 400;     //设置以大图浏览时的高度
                        item.src = item.src;  //大图
                        item.msrc = item.src;  //小图
                    });            
                    this.slide1 =  result.body.message
                } else {
                    Toast('获取图片信息失败！');
                }
            });
        },
    },
    props:["infoid"]
  }
</script> 