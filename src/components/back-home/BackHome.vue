<template>
  <div class="back-home" @click.stop="handleClick">
    <img src="../../assets/img/other/home.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const handleClick = () => {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped>
.back-home {
  position: absolute;
  right: 2%;
  bottom: 5%;
  width: 3vw;
  height: 3vw;
  cursor: pointer;
  img {
    height: 100%;
  }
}
</style>
