import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLeftLong,
  faPenToSquare,
  faRightLong,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

createApp(App).use(router).use(toast).mount("#app");

library.add(faPenToSquare);
library.add(faLeftLong);
library.add(faRightLong);
library.add(faTrash);
