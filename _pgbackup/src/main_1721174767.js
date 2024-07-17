import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './state/state';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import "@/assets/scss/app.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");