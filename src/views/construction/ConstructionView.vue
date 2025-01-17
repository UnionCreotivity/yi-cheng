<template>
  <PageFixed id="constr">
    <router-view></router-view>
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
</script>

<style scoped>
#constr {
  width: 100%;
  height: 100%;
}
</style>
