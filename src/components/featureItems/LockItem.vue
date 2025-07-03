<template>
  <FancyContainer>
    <FlexCol class="lock-item">
      <template #top>
        <div class="lock-top">
          <div class="lock-icon">
            <img src="/src/assets/img/construction/電子鎖/電子鎖2.svg" alt="" />
          </div>
          <img src="/src/assets/img/construction/電子鎖/電子鎖1@2x.webp" alt="" />
          <MentionTxt text="情境示意圖" color="black" />
        </div>
      </template>
      <template #bottom>
        <div class="lock-bottom">
          <div class="lock-bottom-left">
            <img src="/src/assets/img/construction/電子鎖/電子鎖3@2x.webp" alt="" />
          </div>
          <div class="lock-bottom-right">
            <img src="/src/assets/img/construction/電子鎖/電子鎖4@2x.png" alt="" />
          </div>
        </div>
      </template>
    </FlexCol>
    <div class="lock-close" @click="handleClose">
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
  tl.from('.lock-bottom-left img,.lock-bottom-right img', {
    opacity: 0,
    y: '40%',
    stagger: 0.17,
    duration: 0.75,
  })
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss">
.lock-item {
  width: 100%;
  height: 100%;
  z-index: 1;
  .lock-icon {
    position: absolute;
    top: 8%;
    right: 7%;
    width: 10.5vw;
  }
  .flex-top {
    width: 100%;
    @media screen and (max-width: 1400px) {
      height: 60%;
    }
    .lock-top {
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
    .lock-bottom {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .lock-bottom-left {
        position: absolute;
        left: 6%;
        bottom: 17%;
        width: 13%;
        @media screen and (max-width: 1400px) {
          left: 6%;
          bottom: 17%;
          width: 16%;
        }
      }
      .lock-bottom-right {
        width: 51%;
        margin-bottom: 3%;
        margin-left: 6%;
        @media screen and (max-width: 1400px) {
          width: 58%;
          margin-bottom: 3%;
          margin-left: 14%;
        }
      }
    }
  }
}
.lock-close {
  position: absolute;
  right: 2%;
  top: 4.5%;
  width: 2vw;
  height: 2vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    width: 2.75vw;
    height: 2.75vw;
    top: 4%;
    padding: 0.5vw;
  }
}
</style>
