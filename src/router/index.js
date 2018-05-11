import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Projects from '@/components/Projects'
import Laboratory from '@/components/Laboratory'
import Resume from '@/components/Resume'
import Other from '@/components/Other'
import TopBar from '@/components/TopBar'
import ProjectDetail from '@/components/ProjectDetail'
import LaboratoryDetail from '@/components/LaboratoryDetail'

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
      component: Projects,
      meta: {
        title: 'projects',
        keepAlive: true
      }
    },
    {
      path: '/projects/:id',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: Laboratory,
      meta: {
        title: 'laboratory',
        keepAlive: true
      }
    },
    {
      path: '/laboratory/:id',
      name: 'laboratoryDetail',
      component: LaboratoryDetail
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: {
        title: 'resume',
        keepAlive: true
      }
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
