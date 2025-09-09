import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

// <--- 品牌光譜 --->
import BrandView from '@/views/brand/BrandView.vue'
import BrandVideoView from '@/views/brand/video/BrandVideoView.vue'
import BrandIdeaView from '@/views/brand/idea/BrandIdeaView.vue'
import BrandClassicView from '@/views/brand/classic/BrandClassicView.vue'
import BrandTeamView from '@/views/brand/team/BrandTeamView.vue'

// <--- 智能光譜 --->
import SmartView from '@/views/smart/SmartView.vue'
import LoanView from '@/views/smart/loan/LoanView.vue'
import HomeSmartView from '@/views/smart/homesmart/HomeSmartView.vue'
import StoreLoanView from '@/views/smart/loan/StoreLoanView.vue'

// <--- 精工光譜 --->
import ConstructionView from '@/views/construction/ConstructionView.vue'
import MethodView from '@/views/construction/method/MethodView.vue'
import BuildingView from '@/views/construction/building/BuildingView.vue'
import WaterProofView from '@/views/construction/waterproof/WaterProofView.vue'
import SafeView from '@/views/construction/safe/SafeView.vue'
//建築精裝
import FeatureView from '@/views/construction/feature/FeatureView.vue'
//品質保證
import GuaranteeItem from '@/components/featureItems/GuaranteeItem.vue'

// <--- 繁華光譜 --->
import BustlingView from '@/views/bustling/BustlingView.vue'
import DevelopView from '@/views/bustling/develop/DevelopView.vue'
import MRTView from '@/views/bustling/mrt/MRTView.vue'
import HighwayView from '@/views/bustling/highway/HighwayView.vue'
import MajorView from '@/views/bustling/major/MajorView.vue'
import RezonedView from '@/views/bustling/rezoned/RezonedView.vue'

// <--- 生活光譜 --->
import LifeView from '@/views/life/LifeView.vue'

// <--- 藝築光譜 --->
import FloorView from '@/views/floor/FloorView.vue'
import FloorMain from '@/views/floor/floorMain/FloorMain.vue'
import FloorInner from '@/views/floor/floorInner/FloorInner.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
        {
          path: 'idea',
          name: 'idea',
          component: BrandIdeaView,
        },
        {
          path: 'classic',
          name: 'classic',
          component: BrandClassicView,
        },
        {
          path: 'team',
          name: 'team',
          component: BrandTeamView,
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
        {
          path: 'storeloan',
          name: 'storeloan',
          component: StoreLoanView,
        },
        {
          path: 'homesmart',
          name: 'homesmart',
          component: HomeSmartView,
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
        {
          path: 'feature',
          name: 'feature',
          component: FeatureView,
        },
        {
          path: 'guarantee',
          name: 'guarantee',
          component: GuaranteeItem,
        },
      ],
    },
    {
      path: '/bustling',
      component: BustlingView,
      children: [
        {
          path: '',
          name: 'develop',
          component: DevelopView,
        },
        {
          path: 'mrt',
          name: 'mrt',
          component: MRTView,
        },
        {
          path: 'highway',
          name: 'highway',
          component: HighwayView,
        },
        {
          path: 'major',
          name: 'major',
          component: MajorView,
        },
        {
          path: 'rezoned',
          name: 'rezoned',
          component: RezonedView,
        },
      ],
    },
    {
      path: '/life',
      name: 'life',
      component: LifeView,
    },
    {
      path: '/floor',
      component: FloorView,
      children: [
        {
          path: '',
          name: 'floor',
          component: FloorMain,
        },
        {
          path: 'floorinner',
          name: 'floorinner',
          component: FloorInner,
        },
      ],
    },
  ],
})

export default router
