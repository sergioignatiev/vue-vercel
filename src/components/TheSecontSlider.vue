<template>
   
    <swiper
    
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :effect="{fade:true}"
   :loop=true
    @slideChange="onSlideChange"
      class="swiper w-[300px] h-[300px] rounded-lg  m-4 "
    >
   <swiper-slide class="text-center bg-slate-50" v-for="x in swiped" :key="x.id">
    <img class=" w-full" :src="x.image" :alt="x.title">

   </swiper-slide>
  
    </swiper>

    
  </template>
  <style >
    .swiper-button-next,
          .swiper-button-prev {
            color:black;
          }
          .swiper-pagination-bullet{
          
          background-color: white;
         

          }
 
  
  </style>
<script setup>

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,EffectFade } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
defineProps(['swiped'])

const modules = [ Navigation, Pagination, Scrollbar, A11y,EffectFade ];


</script>