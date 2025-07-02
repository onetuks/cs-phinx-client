import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckToSlot,
  faLeftLong,
  faPenToSquare,
  faRightLong,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

createApp(App).use(router).use(toast).mount("#app");

library
  .add(faPenToSquare)
  .add(faLeftLong)
  .add(faRightLong)
  .add(faTrash)
  .add(faCheckToSlot);
