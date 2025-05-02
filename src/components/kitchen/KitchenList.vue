<template>
  <div class="kitchen-list">
    <div class="kitchen-list-container">
      <div class="kitchen-list-icon">
        <img src="/src/assets/img/construction/廚具設備/sakura-icon@2x.webp" alt="" />
      </div>
      <div class="kitchen-list-left">
        <img src="/src/assets/img/construction/廚具設備/kitchen-list-bg@2x.webp" alt="" />
        <MentionTxt text="情境示意圖" color="white" />
      </div>
      <div class="kitchen-list-right">
        <div class="kitchen-list-right-top">
          <div class="kitchen-list-right-top-h1-container">
            <h1>歐洲進口面板-櫻花廚具<br />打造理想廚衛美學</h1>
            <div class="kitchen-list-right-top-icon">
              <img src="/src/assets/img/construction/廚具設備/kitchen-list-icon@2x.webp" alt="" />
            </div>
          </div>
          <p>
            四十多年來，櫻花堅持創新與品質，嚴選歐洲進口面板，融合精湛工藝，打造耐用且美觀的廚衛產品。這份對細節的講究與承諾，讓櫻花連續36年榮獲消費者理想品牌第一名，並獲台灣良品專業認證，成為無數家庭
            信賴的首選品牌，為居家生活帶來更高層次的品味與舒適。
          </p>
        </div>
        <div class="kitchen-list-right-bottom">
          <div
            class="kitchen-list-right-bottom-item"
            v-for="item in kitchenlistData"
            :key="item.key"
            @click="handleItemClick(item.color, item.tag)"
          >
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
      <div class="kitchen-list-close" @click="handleClose" :style="showClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </div>
      <FadeIn>
        <div class="kitchen-detail" v-if="kitchenDetail" :class="kitchenDetail.tag">
          <div class="kitchen-detail-container">
            <div class="kitchen-detail-left">
              <!-- 是否有圖片 -->
              <div class="kitchen-detail-bg" v-if="kitchenDetail.bg">
                <img :src="kitchenDetail.bg" alt="" />
                <MentionTxt
                  text="情境示意圖"
                  :color="kitchenDetail.tag === 'item-3' ? 'black' : 'white'"
                />
              </div>
              <!-- 是否有影片 -->
              <div class="kitchen-detail-video" v-if="kitchenDetail.video">
                <video :src="kitchenDetail.video" controls autoplay></video>
              </div>
            </div>
            <div class="kitchen-detail-right">
              <div class="kitchen-detail-right-para-1">
                <img :src="kitchenDetail.para" alt="" />
              </div>
              <!-- 是否有第二段文字 -->
              <div class="kitchen-detail-right-para-2" v-if="kitchenDetail.paraSec">
                <img :src="kitchenDetail.paraSec" alt="" />
              </div>
            </div>
            <!-- 是否有icon -->
            <div class="kitchen-detail-icon" v-if="kitchenDetail.icon">
              <img :src="kitchenDetail.icon" alt="" />
            </div>
            <div class="kitchen-detail-close" @click="handleItemClick()">
              <img src="@/assets/img/other/close-button.svg" alt="" />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FadeIn from '../transition/FadeIn.vue'
import MentionTxt from '../UI/MentionTxt.vue'
import { kitchenlistData, kitchenInnerData } from './kitchenlistData'
import '@/assets/scss/kitchen/kitchen-list.scss'

const kitchenDetail = ref<{
  tag: string
  para: string
  paraSec?: string
  video?: string
  bg?: string
  icon?: string
} | null>(null)

const emits = defineEmits(['render-item', 'handle-nav-color'])

const handleClose = () => {
  emits('render-item')
}

const handleItemClick = (color?: boolean, val?: string) => {
  if (val) {
    const findData = kitchenInnerData.find((item) => item.tag === val)
    if (findData) {
      kitchenDetail.value = findData
      detailGsap()
    }
  } else {
    kitchenDetail.value = null
  }
  if (color) {
    emits('handle-nav-color', color)
  } else {
    emits('handle-nav-color', false)
  }
}

const showClose = computed(() => {
  return kitchenDetail.value !== null ? 'visibility: hidden;' : ''
})

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.kitchen-list-left', {
    x: '-10%',
    opacity: 0,
    duration: 1.5,
  })
    .from(
      '.kitchen-list-right-top >div,.kitchen-list-right-top>p',
      {
        y: '20%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.kitchen-list-right-bottom-item >img',
      {
        y: '20%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.5',
    )
}

const detailGsap = async () => {
  await nextTick()
  const tl = gsap.timeline({ delay: 0.5 })

  tl.from('.kitchen-detail-left', {
    x: '-10%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.kitchen-detail-right',
    {
      x: '10%',
      opacity: 0,
      duration: 1.5,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
  emits('handle-nav-color', false)
})
</script>

<style scoped></style>
