<template>
  <main :id="props.title">
    <slot></slot>
    <div v-if="routeName !== 'home'">
      <Menu />
      <FullScreen />
    </div>
  </main>
</template>

<script setup lang="ts">
import Menu from '../menu/Menu.vue'
import FullScreen from '../full-screen/FullScreen.vue'

const props = defineProps(['title'])

const route = useRoute()

const routeName = ref('')

onMounted(() => {
  if (route.name) {
    routeName.value = route.name.toString()
  }
})
</script>

<style scoped></style>
