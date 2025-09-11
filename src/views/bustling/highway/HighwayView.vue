<template>
  <div class="highway-view">
    <DevelopNav mainColor="black" tag="highway" :innerkey="tag" />
    <div class="highway-view-container">
      <div class="highway-view-left">
        <Swiper
          :speed="1000"
          :slides-per-view="1"
          :spaceBetween="25"
          :navigation="{
            nextEl: '.high-way-next',
            prevEl: '.high-way-prev',
          }"
          :modules="[Navigation]"
          class="highway-view-swiper-container"
        >
          <swiper-slide class="highway-swiper-slide">
            <img src="/src/assets/img/bustling/develop/highway/highway-img-1@2x.webp" alt="" />
          </swiper-slide>
          <swiper-slide class="highway-swiper-slide highway-swiper-slide-02">
            <img src="/src/assets/img/bustling/develop/highway/highway-img-2-new@2x.webp" alt="" />
            <div class="glow-square">
              <div class="light"></div>
            </div>
            <HighwayCar />
          </swiper-slide>
          <div class="swiper-button-prev high-way-prev" @click.stop>
            <img src="@/assets/img/other/prev.svg" />
          </div>
          <div class="swiper-button-next high-way-next" @click.stop>
            <img src="@/assets/img/other/next.svg" />
          </div>
        </Swiper>
      </div>
      <div class="highway-view-right">
        <h2>REZONED AREA</h2>
        <h1>雙國道並駕，雙50米大道交匯，<br />八德最風光</h1>
        <p>
          斥資156億國道3號新增豐德交流道，預計2030年完工，未來5分鐘就能上國道，迅速接軌國道3與轉換國道2，「宜誠豐光」穩站八擴50米豐德路+建德路黃金交會，雙林蔭大道見證未來生活美好入席!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import DevelopNav from '@/components/nav/DevelopNav.vue'
import HighwayCar from './HighwayCar.vue'
import '@/assets/scss/bustling/highway.scss'

const tag = ref('highway')

const gsapInit = () => {
  const tl = gsap.timeline({})

  tl.from('.highway-view-right h2,.highway-view-right h1,.highway-view-right p', {
    x: '25%',
    opacity: 0,
    stagger: 0.25,
    duration: 0.75,
  })
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
