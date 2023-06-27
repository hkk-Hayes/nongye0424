import axios from 'axios';
import Vue from 'vue';
import { Message, Loading } from 'element-ui';
import store from '@/store';

const service = axios.create({
  baseURL: 'http://localhost:3007/',
  timeout: 10000,
});

// console.log(process.env.VUE_APP_API_URL);
let loadObj = null;
// 添加拦截器
service.interceptors.request.use((config) => {
// 设置旋转小图标
  if (!loadObj) {
    loadObj = Loading.service({
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0,0,0,0.5)',
      lock: true,
    });
  }
  // token
  const newConfig = { ...config };
  if (store.getters.token !== '') {
    newConfig.headers['user-token'] = store.getters.token;
  }
  return newConfig;
}, (error) => Promise.reject(error));

service.interceptors.response.use((res) => {
// console.log(27, res);
// 报错信息
  Vue.nextTick(() => {
    loadObj.close();
    loadObj = null;
  });
  if (res.data.code !== 666) {
    Message({
      message: res.data.msg, type: 'error',
    });
  }

  return res.data;
}, (error) => Promise.reject(error));

export default service;
