<template>
  <nav id="nav" :class="mainClass">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }"> <img :src="iconStyle" alt="" /></router-link>
    </div>
    <div class="nav-right">
      <ul class="nav-links">
        <router-link
          v-for="link in developLinks"
          :key="link.key"
          :to="{ name: link.key }"
          class="develop-link"
          :class="link.key === props.innerkey ? 'develop-active' : ''"
        >
          <div class="nav-link-name">{{ link.name }}</div>
          <div class="black-bottom-line"></div>
        </router-link>
      </ul>
      <router-link :to="{ name: 'develop' }" class="back-button">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 八擴之光內頁使用
import { developLinks } from './navLinks'

const props = defineProps(['tag', 'innerkey', 'mainColor'])

const navMainColor = ref('black')

//左上icon
const iconStyle = computed(() => {
  return navMainColor.value === 'white'
    ? new URL('@/assets/img/other/inner-white-icon.svg', import.meta.url).href
    : new URL('@/assets/img/other/company-icon.svg', import.meta.url).href
})

const mainClass = computed(() => {
  return navMainColor.value === 'white' ? 'nav-white' : 'nav-black'
})

watch(
  () => props.mainColor,
  () => {
    if (props.mainColor === 'white') {
      navMainColor.value = 'white'
    } else {
      navMainColor.value = 'black'
    }
  },
)
</script>

<style lang="scss" scoped></style>
