<template>
  <FancyContainer class="fancy-bwt-item">
    <FlexRow class="bwt-item">
      <template #left>
        <div class="bwt-item-left">
          <img src="/src/assets/img/construction/BWT/bwt-bg@2x.webp" alt="" />
          <MentionTxt text="情境示意圖" color="white" />
        </div>
      </template>
      <template #right>
        <div class="bwt-item-icon">
          <img src="/src/assets/img/construction/BWT/bwt-icon@2x.webp" alt="" />
        </div>
        <div class="bwt-item-para">
          <img src="/src/assets/img/construction/BWT/bwt-para@2x.webp" alt="" />
        </div>
      </template>
    </FlexRow>
    <div class="bwt-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'
import MentionTxt from '../UI/MentionTxt.vue'

const emits = defineEmits(['render-item'])

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.bwt-item-left', {
    x: '-10%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.bwt-item-para',
    {
      x: '10%',
      opacity: 0,
      duration: 1.5,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss" scoped>
.fancy-bwt-item {
  z-index: 1;
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.bwt-item {
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
    // height: 82.5%;
  }
  .flex-left {
    width: 50.25%;
    .bwt-item-left {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .flex-right {
    margin: auto;
    width: 37vw;
    margin-left: 3%;
    margin-top: 6%;
    @media screen and (max-width: 1400px) {
      position: relative;
      margin: auto;
    }
    .bwt-item-icon {
      position: absolute;
      top: 3%;
      right: 20%;
      width: 8.25vw;
      @media screen and (max-width: 1400px) {
        top: -13%;
        right: 14vw;
      }
    }
    .bwt-item-para {
      width: 100%;
    }
  }
}
.bwt-close {
  position: absolute;
  right: 2%;
  top: 10%;
  width: 2.5vw;
  height: 2.5vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    width: 4vw;
    height: 4vw;
    top: 15%;
    padding: 0.5vw;
  }
}
</style>
