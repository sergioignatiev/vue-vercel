<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const base=ref('')
onMounted(async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
  base.value=await res.json()
  })
</script>

<template>
  <main>
<h1 v-show="base">HOME SCRIPT !</h1>
<div v-if="base">
<p  v-for="p in base" :key="p.id">
  <RouterLink :to="`/${p.id}`">{{ p.id }}</RouterLink>
</p>
</div>
<h1 v-else>...LOADING</h1>
  </main>
</template>
