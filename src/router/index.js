
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
const Profile = () => import('../components/Profile')
const router = new VueRouter({
    //配置路径和组件之间的映射关系
    routes:[
    {
        path: '/',
        // redirect:'/home'
        component: Home,//懒加载
        meta:{
            title:"首页"
        }
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
        linkActiveClass:'active',
        meta:{
            title:"首页"
        }
    },{
        path: '/about',
        component: About,
        meta:{
            title:"关于"
        }
        // component:About
    },{
        path: '/user/:userId',
        // component: User
        component: User,
        meta:{
            title:"用户"
        }
    },{
        path:'/profile',
        component:Profile,
        meta:{
            title:"档案"
        }
    }

    ],
    mode: 'history'
})

router.beforeEach((to,from,next)=>{
    document.title = to.matched[0].meta.title
    next()
})
export default router
