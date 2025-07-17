<template>
  <div class="floor-view-container">
    <div class="nav-icon">
      <router-link :to="{ name: 'home' }">
        <img src="/src/assets/img/other/company-icon.svg" alt="" />
      </router-link>
    </div>
    <div class="floor-view-bg">
      <img src="/src/assets/img/floor/floor-3d-bg@2x.webp" alt="" />
    </div>
    <p>3D外觀示意圖</p>
    <ul class="floor-view-items">
      <li
        class="floor-view-item"
        v-for="item in floorItemData"
        :key="item.name"
        :class="item.tag === activeTag ? 'floor-active' : ''"
        @mouseover="addTag(item.tag)"
        @mouseout="removeTag()"
      >
        <router-link
          :to="{ name: 'floorinner', query: { q: item.tag } }"
          v-if="
            item.tag === '3F-14F' || item.tag === 'B1' || item.tag === 'B2' || item.tag === 'B3'
          "
        >
          <p>{{ item.name }}</p>
          <div class="block"></div>
        </router-link>
        <router-link to="" v-else>
          <p>{{ item.name }}</p>
          <div class="block"></div>
        </router-link>
      </li>
    </ul>
    <div class="toggle-day-night">
      <div class="toggle-day"><img src="/src/assets/img/floor/sun-button.svg" alt="" /></div>
      <div class="toggle-night"><img src="/src/assets/img/floor/moon-button.svg" alt="" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { floorItemData } from '../FloorData'
import '@/assets/scss/floor/floor.scss'

const activeTag = ref<string | null>(null)

const addTag = (val: string) => {
  activeTag.value = val
}

const removeTag = () => {
  activeTag.value = null
}
</script>

<style scoped></style>
