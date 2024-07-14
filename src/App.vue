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
<main class="main">
  <RouterView />
  </main>
</template>

<style lang="scss">
.main{
  padding:10px;
  h1{
    color:red;
  }
}
</style>
