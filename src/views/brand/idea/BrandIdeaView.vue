<template>
  <div class="brand-idea">
    <Nav :color="colorTag" tag="brand" />
    <div class="brand-idea-container">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="25"
        :navigation="{
          nextEl: '.brand-idea-next',
          prevEl: '.brand-idea-prev',
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="[Navigation]"
        class="brand-idea-swiper-container"
      >
        <swiper-slide class="brand-idea-slide">
          <div class="brand-idea-content-top">
            <div class="brand-idea-content-top-img">
              <img src="/src/assets/img/brand/brand-idea/brand-idea-big-img1@2x.webp" alt="" />
            </div>
            <div class="brand-idea-content-yi">
              <img src="/src/assets/img/brand/brand-idea/brand-idea-yi@2x.webp" alt="" />
            </div>
            <p>情境示意圖</p>
          </div>
          <div class="brand-idea-content-bottom">
            <div class="brand-idea-content-second-left">
              <div class="brand-idea-second-icon">
                <img src="/src/assets/img/brand/brand-idea/brand-idea-1-icon@2x.webp" alt="" />
              </div>
              <h2>半甲子精釀建築藝術，國家級金榜團隊</h2>
              <p>
                「沒有永遠最好，只有一直更好」宜誠建設堅持近40年在建築領域上創新永續，從建築規劃到營造工程，每一個細節全部掌握不斷突破!
                深耕桃園土地，讓每一棟一成的建築，都是獨一無二的藝術極品。榮獲「顧客滿意金質獎」、「十大優良建商」、「中華民國傑出工商企業楷模」、「中華建築金石獎」…等殊榮肯定，打造超過14000戶幸福的家庭!
              </p>
            </div>
            <div class="brand-idea-content-second-right">
              <h2>四大建築保固 勤懇永續</h2>
              <div class="brand-idea-second-award">
                <img src="/src/assets/img/brand/brand-idea/brand-idea-1-icon-2@2x.webp" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="brand-idea-slide">
          <div class="brand-idea-content-top">
            <div class="brand-idea-content-top-img">
              <img src="/src/assets/img/brand/brand-idea/brand-idea-big-img2@2x.webp" alt="" />
            </div>
            <div class="brand-idea-content-yi">
              <img src="/src/assets/img/brand/brand-idea/brand-idea-yi@2x.webp" alt="" />
            </div>
            <p>情境示意圖</p>
          </div>
          <div class="brand-idea-content-second-bottom">
            <div class="brand-idea-content-second-bottom-container">
              <h2>國家級專利創新，卍字形雙柱 SRC工法</h2>
              <p>
                建築的根基，在於安全，宜誠建設機構在2018年取得「卍型雙柱2H型鋼柱」專利，恆鑄安穩的基石，加上建築結構上採用成本較高的SRC，為每一個宜誠的建築打造超高標的安全準則，鑄造安家堡壘。
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="brand-idea-slide-row">
          <div class="brand-idea-slide-row-left">
            <img src="/src/assets/img/brand/brand-idea/brand-idea-big-img3-left@2x.webp" alt="" />
          </div>
          <div class="brand-idea-slide-row-right">
            <h2>十大建商好感度</h2>
            <div class="content">
              <div class="crown">
                <img src="/src/assets/img/brand/brand-idea/crown.svg" alt="" />
              </div>
              <table class="content-table">
                <thead>
                  <tr>
                    <th scope="col" class="content-title content-title-first">排名</th>
                    <th scope="col" class="content-title content-title-middle">建設公司</th>
                    <th scope="col" class="content-title content-title-last">網路好感度</th>
                  </tr>
                </thead>
                <tbody class="content-table-body">
                  <tr>
                    <th scope="row" class="tag">1.</th>
                    <td class="main-item">聯聚建設</td>
                    <td class="number">126.71</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">2.</th>
                    <td class="main-item">富宇建設</td>
                    <td class="number">105.84</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">3.</th>
                    <td class="main-item">宜誠建設</td>
                    <td class="number">105.12</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">4.</th>
                    <td class="main-item">璟都建設</td>
                    <td class="number">42.49</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">5.</th>
                    <td class="main-item">大同建設</td>
                    <td class="number">15.09</td>
                  </tr>
                </tbody>
              </table>
              <table class="content-table">
                <thead>
                  <tr>
                    <th scope="col" class="content-title content-title-first">排名</th>
                    <th scope="col" class="content-title content-title-middle">建設公司</th>
                    <th scope="col" class="content-title content-title-last">網路好感度</th>
                  </tr>
                </thead>
                <tbody class="content-table-body">
                  <tr>
                    <th scope="row" class="tag">1.</th>
                    <td class="main-item">國泰建設</td>
                    <td class="number">13.78</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">2.</th>
                    <td class="main-item">新濠建設</td>
                    <td class="number">10.75</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">3.</th>
                    <td class="main-item">中悅建設</td>
                    <td class="number">9.08</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">4.</th>
                    <td class="main-item">愛山林建設</td>
                    <td class="number">7.15</td>
                  </tr>
                  <tr>
                    <th scope="row" class="tag">5.</th>
                    <td class="main-item">國賓大建設</td>
                    <td class="number">6.62</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev brand-idea-prev" @click.stop>
          <img src="@/assets/img/other/prev.svg" />
        </div>
        <div class="swiper-button-next brand-idea-next" @click.stop>
          <img src="@/assets/img/other/next.svg" />
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import Nav from '@/components/nav/Nav.vue'
import '@/assets/scss/brand/brand-idea.scss'

const colorTag = ref('')

const gsapInit = () => {
  const tl = gsap.timeline({})

  tl.from('.brand-idea-content-yi', {
    y: '100%',
    opacity: 0,
    duration: 1.5,
  })
    .from(
      '.brand-idea-content-second-left',
      {
        y: '20%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
    .from(
      '.brand-idea-content-second-right',
      {
        y: '20%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.25',
    )
}

const handleTag = (swiper: SwiperType) => {
  if (swiper.realIndex === 2) {
    colorTag.value = 'black'
  } else {
    colorTag.value = 'white'
  }
}

const onSwiper = (swiper: SwiperType) => {
  handleTag(swiper)
}

const onSlideChange = (swiper: SwiperType) => {
  handleTag(swiper)
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
