<template>
  <div class="building-view">
    <BuildingNav color="purple" tag="building" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="building-container">
      <div class="building-content">
        <div class="building-content-left" :class="buildingContet?.id">
          <div class="building-content-left-first" v-if="arrayFilter()">
            <FadeInItem>
              <div
                class="building-content-left-item"
                v-for="item in buildingContet?.items"
                v-show="item.order === innerTag"
                :key="item.key"
              >
                <img :src="item.image" alt="" v-if="item.image" />
                <video :src="item.video" muted loop autoplay v-else></video></div
            ></FadeInItem>
          </div>
          <div class="building-content-left-second" v-else>
            <img :src="buildingContet?.image" alt="" v-if="buildingContet?.image" />
            <video :src="buildingContet?.video" muted loop autoplay v-else></video>
          </div>
        </div>
        <div class="building-content-right">
          <h1>{{ buildingContet?.name }}</h1>
          <p>
            {{ buildingContet?.content }}
          </p>
          <div class="building-content-right-button" v-if="arrayFilter()">
            <button class="building-content-prev-button" @click.stop="handleOrder(-1)">
              <img src="../../../assets/img/other/prev.svg" alt="" />
            </button>
            <button class="building-content-next-button" @click.stop="handleOrder(1)">
              <img src="../../../assets/img/other/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="building-container-bottom">
        <img src="@/assets/img/other/purple-bottom@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BuildingNav from '@/components/nav/BuildingNav.vue'
import FadeInItem from '@/components/transition/FadeInItem.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import { BuildingData } from './BuildingData'
import '@/assets/scss/method/building.scss'

const tag = ref('building-1')

const buildingContet = ref<{
  id: string
  name: string
  content?: string
  video?: string
  image?: string
  items?: { key: string; order: number; image?: string; video?: string }[]
} | null>(null)

const innerTag = ref(0)

const toggleTag = (id: string) => {
  tag.value = id
  innerTag.value = 0
  buildingContet.value = BuildingData.filter((item) => item.id === id)[0]
}

const arrayFilter = () => {
  return buildingContet.value?.items ? true : false
}

const handleOrder = (num: number) => {
  if (!buildingContet.value) return
  const length = buildingContet.value.items?.length
  if (!length) return
  innerTag.value = (innerTag.value + num + length) % length
}

onMounted(() => {
  buildingContet.value = BuildingData.filter((item) => item.id === tag.value)[0]
})
</script>

<style scoped></style>
