import Demo from './Demo'
import Relation from './Relation'

import BookMath from './book/Math'
import BookStory from './book/Story'

import ShopList from './shop/List'
import ShopView from './shop/View'

import FromView from './form/View'
import FormEdit from './form/Edit'

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