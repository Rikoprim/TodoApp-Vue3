<script setup lang="ts">
import { computed } from 'vue'
import Chips from '@/components/Atoms/AChip.vue'
import Button from '@/components/Atoms/AButton.vue'

import { CheckIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['validation', 'delete'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  status: {
    type: Boolean,
    default: false
  }
})

const colorCategory = computed(() => {
  const color: Record<string, string> = {
    important: 'bg-primary',
    urgent: 'bg-error',
    approval: 'bg-success',
    please_initial: 'bg-warning',
    replay_asap: 'bg-info'
  }
  return color[props.value]
})

const valueCategory = computed(() => {
  const text: Record<string, string> = {
    important: 'Important',
    urgent: 'Urgent',
    approval: 'Approval',
    please_initial: 'Please Initial',
    replay_asap: 'Replay Asap'
  }
  return text[props.value]
})

const handelValidation = () => {
  emit('validation')
}

const handleDelete = () => {
  emit('delete')
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <Button
        class="custom-button"
        @click="handelValidation"
        :variant="status ? 'error' : 'success'"
      >
        <XMarkIcon v-if="status" class="h-6 w-6 text-white" />
        <CheckIcon v-else class="h-6 w-6 text-white" />
      </Button>
      <Button class="custom-button" @click="handleDelete" variant="error">
        <TrashIcon class="h-6 w-6 text-white" />
      </Button>
    </div>
    <Chips :value="valueCategory" :color="colorCategory" />
  </div>
</template>

<style lang="postcss" scoped>
.custom-button {
  @apply w-8 h-8 rounded-full inline-flex px-2;
}
</style>
