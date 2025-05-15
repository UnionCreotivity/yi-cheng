<template>
  <div class="full-screen" :class="props.show ? 'full-screen-color' : ''" @click.stop="handleClick">
    <img src="@/assets/img/other/full-screen.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

const props = defineProps(['show'])

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
  bottom: 5%;
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
.full-screen-color {
  // padding-inline: 10px;
  // background-color: darkgray;
}
</style>
