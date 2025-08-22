import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import TheWelcome from './components/TheWelcome.vue';
import { Theme } from '@primeuix/themes';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const app = createApp(App).mount('#app');
app.use(PrimeVue,{
    Theme: {
        present:Aura
    }
});

createApp(App).mount('#app')
