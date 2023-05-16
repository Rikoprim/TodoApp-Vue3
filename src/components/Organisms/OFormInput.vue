<script setup lang="ts">
import { ref } from 'vue'
import Field from '@/components/Molecules/MField.vue'
import Input from '@/components/Atoms/AInput.vue'
import Textarea from '@/components/Atoms/ATextarea.vue'
import Logo from '@/components/Molecules/MLogo.vue'
import Submit from '@/components/Molecules/MSubmit.vue'
import Select from '@/components/Atoms/ASelect.vue'

import { categories } from '@/misc/constants/options'

import { useNoteStore } from '@/stores'

const dates = new Date().toISOString()

const todo = ref({
  id: 0,
  title: '',
  category: '',
  desc: '',
  status: false,
  date: dates
})

const { handleAdd } = useNoteStore()

const handeleSave = () => {
  handleAdd(todo.value)
  handelReset()
}

const handelReset = () => {
  todo.value = {
    id: 0,
    title: '',
    category: '',
    desc: '',
    status: false,
    date: dates
  }
}
</script>

<template>
  <div class="section-form">
    <div class="w-full h-100">
      <Logo title="Todo App" />
      <div class="mt-4">
        <Field label="Title Task">
          <Input
            class="px-4 py-3 rounded-lg border border-purple50 mt-2 focus:outline-none focus:ring focus:ring-purple50 focus:border-purple50 bg-white"
            type="text"
            v-model="todo.title"
            placeholder="Add task name.."
            :required="true"
            :autofocus="true"
          />
        </Field>
        <Field label="Categories">
          <Select
            class="block w-full mt-2 px-4 py-3 rounded-lg placeholder-purple100 border border-purple50 focus:outline-none focus:ring focus:ring-purple50 focus:border-purple50"
            v-model="todo.category"
            :options="categories"
          />
        </Field>
        <Field label="Description">
          <Textarea
            v-model="todo.desc"
            placeholder="Add description.."
            :required="true"
            :autofocus="true"
          />
        </Field>

        <Submit @submit="handeleSave" @reset="handelReset" :todos="todo" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.section-form {
  @apply w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center;
}
</style>
