<script setup lang="ts">
import Label from '@/components/Atoms/ALabel.vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="mb-6">
    <Label>{{ props.label }}</Label>
    <slot />
  </div>
</template>

<style lang="postcss"></style>
