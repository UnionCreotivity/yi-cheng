<template>
  <div class="brand-classic-fancybox">
    <div class="brand-classic-fancybox-container">
      <router-link :to="{ name: 'home' }" class="nav-icon"
        ><img src="/src/assets/img/other/company-icon.svg" alt=""
      /></router-link>
      <div class="brand-classic-fancybox-content">
        <div class="brand-classic-fancybox-work">
          <img src="/src/assets/img/brand/classic/classical-work@2x.webp" alt="" />
        </div>
        <div class="brand-classic-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612.54 612.54">
            <g>
              <path
                d="M151.75,42.36C197.09,15.75,249.9,.5,306.27,.5c168.87,0,305.77,136.9,305.77,305.77s-136.9,305.77-305.77,305.77S.5,475.14,.5,306.27c0-42.6,8.71-83.17,24.45-120.02"
                fill="none"
                id="classic-circle"
                stroke="#b5b5b6"
                stroke-miterlimit="10"
              />
            </g>
          </svg>
        </div>
        <div class="brand-classic-fancybox-para">
          <h3>{{ props.fancyData?.year }}</h3>
          <h2>{{ props.fancyData?.name }}</h2>
          <span class="brand-classic-fancybox-para-line"></span>
        </div>
      </div>
      <div class="brand-classic-fancybox-img"><img :src="props.fancyData?.img" alt="" /></div>
      <button class="brand-classic-fancybox-close" @click.stop="handelClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import '@/assets/scss/brand/classic-fancybox.scss'

const props = defineProps({ fancyData: { type: Object, year: String, name: String, img: String } })

const emits = defineEmits(['to-product'])

const handelClose = () => {
  emits('to-product')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('#classic-circle', {
    strokeDashoffset: 0,
    duration: 2,
  })
    .from(
      '.brand-classic-fancybox-para',
      {
        y: '30%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.brand-classic-fancybox-work img',
      {
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
