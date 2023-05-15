<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
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
  <textarea
    class="textarea"
    v-model="vModel"
    rows="3"
    :autofocus="autofocus"
    :required="required"
  />
</template>

<style lang="postcss" scoped>
.textarea {
  @apply w-full px-4 py-3 rounded-lg text-purple100 placeholder-purple100 border border-purple50 mt-2 focus:outline-none focus:ring focus:ring-purple50 focus:border-purple50 bg-white;
}
</style>
