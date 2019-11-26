<template>
    <div class="goods-list">
        <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodsList" :key="item.id" tag="div">
                <img :src="item.img_url" alt="">
                <h1 class="title">{{item.title}}</h1>
        
        <div class="info">
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
            </div>
          </router-link>
         <!-- <div class="goods-item" v-for="item in goodsList" :key="item.id">
                <img :src="item.img_url" alt="">
                <h1 class="title">{{item.title}}</h1>
        
        <div class="info">
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
            </div>
           </div> -->
       
             <div class="box">
                 <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
             </div>
        
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
     data() {
         return {
              pageindex:1,//分页页数
              goodsList:[],
         };
     },
     created() {
        this.getGoodsList();
            },
     methods: {
         //商品列表
         getGoodsList(){
               this.$http.get("api/getgoods?"+this.pageindex).then(result=>{
                           if(result.body.status===0){
                           this.goodsList=this.goodsList.concat(result.body.message);
                   }else{
                      
                      Toast("获取数据失败");
                   }
                  })
                 
           },
         getMore(){
             this.pageindex++;
               this.getGoodsList();
         }
         
     },
}
</script>
<style lang="less" scope>
      .goods-list{
          display: flex;
          flex-wrap: wrap;//纵向布局
          padding: 7px;
          justify-content: space-between;//两端对齐
          .goods-item{
              width: 49%;
              border: 1px solid #ccc;
              box-shadow: 0 0 8px #ccc;
              margin: 3px 0px;
              padding: 2px;
              display: flex;
              flex-direction: column;//让布局自上而下
              justify-content: space-between;
              min-height: 293px;
              img{
                  width:100%;
              }
              .title{
                  font-size: 14px
              }
              .info{
                  background-color: #eee;
                  p{
                      margin: 0px;
                      padding: 5px;
                  }
                  .price{
                     .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                     }
                     .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left:10px; 
                     }
                  }
                  .sell{
                       display: flex;
                       justify-content: space-between;
                       font-size: 12px;
                  }
              }
          }
          .box{
              width:100%;
          }
      }
      
</style>