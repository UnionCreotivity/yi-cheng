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
      <div class="feature-view-content" :class="hoverClass">
        <ul class="feature-view-content-ul-left">
          <li
            class="feature-view-content-li"
            v-for="(item, index) in featureData.find((item) => item.tag === 'left')?.items"
            :class="[item.class, `item-${index + 1}`]"
            :key="item.tag"
            @click="renderItem(item.item, item.index)"
          >
            <router-link
              class="feature-view-content-li-container"
              :to="{ name: 'electric' }"
              v-if="item.tag === 'left-3'"
            >
              <div class="color-lump">
                <div class="light" ref="lightItems"></div>
                <img :src="item.lumpTxt" />
              </div>
              <div class="item-img">
                <img :src="item.decoImg" />
              </div>
            </router-link>
            <div class="feature-view-content-li-container" v-else>
              <div class="color-lump">
                <div class="light" ref="lightItems"></div>
                <img :src="item.lumpTxt" />
              </div>
              <div class="item-img">
                <img :src="item.decoImg" />
              </div>
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
          <li
            class="feature-view-content-li"
            v-for="(item, index) in featureData.find((item) => item.tag === 'right')?.items"
            :class="[item.class, `item-${index + 1}`]"
            :key="item.tag"
            @click="renderItem(item.item)"
          >
            <div class="color-lump">
              <div class="light" ref="lightItems"></div>
              <img :src="item.lumpTxt" />
            </div>
            <div class="item-img">
              <img :src="item.decoImg" />
            </div>
          </li>
          <li class="feature-view-content-li item-6 txt-right" @click="renderItem('six-plus-six')">
            <div class="color-lump">
              <div class="light" style="animation-delay: 1400ms"></div>
              <img src="/src/assets/img/construction/list/six-plus-six@2x.webp" alt="" />
            </div>
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
        v-else-if="tag === 'kitchen'"
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
        :swiperIndex="swiperIndex"
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
      <BWTItem
        v-else-if="tag === 'bwt'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <LockItem
        v-else-if="tag === 'lock'"
        @render-item="renderItem"
        @handle-nav-color="handleNavColor"
      />
      <SixPlusSix
        v-else-if="tag === 'six-plus-six'"
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
import SixPlusSix from '@/components/featureItems/SixPlusSix.vue'
import BWTItem from '@/components/featureItems/BWTItem.vue'
import LockItem from '@/components/featureItems/LockItem.vue'
import { featureData } from './featureData'
import '@/assets/scss/feature/feature-view.scss'

const tag = ref<string | null>(null)

const colorToggle = ref(true)

const is_Hover = ref(false)

const animationDelay = ref(0)

const lightItems = ref()

const swiperIndex = ref(0)

const renderItem = (val?: string, index?: number) => {
  swiperIndex.value = index ? index : 0
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
    y: '-2vw',
    scale: 1.1,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
  })
    // .from(
    //   '.txt-left .item-img img',
    //   {
    //     x: '-30%',
    //     opacity: 0,
    //     stagger: 0.3,
    //     duration: 1.5,
    //   },
    //   '<+0.25',
    // )
    // .from(
    //   '.txt-top .item-img img',
    //   {
    //     y: '-30%',
    //     opacity: 0,
    //     stagger: 0.3,
    //     duration: 1.5,
    //   },
    //   '<+0.75',
    // )
    // .from(
    //   '.txt-right .item-img img',
    //   {
    //     x: '30%',
    //     opacity: 0,
    //     stagger: 0.3,
    //     duration: 1.5,
    //   },
    //   '<+0.75',
    // )
    .from(
      '.feature-view-content-txt',
      {
        y: '15%',
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          is_Hover.value = true
        },
      },
      '<+0.5',
    )
}

const hoverClass = computed(() => {
  return is_Hover.value ? 'hover-active' : ''
})

//加入動畫延遲
const addDelay = () => {
  // const itemsLength=featureItems.value.length;
  lightItems.value.forEach((el: HTMLElement) => {
    el.style.animationDelay = `${animationDelay.value}ms`
    animationDelay.value += 100
  })
}

watch(tag, () => {
  if (!tag.value) {
    colorToggle.value = true
  }
})

onMounted(() => {
  gsapInit()
  addDelay()
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
