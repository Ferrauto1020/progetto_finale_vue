import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ruoter from './router'
const app = createApp(App)
app.use(ruoter)

app.mount('#app')
