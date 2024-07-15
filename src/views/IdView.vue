<template>
<h1>{{ route.params.id }}</h1>
<div v-if="base">
<div v-for="i in items"  :key="i.id">
<p>{{ i.title }}</p>
<img :src="i.image" :alt="i.title">

</div>
</div>
<h1 v-else>...Load</h1>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue';
import { useRoute } from 'vue-router';
 const route = useRoute();
 const base=ref('')
onMounted(async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
  base.value=await res.json()
  })
  const items=computed(()=>{
  return   base.value.filter(f=>f.id==route.params.id)
  })
</script>

<style>

</style>