<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav id="nav" :class="mainClass">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }"> <img :src="iconStyle" alt="" /></router-link>
    </div>
    <ul class="nav-links">
      <li
        v-for="link in linkItem"
        :key="link.key"
        :class="link.linkName === $route.name ? 'nav-active' : ''"
      >
        <router-link :to="{ name: link.linkName }">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navLinks } from './navLinks'

const props = defineProps(['color', 'tag'])

const linkItem = ref()

//props.color對應的class
const targetMap: Record<string, 'nav-white' | 'nav-black' | ''> = {
  white: 'nav-white',
  black: 'nav-black',
  default: '',
}

//左上icon
const iconStyle = computed(() => {
  return props.color === 'white'
    ? new URL('@/assets/img/other/inner-white-icon.svg', import.meta.url).href
    : new URL('@/assets/img/other/company-icon.svg', import.meta.url).href
})

const mainClass = computed(() => {
  return targetMap[props.color]
})

onMounted(() => {
  const findLinks = navLinks.map((link) => link).find((key) => key.key === props.tag)
  linkItem.value = findLinks?.links
})
</script>

<style lang="scss" scoped></style>
