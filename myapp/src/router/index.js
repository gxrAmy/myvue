import Vue from 'vue'
import Router from 'vue-router'
import HelloMusic from '@/components/HelloMusic'
import HelloSinger from '@/components/HelloSinger'
import search from '@/components/search'
import user from '@/components/user'
import MusicPlay from '@/components/MusicPlay'
import SingerShow from '@/components/SingerShow'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMusic',
      component: HelloMusic
    },
    {
      path: '/singer',
      name: 'HelloSinger',
      component: HelloSinger
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/MusicPlay/:id',
      name: 'MusicPlay',
      component: MusicPlay
    },
    {
      path: '/SingerShow/:id',
      name: 'SingerShow',
      component: SingerShow
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
