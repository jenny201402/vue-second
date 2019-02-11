import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Play from '@/components/Play'
import About from '@/components/About'
import Link from '@/components/Link'
import Playss from '@/components/Playss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
   /* {
      path: '/Link',
      name: 'Link',
      component: Link
    }*/
  ]
})
