<script setup>
import TheNavbar from './components/TheNavbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<div class="flex overflow-hidden h-[100vh]">
  <TheNavbar>DUOLINGO</TheNavbar>
  <main class="overflow-auto w-[60vw] example">
  <RouterView/>
  </main>
<TheNavbar>LINGOMY</TheNavbar>
</div>
</template>

<style lang="scss">
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.main{
  padding:10px;
 min-height:100vh;
}
</style>
