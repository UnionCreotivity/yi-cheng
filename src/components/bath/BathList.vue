<template>
  <div class="bath-list">
    <div class="bath-list-container">
      <div class="bath-list-left">
        <div class="nav-icon">
          <router-link :to="{ name: 'home' }">
            <img src="/src/assets/img/other/inner-white-icon.svg" alt="" />
          </router-link>
        </div>
        <div class="bath-list-left-bg">
          <FadeInItem>
            <img
              src="/src/assets/img/construction/bath/new/main-NEW.webp"
              alt=""
              v-show="main === true" />
            <img
              src="/src/assets/img/construction/bath/new/sub-NEW.webp"
              alt=""
              v-show="main !== true"
          /></FadeInItem>
        </div>
        <FadeInItem>
          <RedPoint
            v-for="item in pointData?.content"
            :key="item.tag"
            :name="item.class"
            :activeTag="tag"
            :tag="item.tag"
            @handle-tag="handleTag"
        /></FadeInItem>
        <MentionTxt text="情境示意圖" color="white" />
      </div>
      <div class="bath-list-right">
        <div class="bath-list-right-main">
          <button :class="main === true ? 'main-active' : ''" @click="toggleMain(true)">
            主浴
          </button>
          <div class="line"></div>
          <button :class="main === false ? 'main-active' : ''" @click="toggleMain(false)">
            次浴
          </button>
        </div>
        <FadeInRightToLeft>
          <div
            class="bath-list-right-container"
            v-for="item in bathlistData"
            :key="item.key"
            :class="item.tag"
            v-show="item.tag === tag"
          >
            <div class="bath-list-icon">
              <img :src="item.icon" alt="" />
            </div>
            <div class="bath-list-right-para">
              <img :src="item.img" alt="" />
            </div></div
        ></FadeInRightToLeft>
      </div>
      <div class="bath-list-close" @click="handleClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import FadeInItem from '../transition/FadeInItem.vue'
import FadeInRightToLeft from '../transition/FadeInRightToLeft.vue'
import RedPoint from '../point/RedPoint.vue'
import MentionTxt from '../UI/MentionTxt.vue'
import { bathlistData, bathPoints } from './bathlistData'
import '@/assets/scss/bath/bath-list.scss'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const main = ref(true)

const pointData = ref<{ main: boolean; content: { tag: string; class: string }[] } | null>(null)

const tag = ref('item-1')

const handleTag = (val: string) => {
  if (val) {
    tag.value = val
  }
}

const toggleMain = (val: boolean) => {
  main.value = val
  const findPoints = bathPoints.find((item) => item.main === main.value)
  if (findPoints) {
    pointData.value = findPoints
  }
}

const handleClose = () => {
  emits('render-item')
}

watch(main, () => {
  if (main.value) {
    tag.value = 'item-1'
  } else {
    tag.value = 'item-6'
  }
})

onMounted(() => {
  const findPoints = bathPoints.find((item) => item.main === main.value)
  if (findPoints) {
    pointData.value = findPoints
  }
})
</script>

<style scoped></style>
