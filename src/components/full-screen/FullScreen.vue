<template>
  <div class="full-screen" @click.stop="handleClick">
    <img src="@/assets/img/other/full-screen.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

const handleClick = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  position: absolute;
  right: 2%;
  bottom: 12%;
  width: 3vw;
  height: 3vw;
  opacity: 0.5;
  mix-blend-mode: difference;
  cursor: pointer;
  z-index: 15;
  img {
    height: 100%;
  }
}
</style>
