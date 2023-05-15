<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="section-logo">
    <img alt="todo logo" src="@/assets/logo.svg" />
    <h1 class="title">{{ props.title }}</h1>
  </div>
</template>

<style lang="postcss" scoped>
.section-logo {
  @apply flex items-center gap-3 mb-12;
}
.title {
  @apply text-xl md:text-3xl font-bold text-white;
}
</style>
