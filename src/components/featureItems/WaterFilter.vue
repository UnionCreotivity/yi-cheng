<template>
  <FancyContainer class="water-filter-fancy">
    <Swiper
      :slides-per-view="1"
      :spaceBetween="25"
      :modules="[Navigation]"
      class="water-filter-swiper"
    >
      <swiper-slide class="water-filter-swiper-slide-1">
        <FlexRow>
          <template #left>
            <div class="water-filter-left">
              <img src="/src/assets/img/construction/淨水器/filter-1-bg@2x.webp" alt="" />
              <MentionTxt text="情境示意圖" color="white" />
            </div>
          </template>
          <template #right>
            <div class="water-filter-icon">
              <img src="/src/assets/img/construction/淨水器/filter-icon@2x.webp" alt="" />
            </div>
            <div class="water-filter-para">
              <img src="/src/assets/img/construction/淨水器/filter-1-para@2x.webp" alt="" />
            </div>
          </template>
        </FlexRow>
      </swiper-slide>
      <swiper-slide class="water-filter-swiper-slide-2">
        <FlexRow>
          <template #left>
            <div class="water-filter-left">
              <img src="/src/assets/img/construction/淨水器/filter-2-bg@2x.webp" alt="" />
              <MentionTxt text="情境示意圖" color="white" />
            </div>
          </template>
          <template #right>
            <div class="water-filter-icon">
              <img src="/src/assets/img/construction/淨水器/filter-icon@2x.webp" alt="" />
            </div>
            <div class="water-filter-para">
              <img src="/src/assets/img/construction/淨水器/filter-2-para@2x.webp" alt="" />
            </div>
          </template>
        </FlexRow>
      </swiper-slide>
      <swiper-slide class="water-filter-swiper-slide-3">
        <FlexCol>
          <template #top>
            <div class="water-filter-top">
              <img src="/src/assets/img/construction/淨水器/filter-3-bg@2x.webp" alt="" />
              <MentionTxt text="情境示意圖" color="white" />
            </div>
          </template>
          <template #bottom>
            <div class="water-filter-bottom">
              <img src="/src/assets/img/construction/淨水器/filter-3-para@2x.webp" alt="" />
            </div>
          </template>
        </FlexCol>
      </swiper-slide>
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

const handleClose = () => {
  emits('render-item')
}

onMounted(() => {
  emits('handle-nav-color', false)
})
</script>

<style lang="scss">
.water-filter-fancy {
  z-index: 1;
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
  .water-filter-swiper-slide-1 {
    .flex-row {
      position: relative;
      justify-content: space-between;
      height: 100%;
      .flex-left {
        width: 50.25%;
        .water-filter-left {
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
        width: 43vw;
        .water-filter-icon {
          position: absolute;
          top: 3%;
          right: 2%;
          width: 6.75vw;
          @media screen and (max-width: 1400px) {
            right: 6%;
          }
        }
        .water-filter-para {
          width: 100%;
        }
      }
    }
  }
  .water-filter-swiper-slide-2 {
    .flex-row {
      position: relative;
      justify-content: space-between;
      height: 100%;
      .flex-left {
        width: 50.25%;
        .water-filter-left {
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
        width: 41vw;
        .water-filter-icon {
          position: absolute;
          top: 3%;
          right: 2%;
          width: 6.75vw;
          @media screen and (max-width: 1400px) {
            right: 6%;
          }
        }
        .water-filter-para {
          width: 100%;
        }
      }
    }
  }
  .water-filter-swiper-slide-3 {
    .flex-col {
      height: 100%;
      .water-filter-top {
        width: 100%;
      }
      .flex-bottom {
        flex: 1;
        .water-filter-bottom {
          width: 85.75%;
          margin: auto;
        }
      }
    }
  }
}
.water-filter-close {
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
    top: 11%;
  }
}
</style>
