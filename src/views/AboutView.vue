<script setup>
import {useCounterStore} from '@/stores/counter.js'
const counter=useCounterStore()
</script>
<template>
  <div class="about">
    <h1>ABOUT VIEW{{ counter.count }}</h1>
  </div>
</template>

<style>

</style>
