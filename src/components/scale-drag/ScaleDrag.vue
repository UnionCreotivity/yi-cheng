<template>
  <div
    class="imgBoxIn"
    @click.stop="onClick"
    @mousedown.stop="onMouseDown"
    @mousemove.stop="onMouseMove"
    @mouseup.stop="onMouseUp"
    @mouseleave.stop="onMouseUp"
    @touchstart.stop="onTouchStart"
    @touchmove.stop="onTouchMove"
    @touchend.stop="onTouchEnd"
  >
    <div
      class="box"
      ref="dragTarget"
      :style="[startScale ? imgBoxStyle : '', boxStyle, isTocuhAction]"
    >
      <slot></slot>
    </div>
  </div>
  <div
    class="zoom"
    v-if="maxRatio !== 1"
    :style="{ display: 'flex', pointerEvents: 'auto', padding: '0.6vw' }"
  >
    <img src="@/assets/img/other/plus.svg" @click="zoomIn" />
    <img src="@/assets/img/other/minus.svg" @click="zoomOut" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import '@/assets/scss/scale-drag/scale-drag.scss'
interface InitPosition {
  x: number
  y: number
}

const props = defineProps<{
  maxRatio: number
  init: InitPosition
}>()

const emits = defineEmits(['toggle-text', 'isInter', 'watch-scale'])

const scaleRatio = ref(1)
const x = ref(0)
const y = ref(0)
const flag = ref(false)
const startXY = reactive({ x: 0, y: 0 })
const deltaXY = reactive({ x: 0, y: 0 })
const press = reactive({ x: 0, y: 0 })
const mapRect = reactive({ width: 0, height: 0 })
const boxRect = reactive({ width: 0, height: 0 })

const startScale = ref(false)

const dragTarget = ref<HTMLElement | null>(null)
const imgBox = ref<HTMLElement | null>(null)
// z
const onClick = (e: MouseEvent) => {
  if (scaleRatio.value >= props.maxRatio) {
    e.stopPropagation()
  }
}

const zoomIn = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  x.value = props.init.x
  y.value = props.init.y
  if (scaleRatio.value >= 1.5) {
    x.value = props.init.x * 2
    y.value = props.init.y * 2
  }
  if (scaleRatio.value < props.maxRatio) {
    scaleRatio.value += 0.5
    startScale.value = true
  }

  emits('toggle-text', true)
}

const zoomOut = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()

  if (scaleRatio.value > 1) {
    scaleRatio.value -= 0.5
    x.value /= 2
    y.value /= 2
  }
  if (scaleRatio.value <= 1) {
    x.value = 0
    y.value = 0
    startScale.value = false
    emits('toggle-text', false)
  }
}

const onMouseMove = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  const maxHorizontal = (mapRect.width - boxRect.width) / 2
  const maxVertical = (mapRect.height - boxRect.height) / 2
  if (flag.value && scaleRatio.value >= 1.5) {
    requestAnimationFrame(() => {
      //限制可拖動範圍
      if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
        if (deltaXY.x > 0 && x.value <= maxHorizontal) {
          x.value = e.pageX - press.x
          y.value = e.pageY - press.y
        } else if (deltaXY.x < 0 && x.value >= -maxHorizontal) {
          x.value = e.pageX - press.x
          y.value = e.pageY - press.y
        }
      } else {
        if (deltaXY.y > 0 && y.value <= maxVertical) {
          x.value = e.pageX - press.x
          y.value = e.pageY - press.y
        } else if (deltaXY.y < 0 && y.value >= -maxVertical) {
          x.value = e.pageX - press.x
          y.value = e.pageY - press.y
        }
      }
      deltaXY.x = e.clientX - startXY.x
      deltaXY.y = e.clientY - startXY.y
    })
  }
}

const onMouseDown = (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  //設定初始值
  flag.value = true
  press.x = e.pageX - (dragTarget.value?.offsetLeft ?? 0)
  press.y = e.pageY - (dragTarget.value?.offsetTop ?? 0)
  startXY.x = e.clientX
  startXY.y = e.clientY
  mapRect.width = dragTarget.value?.getBoundingClientRect().width ?? 0
  mapRect.height = dragTarget.value?.getBoundingClientRect().height ?? 0
  boxRect.width = imgBox.value?.getBoundingClientRect().width ?? 0
  boxRect.height = imgBox.value?.getBoundingClientRect().height ?? 0
}

const onMouseUp = () => {
  flag.value = false
}

const onTouchStart = (e: TouchEvent) => {
  flag.value = true
  press.x = e.touches[0].pageX - (dragTarget.value?.offsetLeft ?? 0)
  press.y = e.touches[0].pageY - (dragTarget.value?.offsetTop ?? 0)
  startXY.x = e.touches[0].clientX
  startXY.y = e.touches[0].clientY
  mapRect.width = dragTarget.value?.getBoundingClientRect().width ?? 0
  mapRect.height = dragTarget.value?.getBoundingClientRect().height ?? 0
  boxRect.width = imgBox.value?.getBoundingClientRect().width ?? 0
  boxRect.height = imgBox.value?.getBoundingClientRect().height ?? 0
}

const onTouchMove = (e: TouchEvent) => {
  const maxHorizontal = (mapRect.width - boxRect.width) / 2
  const maxVertical = (mapRect.height - boxRect.height) / 2
  if (flag.value && scaleRatio.value >= 1.5) {
    requestAnimationFrame(() => {
      if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
        if (deltaXY.x > 0 && x.value <= maxHorizontal) {
          x.value = e.touches[0].pageX - press.x
          y.value = e.touches[0].pageY - press.y
        } else if (deltaXY.x < 0 && x.value >= -maxHorizontal) {
          x.value = e.touches[0].pageX - press.x
          y.value = e.touches[0].pageY - press.y
        }
      } else {
        if (deltaXY.y > 0 && y.value <= maxVertical) {
          x.value = e.touches[0].pageX - press.x
          y.value = e.touches[0].pageY - press.y
        } else if (deltaXY.y < 0 && y.value >= -maxVertical) {
          x.value = e.touches[0].pageX - press.x
          y.value = e.touches[0].pageY - press.y
        }
      }
      deltaXY.x = e.touches[0].clientX - startXY.x
      deltaXY.y = e.touches[0].clientY - startXY.y
    })
  }
}

const onTouchEnd = () => {
  flag.value = false
}

const imgBoxStyle = computed(() => {
  return {
    transform: `scale(${scaleRatio.value})`,
    transformOrigin: 'center',
  }
})

const boxStyle = computed(() => ({
  position: 'relative' as const,
  width: '100%',
  height: '100%',
  left: `${x.value}px`,
  top: `${y.value}px`,
  transition: flag.value ? '0s' : '0.75s',
}))

const isTocuhAction = computed(() => {
  return scaleRatio.value >= 2 ? { touchAction: 'none' } : { touchAction: 'auto' }
})

watch(scaleRatio, () => {
  scaleRatio.value = Number(scaleRatio.value)
  if (scaleRatio.value >= 2) {
    scaleRatio.value = 2
  } else if (scaleRatio.value <= 1) {
    x.value = 0
    y.value = 0
    scaleRatio.value = 1
  }
})
</script>

<style scoped></style>
