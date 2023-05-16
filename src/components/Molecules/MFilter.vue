<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Atoms/AButton.vue'
import Select from '@/components/Atoms/ASelect.vue'
import Input from '@/components/Atoms/AInput.vue'

import { filters } from '@/misc/constants/options'

import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['selectFilter', 'searchData'])

const filter = ref<string>('all')
const search = ref<string>('')
</script>

<template>
  <div class="filter">
    <Button class="outline-none focus:outline-none">
      <MagnifyingGlassIcon class="h-6 w-6 text-purple100" />
    </Button>
    <Input
      class="custom-input text-md"
      type="text"
      placeholder="Find your task"
      @input="() => emit('searchData', search)"
      v-model="search"
      :autofocus="true"
    />
    <div class="select">
      <Select
        :options="filters"
        @change="() => emit('selectFilter', filter)"
        v-model="filter"
        class="text-sm px-1 font-semibold"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.filter {
  @apply bg-white rounded flex items-center w-full p-3 border border-gray-200;
}
.custom-input {
  @apply pl-4 outline-none focus:outline-none bg-transparent;
}
</style>
