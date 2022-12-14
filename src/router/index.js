import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import Signup from '../views/Signup.vue'
import LoginForm from '../views/LoginForm.vue'
import dashboard from '../views/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Signup',
    name:'Signup',
    component: Signup
  },
  {
    path: '/LoginForm',
    name:'LoginForm',
    component: LoginForm,
    meta:{
      hideNavBar:true
    }
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component: dashboard,
    meta:{
      hideNavBar:true
    }
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
