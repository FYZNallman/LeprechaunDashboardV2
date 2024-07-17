import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@state/store'; // Assuming your store is in the 'store' directory
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import "@/assets/scss/app.scss";

// other imports

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");