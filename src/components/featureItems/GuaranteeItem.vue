<template>
  <FancyContainer color="white" class="guarantee-fancy">
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
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'

const emits = defineEmits(['render-item', 'handle-nav-color'])

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
.guarantee-fancy {
  @media screen and (max-width: 1400px) {
    .nav-icon {
      top: 13.25%;
    }
  }
}
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
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        object-fit: cover;
      }
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
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        left: 18%;
        top: 19%;
      }
    }
    .guarantee-item-txt-2 {
      left: 17%;
      top: 32.5%;
      width: 12.75%;
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        left: 16%;
        top: 33.5%;
      }
    }
    .guarantee-item-txt-3 {
      left: 17.5%;
      top: 48%;
      width: 10.15%;
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        left: 16.5%;
        top: 49%;
      }
    }
    .guarantee-item-txt-4 {
      left: 14.75%;
      top: 63%;
      width: 16.5%;
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        left: 12.75%;
        top: 64%;
      }
    }
    .guarantee-item-txt-5 {
      left: 19.25%;
      top: 79%;
      width: 11.4%;
      @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
        left: 18.25%;
        top: 80%;
      }
    }
  }
}

.guarantee-close {
  position: absolute;
  right: 2%;
  top: 3%;
  width: 2vw;
  height: 2vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  z-index: 1;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
    width: 4vw;
    height: 4vw;
    padding: 0.5vw;
    top: 12%;
  }
}
</style>
