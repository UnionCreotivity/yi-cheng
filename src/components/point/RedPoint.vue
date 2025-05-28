<template>
  <div
    class="red-point"
    :class="[props.name, props.tag === props.activeTag ? 'point-active' : '']"
    @click="handleClick"
  >
    <div class="red-point-img">
      <img src="/src/assets/img/construction/other/red-point.svg" alt="" />
    </div>
    <div className="radiation">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/point/red-point.scss'

const props = defineProps(['name', 'tag', 'activeTag'])

const emits = defineEmits(['handle-tag'])

const handleClick = () => {
  emits('handle-tag', props.tag)
}
</script>

<style scoped></style>
