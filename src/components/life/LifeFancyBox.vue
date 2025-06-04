<template>
  <div class="life-fancy">
    <Swiper
      :slides-per-view="1"
      :spaceBetween="25"
      :speed="1000"
      :navigation="{
        nextEl: '.life-fancy-next',
        prevEl: '.life-fancy-prev',
      }"
      :modules="[Navigation]"
      class="life-fancy-swiper"
    >
      <swiper-slide
        v-for="item in props.fancyData?.images"
        :key="item?.key"
        class="life-swiper-slide"
      >
        <img :src="item?.img" alt="" />
      </swiper-slide>
      <div class="swiper-button-prev life-fancy-prev" @click.stop>
        <img src="/src/assets/img/other/prev.svg" alt="" />
      </div>
      <div class="swiper-button-next life-fancy-next" @click.stop>
        <img src="/src/assets/img/other/next.svg" alt="" />
      </div>
    </Swiper>
    <div class="back-button" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import '@/assets/scss/life/life-fancy.scss'

const props = defineProps(['fancyData'])

const emits = defineEmits(['handel-tag-click'])

const handleClose = () => {
  emits('handel-tag-click')
}
</script>

<style scoped></style>
