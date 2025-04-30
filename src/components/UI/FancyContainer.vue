<template>
  <section class="fancy-container">
    <slot />
    <!-- <div class="back-button"><img src="@/assets/img/other/close-button.svg" alt="" /></div> -->
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.fancy-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
}
</style>
