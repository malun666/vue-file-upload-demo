import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import messages from "./assets/lang/db.json";

console.log(messages);
Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "cn", // 设置语言 
  messages: {
    cn: {
      name: "你好",
      msg: {
        h: "单独"
      }
    },
    en: {
      name: "hi",
      msg: {
        h: "hillo"
      }
    }
  } // 语言包
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
