<template>
    <div>
       
        <comment :newsid="this.$route.params.id"></comment>
    </div>
</template>
<script>
import  Comment from '../news/Comment.vue'
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        
    },
    components:{
        'comment':Comment
    },
    props:['newsid']
}
</script>
<style lang="less" scoped>

</style>