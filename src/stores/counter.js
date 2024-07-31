import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
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




  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // eslint-disable-next-line no-undef
  return { count, doubleCount, increment,mainImage }
})
