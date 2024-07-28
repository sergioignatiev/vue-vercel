<template>
  <div>
    
<TheNavbar/>
   
    <main>
    <RouterView/>
    </main>
  </div>
</template>

<script  setup>
import TheNavbar from './components/TheNavbar.vue';
import { RouterView } from 'vue-router';
</script>

<style>
main{
  background-color: white;
  z-index: 10;
}
</style>