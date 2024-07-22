<template>
  <div>
    {{ api.name }}
  </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue';
const api=ref('')
onMounted(async()=>{
  const res=await fetch('https://travel-dummy-api.netlify.app/brazil.json')
  api.value=await res.json()
})

</script>

<style>

</style>