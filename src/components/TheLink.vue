<template>
   <RouterLink class="flex items-center pt-2" :to="`/${link}`">
    <img class="w-[40px]"  :src="icon" alt="icon">
<h2 class="ml-4"><slot/></h2>
</RouterLink>
</template>

<script  setup>
defineProps(['icon','link'])
</script>

<style>

</style>