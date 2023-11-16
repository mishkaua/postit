import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Note from '../views/Note.vue'
import AddPostitView from '../views/AddPostitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /*{
      path: '/note',
      name: 'note',
      component: Note
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Note.vue')
    },*/
    {
      path: '/note/:id',
      component: () =>import('../views/ShowNote.vue')
    },
    {
      path: '/addpostit',
      name: 'addpostit',
      component: AddPostitView
    }
  ],
  linkActiveClass: 'note-active-link'
})

export default router
