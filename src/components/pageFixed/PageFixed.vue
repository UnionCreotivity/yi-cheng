<template>
  <main :id="props.title">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>

<style scoped></style>
