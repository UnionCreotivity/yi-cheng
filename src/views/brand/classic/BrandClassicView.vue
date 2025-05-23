<template>
  <div class="brand-classic">
    <Nav color="white" tag="brand" />
    <div class="brand-classic-container">
      <div class="brand-classic-top">
        <div class="brand-classic-main-img">
          <img src="/src/assets/img/brand/classic/brand-classic-main-img@2x.webp" alt="" />
        </div>
        <div class="brand-classic-title">
          <img src="/src/assets/img/brand/classic/brand-classic-text-1@2x.webp" alt="" />
        </div>
        <div class="brand-classic-txt">
          <img src="/src/assets/img/brand/classic/brand-classic-text-2@2x.webp" alt="" />
        </div>
      </div>
      <div class="brand-classic-bottom">
        <div class="brand-classic-bottom-txt">
          <img src="/src/assets/img/brand/classic/brand-classic-bottom-txt@2x.webp" alt="" />
        </div>
        <Swiper
          :slidesPerView="'auto'"
          :freeMode="true"
          :grabCursor="true"
          :navigation="{
            nextEl: '.brand-classic-next',
            prevEl: '.brand-classic-prev',
          }"
          :initial-slide="3"
          :modules="[Navigation, FreeMode]"
          class="brand-classic-swiper"
          @swiper="onSwiper"
          ref="slide"
        >
          <div class="brand-classic-swiper-nav-line"></div>
          <swiper-slide
            class="brand-classic-swiper-item"
            v-for="classic in classicData"
            :key="classic.id"
            :class="classic.id"
          >
            <div class="brand-classic-swiper-item-contianer">
              <div class="brand-class-swiper-item-dot">
                <img src="/src/assets/img/brand/classic/brand-classic-dot@2x.png" alt="" />
              </div>
              <h2>{{ classic.year }}</h2>
              <div class="brand-classic-swiper-products">
                <div class="brand-classic-swiper-line"></div>
                <div
                  class="brand-classic-swiper-product"
                  v-for="content in classic.contents"
                  :key="content.id"
                  :style="{ cursor: content.cursor ? 'pointer' : '' }"
                  @click.stop="toProduct(classic.year, content.itemTag)"
                >
                  <div class="brand-classic-swiper-product-img">
                    <img :src="content.img" alt="" />
                  </div>
                  <p>{{ content.txt }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev brand-classic-prev" @click.stop>
            <img src="@/assets/img/other/prev.svg" />
          </div>
          <div class="swiper-button-next brand-classic-next" @click.stop>
            <img src="@/assets/img/other/next.svg" />
          </div>
        </Swiper>
      </div>
    </div>
    <FadeIn>
      <BrandClassicFancybox v-if="fancyData" :fancyData="fancyData" @to-product="toProduct" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperType } from 'swiper'
import { Navigation, FreeMode } from 'swiper/modules'
import Nav from '@/components/nav/Nav.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import BrandClassicFancybox from '@/components/brand/BrandClassicFancybox.vue'
import { classicData } from './BrandClassicData'
import { classicInnerData } from './BrandClassicInnerData'
import '@/assets/scss/brand/classic.scss'

const fancyData = ref<null | { year: string; name: string; img: string }>(null)

const slide = ref()

const toProduct = (year?: string, id?: string) => {
  if (!year || !id) return (fancyData.value = null)
  const outer_data = classicInnerData.filter((item) => item.year === year)[0]
  const inner_data = outer_data?.contents.find((item) => item.tag === id)
  if (outer_data && inner_data) {
    fancyData.value = {
      year: outer_data.year,
      name: inner_data.name,
      img: inner_data.img,
    }
  }
}

const onSwiper = (swiper: SwiperType) => {
  //初始動畫
  swiper.allowTouchMove = false
  //更改timing-function
  slide.value.$el.querySelector('.swiper-wrapper').style['transition-timing-function'] =
    ' cubic-bezier(.63,0,.3,1)'

  gsapInit(swiper)
  setTimeout(() => {
    swiper.slideTo(0, 1000)
  }, 500)
}

const gsapInit = (swiper: SwiperType) => {
  const tl = gsap.timeline({ delay: 0.6 })
  tl.from('.brand-classic-main-img img', {
    scale: 1.5,
    ease: 'power1.out',
    duration: 0.5,
    force3D: true,
    willChange: 'transform',
  }).from(
    '.brand-classic-txt img',
    {
      y: '150%',
      duration: 0.5,
      force3D: true,
      willChange: 'transform',
      onComplete: () => {
        swiper.allowTouchMove = true
        //恢復timing-function
        slide.value.$el.querySelector('.swiper-wrapper').style['transition-timing-function'] =
          'ease-out'
      },
    },
    '<',
  )
}
</script>

<style scoped></style>
