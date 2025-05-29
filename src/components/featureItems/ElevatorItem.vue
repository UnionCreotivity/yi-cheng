<template>
  <FancyContainer>
    <FlexCol class="elevator-item">
      <template #top>
        <img src="/src/assets/img/construction/電梯/Elevator-top@2x.webp" alt="" />
        <MentionTxt text="情境示意圖" color="white" />
      </template>
      <template #bottom>
        <div class="elevator-item-left">
          <img src="/src/assets/img/construction/電梯/Elevator-bottom@2x.webp" alt="" />
        </div>
        <div class="elevator-item-right">
          <img src="/src/assets/img/construction/電梯/Elevator-para@2x.webp" alt="" />
        </div>
      </template>
    </FlexCol>
    <div class="elevator-close" @click="handleClose">
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

const emits = defineEmits(['render-item', 'handle-nav-color'])

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.elevator-item-left', {
    y: '-10%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.elevator-item-right',
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
  emits('handle-nav-color', false)
})
</script>

<style lang="scss">
.elevator-item {
  width: 100%;
  height: 100%;
  z-index: 1;
  .flex-top {
    position: relative;
    img {
      object-fit: cover;
    }
    @media screen and (max-width: 1400px) {
      height: 60%;
      img {
        height: 100%;
      }
    }
  }
  .flex-bottom {
    flex: 1;
    position: relative;
    justify-content: flex-end;
    margin-right: 3%;
    padding-bottom: 1%;
    @media screen and (max-width: 1400px) {
      padding-bottom: 0%;
      margin-top: 2%;
    }
    .elevator-item-left {
      position: absolute;
      bottom: 12%;
      left: 4%;
      width: 23.5vw;
      @media screen and (max-width: 1400px) {
        bottom: 16%;
        width: 28.5vw;
      }
    }
    .elevator-item-right {
      width: 65.5vw;
      display: flex;
      align-items: center;
      @media screen and (max-width: 1400px) {
        width: 61.5vw;
        margin-bottom: 4%;
      }
    }
  }
}
.elevator-close {
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
