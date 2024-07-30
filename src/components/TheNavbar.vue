<template>
    

 
  <nav class="flex p-4">
    <ul class="flex gap-4 px-3">
        <li class=""
         v-for="link in navbar" :key="link.id" :to="link.link">
        <RouterLink :to="link.link">{{ link.label }}</RouterLink>
        </li>
    </ul>
  </nav>
  <TheSwiper/>
</template>

<script setup>
import { ref } from 'vue';
import TheSwiper from './TheSwiper.vue';

const navbar=ref([
    {id:1,link:"/",label:"HOME"},
    {id:2,link:"/about",label:"ABOUT"}
    ])
</script>

<style lang="scss">


</style>