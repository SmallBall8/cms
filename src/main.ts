import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'

//createApp(App).use(router).mount('#app')
//或者下面这样写
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
