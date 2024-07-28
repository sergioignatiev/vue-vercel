<template>
    

 
  <nav class="nav">
    <ul class="nav-ul">
        <li class="nav-li"
         v-for="link in navbar" :key="link.id" :to="link.link">
        <RouterLink :to="link.link">{{ link.label }}</RouterLink>
        </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';


const navbar=ref([
    {id:1,link:"/",label:"HOME"},
    {id:2,link:"/about",label:"ABOUT"}
    ])
</script>

<style lang="scss">

.nav-image-title{
    position:absolute;
    
}
.nav {
    
    padding:2px 20px ;
   
   position: sticky;
   top:0;
  width:100%;
}

.nav-ul {
    display:flex;
    gap: 10px;

}
.nav-li {
   
}
</style>