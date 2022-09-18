/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import App from "./App.vue";
import home from "../src/views/HomeView.vue";
import about from "../src/views/AboutView.vue";
import router from "./router";

createApp(App).use(router).mount("#app").mount("home").mount("about");
