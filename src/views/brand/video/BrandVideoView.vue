<template>
  <div class="brand-video">
    <Nav color="purple" tag="brand" />
    <div class="brand-video-container">
      <div class="brand-video-title">
        <p>品牌影片</p>
        <span></span>
      </div>
      <div class="brand-video-swiper">
        <Swiper
          :speed="1000"
          :slides-per-view="2.15"
          :spaceBetween="25"
          :navigation="{
            nextEl: '.brand-video-next',
            prevEl: '.brand-video-prev',
          }"
          :scrollbar="{
            el: '.brand-video-scollbar',
          }"
          :grabCursor="true"
          :pagination="{
            el: '.brand-video-pagination',
            type: 'fraction',
          }"
          :breakpoints="{
            '1400': {
              spaceBetween: 70,
            },
          }"
          :modules="[Navigation, Scrollbar, Pagination]"
          class="brand-video-swiper-container"
        >
          <swiper-slide v-for="item in BrandVideoData" :key="item.key" class="brand-swiper">
            <div class="brand-video-content" @click.stop="showVideo(item.key)">
              <img :src="item.img" alt="" />
            </div>
            <p class="brand-video-content-title">{{ item.title }}</p>
          </swiper-slide>
          <div class="swiper-pagination brand-video-pagination"></div>
          <div class="swiper-scrollbar brand-video-scollbar"></div>
          <div class="swiper-button-prev brand-video-prev" @click.stop>
            <img src="@/assets/img/other/prev.svg" />
          </div>
          <div class="swiper-button-next brand-video-next" @click.stop>
            <img src="@/assets/img/other/next.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="brand-offical">
      <img src="/src/assets/img/brand/brand-video/brand-offical.svg" alt="" />
    </div>
    <div class="brand-fixed"><img src="@/assets/img/brand/brand-video/brand-fixed@2x.webp" /></div>
    <div class="brand-bottom">
      <img src="@/assets/img/other/fixed-bottom@2x.webp" alt="" />
    </div>
    <FadeIn>
      <section class="brand-video-bump" v-if="video">
        <div class="brand-video-bump-close" @click.stop="showVideo()">
          <img src="../../../assets/img/other/close-button.svg" alt="" />
        </div>
        <iframe
          :src="`${video.link}` + '&rel=0'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Scrollbar, Pagination } from 'swiper/modules'
import Nav from '@/components/nav/Nav.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import { BrandVideoData, BrandVideoLinkData } from './BrandVideoData'
import '@/assets/scss/brand/brand-video.scss'

const tag = ref('')

const video = ref()

const showVideo = (val?: string) => {
  if (val) {
    tag.value = val
    const findVideoLink = BrandVideoLinkData.map((item) => item).find(
      (item) => item.key === tag.value,
    )
    video.value = findVideoLink
  } else {
    video.value = null
  }
}

const gsapInit = () => {
  const tl = gsap.timeline({})
  tl.from('.brand-offical', {
    x: '75%',
    opacity: 0.5,
    ease: 'power4.inOut',
    duration: 1,
  }).from(
    '.brand-video-swiper',
    {
      y: '30%',
      opacity: 0,
      ease: 'power4.inOut',
      duration: 1,
    },
    '<+0.15',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
