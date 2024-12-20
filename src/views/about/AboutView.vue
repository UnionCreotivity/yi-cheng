<template>
  <PageFixed title="about-view">
    <div class="about-example"><img src="../../assets/img/exam/exam@2x.webp" alt="" /></div>
    <Menu />
    <FullScreen />
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
import Menu from '@/components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import '@/assets/scss/about/about-view.scss'
</script>

<style lang="scss" scoped></style>
