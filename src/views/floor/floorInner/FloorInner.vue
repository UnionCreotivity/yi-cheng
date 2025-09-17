<template>
  <div class="floor-inner">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="/src/assets/img/other/company-icon.svg" alt="" />
      </router-link>
    </div>
    <div class="floor-inner-cotainer" :class="`floor-${floorInnerItem?.tag}`">
      <FadeIn>
        <div class="floor-inner-left" v-show="!is_ToggleShow">
          <div class="txt-1">{{ floorInnerItem?.tag }}</div>
          <div class="txt-2"><span v-if="floorInnerItem?.tag === '3F-14F'">全區</span>配置圖</div>
          <div class="txt-3">FLOOR PLAN</div>
        </div>
      </FadeIn>
      <div class="floor-inner-right">
        <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" @toggle-text="toggleText">
          <div class="container">
            <div class="anchor-area">
              <div class="anchor-area-map">
                <img class="imgBoxMap" :src="floorInnerItem?.floorImg" />
                <div class="points-container" v-if="floorInnerItem?.points">
                  <div
                    class="floor-inner-point"
                    v-for="item in floorInnerItem?.points"
                    :key="item.tag"
                    :class="item.class"
                    @click="tagClick(item.tag)"
                  >
                    {{ item.tag }}
                  </div>
                </div>
              </div>
            </div>
          </div></ScaleDrag
        >
        <FadeIn> <p v-show="!is_ToggleShow">本圖面僅供參考，實際圖面依合約書附圖為準</p></FadeIn>
      </div>
    </div>
    <div class="floor-inner-close" @click="backMain">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
    <div class="floor-inner-compass">
      <img src="/src/assets/img/floor/floor-inner/compass.svg" alt="" />
    </div>
    <FadeIn>
      <FloorFancyBox :fancyItem="fancyItem" @tag-click="tagClick" v-if="fancyItem !== null" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FadeIn from '@/components/transition/FadeIn.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import FloorFancyBox from '@/components/floor/FloorFancyBox.vue'
import { floorInnerData, floorFancyData } from '../FloorData'
import '@/assets/scss/floor/floor-inner.scss'

const router = useRouter()

const route = useRoute()

//當前頁面內容
const floorInnerItem = ref<{
  tag: string
  txtImg: string
  floorImg: string
  points?: { tag: string; class: string }[]
} | null>(null)

//fancybox內容(家配)
const fancyItem = ref<{
  tag: string
  img: string
} | null>(null)

//放大隱藏的文字
const is_ToggleShow = ref(false)

//fancybox的tag
const fancyTag = ref('')

const toggleText = (val: boolean) => {
  is_ToggleShow.value = val
}

const tagClick = (val: string) => {
  if (val) {
    fancyTag.value = val
    const findItem = floorFancyData.find((item) => item.tag === fancyTag.value)
    if (findItem) {
      fancyItem.value = findItem
    }
  } else {
    fancyItem.value = null
  }
}

const backMain = () => {
  router.push({ name: 'floor' })
}

const findData = () => {
  const { q } = route.query
  if (q) {
    const data = floorInnerData.find((item) => item.tag === q)
    if (data) {
      floorInnerItem.value = data
    }
  }
}

onMounted(() => {
  //網頁初始化時透過query來找資料
  findData()
})
</script>

<style lang="scss"></style>
