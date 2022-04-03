import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import elementPlus from 'element-plus'
import './index.css'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/base.css'
import './assets/public.scss'

let app = createApp(App)
app.use(router)
app.use(store)
app.use(elementPlus)

router.isReady().then(() => {
    app.mount('#app')
})
