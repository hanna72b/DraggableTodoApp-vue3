import "./assets/main.css";
import VuePersianDatetimePicker from "vue3-persian-datetime-picker";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("DatePicker", VuePersianDatetimePicker);
app.mount("#app");
