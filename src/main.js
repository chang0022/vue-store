// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Notify from 'vue-notifyjs';
import App from './App';
import router from './router';
import store from './store/index';


Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Notify, {
  timeout: 1500,
  horizontalAlign: 'right',
  verticalAlign: 'top',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
