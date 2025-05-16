<template>
  <div class="rezoned-view">
    <DevelopNav mainColor="black" tag="rezoned" :innerkey="tag" />
    <div class="rezoned-view-container">
      <div class="rezoned-view-left">
        <img src="/src/assets/img/bustling/develop/rezoned/rezone-img@2x.webp" alt="" />
      </div>
      <div class="rezoned-view-right">
        <h2>REZONED AREA</h2>
        <h1>八擴左心牽引未來脈動，<br />新舊機能雙引擎</h1>
        <p>
          提前入主建設到位區，永遠都是保增值的不敗定律!<br />八擴最核心的開發重點特區，以左側整體規模最為完善；擁有八擴特區內唯一G01捷運站+央大創新園區開發+新舊商圈匯集陸續開發規模下，更是入主八擴真正心臟的核區首位!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import DevelopNav from '@/components/nav/DevelopNav.vue'
import '@/assets/scss/bustling/rezoned.scss'

const tag = ref('rezoned')

const gsapInit = () => {
  const tl = gsap.timeline({})
  tl.from('.rezoned-view-right h2,.rezoned-view-right h1,.rezoned-view-right p', {
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
