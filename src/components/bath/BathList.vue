<template>
  <div class="bath-list">
    <div class="bath-list-container">
      <div class="bath-list-left">
        <img src="/src/assets/img/construction/衛浴設備/bath-bg@2x.webp" alt="" />
        <MentionTxt text="情境示意圖" color="white" />
      </div>
      <div class="bath-list-right">
        <div class="bath-list-right-top">
          <h1>衛浴美學，從細節開始<br />匯聚匠藝，打造極致衛浴體驗</h1>
          <p>
            衛浴，不只是日常所需，更是生活品味的展現。我們以精湛工藝結合創新技術，細膩雕琢每一處細節，打造兼具美感與舒適的空間。嚴選優質材質，耐久易潔，讓每一次使用都成為放鬆的享受，為生活帶來恆久的安心與愜意。
          </p>
        </div>
        <div class="bath-list-right-bottom">
          <div
            class="bath-list-right-bottom-item"
            v-for="item in bathlistData"
            :key="item.key"
            @click="handleItemClick(item.color, item.tag)"
          >
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
      <div class="bath-list-close" @click="handleClose" :style="showClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </div>
      <FadeIn>
        <div class="bath-detail" v-if="bathDetail" :class="bathDetail.tag">
          <div class="bath-detail-container">
            <div class="bath-detail-left">
              <div class="bath-detail-left-video" v-if="bathDetail.video">
                <video :src="bathDetail.video" controls autoplay></video>
              </div>
              <div class="bath-detail-left-bottom" v-if="bathDetail.bottom">
                <img :src="bathDetail.bottom" alt="" />
              </div>
              <div class="bath-detail-left-bg" v-if="bathDetail.bg">
                <MentionTxt
                  text="情境示意圖"
                  :color="bathDetail.tag === 'item-6' ? 'black' : 'white'"
                />
                <img :src="bathDetail.bg" alt="" />
              </div>
            </div>
            <div class="bath-detail-right"><img :src="bathDetail.para" alt="" /></div>
            <div class="bath-detail-close" @click="handleItemClick()">
              <img src="@/assets/img/other/close-button.svg" alt="" />
            </div>
            <div class="bath-detail-icon" :class="bathDetail.iconName">
              <img :src="bathDetail.icon" alt="" />
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
import { bathlistData, bathInnerData } from './bathlistData'
import '@/assets/scss/bath/bath-list.scss'

const bathDetail = ref<{
  tag: string
  para: string
  video?: string
  bottom?: string
  bg?: string
  icon: string
  iconName: string
  color: boolean
} | null>(null)

const emits = defineEmits(['render-item', 'handle-nav-color'])

const handleClose = () => {
  emits('render-item')
}

const handleItemClick = (color?: boolean, val?: string) => {
  if (val) {
    const findData = bathInnerData.find((item) => item.tag === val)
    if (findData) {
      bathDetail.value = findData
      detailGsap()
    }
  } else {
    bathDetail.value = null
  }
  if (color) {
    emits('handle-nav-color', color)
  } else {
    emits('handle-nav-color', false)
  }
}

const showClose = computed(() => {
  return bathDetail.value !== null ? 'visibility: hidden;' : ''
})

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.5 })
  tl.from('.bath-list-left', {
    x: '-10%',
    opacity: 0,
    duration: 1.5,
  })
    .from(
      '.bath-list-right-top h1,.bath-list-right-top p',
      {
        y: '20%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.bath-list-right-bottom-item > img',
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

  tl.from('.bath-detail-left', {
    x: '-10%',
    opacity: 0,
    duration: 1.5,
  }).from(
    '.bath-detail-right',
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
