import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import Patients from '../views/Patients.vue'

import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  // console.log('current user in auth guard', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requiredNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  // console.log('current user in auth guard', user)
  if (user) {
    next({ name: 'Patients' })
  } else {
    next()
  }
}

const routes = [
  { path: '/', name: 'Welcome', component: Welcome, beforeEnter: requiredNoAuth },
  { path: '/chatroom', name: 'Chatroom', component: ChatRoom, beforeEnter: requireAuth },  
  { path: '/patients', name: 'Patients', component: Patients, beforeEnter: requireAuth }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
