<template>
    {{useCounterStore().count}}
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
      class="swiper w-[90vw] h-[70vh] rounded-lg bg-pink-900 m-4 "
    >
    <swiper-slide v-for="m in mainImage" :key="m.id">
       
<img class='h-[100%] w-[100%]' :src="m.image" alt="ALT">

<h1 class="text-red-700 text-[30px] z-10">THE DESCRIPTION</h1>
    </swiper-slide>
  
    </swiper>

    
  </template>
  <style >
    .swiper-button-next,
          .swiper-button-prev {
            color:white;
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
import { useCounterStore } from '@/stores/counter';

const modules = [ Navigation, Pagination, Scrollbar, A11y,EffectFade ];
const mainImage=useCounterStore().mainImage






    
  
</script>