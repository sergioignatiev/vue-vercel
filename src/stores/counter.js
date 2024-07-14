import { ref, computed,onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const base=ref(null)
  onMounted(async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
  base.value=await res.json()
  })
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment,base }
})
