<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  status: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card" :class="{ 'border border-primary': status }">
    <div class="card-header">
      <div class="flex items-start justify-between w-full">
        <div class="w-full">
          <p class="header-title text-lg font-bold leading-5" :class="{ 'line-through': status }">
            {{ props.title }}
          </p>
          <p class="header-title text-xs leading-normal pt-2">{{ props.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="content">
      {{ props.content }}
    </div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply bg-purple100 rounded-xl p-4 hover:scale-105 transition duration-500;
}
.card-header {
  @apply flex items-center border-b border-purple50 pb-3;
}
.content {
  @apply overflow-y-auto text-white text-sm leading-5 py-4;
}
.header-title {
  @apply text-white;
}
</style>
