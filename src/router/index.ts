import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import AboutView from '@/views/about/AboutView.vue'

// <--- 品牌光譜 --->
import BrandView from '@/views/brand/BrandView.vue'
import BrandVideoView from '@/views/brand/video/BrandVideoView.vue'

// <--- 智能光譜 --->
import SmartView from '@/views/smart/SmartView.vue'
import LoanView from '@/views/smart/loan/LoanView.vue'

// <--- 精工光譜 --->
import ConstructionView from '@/views/construction/ConstructionView.vue'
import MethodView from '@/views/construction/method/MethodView.vue'
import BuildingView from '@/views/construction/building/BuildingView.vue'
import WaterProofView from '@/views/construction/waterproof/WaterProofView.vue'
import SafeView from '@/views/construction/safe/SafeView.vue'

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
    {
      path: '/construction',
      component: ConstructionView,
      children: [
        {
          path: '',
          name: 'method',
          component: MethodView,
        },
        {
          path: 'building',
          name: 'building',
          component: BuildingView,
        },
        {
          path: 'water',
          name: 'water',
          component: WaterProofView,
        },
        {
          path: 'safe',
          name: 'safe',
          component: SafeView,
        },
      ],
    },
  ],
})

export default router
