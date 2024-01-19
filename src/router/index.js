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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});