import './assets/fontsMains.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue'
import 'ant-design-vue/es/style'

import App from './App.vue'
import router from './router'
import i18n from './common/configuration/i18n.config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')
