import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import AnimateOnScroll from 'primevue/animateonscroll';



import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)



app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app')
