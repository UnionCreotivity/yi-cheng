<template>
  <PageFixed id="life">
    <div class="life-container">
      <FadeIn>
        <div class="life-left" v-if="!toggle">
          <div class="life-left-para">
            <h2>雙商圈加持 生活即享便利</h2>
            <h3>全聯×星巴克×置地廣場 一步即達</h3>
            <div class="line"></div>
            <p>
              全聯、寶雅、星巴克、手搖飲、小吃街... 居家生活機能應有盡有，滿足每日所需。
              休閒娛樂則擁有6000坪興仁夜市與大湳 商圈、置地廣場、迪卡儂、國賓影城等，
              從平日購物到週末打卡，都能即刻展開日 常風采。
            </p>
          </div>
          <ul class="life-ul">
            <li v-for="item in LifeListData" :key="item.key" class="life-li">
              <div
                class="life-li-content"
                @click="handleListClick(item.key)"
                :class="item.key === listTag ? 'li-active' : ''"
              >
                <div class="life-square"></div>
                <div class="life-li-txt-container">
                  <div class="life-li-zh-txt">{{ item.zhTxt }}</div>
                  <div class="life-li-en-txt">{{ item.enTxt }}</div>
                </div>
              </div>
              <div class="life-li-line"></div>
            </li>
          </ul></div
      ></FadeIn>
      <div class="life-right">
        <ScaleDrag :max-ratio="2" :init="{ x: 0, y: 0 }" @toggle-text="toggleText">
          <div class="container">
            <div class="anchor-area">
              <div class="anchor-area-map">
                <FadeIn>
                  <div class="life-points" v-if="pointsData">
                    <FadeInItem>
                      <RedPoint
                        v-for="item in pointsData.content"
                        :key="item.tag"
                        :tag="item.tag"
                        :activeTag="item.tag"
                        :className="item.className"
                        @handle-tag="handelTagClick"
                    /></FadeInItem></div
                ></FadeIn>
                <img class="imgBoxMap" src="/src/assets/img/life/life-main-img@2x.webp" />
              </div>
            </div></div
        ></ScaleDrag>
      </div>
    </div>
    <FadeIn>
      <LifeFancyBox v-if="fancyData" :fancyData="fancyData" @handel-tag-click="handelTagClick" />
    </FadeIn>
  </PageFixed>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import PageFixed from '@/components/pageFixed/PageFixed.vue'
import RedPoint from '@/components/point/RedPoint.vue'
import LifeFancyBox from '@/components/life/LifeFancyBox.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import FadeInItem from '@/components/transition/FadeInItem.vue'
import { LifeListData, LifePoints, LifeSwiperData } from './LifeListData'
import '@/assets/scss/life/life.scss'

// 清單選取
const listTag = ref<string | null>(null)

//紅點內容
const pointsData = ref<{
  key: string
  content: { tag: string; name: string; className: string }[]
} | null>(null)

//左邊文字
const toggle = ref(false)

//fancybox內容
const fancyData = ref<{ tag: string; images: { key: string; img: string }[] } | null>(null)

const handleListClick = (val: string) => {
  listTag.value = val
  if (listTag.value) {
    const result = LifePoints.find((item) => item.key === listTag.value)
    if (result) {
      pointsData.value = result
    }
  }
}

const handelTagClick = (val?: string) => {
  if (val) {
    const findData = LifeSwiperData.find((item) => item.tag === val)
    if (findData) {
      fancyData.value = findData
    }
  } else {
    fancyData.value = null
  }
}

const toggleText = (val: boolean) => {
  toggle.value = val
}

const gsapInit = () => {
  const tl = gsap.timeline({ delay: 0.25 })

  tl.from('.life-left-para h2,.life-left-para h3,.life-left-para .line ,.life-left-para P', {
    x: '10%',
    opacity: 0,
    stagger: 0.17,
    duration: 0.75,
  }).from(
    '.life-li-txt-container',
    {
      x: '30%',
      opacity: 0,
      stagger: 0.17,
      duration: 0.75,
    },
    '<+0.25',
  )
}

onMounted(() => {
  gsapInit()
})
</script>

<style></style>
