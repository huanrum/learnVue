import Demo from './Demo';
import Relation from './Relation';

import BookMath from './Math';
import BookStory from './Story';

import ShopList from './List';
import ShopView from './View';

import FromView from './View';
import FormEdit from './Edit';

export default [
            {
                path: '/demo',
                name: 'demo',
                icon: 'assets/game1.svg',
                component: Demo
            },
            {
                path: '/relation',
                name: 'relation',
                icon: 'assets/game2.svg',
                component: Relation
            },
            {
                path: '/book',
                name: 'book',
                icon: 'assets/game3.svg',
                component:{template:'<router-view></router-view>'}
            },
            {
                path: '/math',
                name: 'math',
                icon: 'assets/game4.svg',
                component: BookMath
            },
            {
                path: '/story',
                name: 'story',
                icon: 'assets/game5.svg',
                component: BookStory
            },
            {
                path: '/shop',
                name: 'shop',
                icon: 'assets/game6.svg',
                component:{template:'<router-view></router-view>'}
            },
            {
                path: '/list',
                name: 'list',
                icon: 'assets/game7.svg',
                component: ShopList
            },
            {
                path: '/view',
                name: 'view',
                icon: 'assets/game8.svg',
                component: ShopView
            },
            {
                path: '/form',
                name: 'form',
                icon: 'assets/game9.svg',
                component:{template:'<router-view></router-view>'}
            },
            {
                path: '/view',
                name: 'view',
                icon: 'assets/game10.svg',
                component: FromView
            },
            {
                path: '/edit',
                name: 'edit',
                icon: 'assets/game11.svg',
                component: FormEdit
            }
        ];