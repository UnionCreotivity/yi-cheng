<template>
  <PageFixed id="brand"> <router-view></router-view> </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
</script>

<style lang="scss">
#brand {
  height: 100%;
  background-color: white;
}
</style>
