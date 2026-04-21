import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { createMemoryHistory, createRouter } from 'vue-router'

import AppContentView from './pages/AppContent.vue'
import LearnView from './pages/Learn.vue'
import FriendLinkView from './pages/FriendLink.vue'
import AboutView from './pages/About.vue'
const routes = [
  { path: '/', component: AppContentView },
  { path: '/learn', component: LearnView},
  { path: '/link', component: FriendLinkView},
  { path: '/about', component: AboutView},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
