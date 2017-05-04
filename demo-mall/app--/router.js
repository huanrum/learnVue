// 定义组件, 也可以像教程之前教的方法从别的文件引入
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

export default [
    {
        path: '/first',
        name:'first',
        component: firstcomponent
    },
    {
        path: '/second',
        name:'second',
        component: secondcomponent
    }
];
