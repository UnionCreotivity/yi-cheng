<template>
  <div class="major-view">
    <DevelopNav tag="major" :innerkey="tag" :main-color="colorTag" />
    <div class="major-view-container">
      <Swiper
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="25"
        :navigation="{
          nextEl: '.major-way-next',
          prevEl: '.major-way-prev',
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="[Navigation]"
        class="major-view-swiper-container"
      >
        <swiper-slide class="major-swiper-slide major-swiper-slide-1">
          <div class="major-swiper-slide-top">
            <img src="/src/assets/img/bustling/develop/major/major-1-big-img@2x.webp" alt="" />
            <div class="major-swiper-slide-top-constr">
              <img src="/src/assets/img/bustling/develop/major/major-constr@2x.webp" alt="" />
            </div>
          </div>
          <div class="major-swiper-slide-bottom">
            <h1>斥資七億打造，多元北區青少年活動中心</h1>
            <p>
              位於G01站旁佔地400坪的北區青少年活動中心，結合少年活動為主的「桃漾館」、兒童健康發展包含公托及親子館為主的「桃寶館」以及「非營利幼兒園」，規劃有書店、輕食咖啡、黑盒子劇場、練團室、樂理教室、鼓房、創客中心、電競專區、
              AR、MR、VR體感科技體驗區、半戶外練舞區等未來更結合展演中心。
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="major-swiper-slide major-swiper-slide-2">
          <div class="major-swiper-slide-top">
            <img src="/src/assets/img/bustling/develop/major/major-2-big-img@2x.webp" alt="" />
            <div class="major-swiper-slide-top-constr">
              <img src="/src/assets/img/bustling/develop/major/major-constr@2x.webp" alt="" />
            </div>
          </div>
          <div class="major-swiper-slide-bottom">
            <div class="major-swiper-slide-bottom-left">
              <h1>全方位醫療，佈局未來健康人生</h1>
              <p>
                佔地約4000坪八德長榮醫院園區，八德長榮醫院及中壢長榮醫院同屬長榮健康醫療聯盟，未來八德長榮醫院將結合醫學中心、區域醫院及基層診所，落實醫療分工及雙向轉診制度，以中級醫院提供桃園八德地區完整的醫療整合。、半戶外練舞區等未來更結合展演中心。
              </p>
            </div>
            <div class="major-swiper-slide-bottom-right">
              <div class="major-swiper-slide-bottom-right-1">
                <img src="/src/assets/img/bustling/develop/major/major-2-img-1@2x.webp" alt="" />
              </div>
              <div class="major-swiper-slide-bottom-right-2">
                <img src="/src/assets/img/bustling/develop/major/major-2-img-2@2x.webp" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="major-swiper-slide major-swiper-slide-2">
          <div class="major-swiper-slide-top">
            <img src="/src/assets/img/bustling/develop/major/major-2-big-img@2x.webp" alt="" />
            <div class="major-swiper-slide-top-constr">
              <img src="/src/assets/img/bustling/develop/major/major-constr@2x.webp" alt="" />
            </div>
          </div>
          <div class="major-swiper-slide-bottom">
            <div class="major-swiper-slide-bottom-left">
              <h1>桃園新醫療 樂活八德新里程</h1>
              <p>
                桃園市立醫院落腳八德霄裡公園，規劃為區域醫院，並朝準醫學中心發展，全面提升桃園醫療能量。占地4,000坪，預計提供499張急性病床與150張專科病床，設有24小時兒科急診與長照機構，完善醫療分級與雙向轉診制度，服務八德、中壢、大溪、復興等90萬市民，為健康生活打造堅實後盾。
              </p>
            </div>
            <div class="major-swiper-slide-bottom-right">
              <div class="major-swiper-slide-bottom-right-1">
                <img src="/src/assets/img/bustling/develop/major/major-2-img-1@2x.webp" alt="" />
              </div>
              <div class="major-swiper-slide-bottom-right-2">
                <img src="/src/assets/img/bustling/develop/major/major-2-img-2@2x.webp" alt="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="major-swiper-slide major-swiper-slide-1">
          <div class="major-swiper-slide-top">
            <img src="/src/assets/img/bustling/develop/major/major-3-big-img@2x.webp" alt="" />
            <div class="major-swiper-slide-top-constr">
              <img src="/src/assets/img/bustling/develop/major/major-constr@2x.webp" alt="" />
            </div>
          </div>
          <div class="major-swiper-slide-bottom">
            <h1>智慧健康創新園區，產學合作卡位未來醫療趨勢</h1>
            <p>
              佔地約2.6公頃的智慧健康園區，由中央大學以BOT方式進行開發，園區內將包含智慧健康科技園區、新創基地與國際人才培育中心。專注預防及精準醫學為核心，朝向生醫更結合婦幼與生殖醫療的新趨勢。
            </p>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev major-way-prev" @click.stop>
          <img src="@/assets/img/other/prev.svg" />
        </div>
        <div class="swiper-button-next major-way-next" @click.stop>
          <img src="@/assets/img/other/next.svg" />
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import DevelopNav from '@/components/nav/DevelopNav.vue'
import '@/assets/scss/bustling/major.scss'

const tag = ref('major')

const colorTag = ref('')

const handleTag = (swiper: SwiperType) => {
  if (swiper.realIndex === 0 || swiper.realIndex === 3) {
    colorTag.value = 'white'
  } else {
    colorTag.value = 'black'
  }
}

const onSwiper = (swiper: SwiperType) => {
  handleTag(swiper)
}

const onSlideChange = (swiper: SwiperType) => {
  handleTag(swiper)
}
</script>

<style scoped></style>
