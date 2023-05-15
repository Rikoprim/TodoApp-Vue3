import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type INotes } from '@/types'

export const useNoteStore = defineStore('todos', () => {
  const data = ref<INotes[]>([])

  const handleAdd = (payload: INotes) => {
    payload.id = data.value.length + 1
    data.value.push(payload)
  }

  const handleValidation = (id: number) => {
    const index = data.value.findIndex((item) => item.id === id)
    data.value[index].status = !data.value[index].status
  }

  const handleDelete = (id: number) => {
    const index = data.value.findIndex((item) => item.id === id)
    data.value.splice(index, 1)
  }

  return { data, handleAdd, handleValidation, handleDelete }
})
