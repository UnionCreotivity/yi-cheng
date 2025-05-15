<template>
  <section class="electric-view">
    <Nav color="white" tag="smart" />
    <div class="electric-view-cotainer">
      <div class="electric-view-top">
        <div class="electric-view-top-img">
          <img src="/src/assets/img/electric/elect-bg@2x.webp" alt="" />
          <MentionTxt text="情境示意圖" color="black" />
        </div>
        <div class="electric-view-top-txt">
          <img src="/src/assets/img/electric/elect-txt@2x.webp" alt="" />
        </div>
      </div>
      <div class="electric-view-bottom">
        <div class="electric-view-bottom-item-1">
          <img src="/src/assets/img/electric/elect-img-1@2x.webp" alt="" />
        </div>
        <div class="electric-view-bottom-para">
          <div class="electric-view-bottom-para-icon">
            <img src="/src/assets/img/electric/elect-icon@2x.webp" alt="" />
          </div>
          <h1>EMS電動車整合管理系統</h1>
          <p>
            EMS能源管理系統，讓電動車充電更智慧、更穩定。具備即時監控與電力分配功能，安裝快速，管理簡單為社區打造安全、高效的智慧綠能環境。
          </p>
          <button @click="handleShow">EMS比較表</button>
        </div>
        <div class="electric-view-bottom-flow">
          <img src="/src/assets/img/electric/elect-flow@2x.webp" alt="" />
        </div>
      </div>
    </div>
    <FadeIn>
      <FancyContainer class="electric-view-inner" v-show="is_Show">
        <div class="electric-view-inner-bg">
          <img src="/src/assets/img/electric/inner/electric-inner-bg@2x.webp" alt="" />
        </div>
        <div class="electric-view-inner-para">
          <img src="/src/assets/img/electric/inner/electric-inner-para@2x.webp" alt="" />
        </div>
        <div class="electric-view-inner-close" @click="handleShow">
          <img src="@/assets/img/other/close-button.svg" alt="" />
        </div>
      </FancyContainer>
    </FadeIn>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FadeIn from '@/components/transition/FadeIn.vue'
import FancyContainer from '@/components/UI/FancyContainer.vue'
import Nav from '@/components/nav/Nav.vue'
import MentionTxt from '@/components/UI/MentionTxt.vue'
import '@/assets/scss/electric/electric.scss'

const is_Show = ref(false)

const handleShow = () => {
  is_Show.value = !is_Show.value
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.electric-view-top-txt', {
    y: '105%',
    duration: 1.5,
  }).from(
    '.electric-view-bottom-item-1,.electric-view-bottom-para,.electric-view-bottom-flow',
    {
      y: '30%',
      opacity: 0,
      stagger: 0.45,
      duration: 1.5,
    },
    '<+0.5',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
