<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FadeIn>
    <div id="menu" :style="leftStyle">
      <div class="menu-container" ref="testDiv" v-show="is_Show">
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
            <router-link :to="{ name: link.link }">
              <div class="menu-link-item-block"></div>
              <p>{{ link.name }}</p></router-link
            >
          </li>
        </ul>
      </div>
      <div class="menu-button" @click="showMenuClick">MENU</div>
    </div>
  </FadeIn>
</template>

<script setup lang="ts">
import FadeIn from '../transition/FadeIn.vue'
import { menuData, menuSubData, menuTags } from './menuData'
import '@/assets/scss/menu/menu.scss'

const route = useRoute()

const is_Show = ref(false)

const tag = ref('menu-1')

// const menuWidth = ref(0)

const subItem = ref()

const testDiv = ref<HTMLElement>()

const showMenuClick = () => {
  is_Show.value = !is_Show.value
  // if (testDiv.value) {
  //   menuWidth.value = Number(testDiv.value.getBoundingClientRect().width.toFixed(2))
  // }
  // console.log(testDiv.value?.getBoundingClientRect().width.toFixed(2))
}

const leftStyle = computed(() => {
  return is_Show.value === false ? 'left:0%' : 'left:1.25%'
})

const toggleSubMenuClick = (key: string) => {
  if (!key) return
  tag.value = key
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  subItem.value = findSubData
}

// watch(subItem, () => {
//   console.log(subItem.value)
//   const ts = document.querySelector('.menu-container')
//   if (ts) {
//     console.log(ts.getBoundingClientRect().width.toFixed(2))
//   }
//   console.log(testDiv.value?.getBoundingClientRect().width.toFixed(2))
// })

onMounted(() => {
  const pathSplit = route.path.split('/')[1]
  const findId = menuTags.find((item) => item.path.includes(pathSplit))?.id
  if (findId) {
    tag.value = findId
  }
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  subItem.value = findSubData
})
</script>

<style lang="scss" scoped>
// .menu-sub-enter-active,
// .menu-sub-leave-active {
//   transition: all 0.3s ease-out;
// }

// .menu-sub-enter-from,
// .menu-sub-leave-to {
//   transform: translateX(-5%);
// }
</style>
