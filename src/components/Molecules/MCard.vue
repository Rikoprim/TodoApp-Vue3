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
    <p class="content">
      {{ props.content }}
    </p>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply max-w-xs bg-purple100 rounded-xl p-4 overflow-hidden hover:scale-105 transition duration-500;
}
.card-header {
  @apply flex items-center border-b border-purple50 pb-3;
}

.header-title {
  @apply text-white;
}

.content {
  @apply text-white text-sm leading-5 py-4 text-white;
}
</style>
