<template>
  <div class="water-proof-view">
    <BuildingNav color="purple" tag="water" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="water-proof-container">
      <FadeInItem>
        <div
          class="water-proof-content"
          v-for="content in waterContent"
          :key="content.id"
          v-show="content?.id === tag"
        >
          <div class="water-proof-content-left" :class="content?.id">
            <FadeInItem>
              <div
                class="water-proof-content-left-img"
                v-for="item in content?.images"
                :key="item.key"
                v-show="item.tag === innerTag"
              >
                <img :src="item.image" alt="" /></div
            ></FadeInItem>
          </div>
          <div class="water-proof-content-right">
            <h1>{{ content.name }}</h1>
            <div
              class="water-proof-content-right-para"
              v-for="item in content?.contents"
              :key="item.key"
              :class="item.tag === innerTag ? 'p-active' : ''"
            >
              <p>{{ item.content }}</p>
              <div class="water-proof-content-right-para-block"></div>
            </div>
            <div class="water-proof-content-button">
              <button
                class="water-proof-content-prev-button"
                @click.stop="handleOrder(content?.images, -1)"
              >
                <img src="../../../assets/img/other/prev.svg" alt="" />
              </button>
              <button
                class="water-proof-content-next-button"
                @click.stop="handleOrder(content?.images, 1)"
              >
                <img src="../../../assets/img/other/next.svg" alt="" />
              </button>
            </div>
          </div></div
      ></FadeInItem>
      <div class="water-proof-container-bottom">
        <img src="@/assets/img/other/fixed-bottom@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FadeInItem from '@/components/transition/FadeInItem.vue'
import BuildingNav from '@/components/nav/BuildingNav.vue'
import { WaterProofData } from './WaterProofData'
import '@/assets/scss/method/water-proof.scss'

const tag = ref('water-proof-1')

const innerTag = ref(0)

const waterContent = ref<
  | {
      id: string
      name: string
      images: { key: string; tag: number; image: string }[]
      contents: { key: string; tag: number; content: string }[]
    }[]
  | null
>(null)

const toggleTag = (id: string) => {
  tag.value = id
  innerTag.value = 0
}

// 輪播按鈕功能
const handleOrder = (item: { key: string; tag: number; image: string }[], num: number) => {
  if (waterContent.value) {
    const length = item.length
    innerTag.value = (innerTag.value + num + length) % length
  }
}

onMounted(() => {
  waterContent.value = WaterProofData
})
</script>

<style scoped></style>
