<template>
  <section class="home-smart">
    <Nav color="white" tag="brand" />
    <div class="home-start-container">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="25"
        :modules="[Navigation]"
        class="home-start-swiper-container"
      >
        <swiper-slide class="home-start-slide"></swiper-slide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import Nav from '@/components/nav/Nav.vue'
import '@/assets/scss/smart/home-smart.scss'
</script>

<style scoped></style>
