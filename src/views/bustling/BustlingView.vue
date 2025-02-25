<template>
  <PageFixed id="bustling">
    <router-view></router-view>
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
</script>

<style scoped>
#bustling {
  height: 100%;
  background-color: white;
}
</style>
