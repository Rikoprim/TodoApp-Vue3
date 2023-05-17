<script setup lang="ts">
import Filter from '@/components/Molecules/MFilter.vue'
import Card from '@/components/Molecules/MCard.vue'
import Action from '@/components/Molecules/MAction.vue'
import Empty from '@/components/Molecules/MEmpty.vue'

import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNoteStore } from '@/stores'
import { type INotes } from '@/types'

const filter = ref<string>('')
const search = ref<string>('')

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

const searchData = (item: string): void => {
  setTimeout(() => {
    search.value = item
  }, 500)
}

const handleSearch = (items: INotes[]) => {
  const searchResults = computed(() => {
    const query = search.value.toLowerCase()
    if (!query) {
      return items
    }

    return items.filter((item) => item.title.toLowerCase().includes(query))
  })

  return {
    searchResults
  }
}

const filterItems = computed(() => {
  if (filter.value === 'done') {
    const dataFilters = data.value.filter((item) => item.status)
    if (search.value) {
      const result = handleSearch(dataFilters)
      return result.searchResults.value
    } else {
      return dataFilters
    }
  }
  if (filter.value === 'progress') {
    const dataFilters = data.value.filter((item) => !item.status)
    if (search.value) {
      const result = handleSearch(dataFilters)
      return result.searchResults.value
    } else {
      return dataFilters
    }
  }

  if (search.value) {
    const result = handleSearch(data.value)
    return result.searchResults.value
  } else {
    return data.value
  }
})
</script>

<template>
  <div class="section-list">
    <div class="bg-purple100 p-8 mt-10 rounded-xl">
      <Filter @select-filter="changeFilter" @search-data="searchData" />
    </div>
    <div v-if="filterItems.length > 0" class="section-card">
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
    <Empty v-else />
  </div>
</template>

<style lang="postcss" scoped>
.section-list {
  @apply w-full bg-purple50 hidden lg:block md:w-1/2 xl:w-2/3 h-screen p-10;
}
.section-card {
  @apply py-10 grid gap-5 w-full lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2;
}
</style>
