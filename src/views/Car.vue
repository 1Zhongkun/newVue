<template>
<div class="shopercam">
   <div class="goods-list">
     <!--商品列表区域-->
     <div class="mui-card" v-for="(item, i) in gl" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					
        <mt-switch @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])" v-model="$store.getters.getGoodsSelected[item.id]">Switch</mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div> 
   </div>
    <!--商品其他区域-->
   <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
					        <div class="left">
                    <p>总计(不含运费)</p>
                    <p>已勾选商品<span style="color:red;">{{$store.getters.getGoodsCount.count}}</span>  件，总价{{$store.getters.getGoodsCount.amount}}</p>
                  </div> 
                   <mt-button type="danger">结算</mt-button>
					</div>
        
				</div>
        <p>{{$store.getters.getGoodsSelected}}</p>
			</div> 
   
   
   
   </div>
</template>
<style lang="less" scoped>
 .shopercam{
   background-color: #eee;
   overflow: hidden;
   .goods-list{
     .mui-card-content-inner{
       display: flex;
      align-items: center;
     }
       img{
         width: 60px;
         height: 60px;
       }

       .info{
         display: flex;
             justify-content: space-between;
         .price{
           color: red;
           font-weight: bold;
         }
         h1{
           font-size: 13px
       }
       }
       
   }
   .jiesuan{
     display: flex;
     justify-content: space-between;
     align-items: center;

   }
 }
</style>
<script>
import numbox from '../goods/shopcar_numbox.vue'
export default {
  data () {
      return {
        
          gl:[],//购物车中所有的数据
      }
  },
  methods:{
      turn(){
          console.log(this.value)
      },
      created() {
        
        this.getGoodsList();
     
      },
      getGoodsList(){
        //获取所以商品的id
        //  var idArr=[];
        //  this.$store.state.carr.forEach(item => {
        //    idArr.push(item.id);
        //  }); 
        
        //  //如果数据小于等于0就返回出去
        //  if(idArr.length<=0){
        //    return;
        //  }
        this.$http.get('api/goods/getshopcarlist/88,89').then(result=>{
             if(result.body.status==0){
                  this.gl=result.body.message;
                  
            }else{
                     Toast("获取数据失败");
            }
        }) 
             },remove(id,index){
               this.gl.splice(index,1);
               this.$store.commit('removeFormCar',id)
             },
             selectedChanged(id,val){
                 this.$store.commit("updateGoodsSelected",{id:id,selected:val})
             }
  },
     components:{
       numbox
     }
}
</script>
