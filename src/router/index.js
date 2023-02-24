import { createRouter, createWebHistory } from 'vue-router'
import ExerciseAView from '../views/ExerciseAView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exercise-1',
      component: ExerciseAView
    },
    {
      path: '/exercise-2',
      name: 'exercise-2',
      // route level code-splitting
      // this generates a separate chunk (ExerciseA.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExerciseBView.vue')
    }
  ]
})

export default router
