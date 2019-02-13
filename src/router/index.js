import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Play from '@/components/Play'
import About from '@/components/About'
import Link from '@/components/Link'
import Playss from '@/components/Playss'
import header from '../../static/page/header'
import main from '../../static/page/main'
import footer from '../../static/page/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Play',
      name: 'Play',
      component: Play,
      children :[
        {
          path:'Link',
          component:Link
        },
        {
          path:'Playss',
          component:Playss
        }
      ]
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/header',
      name: 'header',
      component:()=> import('../../static/page/header')
    },
    {
      path: '/main',
      name: 'main',
      component:()=> import('../../static/page/main')
    },
    {
      path: '/footer',
      name: 'footer',
      component:()=> import('../../static/page/footer')
    }
   /* {
      path: '/Link',
      name: 'Link',
      component: Link
    }*/
  ]
})
