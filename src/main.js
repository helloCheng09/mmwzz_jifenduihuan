import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import { Message, MessageBox, Popover, Button } from 'element-ui'; // 按需引入

Vue.use(
  Popover
);

Vue.use(
  Button
);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.prototype.$http= axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')