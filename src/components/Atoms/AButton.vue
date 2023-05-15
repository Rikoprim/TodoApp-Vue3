<script setup lang="ts">
import { type PropType, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'success' | 'error' | 'warning'>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const buttonClass = computed(() => {
  let className = `${props.variant} `

  return className
})
</script>

<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
button {
  @apply flex items-center justify-center font-semibold text-white focus:brightness-90 focus:outline-none cursor-pointer;

  &.primary {
    @apply bg-primary;
  }
  &.success {
    @apply bg-success;
  }
  &.error {
    @apply bg-error;
  }
  &.warning {
    @apply bg-warning;
  }

  &:disabled {
    @apply bg-disabled;
  }
}
</style>
