import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification";

createApp(App).use(router).use(toast).mount("#app");
