<template>
  <div
    class="red-point"
    :class="[
      props.name,
      props.tag === props.activeTag || props.listKey === props.activeTag ? 'point-active' : '',
      props?.className,
    ]"
    @click="handleClick"
  >
    <div class="red-point-img">
      <img :src="props.pointImg" class="red-point-img-props" v-if="props.pointImg" />
      <div class="red-point-img-inner" v-else></div>
    </div>
    <div class="radiation" :class="props.pointImg ? 'circle-stop' : ''">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/point/red-point.scss'

const props = defineProps(['name', 'tag', 'activeTag', 'listKey', 'className', 'pointImg'])

const emits = defineEmits(['handle-tag'])

const handleClick = () => {
  emits('handle-tag', props.tag)
}
</script>

<style scoped></style>
