<template>
  <div class="app-main">
    <FadeIn>
      <div class="app-loading" v-show="!is_Load">
        <div class="app-loading-container">
          <h1>讀取中</h1>
          <div class="app-loading-bar">
            <div class="app-loading-bar-inner" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>
    </FadeIn>
    <div class="app-container">
      <router-view v-slot="{ Component, route }">
        <FadeIn
          ><component :is="Component" :key="route.path" :is_Load="is_Load"></component
        ></FadeIn>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import FadeIn from './components/transition/FadeIn.vue'
import axios from 'axios'

const is_Load = ref(false)

const progress = ref(0)

const waitForPreloadedImages = () => {
  const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
  let count = 0
  const checkComplete = () => {
    count++
    progress.value = Number((count / preloadLinks.length).toFixed(2)) * 100
    if (progress.value >= 100) {
      is_Load.value = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preloadLinks.forEach((link: any) => {
    const img = new Image()
    img.src = link.href
    img.onload = checkComplete
    img.onerror = checkComplete
  })
}

waitForPreloadedImages()

onMounted(() => {
  // alert(window.innerWidth)
  axios
    .post(
      'https://web-board.tw/sys/login_axios.php',
      {
        type: 'admin',
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`,
          'Refresh-Token': localStorage['refresh_token'],
        },
        onUploadProgress: function () {
          //document.querySelector('.ajax_loading').classList.add('show_in');
        },
      },
    )
    .then(function (response) {
      console.log(response.data)
      if (response.data.success) {
        // -- 刷新 token --
        if (response.data.jwt !== undefined && response.data.refresh_jwt !== undefined) {
          sessionStorage['token'] = response.data.jwt
          localStorage['refresh_token'] = response.data.refresh_jwt
        }
      } else {
        alert(response.data.msg)
        window.location.href = 'https://web-board.tw'
      }
    })
    .catch(function (error) {
      console.error(error)
    })
    .finally(function () {
      //document.querySelector('.ajax_loading').classList.remove('show_in');
    })
})
</script>

<style lang="scss" scoped>
.app-loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgb(242, 149, 168);
  z-index: 99999;
  .app-loading-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 70px;
    letter-spacing: 6px;
    @media screen and (max-width: 1400px) {
      font-size: 40px;
    }
    .app-loading-bar {
      width: 30%;
      height: 20px;
      border: 3px solid black;
      transform-origin: left;
      .app-loading-bar-inner {
        height: 100%;
        background-color: white;
      }
    }
  }
}
.app-main {
  width: 100%;
  height: 100%;
}
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
