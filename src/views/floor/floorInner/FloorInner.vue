<template>
  <div class="floor-inner">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="/src/assets/img/other/company-icon.svg" alt="" />
      </router-link>
    </div>
    <!-- <FadeIn>
      <div class="floor-inner-title" v-show="!is_ToggleShow">
        <img src="/src/assets/img/floor/floor-inner/floor-3F-14F-title@2x.webp" alt="" />
      </div>
    </FadeIn> -->
    <div class="floor-inner-cotainer" :class="`floor-${floorInnerItem?.tag}`">
      <FadeIn>
        <div class="floor-inner-left" v-show="!is_ToggleShow">
          <img :src="floorInnerItem?.txtImg" />
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
                    @click.stop
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FadeIn from '@/components/transition/FadeIn.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import { floorInnerData } from '../FloorData'
import '@/assets/scss/floor/floor-inner.scss'

const router = useRouter()

const route = useRoute()

const floorInnerItem = ref<{
  tag: string
  txtImg: string
  floorImg: string
  points?: { tag: string; class: string }[]
} | null>(null)

const is_ToggleShow = ref(false)

const toggleText = (val: boolean) => {
  is_ToggleShow.value = val
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
  findData()
})
</script>

<style lang="scss"></style>
