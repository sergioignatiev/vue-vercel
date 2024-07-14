<template>
  <button class="btn" :class="option" >
    <slot/>
  </button>
</template>

<script  setup>
defineProps(['option'])
</script>

<style scoped>
.btn{
    padding: 10px 20px;
    border:none;
    border-radius: 7px;
    color:white;
}
.danger{
    background-color: red;
  
}
.success{
background-color: green;
}
</style>