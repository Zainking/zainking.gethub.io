import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Other from '@/components/Other'
import TopBar from '@/components/TopBar'

Vue.use(Router)
Vue.component('TopBar', TopBar)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
