<template>
  <TransitionGroup name="fade-right-to-left-item">
    <slot></slot>
  </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.fade-right-to-left-item-enter-from,
.fade-right-to-left-item-leave-to {
  opacity: 0;
  transform: translateX(10vw);
}

.fade-right-to-left-item-enter-to,
.fade-right-to-left-item-leave-from {
  opacity: 1;
  transform: translateX(0vw);
}

.fade-right-to-left-item-enter-active,
.fade-right-to-left-item-leave-active {
  transition: all 0.5s;
}
.fade-right-to-left-item-leave-active {
  position: absolute;
}
</style>
