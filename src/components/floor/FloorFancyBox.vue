<template>
  <div class="floor-fancy">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="/src/assets/img/other/company-icon.svg" alt="" />
      </router-link>
    </div>
    <div class="floor-fancy-cotainer">
      <FadeIn>
        <div class="floor-fancy-left" v-show="!is_ToggleShow">
          <div class="txt-1">{{ props.fancyItem?.tag }}</div>
          <div class="txt-2">家俱配置圖</div>
          <div class="txt-3">FLOOR PLAN</div>
        </div>
      </FadeIn>
      <div class="floor-fancy-right">
        <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" @toggle-text="toggleText">
          <div class="container">
            <div class="anchor-area">
              <div class="anchor-area-map">
                <img class="imgBoxMap" :src="props.fancyItem?.img" />
              </div>
            </div></div
        ></ScaleDrag>
        <FadeIn> <p v-show="!is_ToggleShow">本圖面僅供參考，實際圖面依合約書附圖為準</p></FadeIn>
      </div>
    </div>
    <div class="floor-fancy-close" @click="backMain">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
    <div class="floor-fancy-compass">
      <img src="/src/assets/img/floor/floor-inner/compass.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import '@/assets/scss/floor/floor-fancy.scss'

const props = defineProps(['fancyItem'])

const emits = defineEmits(['tag-click'])

const is_ToggleShow = ref(false)

const toggleText = (val: boolean) => {
  is_ToggleShow.value = val
}

const backMain = () => {
  emits('tag-click')
}
</script>

<style scoped></style>
