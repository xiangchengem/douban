// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Row, Col } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import VueResource from 'vue-resource';
import { Icon } from 'vant';
import { Rate } from 'vant';
Vue.use(Rate);
Vue.use(Icon);
Vue.use(VueResource)
Vue.use(Swipe).use(SwipeItem);
Vue.use(Row).use(Col);
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:c=>c(App)
})
