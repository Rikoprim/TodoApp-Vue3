<script setup lang="ts">
import Filter from '@/components/Molecules/MFilter.vue'
import Card from '@/components/Molecules/MCard.vue'
import Action from '@/components/Molecules/MAction.vue'

import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNoteStore } from '@/stores'

const filter = ref<string>('')

const { data } = storeToRefs(useNoteStore())
const { handleValidation, handleDelete } = useNoteStore()

const changeDate = (str: string): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2)
  return `${days[date.getDay()]}, ${[day, mnth, date.getFullYear()].join('-')}`
}

const validationCard = (id: number) => {
  handleValidation(id)
}

const deleteCard = (id: number) => {
  if (window.confirm('Are you sure you want to delete the data?')) {
    handleDelete(id)
  }
}

const changeFilter = (item: string): void => {
  filter.value = item
}

const filterItems = computed(() => {
  if (filter.value === 'read') {
    return data.value.filter((item) => item.status)
  }
  if (filter.value === 'unread') {
    return data.value.filter((item) => !item.status)
  }

  return data.value
})
</script>

<template>
  <div class="section-list">
    <div class="bg-purple100 p-8 mt-10 rounded-xl">
      <Filter @select-filter="changeFilter" />
    </div>

    <div class="section-card">
      <Card
        v-for="(item, i) in filterItems"
        :key="i"
        :title="item.title"
        :subtitle="changeDate(item.date)"
        :status="item.status"
        :content="item.desc"
      >
        <Action
          :value="item.category"
          :status="item.status"
          @validation="validationCard(item.id)"
          @delete="deleteCard(item.id)"
        />
      </Card>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.section-list {
  @apply bg-purple50 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen p-10;
}
.section-card {
  @apply py-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2;
}
</style>
