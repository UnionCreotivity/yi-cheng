<template>
  <nav id="nav">
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

const iconStyle = computed(() => {
  return props.color === 'white'
    ? new URL('@/assets/img/other/inner-white-icon.svg', import.meta.url).href
    : new URL('@/assets/img/other/inner-purple-icon.svg', import.meta.url).href
})

onMounted(() => {
  const findLinks = navLinks.map((link) => link).find((key) => key.key === props.tag)
  linkItem.value = findLinks?.links
})
</script>

<style lang="scss" scoped></style>
