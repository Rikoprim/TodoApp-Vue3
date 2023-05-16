<script setup lang="ts"></script>

<template>
  <div class="section-empty">
    <img src="@/assets/image/empty.png" alt="data-empty" />
  </div>
  <div class="section-title">No results found</div>
</template>

<style lang="postcss" scoped>
.section-empty {
  @apply flex mt-4 justify-center items-center;

  img {
    @apply w-5/12;
  }
}
.section-title {
  @apply text-center text-2xl font-bold text-white;
}
</style>
