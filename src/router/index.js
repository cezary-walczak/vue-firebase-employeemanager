import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'
import Login from '@/auth/Login'
import Register from '@/auth/Register'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view/:employee_id',
      name: 'ViewEmployee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'NewEmployee',
      component: NewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'EditEmployee',
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    }
  ]
})

// nav guards
router.beforeEach((to, from, next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if user NOT logged in
    if(!firebase.auth().currentUser) {
      next({ name: 'Login' })
    } else {
      //proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
     //check if user logged in
    if(firebase.auth().currentUser) {
      next({ name: 'Login' })
    } else {
      //proceed to route
      next() 
    }
  } else {
    //proceed to route
    next() 
  }
})

export default router