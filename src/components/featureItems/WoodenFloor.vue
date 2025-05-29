<template>
  <FancyContainer class="wooden-floor-container">
    <FlexRow class="wooden-floor">
      <template #left>
        <div class="wooden-floor-left">
          <img src="/src/assets/img/construction/木地板/wooden-bg@2x.webp" alt="" />
        </div>
      </template>
      <template #right>
        <div class="wooden-floor-icon">
          <img src="/src/assets/img/construction/木地板/wooden-icon@2x.webp" alt="" />
        </div>
        <div class="wooden-floor-para">
          <img src="/src/assets/img/construction/木地板/wooden-para@2x.webp" alt="" />
        </div>
      </template>
    </FlexRow>
    <div class="wooden-floor-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>
  </FancyContainer>
</template>

<script setup lang="ts">
import FancyContainer from '../UI/FancyContainer.vue'
import FlexRow from '../UI/FlexRow.vue'

const emits = defineEmits(['render-item'])

const handleClose = () => {
  emits('render-item')
}
</script>

<style lang="scss">
.wooden-floor-container {
  z-index: 1;
  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
    .wooden-floor-icon {
      position: absolute;
      top: 3%;
      right: 2%;
      width: 9.25vw;
      @media screen and (max-width: 1400px) {
        right: 6%;
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
  top: 10%;
  width: 2.5vw;
  height: 2.5vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  z-index: 1;
  cursor: pointer;
}
</style>
