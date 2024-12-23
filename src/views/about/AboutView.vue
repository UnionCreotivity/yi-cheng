<template>
  <PageFixed title="about-view">
    <div class="about-example"><img src="../../assets/img/exam/exam@2x.webp" alt="" /></div>
    <div class="right-bottom-fixed">
      <img src="../../assets/img/other/button-fixed@2x.png" alt="" />
    </div>
    <Menu />
    <FullScreen />
    <BackHome />
  </PageFixed>
</template>

<script setup lang="ts">
import PageFixed from '@/components/pageFixed/PageFixed.vue'
import Menu from '@/components/menu/Menu.vue'
import FullScreen from '@/components/full-screen/FullScreen.vue'
import BackHome from '@/components/back-home/BackHome.vue'
import '@/assets/scss/about/about-view.scss'
</script>

<style lang="scss" scoped></style>
