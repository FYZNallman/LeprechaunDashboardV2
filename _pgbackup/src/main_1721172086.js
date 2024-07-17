import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue-next';
import VueApexCharts from 'vue3-apexcharts';
import VueSweetalert2 from 'vue-sweetalert2';
import * as VueGoogleMaps from 'vue3-google-map';
import VueYoutube from 'vue3-youtube';
import Vue3Toastify from 'vue3-toastify';
import { vMaska } from "maska";
import vco from "v-click-outside";

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import "@/assets/scss/app.scss";

const app = createApp(App);
app.use(BootstrapVue);
app.use(vco);
app.use(VueSweetalert2);
app.use(VueGoogleMaps);
app.use(VueApexCharts);
app.use(VueYoutube);
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.directive("maska", vMaska);
app.mount("#app");
