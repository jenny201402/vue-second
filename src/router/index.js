import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Play from '@/components/Play'
import About from '@/components/About'
import Link from '@/components/Link'
import Playss from '@/components/Playss'
import Rest from '@/components/Rest'
import Layout from '@/components/Layout'
import Header from '../../static/page/Header'
import Main from '../../static/page/Main'
import Footer from '../../static/page/Footer'
import Formvalidate from '../../static/page/Formvalidate'
import Breadcrumb from '../../static/view/Breadcrumb/Breadcrumb'

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
      // redirect: '/player/1',
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
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Header',
      name: 'Header',
      component: () => import('../../static/page/Header')
    },
    {
      path: '/Formvalidate',
      name: 'Formvalidate',
      component: () => import('../../static/page/Formvalidate')
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('../../static/page/Main')
    },
    {
      path: '/Rest',
      name: 'Rest',
      component: Rest
    },

    {
      path: '/Footer',
      name: 'Footer',
      component: () => import('../../static/page/Footer')
    },
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../../static/view/Breadcrumb/Breadcrumb')
    },
/*    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../../static/view/Breadcrumb/Breadcrumb')
    },
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../../static/view/Breadcrumb/Breadcrumb')
    },
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../../static/view/Breadcrumb/Breadcrumb')
    },*/
    {
      path: '/Navigative',
      name: 'Navigative',
      component: () => import('@/components/Navigative')
    },

    /* {
       path: '/Link',
       name: 'Link',
       component: Link
     }*/
  ]
})
