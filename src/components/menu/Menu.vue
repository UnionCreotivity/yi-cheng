<template>
  <div class="menu-button" @click="showClick">MENU</div>
  <div class="menu-main" :style="menuContentWidth">
    <div class="menu-main-container">
      <div class="menu-bg"><img src="@/assets/img/menu/menu-bg@2x.webp" alt="" /></div>
      <ul class="menu-main-nav">
        <li class="menu-main-nav-item" v-for="item in menuData" :key="item.enName">
          <div class="menu-main-nav-item-title">
            <h4>{{ item.zhName }}</h4>
            <p>{{ item.enName }}</p>
          </div>
          <div class="menu-main-nav-item-img">
            <img src="@/assets/img/menu/menu-line@2x.png" alt="" />
          </div>
          <div class="menu-main-nav-item-links">
            <router-link v-for="link in item.linkItem" :to="{ name: link.link }" :key="link.key">{{
              link.name
            }}</router-link>
          </div>
        </li>
      </ul>
      <div class="menu-main-close" @click="showClick">
        <img src="@/assets/img/menu/close-button.svg" alt="" />
      </div>
      <!-- <div class="menu-main-cloud cloud-1">
        <img src="@/assets/img/cloud/cloud1.png" alt="" />
      </div>
      <div class="menu-main-cloud cloud-1-reverse">
        <img src="@/assets/img/cloud/cloud1.png" alt="" />
      </div>
      <div class="menu-main-cloud cloud-2">
        <img src="@/assets/img/cloud/cloud2.png" alt="" />
      </div>
      <div class="menu-main-cloud cloud-2-reverse">
        <img src="@/assets/img/cloud/cloud2.png" alt="" />
      </div>
      <div class="menu-main-cloud cloud-3">
        <img src="@/assets/img/cloud/cloud3.png" alt="" />
      </div>
      <div class="menu-main-cloud cloud-3-reverse">
        <img src="@/assets/img/cloud/cloud3.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { menuData } from './menuData'
import '@/assets/scss/menu/menu.scss'

const is_Show = ref(false)

const menuContentWidth = ref({ clipPath: 'inset(0 0 0 100%)' })

const showClick = () => {
  is_Show.value = !is_Show.value
}

const navAni = () => {
  let tl = gsap.timeline({ delay: 0.5 })

  tl.from('.menu-main-nav-item', {
    opacity: 0,
    stagger: 0.15,
    y: '20%',
    duration: 1.5,
  })
}

watch(is_Show, (new_value) => {
  if (new_value) {
    menuContentWidth.value.clipPath = 'inset(0 0 0 0)'
    navAni()
  } else {
    menuContentWidth.value.clipPath = 'inset(0 0 0 100%)'
  }
})
</script>

<style lang="scss" scoped></style>
