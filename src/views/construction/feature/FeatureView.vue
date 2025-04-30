<template>
  <div class="feature-view">
    <Nav :color="navColor" />
    <div class="feature-view-container">
      <div class="feature-view-title">
        <div class="feature-view-title-en">
          <img src="/src/assets/img/construction/list/list-title-txt@2x.webp" alt="" />
        </div>
        <div class="feature-view-title-zh">
          <img src="/src/assets/img/construction/list/list-title-txt-zh@2x.webp" alt="" />
        </div>
      </div>
      <div class="feature-view-content">
        <ul class="feature-view-content-ul-left">
          <li class="feature-view-content-li item-1 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/賀眾牌@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-water-filter@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-2 txt-right">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/sakura@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-sakura@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-3 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/EMS系統@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-ems@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-4 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/BWT@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-bwt@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-5 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/泡沫洗淨@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-toilet@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-6 txt-top">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/全熱交換器@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-panasonic@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-7 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/四合一暖風機@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-panasonic-2@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-8 txt-left">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/電子鎖@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-philips@2x.webp" alt="" />
            </div>
          </li>
          <!-- <li><button @click="renderItem('bwt')">BWT</button></li>
          <li><button @click="renderItem('bath')">衛浴設備</button></li>
          <li><button @click="renderItem('kitch')">廚具設備</button></li>
          <li><button @click="renderItem('elevator')">電梯</button></li>
          <li><button @click="renderItem('airtight')">氣密窗</button></li>
          <li><button @click="renderItem('waterfilter')">淨水器</button></li>
          <li><button @click="renderItem('system')">全熱交換器</button></li>
          <li><button @click="renderItem('entrance')">玄關門</button></li>
          <li><button @click="renderItem('wooden')">木地板</button></li>
          <li><button @click="renderItem('guarantee')">五大保固</button></li> -->
        </ul>
        <ul class="feature-view-content-ul-right">
          <li class="feature-view-content-li item-1 txt-top">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/svago@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-svago@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-2 txt-top">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/toto@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-toto@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-3 txt-top">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/kohler@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-kohler@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-4 txt-top">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/japan@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-japan@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-5 txt-right">
            <div class="color-lump">
              <img src="/src/assets/img/construction/list-icon/dupont@2x.webp" alt="" />
            </div>
            <div class="item-img">
              <img src="/src/assets/img/construction/list/list-dupont@2x.webp" alt="" />
            </div>
          </li>
          <li class="feature-view-content-li item-6 txt-right">
            <div class="color-lump"></div>
            <p>品質保固</p>
          </li>
        </ul>
        <div class="feature-view-content-txt">
          <img src="/src/assets/img/construction/list/view-content-txt@2x.webp" alt="" />
        </div>
      </div>
    </div>
    <FadeIn>
      <BathList
        v-if="tag === 'bath'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <KitchenList
        v-else-if="tag === 'kitch'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <ElevatorItem
        v-else-if="tag === 'elevator'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <AirtightItem
        v-else-if="tag === 'airtight'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <WaterFilter
        v-else-if="tag === 'waterfilter'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <SystemItem
        v-else-if="tag === 'system'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <EntranceDoor
        v-else-if="tag === 'entrance'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <WoodenFloor
        v-else-if="tag === 'wooden'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <GuaranteeItem
        v-else-if="tag === 'guarantee'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <BWTItem
        v-else-if="tag === 'bwt'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, onMounted } from 'vue'
import gsap from 'gsap'
import FadeIn from '@/components/transition/FadeIn.vue'
import Nav from '@/components/nav/Nav.vue'
import BathList from '@/components/bath/BathList.vue'
import KitchenList from '@/components/kitchen/KitchenList.vue'
import ElevatorItem from '@/components/featureItems/ElevatorItem.vue'
import AirtightItem from '@/components/featureItems/AirtightItem.vue'
import WaterFilter from '@/components/featureItems/WaterFilter.vue'
import SystemItem from '@/components/featureItems/SystemItem.vue'
import EntranceDoor from '@/components/featureItems/EntranceDoor.vue'
import WoodenFloor from '@/components/featureItems/WoodenFloor.vue'
import GuaranteeItem from '@/components/featureItems/GuaranteeItem.vue'
import BWTItem from '@/components/featureItems/BWTItem.vue'
import '@/assets/scss/feature/feature-view.scss'

const tag = ref<string | null>(null)

const colorToggle = ref(true)

const renderItem = (val?: string) => {
  if (val) {
    tag.value = val
  } else {
    tag.value = null
  }
}

const handleNavColor = (val: boolean) => {
  colorToggle.value = val
}

const navColor = computed(() => {
  return colorToggle.value ? 'black' : 'white'
})

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.feature-view-title-en,.feature-view-title-zh', {
    y: '-20%',
    opacity: 0,
    stagger: 0.1,
    duration: 1.5,
  })
    .from(
      '.txt-left .item-img img',
      {
        x: '-30%',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.txt-top .item-img img',
      {
        y: '-30%',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.txt-right .item-img img',
      {
        x: '30%',
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.feature-view-content-txt',
      {
        y: '-10%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
}

watch(tag, () => {
  if (!tag.value) {
    colorToggle.value = true
  }
})

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss" scoped>
.feature-view {
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      font-size: 2vw;
    }
  }
}
</style>
