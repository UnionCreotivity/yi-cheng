<template>
  <PageFixed title="floor-view">
    <router-view></router-view>
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
</script>

<style scoped>
#floor-view {
  height: 100%;
  background-color: white;
}
</style>
