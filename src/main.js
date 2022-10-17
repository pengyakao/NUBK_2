import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import {router} from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

// import "./assets/into.js"

import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import zh from "../locales/zh.json";
const i18n = createI18n({
  legacy: false,
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en
  }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
