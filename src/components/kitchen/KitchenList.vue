<template>
  <div class="kitchen-list">
    <div class="kitchen-list-container">
      <div class="kitchen-list-left">
        <div class="nav-icon">
          <router-link :to="{ name: 'home' }">
            <img src="/src/assets/img/other/inner-white-icon.svg" alt="" />
          </router-link>
        </div>
        <img src="/src/assets/img/construction/kitchen/new/bath-big-img-new@2x.webp" alt="" />
        <RedPoint
          v-for="item in kitchenPoints"
          :key="item.tag"
          :name="item.class"
          :tag="item.tag"
          :activeTag="tag"
          @handle-tag="handleTag"
        />
        <MentionTxt text="實景示意圖" color="white" />
      </div>
      <FadeInRightToLeft>
        <div
          class="kitchen-list-right"
          v-for="item in kitchenlistData"
          :key="item.tag"
          :class="item.class"
          v-show="item.tag === tag"
        >
          <div class="kitchen-list-icon" v-if="item.icon">
            <img :src="item.icon" alt="" />
          </div>
          <div class="kitchen-list-right-para">
            <img :src="item.img" alt="" />
          </div></div
      ></FadeInRightToLeft>
      <div class="kitchen-list-close" @click="handleClose">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import FadeInRightToLeft from '../transition/FadeInRightToLeft.vue'
import MentionTxt from '../UI/MentionTxt.vue'
import RedPoint from '../point/RedPoint.vue'
import { kitchenPoints, kitchenlistData } from './kitchenlistData'
import '@/assets/scss/kitchen/kitchen-list.scss'

const emits = defineEmits(['render-item', 'handle-nav-color'])

const tag = ref('item-1')

const handleClose = () => {
  emits('render-item')
}

const handleTag = (val: string) => {
  if (val) {
    tag.value = val
  }
}
onMounted(() => {
  emits('handle-nav-color', false)
})
</script>

<style scoped></style>
