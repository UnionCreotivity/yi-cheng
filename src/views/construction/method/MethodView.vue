<template>
  <div class="method">
    <div class="white-icon">
      <router-link :to="{ name: 'home' }">
        <img src="../../../assets/img/other/inner-white-icon.svg" alt="" />
      </router-link>
    </div>
    <div class="method-top">
      <div class="method-top-bg">
        <img src="../../../assets/img/construction/first/constr-1-bg@2x.webp" alt="" />
      </div>
      <div class="method-top-text-1">
        <img src="../../../assets/img/construction/first/constr-1-txt-1.svg" alt="" />
      </div>
      <div class="method-top-text-2">
        <img src="../../../assets/img/construction/first/constr-1-txt-2.svg" alt="" />
      </div>
    </div>
    <div class="method-bottom">
      <div class="method-bottom-fixed">
        <img src="../../../assets/img/construction/first/constr-1-bottom-fixed@2x.webp" alt="" />
      </div>
      <div
        class="method-bottom-item"
        v-for="method in methods"
        :key="method.key"
        :class="method.className"
      >
        <router-link :to="{ name: method.route }">
          <img :src="method.img" alt="" />
        </router-link>
      </div>
    </div>
    <div class="method-fixed">
      <img src="../../../assets/img/other/purple-bottom@2x.webp" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '../../../assets/scss/method/method.scss'

const methods = [
  {
    key: 'safe',
    route: 'safe',
    className: 'method-safe',
    img: new URL('@/assets/img/construction/first/constr-1-txt-3.svg', import.meta.url).href,
  },
  {
    key: 'water',
    route: 'water',
    className: 'method-water',
    img: new URL('@/assets/img/construction/first/constr-1-txt-4.svg', import.meta.url).href,
  },
  {
    key: 'building',
    route: 'building',
    className: 'method-building',
    img: new URL('@/assets/img/construction/first/constr-1-txt-5.svg', import.meta.url).href,
  },
]
</script>

<style scoped></style>
