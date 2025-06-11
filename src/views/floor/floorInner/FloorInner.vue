<template>
  <div class="floor-inner">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="/src/assets/img/other/company-icon.svg" alt="" />
      </router-link>
    </div>
    <FadeIn>
      <div class="floor-inner-title" v-show="!is_ToggleShow">
        <img src="/src/assets/img/floor/floor-inner/floor-3F-14F-title@2x.webp" alt="" />
      </div>
    </FadeIn>
    <div class="floor-inner-right">
      <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" @toggle-text="toggleText">
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <img class="imgBoxMap" src="/src/assets/img/floor/floor-inner/floor-3f-14f@2x.webp" />
            </div>
          </div></div
      ></ScaleDrag>
      <FadeIn> <p v-show="!is_ToggleShow">本圖面僅供參考，實際圖面依合約書附圖為準</p></FadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import '@/assets/scss/floor/floor-inner.scss'

const is_ToggleShow = ref(false)

const toggleText = (val: boolean) => {
  is_ToggleShow.value = val
}
</script>

<style lang="scss"></style>
