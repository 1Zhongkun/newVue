<template>
    <div class="cmt-container">
        <h3>评论子组件</h3>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多120个字)" maxlength="120" v-model="msg">

        </textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in commentlist" :key="item.add_time">
            <div class="cmt-title">
             第{{1+i}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:
             {{item.add_time | dataFormat}}
            </div>
            <div class="cmt-body" >
                  {{item.content==='undefined'?'此用户很懒':item.content}}
             </div>
          </div>
          
        
        </div>
         <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
     data() {
         return {
               pageIndex:1, //默认展示第一页数据
               commentlist:[],
               msg:""//发表评论数据
         }
     },
    created() {
         this.getCommentList();
     },
     methods: {
         getCommentList(){
             //http://www.liulongbin.top:3005/api/getcomments/13?pageindex=1
             //api/getcomments/"+ this.id +"?pageindex=" + this.pageIndex
             this.$http.get("api/getcomments/"+this.newsid+"?pageindex="+this.pageIndex).then(result=>{
                     if(result.body.status===0){
                         //每当有新的数据的时候就跟上一次的数据拼接在一起
                         //当数据是空的时候，也不会让老数据报错
                     this.commentlist=this.commentlist.concat(result.body.message)
                   }else{
                      
                      Toast("获取评论数据失败");
                   }
             })
         },
         getmore(){
             this.pageIndex++;
             this.getCommentList();
         },
         postComment(){
             if(this.msg.trim().length===0){
                 return Toast("评论内容不能为空");
             }
             //定义提交时候，表单中的格式
             this.$http.post("api/postcomment/"+this.newsid,{content:this.msg.trim()
             }).then(result=>{
                    if(result.body.status===0){
                         
                         var cmt={user_name:'匿名用户',add_time:Date.now(),content:this.msg}

                     this.commentlist.unshift(cmt);
                     this.msg='';
                   }else{
                      
                      Toast("提交评论失败");
                   }
             })
         }

     },
    
     props:['newsid']
}
</script>
<style lang="less" scope>
  .cmt-container{
      h3{
          font-size: 18px;
      }
      textarea{
          font-size: 14px;
          height: 85px;
          margin: 0;
      }
      .cmt-list{
          margin: 5px 0;
          
          .cmt-item{ 
              font-size: 13px;
              .cmt-title{
                 background-color: #ccc;
                 line-height: 30px;
          }         
               .cmt-body{
                   line-height: 35px;
                   text-indent: 2em;
             }
      }

    }
  }
</style>