<template>
  <div class="safe-view">
    <BuildingNav color="purple" tag="safe" :innerkey="tag" @toggle-tag="toggleTag" />
    <div class="safe-container">
      <FadeInItem>
        <div class="safe-content" v-for="content in SafeData" v-show="tag === content?.id">
          <div class="safe-content-left">
            <FadeInItem>
              <div
                class="safe-content-left-item"
                v-for="item in content?.images"
                :key="item.key"
                :class="item.className"
                v-show="item.order === innerTag"
              >
                <img :src="item.img" alt="" /></div
            ></FadeInItem>
          </div>
          <div class="safe-content-right">
            <h1>{{ content?.name }}</h1>
            <p>
              {{ content?.content }}
            </p>
            <div class="safe-content-button" v-if="content?.id === 'safe-1'">
              <button
                class="safe-content-prev-button"
                @click.stop="handleOrder(content?.images, -1)"
              >
                <img src="../../../assets/img/other/prev.svg" alt="" />
              </button>
              <button
                class="safe-content-next-button"
                @click.stop="handleOrder(content?.images, 1)"
              >
                <img src="../../../assets/img/other/next.svg" alt="" />
              </button>
            </div>
          </div></div
      ></FadeInItem>
      <div class="safe-container-bottom">
        <img src="@/assets/img/other/purple-bottom@2x.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FadeInItem from '@/components/transition/FadeInItem.vue'
import BuildingNav from '@/components/nav/BuildingNav.vue'
import { SafeData } from './SafeData'
import '@/assets/scss/method/safe.scss'

const tag = ref('safe-1')

const innerTag = ref(0)

const safeContent = ref<
  | {
      id: string
      name: string
      images: { key: string; img: string; order: number; className: string }[]
      content: string
    }[]
  | null
>(null)

const toggleTag = (id: string) => {
  tag.value = id
}

const handleOrder = (
  item: { key: string; img: string; order: number; className: string }[],
  num: number,
) => {
  const length = item.length
  innerTag.value = (innerTag.value + num + length) % length
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
