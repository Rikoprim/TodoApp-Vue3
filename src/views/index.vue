<script setup lang="ts">
import FormInput from '@/components/Organisms/OFormInput.vue'
import FormList from '@/components/Organisms/OFormList.vue'
</script>

<template>
  <main class="background">
    <FormList />
    <FormInput />
  </main>
</template>

<style lang="postcss">
.background {
  @apply bg-purple100 flex flex-col md:flex-row h-screen items-center;
}
</style>
