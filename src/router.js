import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Restaurants from './views/Restaurants.vue'
import RestaurantProfile from './views/RestaurantProfile.vue'
import Checkout from './views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/profile',
    name: 'RestaurantProfile',
    component: RestaurantProfile
  },
  {
    path: '/restaurants/checkout',
    name: 'Checkout',
    component: Checkout
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
