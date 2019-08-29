import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'

Vue.component("my-header",myHeader);
Vue.component("my-footer",myFooter);
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
