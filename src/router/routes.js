const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('@/components/About.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home.vue')
    }
]

export default routes