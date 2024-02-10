import { lazy } from 'solid-js'

export const routes = [
    { path: '/', component: lazy(() => import('@/pages/home')), isNav: true },
    { path: '/about', component: lazy(() => import('@/pages/about')), isNav: true },
    { path: '/projects', component: lazy(() => import('@/pages/projects')), isNav: true },
    { path: '/blog', component: lazy(() => import('@/pages/blog')), isNav: true },
    { path: '/blog/:slug', component: lazy(() => import('@/pages/blog/[slug]')), isNav: false },
    { path: '/contact', component: lazy(() => import('@/pages/contact')), isNav: true },
    { path: '/*404', component: lazy(() => import('@/pages/not-found')), isNav: false },
]
