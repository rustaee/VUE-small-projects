import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//BaseUi Components
import BaseCard from "./components/ui/BaseCard.vue"

library.add(faBars)
createApp(App)
  .use(store)
  .use(router)
  .component('base-card' , BaseCard)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
