<template>
  <FancyContainer>
    <div class="guarantee-item">
      <div class="guarantee-item-bg">
        <img src="/src/assets/img/construction/五大保固/guarantee-bg@2x.webp" alt="" />
        <div class="guarantee-item-txt guarantee-item-txt-1">
          <img src="/src/assets/img/construction/五大保固/guarantee-txt-1@2x.webp" alt="" />
        </div>
        <div class="guarantee-item-txt guarantee-item-txt-2">
          <img src="/src/assets/img/construction/五大保固/guarantee-txt-2@2x.webp" alt="" />
        </div>
        <div class="guarantee-item-txt guarantee-item-txt-3">
          <img src="/src/assets/img/construction/五大保固/guarantee-txt-3@2x.webp" alt="" />
        </div>
        <div class="guarantee-item-txt guarantee-item-txt-4">
          <img src="/src/assets/img/construction/五大保固/guarantee-txt-4@2x.webp" alt="" />
        </div>
        <div class="guarantee-item-txt guarantee-item-txt-5">
          <img src="/src/assets/img/construction/五大保固/guarantee-txt-5@2x.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="guarantee-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.guarantee-item-txt', {
    x: '10%',
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
  })
}

onMounted(() => {
  gsapInit()
  emits('handle-nav-color', false)
})
</script>

<style lang="scss">
.guarantee-item {
  width: 100%;
  height: 100%;
  z-index: 1;
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .guarantee-item-bg {
    position: relative;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1400px) {
      height: 80%;
    }
    > img {
      height: 100%;
    }
    .guarantee-item-txt {
      position: absolute;
      left: 0;
      top: 0;
    }
    .guarantee-item-txt-1 {
      left: 20%;
      top: 18%;
      width: 15.75%;
    }
    .guarantee-item-txt-2 {
      left: 17%;
      top: 32.5%;
      width: 12.75%;
    }
    .guarantee-item-txt-3 {
      left: 17.5%;
      top: 48%;
      width: 10.15%;
    }
    .guarantee-item-txt-4 {
      left: 14.75%;
      top: 63%;
      width: 16.5%;
    }
    .guarantee-item-txt-5 {
      left: 19.25%;
      top: 79%;
      width: 11.4%;
    }
  }
}

.guarantee-close {
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
    padding: 0.5vw;
    top: 15%;
  }
}
</style>
