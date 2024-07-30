<template>
    <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
   :loop=true
    @slideChange="onSlideChange"
      class="swiper w-[90vw] h-[70vh] rounded-lg bg-pink-900 m-4"
    >
    <swiper-slide v-for="m in mainImage" :key="m.id">
<img :src="m.image" alt="ALT">

    </swiper-slide>
  
    </swiper>
  </template>
  <style >
    .swiper-button-next,
          .swiper-button-prev {
            color:white;
          }
          .swiper-pagination-bullet{
          background-color: wheat;

          }
 
  
  </style>
<script setup>
import { ref } from 'vue';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useCounterStore } from '@/stores/counter';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const modules = [ Navigation, Pagination, Scrollbar, A11y ];
const mainImage=ref([
    {id:1,
        image:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg"
    },
    {id:2,
        image:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg"
    },
    {id:3,
        image:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg"
    },
    {id:4,
        image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg"
    },
    {id:5,
        image:"https://upload.wikimedia.org/wikipedia/commons/7/77/Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"
    }])






    
  
</script>