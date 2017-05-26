import Demo from './Demo.vue'
import Relation from './Relation.vue'

import BookMath from './book/Math.vue'
import BookStory from './book/Story.vue'

import ShopList from './shop/List.vue'
import ShopView from './shop/View.vue'

import FromView from './form/View.vue'
import FormEdit from './form/Edit.vue'

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
            },
            {
                path: '/form',
                name: 'form',
                component:{template:'<router-view></router-view>'},
                children:[
                     {
                        path: '/form/view',
                        name: 'view',
                        component: FromView
                    },
                    {
                        path: '/form/edit',
                        name: 'edit',
                        component: FormEdit
                    },
                ]
            }
        ];