<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { type Options } from '@/types'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array as PropType<Options[]>,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const vModel = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <select v-model="vModel" class="select">
    <option value="" data-default hidden>Choose condition</option>
    <option v-for="(option, i) in options" :key="`option ${i}`" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style lang="postcss" scoped>
.select {
  @apply text-purple100 focus:outline-none outline-none bg-white;
}
</style>
