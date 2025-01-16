import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import AboutView from '@/views/about/AboutView.vue'

// <--- 品牌光譜 --->
import BrandView from '@/views/brand/BrandView.vue'
import BrandVideoView from '@/views/brand/video/BrandVideoView.vue'

// <--- 智能光譜 --->
import SmartView from '@/views/smart/SmartView.vue'
import LoanView from '@/views/smart/loan/LoanView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/brand',
      component: BrandView,
      children: [
        {
          path: '',
          name: 'brand',
          component: BrandVideoView,
        },
      ],
    },
    {
      path: '/smart',
      component: SmartView,
      children: [
        {
          path: '',
          name: 'loan',
          component: LoanView,
        },
      ],
    },
  ],
})

export default router
