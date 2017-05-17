import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'


import router from './src/_router.js'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

var App = {template:'<div><router-view class="app-view"></router-view></div>'};

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')