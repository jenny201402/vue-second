import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Play from '@/components/Play'
import About from '@/components/About'
import Link from '@/components/Link'
import Playss from '@/components/Playss'
import Header from '../../static/page/Header'
import Main from '../../static/page/Main'
import Footer from '../../static/page/Footer'
import test from '../../static/page/test'

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
      children: [
        {
          path: 'Link',
          component: Link
        },
        {
          path: 'Playss',
          component: Playss
        }
      ]
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Header',
      name: 'Header',
      component: () => import('../../static/page/Header')
    },

    {
      path: '/Main',
      name: 'Main',
      component: () => import('../../static/page/Main')
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: () => import('../../static/page/Footer')
    },
    {
      path: '/pickerDate',
      name: 'pickerDate',
      component: () => import('../../static/page/pickerDate')
    },
    {
      path: '/Navigative',
      name: 'Navigative',
      component: () => import('@/components/Navigative')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../../static/page/test')
    }
    /* {
       path: '/Link',
       name: 'Link',
       component: Link
     }*/
  ]
})
