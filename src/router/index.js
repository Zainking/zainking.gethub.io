import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Other from '@/components/Other'
import TopBar from '@/components/TopBar'
import GoHref from '@/components/GoHref'
import ProjectDetail from '@/components/ProjectDetail'

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
      path: '/projects/:id',
      name: 'projectDetail',
      component: ProjectDetail
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
    },
    {
      path: '/gohref/:href',
      name: 'gohref',
      component: GoHref
    }
  ]
})
