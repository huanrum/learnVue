
import VueRouter from "vue-router";

import Login from './Login';
import About from './About';
import Help from './Help';
import Main from './Main';

import global from './common/global';
import children from './modules/_router';

var beforeEnter = (to, from, next) => {
    global('active_path',from.path);
    //这样可以传递参数
    to.params.back = from.path;
    next();
}

var routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: beforeEnter
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        beforeEnter: beforeEnter
    },
    {
        path: '/help',
        name: 'help',
        component: Help,
        beforeEnter: beforeEnter
    },
    {
        path: '/',
        name:'main',
        component: Main,
        children: children
    },
    {
        path: '',
        redirect: ''
    }
];

global('active_path','/main');
// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
    base: __dirname,
    routes: routes
})
