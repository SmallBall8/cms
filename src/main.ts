import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

//0.针对ElMessage和ElLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

//1.全局注册
//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'

//2.按需引入，要用到哪个就引入哪个
//import { ElButton } from 'element-plus'

//createApp(App).use(router).mount('#app')

const app = createApp(App)

//或者下面这样写
app.use(registerIcons)
app.use(router)
app.use(pinia)
//app.use(ElementPlus) //相当于全局注册，这样任何组件都可以使用
//app.component(ElButton.name, ElButton)
app.mount('#app')
