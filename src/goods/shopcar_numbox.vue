<template>
   <div>
        <div class="mui-numbox" data-numbox-min='1'  data-numbox-max='9' style="height:25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"  @change="countChanged" ref="numbox"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	    </div>
   </div>
       
   
</template>
<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
    mounted() {
        mui("mui-numbox").numbox()

        
    },
   
    methods: {
        countChanged(){
             this.$store.commit('updateGoodsInfo',{id:goods.id,count:this.$refs.numbox.value})
             
            
        }
    },
   props:['initcount','goodsId']//然后属性绑定给value
}
</script>
<style lang="less" scope>
    
</style>