import App from '@/App.vue';
import router from '@/router';
import { createApp } from 'vue';

const app = createApp(App).use(router);

// PrimeVue setup
// import MyPreset from '@/assets/styles/util/primevue';
// import PrimeVue from 'primevue/config';

// app.use(PrimeVue, {
// 	theme: {
// 		preset: MyPreset,
// 	},
// });

app.mount('#app');
