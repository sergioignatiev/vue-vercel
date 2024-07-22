<template>

<div class="navbar w-[20vw] p-6 border-r-2 h-screen  static top-0 example overflow-auto">
<h1 class="logo"><slot/></h1>

<nav class="flex flex-col">
 
 <TheLink 
 link=""
 icon="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg"
 >HOME</TheLink>
  
  
<TheLink
link="leaderboard"
icon="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg"
>LEADERBOARD
</TheLink>
</nav>


    </div>

</template>

<script  setup>
import TheLink from './TheLink.vue';

</script>

<style lang="scss" scoped>


.logo{
    color:rgb(69, 236, 69);
   
    font-size: 30px;
    font-family: "Feather Bold";
    text-transform: lowercase
}


</style>