import "./assets/css/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faCheckToSlot,
  faLeftLong,
  faPenToSquare,
  faRightLong,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

createApp(App).use(router).use(toast).use(createPinia()).mount("#app");

library.add(faPenToSquare);
library.add(faLeftLong);
library.add(faRightLong);
library.add(faTrash);
library.add(faCheckToSlot);
library.add(faCheck);
