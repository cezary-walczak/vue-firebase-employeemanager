import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/view-employee',
      name: 'ViewEmployee',
      component: ViewEmployee
    },
    {
      path: '/new-employee',
      name: 'NewEmployee',
      component: NewEmployee
    },
    {
      path: '/edit-employee',
      name: 'EditEmployee',
      component: EditEmployee
    }
  ]
})
