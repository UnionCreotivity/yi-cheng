<template>
  <router-view v-slot="{ Component, route }">
    <FadeIn><component :is="Component" :key="route.path"></component></FadeIn>
  </router-view>
</template>

<script setup lang="ts">
import FadeIn from './components/transition/FadeIn.vue'
</script>

<style scoped></style>
