<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header>
    <nav class="text-center py-3 border-bottom border-primary">
      <RouterLink :to="{ name: 'exercise-1' }" :class="{ 'btn-primary': route.name === 'exercise-1', 'btn-secondary': route.name !== 'exercise-1' }" class="btn me-2">Exercise 1</RouterLink>
      <RouterLink :to="{ name: 'exercise-2' }" :class="{ 'btn-primary': route.name === 'exercise-2', 'btn-secondary': route.name !== 'exercise-2' }" class="btn">Exercise 2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>