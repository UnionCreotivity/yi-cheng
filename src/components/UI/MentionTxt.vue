<template>
  <p :style="defaultStyle">{{ props.text }}</p>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'black',
  },
})

const defaultStyle = ref<CSSProperties>({
  letterSpacing: '2px',
  color: props.color,
})
</script>

<style lang="scss" scoped>
p {
  position: absolute;
  right: 1.5%;
  bottom: 2%;
  @media screen and (max-width: 1400px) {
    font-size: 0.75vw;
    right: 1%;
    bottom: 2%;
  }
}
</style>
