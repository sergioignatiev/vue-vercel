<template>
  <TheMotion>
  <div class="circle">
   <div class="logo">
    <slot/>
  </div> 
  </div>
</TheMotion>
</template>

<script  setup>
import TheMotion from './TheMotion.vue';
</script>

<style>
.circle{
  width:100px;
  height:100px;
  border-radius: 100%;
display:flex;
align-items: center;
justify-content: center;
background-color: green;
border:4px solid white;
outline:7px solid green;
margin:20px;
overflow: hidden;
transition: all 0.1s;
}
 .circle:hover{
  transform:translateY(-5px)
  
}
.logo {

color:white;
}
</style>