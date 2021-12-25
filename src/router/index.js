import { createRouter, createWebHistory } from 'vue-router';
import BasicLayout from '@/components/Layout/basic';
import { Home, Search } from '@/page';

console.log(Home ,'home')
const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
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
        // props: true
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'videos',
        name: 'videos',
        component: Search,
      },
      {
        path: 'jmy',
        name: 'jmy',
        component: Search,
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
