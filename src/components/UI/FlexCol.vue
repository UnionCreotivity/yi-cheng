<template>
  <div class="flex-col">
    <div class="flex-top">
      <slot name="top" />
    </div>
    <div class="flex-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.flex-col {
  display: flex;
  flex-direction: column;
  .flex-top {
    width: 100%;
  }
  .flex-bottom {
    display: flex;
  }
}
</style>
