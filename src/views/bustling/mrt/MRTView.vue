<template>
  <div class="mrt-view">
    <DevelopNav mainColor="black" tag="mrt" :innerkey="tag" />
    <div class="mrt-view-container">
      <div class="mrt-view-left">
        <img src="/src/assets/img/bustling/develop/mrt/mrt-left-img-1@2x.webp" alt="" />
      </div>
      <div class="mrt-view-right">
        <h2>MRT ROUTE</h2>
        <h1>三心六線，<br />映照美好未來的進行式</h1>
        <p>
          「三心六線」掌握未來桃園國際都會的勝利方程式! 「三心」分別為桃園、中
          壢與航空城特區。「六線」以機場捷運、捷運綠線、中壢延伸線、捷運棕線、三
          鶯線延伸八德段、大溪延伸線，呈現環狀軌道系統。 預約下一個黃金20年的城市發展。
        </p>
        <button class="mrt-view-right-button" @click.stop="handleToggle(true)">捷運路網圖</button>
      </div>
    </div>
    <FadeIn>
      <div class="mrt-fancybox" v-if="is_toggle">
        <div class="mrt-fancybox-container">
          <div class="mrt-fancybox-left">
            <img src="/src/assets/img/bustling/develop/mrt/mrt-left-img-2@2x.webp" alt="" />
            <FadeIn>
              <div class="mrt-fancybox-left-inner" v-if="is_toggleInner">
                <div class="mrt-fancybox-left-inner-close" @click.stop="handleToggleInner(false)">
                  <img src="/src/assets/img/other/close-button.svg" alt="" />
                </div>
                <img src="/src/assets/img/bustling/develop/mrt/mrt-left-img-3@2x.webp" alt="" />
              </div>
            </FadeIn>
          </div>
          <div class="mrt-fancybox-right">
            <h2>MRT ROUTE</h2>
            <h1>八擴唯一捷運光點<br />桃園車站機場國門一線直達</h1>
            <p>
              桃園捷運綠線主線共設 21 座車站，全長約 27.8
              公里，耗資982億元。是貫穿桃園市中心與國際機場最重要的城市經濟命脈，「宜誠豐光」約600米就到G01建德興豐站，擁有三捷交會無敵優勢，捷運綠線+中壢延伸線+大溪延伸線；未來七站到桃園新站、行經藝文特區、南崁終點銜接國門機場捷運A11站，等同掌握桃園黃金命脈第一站。
            </p>
            <button class="mrt-fancybox-right-button" @click.stop="handleToggleInner(true)">
              綠線第一階段通車時程表
            </button>
          </div>
        </div>
        <button class="mrt-fancybox-close" @click.stop="handleToggle(false)">
          <img src="@/assets/img/other/close-button.svg" alt="" />
        </button>
      </div>
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import DevelopNav from '@/components/nav/DevelopNav.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import '@/assets/scss/bustling/mrt.scss'

const tag = ref('mrt')

const is_toggle = ref(false)

const is_toggleInner = ref(false)

const handleToggle = (val: boolean) => {
  is_toggle.value = val
}

const handleToggleInner = (val: boolean) => {
  is_toggleInner.value = val
}
</script>

<style scoped></style>
