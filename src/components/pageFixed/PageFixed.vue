<template>
  <main :id="props.title">
    <slot></slot>
    <div
      v-if="routeName !== 'home'"
      :class="is_Show ? 'showFull' : ''"
      @click.stop="showMenuClick(false)"
    >
      <Menu :show="is_Show" @show-menu-click="showMenuClick" />
      <FullScreen :show="is_Show" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Menu from '../menu/Menu.vue'
import FullScreen from '../full-screen/FullScreen.vue'

const props = defineProps(['title'])

const route = useRoute()

const routeName = ref('')

const is_Show = ref(false)

const showMenuClick = (val: boolean) => {
  is_Show.value = val
}

onMounted(() => {
  if (route.name) {
    routeName.value = route.name.toString()
  }
})
</script>

<style lang="scss" scoped>
.showFull {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
}
</style>
