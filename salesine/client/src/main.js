import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "sweetalert2/dist/sweetalert2.min.css";
import store from "./store/auth";

/* import the fontawesome core */

/* import font awesome icon component */

/* import specific icons */

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
const app = createApp(App);

axios.defaults.baseURL = "http://localhost:3000"; 
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(store);

app.mount("#app");
