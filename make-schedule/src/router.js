import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/Shop')
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});