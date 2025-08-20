import "@/assets/css/main.css";
import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import toast from "vue-toastification";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faCheck,
  faCheckToSlot,
  faLeftLong,
  faPaw,
  faPenToSquare,
  faRightLong,
  faScroll,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

createApp(App).use(router).use(toast).use(createPinia()).mount("#app");

library.add(faPenToSquare);
library.add(faLeftLong);
library.add(faRightLong);
library.add(faTrash);
library.add(faCheckToSlot);
library.add(faCheck);
library.add(faPaw);
library.add(faBook);
library.add(faScroll);
library.add(faSearch);
