import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import VerifySlider from 'vue-verify-slider';
import * as echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';

// 引入滑动
Vue.use(VerifySlider);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.use(VueI18n);
Vue.use(ElementUI);

// const fixElTableErr = (table) => {
//   const oldResizeListener = table.methods.resizeListener;
//   const newtable = { ...table };
//   newtable.methods.resizeListener = () => {
//     window.requestAnimationFrame(oldResizeListener.bind(this));
//   };
//   return newtable;
// };
// fixElTableErr(Table);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
