
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home'
import About from '../components/about'
import User from '../components/user'
const router = new VueRouter({
    //配置路径和组件之间的映射关系
    routes:[
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home,
        linkActiveClass:'active'
    },{
        path: '/about',
        component:About
    },{
        path: '/user/:userId',
        component: User
    }

    ],
    mode: 'history'
})

export default router
