// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    
  },{ 
  path: '/page1',
  name: 'Page1',
  component: () => import('@/views/page1.vue'),
  
},
{
  path: '/page2',
  name: 'page2',
  component: () => import ('@/views/page2.vue'),

},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
