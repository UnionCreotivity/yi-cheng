<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="menu" :style="props.show ? menuActive : menuInactiveStyle" @click.stop>
    <div class="menu-container">
      <ul class="menu-main-ul">
        <li class="menu-icon"><img src="@/assets/img/menu/menu-icon.svg" alt="" /></li>
        <li
          v-for="item in menuData"
          :key="item.key"
          class="menu-main-li"
          :class="item.key === tag ? 'menu-main-li-active' : ''"
          @click.stop="toggleSubMenuClick(item.key)"
        >
          <!-- 有無連結 -->
          <router-link :to="{ name: item.link }" class="menu-link-inner" v-if="item.link">
            <div class="menu-link-icon">
              <img :src="item.key === tag ? item.active : item.inactive" alt="" />
            </div>
            <p>{{ item.zhName }}</p>
          </router-link>
          <div class="menu-link-inner" v-else>
            <div class="menu-link-icon">
              <img :src="item.key === tag ? item.active : item.inactive" alt="" />
            </div>
            <p>{{ item.zhName }}</p>
          </div>
        </li>
      </ul>
      <!-- 有無子項目 -->
      <ul class="menu-link-items" v-if="subItem">
        <li
          class="menu-link-item"
          v-for="link in subItem.linkItem"
          :key="link.key"
          :class="[
            subTag === link.link ? 'menu-link-item-active' : '',
            link.link === 'develop' ? 'show-line' : '',
          ]"
        >
          <router-link :to="{ name: link.link }">
            <div class="menu-link-item-block"></div>
            <p>{{ link.name }}</p></router-link
          >
        </li>
      </ul>
    </div>
    <div class="menu-button" @click.stop="showMenuClick">MENU</div>
  </div>
</template>

<script setup lang="ts">
import { menuData, menuSubData, menuTags, menuChildTags } from './menuData'
import '@/assets/scss/menu/menu.scss'

const emits = defineEmits(['show-menu-click'])

const props = defineProps(['show'])

const route = useRoute()

const tag = ref('menu-1')

const subItem = ref()

const subTag = ref('')

const menuActive = ref({
  transform: ' translateX(1.25vw)',
  transition: 'all 0.5s',
})

const showMenuClick = () => {
  const val = !props.show
  emits('show-menu-click', val)
}

//有子選項時的menu移動幅度
const menuInactiveStyle = computed(() => {
  return {
    transform: subItem.value ? 'translateX(-88.5%)' : 'translateX(-80.5%)',
    transition: 'all 0.5s',
  }
})

//看menu是否有子選項
const toggleSubMenuClick = (key: string) => {
  if (!key) return
  tag.value = key
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  if (findSubData?.key !== 'menu-3' && findSubData?.key !== 'menu-5') {
    subItem.value = findSubData
  } else {
    subItem.value = null
  }
}

onMounted(() => {
  //抓第一個路徑，例如/construction/feature就會抓construction
  const pathSplit = route.path.split('/')[1]
  // 尋找tag對應的id
  const findId = menuTags.find((item) => item.path.includes(pathSplit))?.id
  if (findId) {
    tag.value = findId
  }
  //尋找子項目
  const findSubData = menuSubData.find((subItem) => subItem.key === tag.value)
  if (findSubData?.key !== 'menu-3' && findSubData?.key !== 'menu-5') {
    subItem.value = findSubData
  } else {
    subItem.value = null
  }

  //尋找子path的母path
  const childtag = menuChildTags.find((item) => item.name === route.name)
  if (childtag) {
    subTag.value = childtag.tag
  } else {
    subTag.value = route.name as string
  }
})
</script>

<style lang="scss" scoped></style>
