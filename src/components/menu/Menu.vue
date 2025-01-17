<template>
  <div id="menu" :style="leftZero">
    <div class="menu-container" v-show="is_Show">
      <ul class="menu-main-ul">
        <li class="menu-icon"><img src="@/assets/img/menu/menu-icon.svg" alt="" /></li>
        <li
          v-for="item in menuData"
          :key="item.key"
          class="menu-main-li"
          :class="item.key === tag ? 'menu-main-li-active' : ''"
          @click.stop="toggleSubMenuClick(item.key)"
        >
          <div class="menu-link-icon">
            <img :src="item.key === tag ? item.active : item.inactive" alt="" />
          </div>
          <p>{{ item.zhName }}</p>
        </li>
      </ul>
      <ul class="menu-link-items" v-if="subItem">
        <li class="menu-link-item" v-for="link in subItem.linkItem" :key="link.key">
          <router-link :to="{ name: link.link }">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="menu-button" @click="showMenuClick">MENU</div>
  </div>
</template>

<script setup lang="ts">
import { menuData, menuSubData } from './menuData'
import '@/assets/scss/menu/menu.scss'

const is_Show = ref(false)

const tag = ref('menu-1')

const subItem = ref()

const showMenuClick = () => {
  is_Show.value = !is_Show.value
}

const toggleSubMenuClick = (key: string) => {
  if (!key) return
  tag.value = key
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  subItem.value = findSubData
}

const leftZero = computed(() => {
  return is_Show.value === false ? 'left:0%' : 'left:1.25%'
})

onMounted(() => {
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  subItem.value = findSubData
})
</script>

<style lang="scss" scoped></style>
