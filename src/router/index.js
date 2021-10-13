import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// Check user
const validUser = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) next({ name: 'Home' })
  else next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: validUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
