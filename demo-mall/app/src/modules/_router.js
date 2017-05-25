import Demo from './Demo.vue'
import Relation from './Relation.vue'

import BookMath from './book/Math.vue'
import BookStory from './book/Story.vue'

import ShopList from './Shop/List.vue'
import ShopView from './Shop/View.vue'

export default [
            {
                path: '/demo',
                name: 'demo',
                component: Demo
            },
            {
                path: '/relation',
                name: 'relation',
                component: Relation
            },
            {
                path: '/book',
                name: 'book',
                component:{template:'<router-view></router-view>'},
                children:[
                    {
                        path: '/book/math',
                        name: 'math',
                        component: BookMath
                    },
                    {
                        path: '/book/story',
                        name: 'story',
                        component: BookStory
                    },
                ]
            },
            {
                path: '/shop',
                name: 'shop',
                component:{template:'<router-view></router-view>'},
                children:[
                     {
                        path: '/shop/list',
                        name: 'list',
                        component: ShopList
                    },
                    {
                        path: '/shop/view',
                        name: 'view',
                        component: ShopView
                    },
                ]
            }
        ];