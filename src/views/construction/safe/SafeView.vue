<template>
  <div class="safe-view">
    <BuildingNav color="purple" tag="safe" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="safe-container">
      <FadeInItem>
        <div
          class="safe-content"
          v-for="content in SafeData"
          :key="content.id"
          v-show="tag === content?.id"
        >
          <div class="safe-content-left">
            <div class="safe-content-left-item" :class="content.className">
              <img :src="content.image" alt="" />
            </div>
          </div>
          <div class="safe-content-right">
            <h1>{{ content?.name }}</h1>
            <p>
              {{ content?.content }}
            </p>
            <!-- 判斷是否有前往內頁的點擊按鈕 -->
            <div class="safe-content-button" v-if="content.innerImg">
              <button
                class="safe-content-inner-button"
                @click.stop="handleInnerImg(content.innerImg, 'inner-1')"
              >
                結構比較
              </button>
              <button
                class="safe-content-inner-button"
                @click.stop="handleInnerImg(content.innerImgSec, 'inner-2')"
              >
                專利證書
              </button>
            </div>
          </div>
        </div></FadeInItem
      >
    </div>
    <div class="safe-container-bottom">
      <img src="@/assets/img/other/fixed-bottom@2x.webp" alt="" />
    </div>
    <FadeIn>
      <!-- 內頁 -->
      <div class="safe-content-toggle-img" :class="toggleClass" v-if="toggleImg">
        <div class="safe-content-toggle-img-inner">
          <img :src="toggleImg" alt="" />
        </div>
        <button class="safe-content-toggle-button" @click.stop="handleInnerImg()">
          <img src="@/assets/img/other/close-button.svg" alt="" />
        </button>
      </div>
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import FadeIn from '@/components/transition/FadeIn.vue'
import FadeInItem from '@/components/transition/FadeInItem.vue'
import BuildingNav from '@/components/nav/BuildingNav.vue'
import { SafeData } from './SafeData'
import '@/assets/scss/method/safe.scss'

const tag = ref('safe-1')

const innerTag = ref(0)

const toggleClass = ref('')

const safeContent = ref<
  | {
      id: string
      name: string
      image: string
      innerImg?: string
      innerImgSec?: string
      className: string
      content: string
    }[]
  | null
>(null)

const toggleImg = ref('')

const toggleTag = (id: string) => {
  tag.value = id
}

const handleInnerImg = (img?: string, className?: string) => {
  if (img) {
    toggleImg.value = img
  } else {
    toggleImg.value = ''
  }
  if (className) {
    toggleClass.value = className
  } else {
    toggleClass.value = ''
  }
}

watch(tag, (newValue) => {
  if (newValue !== 'safe-1') {
    innerTag.value = 0
  }
})

onMounted(() => {
  safeContent.value = SafeData
})
</script>

<style scoped></style>
