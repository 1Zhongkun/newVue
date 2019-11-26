import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//var car1=JSON.stringify(localStorage.getItem('carr')||'[]');
export default new Vuex.Store({
  state: {
    carr: []//将购物车的数据，用数组存储起来   {id：xxx，count：xxx，price：xxx，selected：true}
  },
  mutations: {
    //点击加入购物车吧商品加入到购物车
       addToCar(state,goodsinfo){
         //假设没有找到此商品
         var flag=false;
               state.carr.some(item=>{
                   if(item.id==goodsinfo.id){
                     item.count=item.count+parseInt(goodsinfo.count);
                     flag=true;
                     return true;
                   }
               })
               //循环完毕如果是flase证明 没有这个商品就加入到购物车
               if(!flag){
                     state.carr.push(goodsinfo);
               }
              // localStorage.setItem('car',JSON.stringify(state.carr))
       },
       updateGoodsInfo(state,goodsinfo){
         //修改购物车中的商品数量
         state.caar.some(item=>{
           if(item.id==goodsinfo.id){
                item.count=parseInt(goodsinfo.count);
                return true;
           }

         })
           // localStorage.setItem('car',JSON.stringify(state.carr))吧最新的数据写到本地中
       },
       removeFormCar(state,id){
                      state.carr.some(item, i => {
                       if (item.id == id) {
                          state.carr.splice(i, 1);
                        return ture;
                                  }
                                });
           // localStorage.setItem('car',JSON.stringify(state.carr))吧最新的数据写到本地中
                            },
                            //改变选中的状态
          updateGoodsSelected(state,info){
                   state.carr.some(item=>{
                       if(item.id==info.id){
                         item.selected=info.selected;
                       }
                   })
             // localStorage.setItem('car',JSON.stringify(state.carr))吧最新的数据写到本地中
          }
  },
  getters:{ 
      //获得所以商品数量
        getAllCount(state){
          var c=0;
            state.carr.forEach(item=>{
                c+=item.count;
            })
            return c;
        },
     //获得购物车中的每一辆商品数量
        getGoodsCount(state){
          var o={};
          state.carr.forEach(item=>{
              o[item.id]=item.count;
          })
          return o;
        },
        //先拿到所以物品的选择状态 ，
        getGoodsSelected(state){
            var o={};
            state.carr.forEach(item=>{
                      o[item.id]=item.selected;
            })
            return o;

            
        },
        getGoodsCountAndAmount(state){
            var o={count:0,amount:0}
            state.carr.forEach(item=>{
                 if(item.selected){
                     o.count+=item.count;
                     o.amount+=item.count*item.price;
                 }
            })
            return o;
        }

  },
  actions: {
  },
  modules: {
  }
})
