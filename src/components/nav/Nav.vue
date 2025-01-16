<template>
  <nav id="nav">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/img/other/inner-icon.svg" alt=""
      /></router-link>
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

const tag = ref('brand')

const linkItem = ref()

onMounted(() => {
  const findLinks = navLinks.map((link) => link).find((key) => key.key === tag.value)
  linkItem.value = findLinks?.links
})
</script>

<style lang="scss" scoped></style>
