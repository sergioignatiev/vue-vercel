<script setup>
import { ref,onMounted } from 'vue';
import {useCounterStore} from '@/stores/counter.js'
const counter=useCounterStore()
const base=counter.base
</script>

<template>
  <main>
<h1 v-show="base">HOME SCRIPT !</h1>
<p v-if="base" v-for="p in base" :key="p.id">! {{ p.title }}</p>
<h1 v-else>...LOADING</h1>
  </main>
</template>
