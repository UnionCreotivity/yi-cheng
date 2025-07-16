<template>
  <FancyContainer class="airtight-item-container">
    <Swiper
      :slides-per-view="1"
      :spaceBetween="25"
      :navigation="{
        nextEl: '.airtight-filter-next',
        prevEl: '.airtight-filter-prev',
      }"
      :modules="[Navigation]"
      class="airtight-swiper"
    >
      <swiper-slide class="airtight-swiper-slide-2">
        <FlexRow>
          <template #left>
            <img
              src="/src/assets/img/construction/airtight/airtight-swiper-bg-2-left@2x.webp"
              alt=""
            />
            <MentionTxt text="情境示意圖" color="black" />
          </template>
          <template #right>
            <img
              src="/src/assets/img/construction/airtight/airtight-swiper-bg-2-right@2x.webp"
              alt=""
            />
          </template>
        </FlexRow>
      </swiper-slide>
      <div class="swiper-button-prev airtight-filter-prev" @click.stop>
        <img src="@/assets/img/other/prev.svg" />
      </div>
      <div class="swiper-button-next airtight-filter-next" @click.stop>
        <img src="@/assets/img/other/next.svg" />
      </div>
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
      top: 14.25%;
    }
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
  .airtight-filter-prev {
    left: 3%;
  }
  .airtight-filter-next {
    right: 2%;
  }
  .airtight-filter-prev,
  .airtight-filter-next {
    width: 3vw;
    z-index: 1;
    @media screen and (max-width: 1400px) {
      width: 4vw;
      top: 42.5%;
    }
  }
  .airtight-swiper-slide-1 {
    .flex-row {
      justify-content: space-between;
      height: 100%;
      .airtight-icon {
        position: absolute;
        top: 3.5%;
        right: 7%;
        width: 6.75vw;
        @media screen and (max-width: 1400px) {
          right: 9%;
          top: 5%;
          width: 7.75vw;
        }
      }
      .flex-left {
        width: 58.25%;
        @media screen and (aspect-ratio: 1920/940) {
          width: 51.25%;
        }
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .flex-right {
        margin: auto;
        .airtight-para {
          width: 35.5vw;
          @media screen and (aspect-ratio: 1920/940) {
            width: 32.5vw;
          }
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
      @media screen and (aspect-ratio: 1920/940) {
        width: 51.25%;
      }
      img {
        height: 100%;
        object-fit: cover;
      }
    }
    .flex-right {
      width: 32.5vw;
      margin: auto;
      margin-bottom: 10%;
      @media screen and (aspect-ratio: 1920/940) {
        width: 28.5vw;
        margin-bottom: 0;
        margin: auto;
      }
    }
  }
}
.airtight-close {
  position: absolute;
  right: 2%;
  top: 3.5%;
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
    top: 12%;
  }
}
</style>
