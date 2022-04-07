import { createRouter, createWebHashHistory } from 'vue-router'
const layout = () => import('./../layout/index.vue')

const syncRoutes = [
    {
        path: '/',
        name: 'layout',
        component: layout,
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./../pages/login/index.vue'),
    },
    {
        path: '/dashboard',
        component: layout,
        meta: {
            icon: 'el-icon-s-home',
            title: 'dashboard',
        },
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                name: 'dashboard',
                component: () => import('./../pages/dashboard/index.vue'),
            },
        ],
    },
    {
        path: '/graph',
        component: layout,
        meta: {
            icon: 'el-icon-picture-outline-round',
            title: 'garph',
        },
        redirect: '/graph/index',
        children: [
            {
                path: 'index',
                name: 'graph',
                component: () => import('./../pages/graph/index.vue'),
            },
        ],
    },
    {
        path: '/test',
        component: layout,
        meta: {
            icon: 'el-icon-menu',
            title: 'test',
        },
        redirect: '/test/index',
        children: [
            {
                path: 'index',
                name: 'test1',
                meta: {
                    title: 'test1',
                },
                component: () => import('./../pages/test/index.vue'),
            },
            {
                path: 'index2',
                name: 'test2',
                meta: {
                    title: 'index2',
                },
                component: () => import('./../pages/test/index2.vue'),
            },
        ],
    },
    {
        path: '/three',
        component: layout,
        meta: {
            icon: 'el-icon-setting',
            title: 'three',
        },
        redirect: '/three/index',
        children: [
            {
                path: 'three1',
                name: 'three1',
                meta: {
                    title: 'three1',
                },
                component: () => import('./../pages/three/index.vue'),
                children: [
                    {
                        path: 'index',
                        name: 'child1',
                        meta: {
                            title: 'child1',
                        },
                        component: () => import('./../pages/three/child/index.vue'),
                    },
                    {
                        path: 'index2',
                        name: 'child2',
                        meta: {
                            title: 'child2',
                        },
                        component: () => import('./../pages/three/child/index.vue'),
                        children:[
                            {
                                path: 'child21',
                                name: 'child21',
                                meta: {
                                    title: 'child21',
                                },
                                component: () => import('./../pages/three/child/index.vue'),
                            },
                        ]
                    },
                ]
            },
            {
                path: 'three2',
                name: 'three2',
                meta: {
                    title: 'three2',
                },
                component: () => import('./../pages/three/index2.vue'),
            },
        ],
    },
]

const asyncRoutes = []

const routes = syncRoutes.concat(asyncRoutes)
// 创建路由 使用了es6的对象增强写法，命名必须是routes
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
