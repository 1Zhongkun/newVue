import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Header } from "mint-ui";
import 'mint-ui/lib/style.css'
import 'mui/css/mui.min.css'

Vue.component(Header.name, Header);

Vue.config.productionTip = false
console.log("a")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
