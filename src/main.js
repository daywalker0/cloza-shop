import { createApp } from 'vue'
import router from './router/index'
import 'reset-css'
import './styles/index.scss'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import './styles/index.scss'

import App from './App.vue'
import store from './store'

createApp(App)
.use(Quasar, { plugins: {} })
.use(router)
.use(store)
.mount('#app')
