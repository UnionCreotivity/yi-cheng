<template>
  <PageFixed title="home-view">
    <div class="home-video">
      <video
        src="@/assets/video/home/img2024112016013425.mp4"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
    <div class="home-first" :class="isShow ? 'home-first-none' : ''" @click.stop="showClick">
      <div class="home-first-icon">
        <img src="@/assets/img/home/icon.svg" alt="icon" />
      </div>
    </div>
    <div class="home-in" :style="isShow ? 'opacity:1' : 'opacity:0'">
      <div class="home-icon"><img src="@/assets/img/home/icon.svg" alt="icon" /></div>
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
    </div>
  </PageFixed>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import screenfull from 'screenfull'
import PageFixed from '@/components/pageFixed/PageFixed.vue'
import '@/assets/scss/home/home-view.scss'

const isShow = ref(false)

const menuItems = [
  {
    key: 'menu-1',
    zhName: '品牌光譜',
    enName: 'BRAND',
    link: 'brand',
  },
  {
    key: 'menu-2',
    zhName: '繁華光譜',
    enName: 'HUB',
    link: '',
  },
  {
    key: 'menu-3',
    zhName: '精工光譜',
    enName: 'METHOD',
    link: 'method',
  },
  {
    key: 'menu-4',
    zhName: '藝築光譜',
    enName: 'BUILDING',
    link: '',
  },
  {
    key: 'menu-5',
    zhName: '智能光譜',
    enName: 'SMART',
    link: 'loan',
  },
]

const initGsap = () => {
  const tl = gsap.timeline({ delay: 0.25 })

  tl.from('.home-title', {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 2,
  })
    .from(
      '.home-menu-li p',
      {
        y: '105%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.25',
    )
    .from(
      '.home-icon',
      {
        y: '105%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
}

const showClick = () => {
  isShow.value = !isShow.value
  if (!screenfull.isFullscreen) {
    screenfull.toggle()
  }
  initGsap()
}

onMounted(() => {
  // console.log(document.querySelector('body')?.offsetHeight)
  // console.log(document.documentElement)
})
</script>
