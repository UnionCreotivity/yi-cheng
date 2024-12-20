<template>
  <PageFixed title="home-view">
    <div class="home-video">
      <video src="../../assets/video/home/img2024112016013425.mp4" autoplay muted loop></video>
    </div>
    <div class="home-icon"><img src="../../assets/img/home/icon.svg" alt="icon" /></div>
    <div class="home-title">
      <div class="home-title-in">
        <div class="light"></div>
      </div>
    </div>
    <div class="home-menu">
      <ul class="home-menu-ul">
        <li v-for="item in menuItems" :key="item.key" class="home-menu-li">
          <router-link :to="{ name: item.link }">
            <div class="home-menu-zhName">
              <p>{{ item.zhName }}</p>
            </div>
            <div class="home-menu-enName">
              <p>{{ item.enName }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </PageFixed>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import PageFixed from '@/components/pageFixed/PageFixed.vue'
import '@/assets/scss/home/home-view.scss'

const menuItems = [
  {
    key: 'menu-1',
    zhName: '品牌光譜',
    enName: 'BRAND',
    link: 'about',
  },
  {
    key: 'menu-2',
    zhName: '繁華光譜',
    enName: 'HUB',
    link: 'about',
  },
  {
    key: 'menu-3',
    zhName: '精工光譜',
    enName: 'METHOD',
    link: 'about',
  },
  {
    key: 'menu-4',
    zhName: '藝築光譜',
    enName: 'BUILDING',
    link: 'about',
  },
  {
    key: 'menu-5',
    zhName: '智能光譜',
    enName: 'SMART',
    link: 'about',
  },
]

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.5 })

  tl.from('.home-title', {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1.5,
  }).from(
    '.home-menu-li p',
    {
      y: '105%',
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
    },
    '<+0.25',
  )
}

onMounted(() => {
  initGsap()
})
</script>
