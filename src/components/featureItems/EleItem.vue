<template>
  <FancyContainer class="electric-view-cotainer">
    <FlexCol class="electric-view-item">
      <template #top>
        <div class="electric-view-top">
          <div class="electric-view-top-img">
            <img src="/src/assets/img/electric/elect-bg@2x.webp" alt="" />
            <MentionTxt text="情境示意圖" color="black" />
          </div>
          <div class="electric-view-top-txt">
            <img src="/src/assets/img/electric/elect-txt@2x.webp" alt="" />
          </div>
        </div>
      </template>
      <template #bottom>
        <div class="electric-view-bottom">
          <div class="electric-view-bottom-item-1">
            <img src="/src/assets/img/electric/elect-img-1@2x.webp" alt="" />
          </div>
          <div class="electric-view-bottom-para">
            <div class="electric-view-bottom-para-icon">
              <img src="/src/assets/img/electric/elect-icon@2x.webp" alt="" />
            </div>
            <h1>EMS電動車整合管理系統</h1>
            <p>
              EMS能源管理系統，讓電動車充電更智慧、更穩定。具備即時監控與電力分配功能，安裝快速，管理簡單為社區打造安全、高效的智慧綠能環境。
            </p>
            <button @click="handleShow(true)">EMS比較表</button>
          </div>
          <div class="electric-view-bottom-flow">
            <img src="/src/assets/img/electric/elect-flow@2x.webp" alt="" />
          </div></div
      ></template>
    </FlexCol>
    <div class="electric-view-close" @click="handleClose">
      <img src="@/assets/img/other/close-button.svg" alt="" />
    </div>

    <FadeIn>
      <FancyContainer class="electric-view-inner" v-show="is_Show">
        <div class="electric-view-inner-bg">
          <img src="/src/assets/img/electric/inner/electric-inner-bg@2x.webp" alt="" />
        </div>
        <div class="electric-view-inner-para">
          <img src="/src/assets/img/electric/inner/electric-inner-para@2x.webp" alt="" />
        </div>
        <div class="electric-view-inner-close" @click="handleShow(false)">
          <img src="@/assets/img/other/close-button.svg" alt="" />
        </div>
      </FancyContainer> </FadeIn
  ></FancyContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FlexCol from '../UI/FlexCol.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import FancyContainer from '@/components/UI/FancyContainer.vue'
import MentionTxt from '@/components/UI/MentionTxt.vue'
import '@/assets/scss/electric/electric.scss'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const is_Show = ref(false)

const handleShow = (val: boolean) => {
  is_Show.value = val
}

const handleClose = () => {
  emits('render-item')
}

const gsapInit = () => {
  const tl = gsap.timeline()
  tl.from('.electric-view-top-img', {
    scale: 1.5,
    ease: 'power1.out',
    duration: 0.8,
  })
    .from(
      '.electric-view-top-txt',
      {
        y: '115%',
        opacity: 0,
        duration: 0.75,
      },
      '<+0.25',
    )
    .from(
      '.electric-view-bottom-item-1,.electric-view-bottom-para,.electric-view-bottom-flow',
      {
        y: '60%',
        opacity: 0,
        stagger: 0.35,
        duration: 1,
      },
      '<',
    )
}

onMounted(() => {
  gsapInit()
})
</script>

<style lang="scss" scoped>
@use '../../assets/scss/config' as *;
.electric-view-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  :deep(.flex-top) {
    width: 100%;
    position: relative;
    overflow: hidden;
    @include pad {
      height: 60%;
    }
  }
  .flex-top {
    width: 100%;
    position: relative;
    overflow: hidden;
    .electric-view-top {
      width: 100%;
      position: relative;
      overflow: hidden;
      @include pad {
        height: 100%;
      }
      .nav-icon {
        position: absolute;
        left: 2%;
        top: 4%;
        width: 9.45vw;
        z-index: 1;
      }
      .electric-view-top-img {
        width: 100%;
        position: relative;
        will-change: transform;
        @include pad {
          height: 100%;
          img {
            object-fit: cover;
            height: 100%;
          }
        }
      }
      .electric-view-top-txt {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.5%;
        width: 88%;
        margin: 0 auto;
        will-change: transform;
      }
    }
  }
  :deep(.flex-bottom) {
    flex: 1;
  }
  .flex-bottom {
    width: 100%;
    .electric-view-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex: 1;
      gap: 1.8vw;
      .electric-view-bottom-item-1 {
        width: 10.25%;
        will-change: transform;
        @include pad {
          width: 12.25%;
        }
      }
      .electric-view-bottom-para {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 26%;
        gap: 0.35vw;
        will-change: transform;
        @include pad {
          width: 29%;
          gap: 0.75vw;
        }
        .electric-view-bottom-para-icon {
          width: 8.5vw;
        }
        h1 {
          font-family: var(--serif);
          font-size: 1.9vw;
          letter-spacing: 6px;
          color: #231815;
        }
        p {
          font-family: var(--micro);
          font-size: 1vw;
          font-weight: 500;
          letter-spacing: 2px;
          text-align: justify;
          line-height: 2;
          color: #2d2d2d;
          @media screen and (max-width: 1440px) {
            font-weight: 400;
          }
          @include pad {
            font-size: 1.1vw;
          }
        }
        button {
          font-family: var(--serif);
          font-size: 1vw;
          letter-spacing: 2px;
          border: none;
          border-radius: 25px;
          padding: 1.25% 4.5%;
          color: white;
          background: linear-gradient(to right, rgb(210, 124, 141) 0%, rgb(185, 93, 117) 100%);
          cursor: pointer;
          @include pad {
            font-size: 1.1vw;
            padding: 2.25% 4.5%;
          }
        }
      }
      .electric-view-bottom-flow {
        width: 58.25%;
        will-change: transform;
        @include pad {
          width: 52.25%;
        }
      }
    }
  }
}
.electric-view-close {
  position: absolute;
  right: 2%;
  top: 2.5%;
  width: 2vw;
  height: 2vw;
  padding: 0.25vw;
  background-color: #d27c8d;
  cursor: pointer;
  @include pad {
    width: 2.75vw;
    height: 2.75vw;
    top: 3%;
    right: 3%;
    padding: 0.5vw;
  }
}
.electric-view-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 16;
  .electric-view-inner-bg {
    width: 42%;
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .electric-view-inner-para {
    width: 47%;
    margin: auto;
  }
  .electric-view-inner-close {
    position: absolute;
    right: 2%;
    top: 2.5%;
    width: 2vw;
    height: 2vw;
    padding: 0.25vw;
    background-color: #d27c8d;
    cursor: pointer;
    @include pad {
      width: 2.75vw;
      height: 2.75vw;
      // top: 3%;
      right: 3%;
      padding: 0.5vw;
    }
  }
}
</style>
