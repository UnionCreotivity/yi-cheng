<template>
  <div class="flex-row">
    <div class="flex-left">
      <slot name="left" />
    </div>
    <div class="flex-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
