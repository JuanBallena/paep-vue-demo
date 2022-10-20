import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

const app = createApp(App)

fetch("/config.json")
  .then((response) => {
    response.json().then((config: any) => {
       
        app.provide('$baseUrlApi', config.BASE_URL_API);
        app.provide('$itemsPerPageEncuestas', config.ITEMS_PER_PAGE_ENCUESTAS);
        app.provide('$itemsPerPageUsuarios', config.ITEMS_PER_PAGE_USUARIOS);
        app.provide('$itemsPerPageEncuestasCulminadas', config.ITEMS_PER_PAGE_ENCUESTAS_CULMINADAS);

        app.use(store);
        app.use(router);
        app.use(VueClipboard);
        app.mount('#app');

    })
});

