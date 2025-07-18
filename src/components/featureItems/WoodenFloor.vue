<template>
  <FancyContainer class="wooden-floor-container">
    <FlexRow class="wooden-floor">
      <template #left>
        <div class="wooden-floor-left">
          <img src="/src/assets/img/construction/floor/wooden-bg@2x.webp" alt="" />
        </div>
      </template>
      <template #right>
        <div class="wooden-floor-icon">
          <img src="/src/assets/img/construction/floor/wooden-icon@2x.webp" alt="" />
        </div>
        <div class="wooden-floor-para">
          <img src="/src/assets/img/construction/floor/wooden-para@2x.webp" alt="" />
        </div>
      </template>
    </FlexRow>
    <div class="wooden-floor-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'

const emits = defineEmits(['render-item'])

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.wooden-floor-left', {
    x: '-10%',
    opacity: 0,
    duration: 1,
  }).from(
    '.flex-right .wooden-floor-para img',
    {
      x: '10%',
      opacity: 0,
      duration: 1,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss">
.wooden-floor-container {
  @media screen and (aspect-ratio: 1462/914) {
    .nav-icon {
      top: 6.25%;
    }
  }
  @media screen and (max-width: 2560px) and (aspect-ratio: 16/10) {
    .nav-icon {
      top: 6.25%;
    }
  }
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-icon {
      top: 13.75%;
    }
  }
}
.wooden-floor {
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1400px) {
    height: 82.5%;
  }
  .flex-left {
    width: 50.25%;
    @media screen and (aspect-ratio: 1920/940) {
      width: 44.25%;
    }
    .wooden-floor-left {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .flex-right {
    margin: auto;
    width: 42vw;
    @media screen and (aspect-ratio: 1920/940) {
      width: 36vw;
    }
    .wooden-floor-icon {
      position: absolute;
      top: 3%;
      right: 6.5%;
      width: 8vw;
      @media screen and (max-width: 1400px) {
        right: 8%;
        top: 4%;
      }
    }
    .wooden-floor-para {
      width: 100%;
    }
  }
}
.wooden-floor-close {
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
    width: 2.75vw;
    height: 2.75vw;
    padding: 0.5vw;
    top: 11.5%;
  }
}
</style>
