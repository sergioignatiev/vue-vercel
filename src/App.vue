<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from '@/components/Button.vue'
</script>

<template>
  <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
