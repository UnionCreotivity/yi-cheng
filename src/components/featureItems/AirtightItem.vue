<template>
  <FancyContainer class="airtight-item-container">
    <Swiper :slides-per-view="1" :spaceBetween="25" :modules="[Navigation]" class="airtight-swiper">
      <swiper-slide class="airtight-swiper-slide-1">
        <FlexRow>
          <template #left>
            <img
              src="/src/assets/img/construction/氣密窗/airtight-swiper-bg-1-left@2x.webp"
              alt=""
            />
            <MentionTxt text="情境示意圖" color="white" />
          </template>
          <template #right>
            <div class="airtight-icon">
              <img
                src="/src/assets/img/construction/氣密窗/airtight-swiper-bg-1-icon@2x.webp"
                alt=""
              />
            </div>
            <div class="airtight-para">
              <img
                src="/src/assets/img/construction/氣密窗/airtight-swiper-bg-1-right@2x.webp"
                alt=""
              />
            </div>
          </template>
        </FlexRow>
      </swiper-slide>
      <swiper-slide class="airtight-swiper-slide-2">
        <FlexRow>
          <template #left>
            <img
              src="/src/assets/img/construction/氣密窗/airtight-swiper-bg-2-left@2x.webp"
              alt=""
            />
            <MentionTxt text="情境示意圖" color="black" />
          </template>
          <template #right>
            <img
              src="/src/assets/img/construction/氣密窗/airtight-swiper-bg-2-right@2x.webp"
              alt=""
            />
          </template>
        </FlexRow>
      </swiper-slide>
    </Swiper>
    <div class="airtight-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'
import MentionTxt from '../UI/MentionTxt.vue'

const emits = defineEmits(['render-item'])

const handleClose = () => {
  emits('render-item')
}
</script>

<style lang="scss">
.airtight-item-container {
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.airtight-swiper {
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
    height: 82.5%;
  }
  .flex-left {
    position: relative;
  }
  .airtight-swiper-slide-1 {
    .flex-row {
      justify-content: space-between;
      height: 100%;
      .airtight-icon {
        position: absolute;
        top: 3%;
        right: 2%;
        width: 6.75vw;
        @media screen and (max-width: 1400px) {
          right: 6%;
        }
      }
      .flex-left {
        width: 58.25%;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .flex-right {
        margin: auto;
        .airtight-para {
          width: 35.5vw;
        }
      }
    }
  }
  .airtight-swiper-slide-2 {
    .flex-row {
      justify-content: space-between;
      height: 100%;
    }
    .flex-left {
      width: 58.25%;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
    .flex-right {
      width: 32.5vw;
      margin: auto;
      margin-bottom: 10%;
    }
  }
}
.airtight-close {
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
