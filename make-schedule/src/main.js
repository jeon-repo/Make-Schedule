import { createApp } from 'vue'
import { router } from './router'
// import { createMetaManager } from 'vue-meta'
import App from './App.vue'


const app = createApp(App);
app.use(router);
// app.use(createMetaManager());
app.mount('#app');