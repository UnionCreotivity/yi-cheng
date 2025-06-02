<template>
  <section class="fancy-container">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img :src="navColor" alt="" />
      </router-link>
    </div>
    <slot />
    <!-- <div class="back-button"><img src="@/assets/img/other/close-button.svg" alt="" /></div> -->
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['color'])

const navColor = computed(() => {
  return props.color === 'white'
    ? new URL('@/assets/img/other/inner-white-icon.svg', import.meta.url).href
    : new URL('@/assets/img/other/company-icon.svg', import.meta.url).href
})
</script>

<style lang="scss">
.fancy-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  z-index: 15;
  .nav-icon {
    position: absolute;
    left: 2.25%;
    top: 3.25%;
    width: 9.45vw;
    z-index: 2;
  }
}
</style>
