<template>
  <nav id="nav">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }"> <img :src="iconStyle" alt="" /></router-link>
    </div>
    <div class="nav-right">
      <ul class="nav-links">
        <li
          v-for="link in linkItem"
          :key="link.key"
          :class="link.key === props.innerkey ? 'nav-active' : ''"
        >
          <div class="nav-link-name" @click.stop="handleClick(link.key)">{{ link.name }}</div>
        </li>
      </ul>
      <router-link :to="{ name: 'method' }" class="back-button">
        <img src="@/assets/img/other/close-button.svg" alt="" />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { constrLinks } from './navLinks'

const props = defineProps(['color', 'tag', 'innerkey'])

const emits = defineEmits(['toggle-tag'])

const linkItem = ref()

//左上icon
const iconStyle = computed(() => {
  return props.color === 'white'
    ? new URL('@/assets/img/other/inner-white-icon.svg', import.meta.url).href
    : new URL('@/assets/img/other/company-icon.svg', import.meta.url).href
})

const handleClick = (id: string) => {
  emits('toggle-tag', id)
}

onMounted(() => {
  const findLinks = constrLinks.find((link) => link.key === props.tag)
  linkItem.value = findLinks?.links
})
</script>

<style></style>
