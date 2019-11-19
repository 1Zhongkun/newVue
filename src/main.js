import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Header, Swipe, SwipeItem,Button } from "mint-ui"
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
        return moment(dataStr).format(pattern);
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
