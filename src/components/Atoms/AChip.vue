<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="chip" :class="[props.color]">
    {{ props.value }}
  </div>
</template>

<style lang="postcss">
.chip {
  @apply inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white hover:brightness-90;

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
}
</style>
