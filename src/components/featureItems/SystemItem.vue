<template>
  <FancyContainer>
    <FlexCol class="system-item">
      <template #top>
        <div class="system-top">
          <div class="panasonic-icon">
            <img src="/src/assets/img/construction/全熱交換器/panasonic-icon@2x.webp" alt="" />
          </div>
          <img src="/src/assets/img/construction/全熱交換器/system-bg@2x.webp" alt="" />
          <MentionTxt text="情境示意圖" color="black" />
        </div>
      </template>
      <template #bottom>
        <div class="system-bottom">
          <img src="/src/assets/img/construction/全熱交換器/system-para@2x.webp" alt="" />
        </div>
      </template>
    </FlexCol>
    <div class="system-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexCol from '../UI/FlexCol.vue'
import MentionTxt from '../UI/MentionTxt.vue'

const emits = defineEmits(['render-item'])

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.system-bottom img', {
    opacity: 0,
    y: '10%',
    duration: 1.5,
  })
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss">
.system-item {
  width: 100%;
  height: 100%;
  z-index: 1;
  .panasonic-icon {
    position: absolute;
    top: 6.5%;
    right: 6%;
    width: 9.5vw;
    @media screen and (max-width: 1400px) {
      top: 6.5%;
      right: 8%;
      width: 11.5vw;
    }
  }
  .flex-top {
    width: 100%;
    @media screen and (max-width: 1400px) {
      height: 60%;
    }
    .system-top {
      width: 100%;
      position: relative;
      img {
        object-fit: cover;
      }
      @media screen and (max-width: 1400px) {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
  .flex-bottom {
    flex: 1;
    position: relative;
    .system-bottom {
      width: 86.5%;
      margin: auto;
      margin-top: 1.75%;
    }
  }
}
.system-close {
  position: absolute;
  right: 2%;
  top: 3.5%;
  width: 2vw;
  height: 2vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
    top: 3%;
  }
  @media screen and (max-width: 1400px) {
    width: 2.75vw;
    height: 2.75vw;
    top: 3%;
    padding: 0.5vw;
  }
}
</style>
