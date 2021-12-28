import { createRouter, createWebHistory } from 'vue-router';
import BasicLayout from '@/components/Layout/basic';
import {
    Home,
    Search,
    Video,
    VideoDetail,
    Jmy,
    Photo,
    PhotoDetail,
    Marketing,
    ContactUs,
    Login
} from '@/page';
// console.log(VideoDetail, 'VideoDetail');

const routes = [{
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: BasicLayout,
        children: [{
                path: '',
                name: 'home',
                component: Home,
                meta: {
                    title: '首页'
                }
                // props: true
            },
            {
                path: 'search/:searchValue?',
                name: 'search',
                component: Search,
                props: true,
                meta: {
                    title: '搜索'
                }
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: 'video',
                name: 'video',
                component: Video,
                meta: {
                    title: '视频案例'
                }
            },
            {
                path: 'video/:id',
                name: 'videoDetail',
                component: VideoDetail,
                props: true,
                meta: {
                    title: '视频案例'
                }
            },
            {
                path: 'jmy',
                name: 'jmy',
                component: Jmy,
                meta: {
                    title: '基木鱼单页'
                }
            },
            {
                path: 'photo',
                name: 'photo',
                component: Photo,
                meta: {
                    title: '图片案例'
                }
            },
            {
                path: 'photo/:id',
                name: 'photoDetail',
                component: PhotoDetail,
                props: true,
                meta: {
                    title: '图片案例'
                }
            },
            {
                path: 'marketing',
                name: 'marketing',
                component: Marketing,
                meta: {
                    title: '营销案例'
                }
            },
            {
                path: 'contact-us',
                name: 'contactUs',
                component: ContactUs,
                meta: {
                    title: '联系我们',
                    searchStatus: false
                }
            }
        ]
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Home },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

let defaultTitle = "集创网";

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : defaultTitle;
    next();
});
export default router