<script setup lang="ts">
import { type PropType, computed } from 'vue'
import Button from '@/components/Atoms/AButton.vue'

import { type INotes } from '@/types'

const emit = defineEmits(['submit', 'reset'])

const props = defineProps({
  todos: {
    type: Object as PropType<INotes>,
    required: true
  }
})

const handelSubmit = () => {
  emit('submit')
}

const hanldeReset = () => {
  emit('reset')
}

const valueEmpty = computed(() => {
  const data = props.todos
  if (data.title && data.category && data.desc) {
    return false
  }
  return true
})
</script>

<template>
  <div class="flex justify-center gap-5 w-full">
    <Button class="custom-button" @click="handelSubmit" :disabled="valueEmpty" variant="primary"
      >Save</Button
    >
    <Button class="custom-button" @click="hanldeReset" variant="warning">Cancel</Button>
  </div>
</template>

<style lang="postcss" scoped>
.custom-button {
  @apply w-full px-3 py-4 rounded-md;
}
</style>
