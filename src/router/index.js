
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'
const Home = () => import('../components/home')
const About = () => import('../components/about')
const User = () => import('../components/user')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const router = new VueRouter({
    //配置路径和组件之间的映射关系
    routes:[
    {
        path: '/',
        // redirect:'/home'
        component: Home,//懒加载
    },
    {
        path: '/home',
        // component:Home,
        component: Home,
        children:[
            {
                path:'/',
                component:News
            },
            {
                path:'news',
                component:News
            },{
                path:'message',
                component:Message
            }
        ],
        linkActiveClass:'active'
    },{
        path: '/about',
        component: About,
        // component:About
    },{
        path: '/user/:userId',
        // component: User
        component: User
    }

    ],
    mode: 'history'
})

export default router
