import { createApp } from 'vue'
import router from './router/router.js'
import './style.css'
import App from './App.vue'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const app = createApp(App)
app.use(hljsVuePlugin)
app.use(router)
app.mount('#app')
