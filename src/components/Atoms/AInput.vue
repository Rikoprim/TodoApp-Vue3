<script setup lang="ts">
import { type PropType, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'text' | 'email' | 'password' | 'number'>,
    default: 'text'
  },
  placeholder: {
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
  <input
    v-model="vModel"
    :type="props.type"
    :placeholder="props.placeholder"
    class="input"
    :autofocus="props.autofocus"
    :required="props.required"
  />
</template>

<style lang="postcss" scoped>
.input {
  @apply w-full placeholder-purple100 text-purple100;
}
</style>
