<template>
    <div class="content">
        <h3>{{info.title}}</h3>
        <hr>
        <div v-html="info.content"></div>
    </div>
</template>
<script>
export default {
      data() {
          return {
                 id:this.$route.params.id,
                 info:{} 
          }
      },
      created() {
          this. getGoodsDesc();
      },
      methods: {
          getGoodsDesc(){
                this.$http.get("api/goods/getdesc/"+this.id).then(result => {
                if ( result.body.status == 0) {        
                           
                    this.info =  result.body.message[0]
                } else {
                    Toast('获取图片信息失败！');
                }
            });
          }
      },
      
}
</script>
<style lang="less">
.content{
    padding: 3px;
     img{
      width: 100%;
   } h3{
      font-size: 16px;
      color: blue;
      text-align: center;
      margin: 15px 0px;
  }
}
 
 
</style>