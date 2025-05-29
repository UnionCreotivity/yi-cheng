<template>
  <FancyContainer>
    <FlexCol class="entrance-door">
      <template #top>
        <div class="entrance-door-top">
          <div class="metal-icon">
            <img src="/src/assets/img/construction/玄關門/metal-icon@2x.webp" alt="" />
          </div>
          <img src="/src/assets/img/construction/玄關門/entrance-bg@2x.webp" alt="" />
          <MentionTxt text="情境示意圖" color="white" />
        </div>
      </template>
      <template #bottom>
        <div class="entrance-door-bottom">
          <div class="entrance-door-first">
            <img src="/src/assets/img/construction/玄關門/entrance-door@2x.webp" alt="" />
          </div>
          <div class="entrance-door-para">
            <img src="/src/assets/img/construction/玄關門/entrance-para@2x.webp" alt="" />
          </div>
        </div>
      </template>
    </FlexCol>
    <div class="entrance-door-close" @click="handleClose">
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
  tl.from('.entrance-door-first', {
    y: '-10%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.entrance-door-para',
    {
      x: '5%',
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

<style lang="scss">
.entrance-door {
  width: 100%;
  height: 100%;
  z-index: 1;
  .flex-top {
    width: 100%;
    @media screen and (max-width: 1400px) {
      height: 60%;
    }
    .entrance-door-top {
      width: 100%;
      position: relative;
      .metal-icon {
        position: absolute;
        top: 7%;
        right: 2%;
        width: 10.5vw;
      }
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
    .entrance-door-bottom {
      position: relative;
      width: 100%;
      @media screen and (max-width: 1400px) {
        display: flex;
        justify-content: flex-end;
      }
      .entrance-door-first {
        position: absolute;
        left: 4.5%;
        bottom: 11%;
        width: 29%;
        @media screen and (max-width: 1400px) {
          bottom: 15%;
        }
      }
      .entrance-door-para {
        margin-top: 2.5%;
        margin-right: 2%;
        width: 61.25%;
        justify-self: flex-end;
      }
    }
  }
}
.entrance-door-close {
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
    width: 3vw;
    height: 3vw;
    padding: 0.5vw;
  }
}
</style>
