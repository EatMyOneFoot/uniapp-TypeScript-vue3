import { createSSRApp } from "vue";
import App from "./App.vue";

// https://pinia.web3doc.top/
import { createPinia } from 'pinia';
//pinia 数据持久化插件 https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import uviewPlus from 'uview-plus';

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus)
  return {
    app,
  };
}
