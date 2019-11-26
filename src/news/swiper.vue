<template>
    <div>
        <mt-swipe>
          <mt-swipe-item v-for="item in lubotuList" :key="item.img">
        <img :src="item.img" :class="{full:isfull}" alt="">
        </mt-swipe-item>
         </mt-swipe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    //利用父组件传递一个值isfull  给组件传递一个样式 让他开启或者不开启
    props:['lubotuList','isfull']
}
</script>
<style lang="less">
.mint-swipe{
    height: 200px;
     
    .mint-swipe-item{
        text-align: center;
   
     img{
    //    width: 100%;
       height: 100%;
     }
    }
  }
  .full{
       width: 100%;
  }
</style>