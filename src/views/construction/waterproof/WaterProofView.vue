<template>
  <div class="water-proof-view">
    <BuildingNav color="purple" tag="water" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="water-proof-container">
      <div class="water-proof-content">
        <div class="water-proof-content-left" :class="waterContent?.id">
          <FadeInItem>
            <div
              class="water-proof-content-left-img"
              v-for="item in waterContent?.images"
              :key="item.key"
              v-show="item.tag === innerTag"
            >
              <img :src="item.image" alt="" /></div
          ></FadeInItem>
        </div>
        <div class="water-proof-content-right">
          <div
            class="water-proof-content-right-para"
            v-for="item in waterContent?.contents"
            :key="item.key"
            :class="item.tag === innerTag ? 'p-active' : ''"
          >
            <p>{{ item.content }}</p>
            <div class="water-proof-content-right-para-block"></div>
          </div>
          <div class="water-proof-content-button">
            <button class="water-proof-content-prev-button" @click.stop="handleOrder(-1)">
              <img src="../../../assets/img/other/prev.svg" alt="" />
            </button>
            <button class="water-proof-content-next-button" @click.stop="handleOrder(1)">
              <img src="../../../assets/img/other/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="water-proof-container-bottom">
        <img src="@/assets/img/other/purple-bottom@2x.webp" alt="" />
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

const waterContent = ref<{
  id: string
  name: string
  images: { key: string; tag: number; image: string }[]
  contents: { key: string; tag: number; content: string }[]
} | null>(null)

const innerTag = ref(0)

const toggleTag = (id: string) => {
  tag.value = id
  innerTag.value = 0
  waterContent.value = WaterProofData.filter((item) => item.id === id)[0]
}

const handleOrder = (num: number) => {
  if (waterContent.value) {
    let length = waterContent.value.images.length
    innerTag.value = (innerTag.value + num + length) % length
  }
}

onMounted(() => {
  waterContent.value = WaterProofData.filter((item) => item.id === tag.value)[0]
})
</script>

<style scoped></style>
