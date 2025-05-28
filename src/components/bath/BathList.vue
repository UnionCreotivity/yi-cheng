<template>
  <div class="bath-list">
    <div class="bath-list-container">
      <div class="bath-list-left">
        <img src="/src/assets/img/construction/衛浴設備/new/bath-main-bg@2x.webp" alt="" />
        <MentionTxt text="情境示意圖" color="white" />
      </div>
      <div class="bath-list-right"></div>
      <div class="bath-list-close" @click="handleClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import FadeInRightToLeft from '../transition/FadeInRightToLeft.vue'
import MentionTxt from '../UI/MentionTxt.vue'
import { bathlistData, bathPoints } from './bathlistData'
import '@/assets/scss/bath/bath-list.scss'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const handleClose = () => {
  emits('render-item')
}

// const showClose = computed(() => {
//   return bathDetail.value !== null ? 'visibility: hidden;' : ''
// })

onMounted(() => {})
</script>

<style scoped></style>
