<script setup lang="ts"></script>

<template>
  <label class="label">
    <slot />
  </label>
</template>

<style lang="postcss" scoped>
.label {
  @apply block text-sm text-white;
}
</style>
