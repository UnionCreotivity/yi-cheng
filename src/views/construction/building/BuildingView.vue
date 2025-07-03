<template>
  <div class="building-view">
    <BuildingNav color="purple" tag="building" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="building-container">
      <FadeInItem>
        <div
          class="building-content"
          v-for="content in buildingContet"
          :key="content.id"
          :class="content?.id"
          v-show="content?.id === tag"
        >
          <div class="building-content-left">
            <!-- 判斷是否為輪播 -->
            <div class="building-content-left-first" v-if="content?.items">
              <FadeInItem>
                <div
                  class="building-content-left-item"
                  v-for="item in content?.items"
                  v-show="item.order === itemsTag"
                  :key="item.key"
                >
                  <!-- 圖片與影片的判斷 -->
                  <img :src="item.image" alt="" v-if="item.image" />
                  <video :src="item.video" controls muted loop autoplay v-else></video></div
              ></FadeInItem>
            </div>
            <!-- 判斷是否為輪播 -->
            <div class="building-content-left-second" v-else>
              <!-- 圖片與影片的判斷 -->
              <img :src="content?.image" alt="" v-if="content?.image" />
              <video :src="content?.video" controls muted loop autoplay v-else></video>
            </div>
          </div>
          <div class="building-content-right">
            <h1>{{ content?.name }}</h1>
            <p>
              {{ content?.content }}
            </p>
            <!-- 判斷是否為輪播，會出現相對應的按鈕 -->
            <div class="building-content-right-button" v-if="content?.items">
              <button
                class="building-content-prev-button"
                @click.stop="handleOrder(content?.items, -1)"
              >
                <img src="../../../assets/img/other/prev.svg" alt="" />
              </button>
              <button
                class="building-content-next-button"
                @click.stop="handleOrder(content?.items, 1)"
              >
                <img src="../../../assets/img/other/next.svg" alt="" />
              </button>
            </div>
          </div></div
      ></FadeInItem>
      <div class="building-container-bottom">
        <img src="@/assets/img/other/fixed-bottom@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BuildingNav from '@/components/nav/BuildingNav.vue'
import FadeInItem from '@/components/transition/FadeInItem.vue'
import { BuildingData } from './BuildingData'
import '@/assets/scss/method/building.scss'

const tag = ref('building-1')

const itemsTag = ref(0)

const buildingContet = ref<
  | {
      id: string
      name: string
      content?: string
      video?: string
      image?: string
      items?: { key: string; order: number; image?: string; video?: string }[]
    }[]
  | null
>(null)

const toggleTag = (id: string) => {
  tag.value = id
  itemsTag.value = 0
}
// 輪播按鈕功能
const handleOrder = (
  item: { key: string; order: number; image?: string; video?: string }[],
  num: number,
) => {
  if (!buildingContet.value) return
  const length = item.length
  if (!length) return
  itemsTag.value = (itemsTag.value + num + length) % length
}

onMounted(() => {
  buildingContet.value = BuildingData
})
</script>

<style scoped></style>
