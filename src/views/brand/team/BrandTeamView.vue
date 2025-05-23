<template>
  <div class="brand-team" :class="navZIndex">
    <Nav color="black" tag="brand" />
    <div class="brand-team-title-container">
      <h1 class="brand-team-h1">BEST TEAM</h1>
      <h2 class="brand-team-h2">團隊光譜</h2>
    </div>
    <div class="brand-team-deco">
      <div class="deco deco-1"><img src="/src/assets/img/brand/team/deco-1@2x.webp" alt="" /></div>
      <div class="deco deco-2"><img src="/src/assets/img/brand/team/deco-2@2x.webp" alt="" /></div>
      <div class="deco deco-3"><img src="/src/assets/img/brand/team/deco-3@2x.webp" alt="" /></div>
      <div class="deco deco-4"><img src="/src/assets/img/brand/team/deco-4@2x.webp" alt="" /></div>
    </div>
    <div class="brand-team-people">
      <div class="brand-team-people-1-container">
        <div class="line-1">
          <img src="/src/assets/img/brand/team/deco-line-1@2x.webp" alt="" />
        </div>
        <div class="brand-team-people-1" @click="handleFancy('brand-1')">
          <div class="brand-team-people-img">
            <img src="/src/assets/img/brand/team/people-1@2x.webp" alt="" />
          </div>
          <div class="brand-team-people-sign">
            <img src="/src/assets/img/brand/team/sign-1@2x.webp" alt="" />
          </div>
        </div>
      </div>
      <div class="brand-team-people-2-container">
        <div class="line-2">
          <img src="/src/assets/img/brand/team/deco-line-2@2x.webp" alt="" />
        </div>
        <div class="brand-team-people-2" @click="handleFancy('brand-2')">
          <div class="brand-team-people-img">
            <img src="/src/assets/img/brand/team/people-2@2x.webp" alt="" />
          </div>
          <div class="brand-team-people-sign">
            <img src="/src/assets/img/brand/team/sign-2@2x.webp" alt="" />
          </div>
        </div>
      </div>
      <div class="brand-team-people-3-container">
        <div class="line-3">
          <img src="/src/assets/img/brand/team/deco-line-3@2x.webp" alt="" />
        </div>
        <div class="brand-team-people-3" @click="handleFancy('brand-3')">
          <div class="brand-team-people-img">
            <img src="/src/assets/img/brand/team/people-3@2x.webp" alt="" />
          </div>
          <div class="brand-team-people-sign">
            <img src="/src/assets/img/brand/team/sign-3@2x.webp" alt="" />
          </div>
        </div>
      </div>
      <div class="brand-team-people-4-container">
        <div class="line-4">
          <img src="/src/assets/img/brand/team/deco-line-4@2x.webp" alt="" />
        </div>
        <div class="brand-team-people-4" @click="handleFancy('brand-4')">
          <div class="brand-team-people-img">
            <img src="/src/assets/img/brand/team/people-4@2x.webp" alt="" />
          </div>
          <div class="brand-team-people-sign">
            <img src="/src/assets/img/brand/team/sign-4@2x.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <FadeIn>
      <BrandTeamFancyBox
        v-if="fancyContent"
        :fancyContent="fancyContent"
        @handle-fancy="handleFancy"
      />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Nav from '@/components/nav/Nav.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import BrandTeamFancyBox from '@/components/brand/BrandTeamFancyBox.vue'
import { brandTeamData } from './BrandTeamData'
import '@/assets/scss/brand/brand-team.scss'

const fancyContent = ref()

const handleFancy = (tag?: string) => {
  if (tag) {
    const data = brandTeamData.find((item) => item.tag === tag)
    fancyContent.value = data
  } else {
    fancyContent.value = null
  }
}

const navZIndex = computed(() => {
  return fancyContent.value ? 'list-z-18' : ''
})

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.25 })
  tl.from('.brand-team-h1,.brand-team-h2', {
    opacity: 0,
    x: '4vw',
    stagger: 0.35,
    duration: 0.75,
  }).from(
    '.brand-team-people-img img,.brand-team-people-sign img',
    {
      opacity: 0,
      y: '10%',
      stagger: 0.15,
      duration: 0.75,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
