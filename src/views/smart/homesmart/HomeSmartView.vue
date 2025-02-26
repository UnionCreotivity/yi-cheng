<template>
  <section class="home-smart">
    <Nav color="white" tag="smart" />
    <div class="home-smart-container">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="25"
        :navigation="{
          nextEl: '.home-smart-next',
          prevEl: '.home-smart-prev',
        }"
        :modules="[Navigation]"
        class="home-smart-swiper-container"
      >
        <swiper-slide class="home-smart-slide home-smart-slide-1">
          <div class="home-smart-slide-top">
            <div class="home-smart-slide-top-img">
              <img src="/src/assets/img/smart/home-smart/home-smart-big-1@2x.webp" alt="" />
              <p>情境示意圖</p>
              <div class="home-smart-txt">
                <img src="/src/assets/img/smart/home-smart/home-smart@2x.webp" alt="" />
              </div>
            </div>
          </div>
          <div class="home-smart-slide-bottom">
            <div class="home-smart-bottom-txt">
              <div class="home-smart-bottom-txt-top">
                <h1>樂感多功能</h1>
                <h1>Lounge bar</h1>
              </div>
              <div class="home-smart-bottom-txt-bottom">
                <p>
                  簡單料理輕食飲品，樂享時光自由自在，<br />時尚品味專屬空間，獨享工作小聚好樂。
                </p>
              </div>
            </div>
            <div class="home-smart-phone">
              <img src="/src/assets/img/smart/home-smart/home-smart-big-2@2x.webp" alt="" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home-smart-slide home-smart-slide-2">
          <div class="home-smart-slide-top">
            <div class="home-smart-slide-top-img">
              <img src="/src/assets/img/smart/home-smart/home-smart-big-2_1@2x.webp" alt="" />
              <p>情境示意圖</p>
              <div class="home-smart-txt">
                <img src="/src/assets/img/smart/home-smart/home-smart@2x.webp" alt="" />
              </div>
            </div>
          </div>
          <div class="home-smart-slide-bottom">
            <div class="home-smart-bottom-txt">
              <div class="home-smart-bottom-txt-top">
                <h1 class="jost">E-Service.</h1>
                <h1>智慧社區</h1>
                <br />
                <h1 class="jost">Home Smart</h1>
                <h1>行動</h1>
                <h1 class="jost">APP</h1>
              </div>
              <p class="home-smart-bottom-txt-bottom">
                E-Service涵蓋周全:影像門禁、車道、中央監控系統、電子感應信箱、<br />
                多媒體公佈欄等智慧社區APP、全網型智慧保全，大器風範智能首選。
              </p>
            </div>
            <div class="home-smart-bottom-right">
              <img src="/src/assets/img/smart/home-smart/home-smart-2-right@2x.webp" alt="" />
            </div>
          </div>
          <div class="home-smart-phone-2">
            <img src="/src/assets/img/smart/home-smart/home-smart-2-left@2x.webp" alt="" />
          </div>
        </swiper-slide>
        <div class="swiper-button-prev home-smart-prev" @click.stop>
          <img src="@/assets/img/other/prev.svg" />
        </div>
        <div class="swiper-button-next home-smart-next" @click.stop>
          <img src="@/assets/img/other/next.svg" />
        </div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import Nav from '@/components/nav/Nav.vue'
import '@/assets/scss/smart/home-smart.scss'

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })

  tl.from('.home-smart-txt', {
    y: '105%',
    duration: 1.5,
  })
    .from(
      '.home-smart-bottom-txt',
      {
        y: '20%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.home-smart-phone',
      {
        y: '10%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
