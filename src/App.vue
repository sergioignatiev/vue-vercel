<template>
  <div>
    
<TheNavbar/>
   <TheMainSwiper/>
    <main>
    <RouterView/>
    </main>
  </div>
</template>

<script  setup>
import TheMainSwiper from './components/TheMainSwiper.vue';
import TheNavbar from './components/TheNavbar.vue';
import { RouterView } from 'vue-router';
</script>

<style>
main{
  background-color: white;
  z-index: 10;
}
</style>