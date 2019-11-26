<template>
    <div class="goodsinfo-con"> 
         <transition 
         @befor-enter="beforEnter"
         @enter="enter"
         @after-enter="afterEnter">
               <div class="ball" v-if="ballFlag" ref="ball" id="ball">


               </div>
         </transition>
         

           
          <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lubotuList="lubotu" :isfull="false"></swiper>
					</div>
				</div>
			</div>

            <div class="mui-card">
				<div class="mui-card-header">{{goodslist.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价:<del>{{goodslist.market_price}}</del>&nbsp;&nbsp;销售价:<span class="nowprice">{{goodslist.sell_price}}</span>
                        </p>
                        <!--给子组件绑定一个监听事件给父组件传值-->
                        <p>购买数量:<goodsNumber @getcount="getSelectCount" :max="goodslist.stock_quantity"></goodsNumber></p>
                         <p>
                             <mt-button type="primary" size="small" >立即购买</mt-button>
                              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                         </p>
					</div>
				</div>
				
			</div>

            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p>商品货号:{{goodslist.goods_no}}</p>
                    <p>库存情况:{{goodslist.stock_quantity}}</p>
                    <p>上架时间:{{goodslist.add_time|dataFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" siez="large" plain @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" siez="large" plain @click="goMoment(id)">详情介绍</mt-button>
                </div>
			</div>

    </div>
</template>
<style lang="less" scoped>
.goodsinfo-con{
    background-color: #eee;
    .nowprice{
        font-size: 16px;
        color:red;
        font-weight: bold;
    }
    
  .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red; 
      position: absolute;
      z-index: 20;
      top:410px;
      left: 80px;
  }  
}
  
</style>
<script>
import goodsNumber from '../news/goodsNumber.vue'
import swiper from '../news/swiper.vue'
import {Toast} from 'mint-ui';
export default {
      data() {
          return {
              id:this.$route.params.id,
              lubotu:[],
              goodslist:{},
              ballFlag:false, //控制小球隐藏和显示
              selectCount:1 //用户选择的商品数量
              
          }
      },
      created() {
          this.getlunbo();
          this.getgoodsinfo();
      },
      methods: {
          getlunbo(){
                this.$http.get("api/getthumimages/"+this.id).then(result => {
                if ( result.body.status == 0) {        
                        result.body.message.forEach(item => {
                            item.img=item.src;
                        });     
                    this.lubotu =  result.body.message
                     
                } else {
                    Toast('获取图片信息失败！');
                }
            });
          },
             getgoodsinfo(){
                this.$http.get("api/goods/getinfo/"+this.id).then(result => {
                if ( result.body.status == 0) {        
                        
                    this.goodslist =  result.body.message[0]
                } else {
                    Toast('获取图片信息失败！');
                }
            });
          },
          goDesc(id){
                  //编程式导航转到图文介绍
                  this.$router.push({name:'goodsdesc',parmas:{id}});
          },
          goMoment(id){
                 //编程式导航转到评论介绍
                   this.$router.push({name:'goodscomment',parmas:{id}});
          },
          addToShopCar(){
              this.ballFlag=!this.ballFlag;
              var goodsinfo={id:this.id,count:this.selectCount,
              price:this.goodslist.sell_price,selected:true}//拼接处一个要保存到state中的car数组
                  //调用store中的方法
                  this.$store.commit('addToCar',goodsinfo);
                
         },
          beforEnter(el){
             el.style.transform="translate(0px,0px)";
          },
          enter(el,done){
              el.offsetWidth;
              //获取小球在页面中的位置
            //   const ballPosition=document.getElementById('ball').getBoundingClientRect();
  
            //   //获取购物车在页面的位置
            //   const badgePosition=document.getElementById('bagde').getBoundingClientRect();
            //  const xDist=badgePosition.left-ballPosition.left;
            //  const yDist=badgePosition.top-ballPosition.top;
             
             
              el.style.transform='translate(90px,230px)';
              el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
              done();
          },
          afterEnter(el){
             

                this.ballFlag=!this.ballFlag;
          },
          getSelectCount(count){
                 this.selectCount=count;
                 
          }
      },
      components:{
          swiper,
          goodsNumber
      }
}
</script>