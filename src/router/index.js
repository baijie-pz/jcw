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
  Marketing
} from '@/page';
// console.log(VideoDetail, 'VideoDetail');

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/index',
    component: BasicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        // props: true
      },
      {
        path: 'search/:searchValue?',
        name: 'search',
        component: Search,
        props: true
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: Video
      },
      {
        path: 'video/:id',
        name: 'videoDetail',
        component: VideoDetail,
        props: true
      },
      {
        path: 'jmy',
        name: 'jmy',
        component: Jmy,
      },
      {
        path: 'photo',
        name: 'photo',
        component: Photo,
      },
      {
        path: 'photo/:id',
        name: 'photoDetail',
        component: PhotoDetail,
        props: true
      },
      {
        path: 'marketing',
        name: 'marketing',
        component: Marketing,
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

export default router
