<template>
  <div class="develop-view">
    <Nav color="white" tag="develop" />
    <div class="develop-container">
      <div class="develop-top">
        <div class="develop-top-bg">
          <img src="../../../assets/img/bustling/develop/develop-bg@2x.webp" alt="" />
        </div>
        <div class="develop-top-txt">
          <img src="/src/assets/img/bustling/develop/development@2x.webp" alt="" />
        </div>
      </div>
      <div class="develop-bottom">
        <div class="develop-bottom-fixed">
          <img src="../../../assets/img/bustling/develop/develop-1-bottom-fixed@2x.webp" alt="" />
        </div>
        <div
          class="develop-bottom-item"
          v-for="develop in develops"
          :key="develop.key"
          :class="develop.className"
        >
          <router-link :to="{ name: develop.route }">
            <img :src="develop.img" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import Nav from '@/components/nav/Nav.vue'
import '@/assets/scss/bustling/develop.scss'

const develops = [
  {
    key: 'rezoned',
    route: 'rezoned',
    className: 'bustling-rezoned',
    img: new URL('@/assets/img/bustling/develop/develop-1-txt.svg', import.meta.url).href,
  },
  {
    key: 'mrt',
    route: 'mrt',
    className: 'bustling-MRT',
    img: new URL('@/assets/img/bustling/develop/develop-2-txt.svg', import.meta.url).href,
  },
  {
    key: 'highway',
    route: 'highway',
    className: 'bustling-highway',
    img: new URL('@/assets/img/bustling/develop/develop-3-txt.svg', import.meta.url).href,
  },
  {
    key: 'major',
    route: 'major',
    className: 'bustling-major',
    img: new URL('@/assets/img/bustling/develop/develop-4-txt.svg', import.meta.url).href,
  },
]

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.develop-top-txt', {
    y: '120%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.develop-bottom-item img',
    {
      y: '115%',
      opacity: 0,
      stagger: 0.35,
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
