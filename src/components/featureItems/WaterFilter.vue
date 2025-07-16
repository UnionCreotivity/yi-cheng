<template>
  <FancyContainer class="water-filter-fancy" color="white">
    <Swiper
      :slides-per-view="1"
      :spaceBetween="25"
      :navigation="{
        nextEl: '.water-filter-next',
        prevEl: '.water-filter-prev',
      }"
      :modules="[Navigation]"
      :initial-slide="props.swiperIndex"
      class="water-filter-swiper"
    >
      <swiper-slide class="water-filter-swiper-slide-1">
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
      </swiper-slide>
      <swiper-slide class="water-filter-swiper-slide-2">
        <FlexCol>
          <template #top>
            <div class="water-filter-top">
              <div class="panasonic-icon">
                <img src="/src/assets/img/construction/filter/UWD-icon@2x.webp" alt="" />
              </div>
              <img src="/src/assets/img/construction/filter/filter-3-bg@2x.webp" alt="" />
              <MentionTxt text="情境示意圖" color="white" />
            </div>
          </template>
          <template #bottom>
            <div class="water-filter-bottom">
              <img src="/src/assets/img/construction/filter/filter-3-para@2x.webp" alt="" />
            </div>
          </template>
        </FlexCol>
      </swiper-slide>
      <div class="swiper-button-prev water-filter-prev" @click.stop>
        <img src="@/assets/img/other/prev.svg" />
      </div>
      <div class="swiper-button-next water-filter-next" @click.stop>
        <img src="@/assets/img/other/next.svg" />
      </div>
    </Swiper>
    <div class="water-filter-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'
import FlexCol from '../UI/FlexCol.vue'
import MentionTxt from '../UI/MentionTxt.vue'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const props = defineProps(['swiperIndex'])

const handleClose = () => {
  emits('render-item')
}

onMounted(() => {
  emits('handle-nav-color', false)
})
</script>

<style lang="scss">
.water-filter-fancy {
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
      top: 11.25%;
    }
  }
}
.water-filter-swiper {
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
    height: 82.5%;
  }
  .water-filter-left,
  .water-filter-top {
    position: relative;
  }
  .water-filter-prev {
    left: 3%;
  }
  .water-filter-next {
    right: 2%;
  }
  .water-filter-prev,
  .water-filter-next {
    width: 3vw;
    z-index: 1;
    @media screen and (max-width: 1400px) {
      width: 4vw;
      top: 42.5%;
    }
  }
  .water-filter-swiper-slide-2 {
    .flex-col {
      height: 100%;
      .water-filter-top {
        position: relative;
        width: 100%;
        .panasonic-icon {
          position: absolute;
          right: 7%;
          top: 6%;
          width: 6vw;
        }
      }
      .flex-bottom {
        flex: 1;
        .water-filter-bottom {
          width: 85.75%;
          margin: auto;
          @media screen and (aspect-ratio: 1920/940) {
            width: 75.75%;
          }
        }
      }
    }
  }
}

.bwt-item {
  width: 100%;
  height: 100%;

  .flex-left {
    width: 50.25%;
    @media screen and (max-width: 1400px) {
      height: 100%;
    }
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
    @media screen and (aspect-ratio: 1920/940) {
      // position: relative;
      margin-left: 0;
      margin-top: 0;
      margin: auto;
    }
    .bwt-item-icon {
      position: absolute;
      top: 3.25%;
      right: 7%;
      width: 6.25vw;
      @media screen and (max-width: 1400px) {
        top: 4%;
        right: 7vw;
      }
    }
    .bwt-item-para {
      width: 100%;
      @media screen and (aspect-ratio: 1920/940) {
        width: 83%;
      }
    }
  }
}
.water-filter-close {
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
    top: 11%;
  }
}
</style>
