
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'
const router = new VueRouter({
    //配置路径和组件之间的映射关系
    routes:[
    {
        path: '/',
        // redirect:'/home'
        component: () => import('../components/home'),//懒加载
    },
    {
        path: '/home',
        // component:Home,
        component: () => import('../components/home'),
        linkActiveClass:'active'
    },{
        path: '/about',
        component: () => import('../components/about'),
        // component:About
    },{
        path: '/user/:userId',
        // component: User
        component: () => import('../components/user')
    }

    ],
    mode: 'history'
})

export default router
