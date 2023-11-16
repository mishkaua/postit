import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.use(router)

app.mount('#app')
