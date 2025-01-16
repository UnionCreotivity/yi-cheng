<template>
  <PageFixed id="smart">
    <router-view></router-view>
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
</script>

<style scoped>
#smart {
  width: 100%;
  height: 100%;
}
</style>
