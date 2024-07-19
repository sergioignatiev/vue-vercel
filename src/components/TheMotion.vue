
<template>
    <div
    class=""
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
  <slot/>
  </div>
  </template>
  
  
  <script  setup>
  
  </script>
  
  <style>
  
  </style>