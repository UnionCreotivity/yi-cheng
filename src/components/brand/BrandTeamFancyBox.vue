<template>
  <section class="brand-team-inner" :class="props.fancyContent.tag" :style="z19">
    <BrandTeamFancyBg />
    <div class="brand-team-inner-main" v-if="props.fancyContent.tag !== 'brand-2'">
      <div class="brand-team-inner-people">
        <div class="brand-team-inner-people-main">
          <div class="brand-team-inner-people-deco">
            <img
              v-if="props.fancyContent.tag === 'brand-1'"
              src="/src/assets/img/brand/team/team-inner/team-inner-people-line-99@2x.webp"
              alt=""
            />
            <img
              v-else
              src="/src/assets/img/brand/team/team-inner/team-inner-people-line@2x.webp"
              alt=""
            />
          </div>
          <div class="brand-team-inner-people-avator">
            <img :src="props.fancyContent.people" alt="" />
          </div>
          <div class="brand-team-inner-people-sign">
            <img :src="props.fancyContent.sign" alt="" />
          </div>
        </div>
        <div class="brand-team-inner-people-land">
          <img src="/src/assets/img/brand/team/team-inner/team-inner-deco-2@2x.webp" alt="" />
        </div>
        <div class="brand-team-inner-people-line"></div>
      </div>
      <div class="brand-team-inner-para">
        <div class="brand-team-inner-summary">
          <h3>{{ props.fancyContent.title }}</h3>
          <p>{{ props.fancyContent.intro }}</p>
          <div class="brand-team-inner-line"></div>
        </div>
        <div class="brand-team-inner-exper">
          <h3>{{ props.fancyContent.exper }}</h3>
          <p>{{ props.fancyContent.experdetail }}</p>
          <div class="brand-team-inner-line"></div>
        </div>
        <div class="brand-team-inner-carousel">
          <h3>代表作品</h3>
          <Swiper
            :slides-per-view="3"
            :spaceBetween="25"
            :navigation="{
              nextEl: '.brand-team-next',
              prevEl: '.brand-team-prev',
            }"
            :modules="[Navigation]"
            class="brand-team-inner-swiper"
          >
            <swiper-slide
              v-for="item in props.fancyContent.items"
              :key="item.key"
              @click="showBigImg(item.bigImg, item.mention)"
            >
              <div class="brand-swiper-img"><img :src="item.img" alt="" /></div>
              <h5>{{ item.name }}</h5>
            </swiper-slide>
            <div class="brand-left-bg"></div>
            <div class="brand-right-bg"></div>
            <div class="swiper-button-prev brand-team-prev" @click.stop>
              <img src="/src/assets/img/other/prev-white.svg" alt="" />
            </div>
            <div class="swiper-button-next brand-team-next" @click.stop>
              <img src="/src/assets/img/other/next-white.svg" alt="" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="brand-team-inner-brand-2" v-else>
      <div class="brand-team-inner-brand-2-left">
        <h3>宜誠建設總經理 賴明皇</h3>
        <h5>以新世代的宏觀視野，承襲產業深厚底蘊，穩健前行</h5>
        <p>
          總經理與副總的卓越領導下，宜誠團隊秉持專業精神與創新思維，持續深化品牌價值，推動企業轉型升級。從建築工法的精細研磨到美學理念的匠心堅持，每一項決策皆承載對品質的極致追求，致力於締造更高標準的建築典範。
        </p>
        <p>
          憑藉年輕世代的獨到視角與前瞻格局，宜誠不僅專注於技術突破與設計精進，更致力於提升人居環境價值，為城市發展注入嶄新能量。未來，團隊將持續以穩健步伐深耕桃園與北台灣市場，矢志成為區域內高品質建築的標竿企業，引領業界邁向更卓越的里程碑。
        </p>
        <div class="brand-2-sign"><img :src="props.fancyContent.sign" alt="" /></div>
      </div>
      <div class="brand-team-inner-brand-2-right">
        <img :src="props.fancyContent.people" alt="" />
      </div>
    </div>
    <div class="brand-team-close" @click="handleFancy">
      <img src="/src/assets/img/other/close-trans.svg" alt="" />
    </div>

    <FadeIn>
      <div class="big-img-container" v-if="bigImgUrl">
        <div class="big-img-main">
          <img :src="bigImgUrl" alt="" />
          <p v-if="mentionRef">{{ mentionRef }}</p>
        </div>
        <div class="close-button" @click="showBigImg()">
          <img src="/src/assets/img/other/close-button.svg" alt="" />
        </div>
      </div>
    </FadeIn>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import FadeIn from '../transition/FadeIn.vue'
import BrandTeamFancyBg from './BrandTeamFancyBg.vue'
import '@/assets/scss/brand/brand-team-inner.scss'

const props = defineProps(['fancyContent'])

const emits = defineEmits(['handle-fancy'])

const bigImgUrl = ref<string | null>(null)

const mentionRef = ref<string | null>(null)

const handleFancy = () => {
  emits('handle-fancy')
}

const showBigImg = (url?: string, mention?: string) => {
  if (url) {
    bigImgUrl.value = url
  } else {
    bigImgUrl.value = null
  }

  if (mention) {
    mentionRef.value = mention
  } else {
    mentionRef.value = null
  }
}

const z19 = computed(() => {
  return bigImgUrl.value ? 'z-index:19' : ''
})

const gsapInit = () => {
  const tl = gsap.timeline()
  if (props.fancyContent.tag !== 'brand-2') {
    tl.from('.brand-team-inner-people-avator img', {
      x: '-10%',
      y: '10%',
      opacity: 0,
      duration: 1.5,
    })
      .from(
        '.brand-team-inner-people-sign img',
        {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1.5,
        },
        '<+0.25',
      )
      .from(
        '.brand-team-inner-summary > p,.brand-team-inner-exper > p,.brand-team-inner-carousel >.swiper',
        {
          opacity: 0,
          x: '5%',
          stagger: 0.2,
          duration: 1.5,
        },
        '<+0.25',
      )
  } else {
    tl.from('.brand-team-inner-brand-2-right img', {
      y: '5%',
      opacity: 0,
      duration: 1.5,
    }).from(
      '.brand-team-inner-brand-2-left',
      {
        y: '5%',
        opacity: 0,
        duration: 1.5,
      },
      '<+0.5',
    )
  }
}

onMounted(() => {
  gsapInit()
})
</script>

<style scoped></style>
