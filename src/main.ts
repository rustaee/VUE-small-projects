import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes, faHome, faUserAlt, faEnvelope, faSearch, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

//BaseUi Components
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"

library.add(faBars,faTimes, faHome, faUserAlt, faEnvelope, faSearch,faEnvelopeOpenText)
createApp(App)
  .use(store)
  .use(router)
  .component('base-card' , BaseCard)
  .component('base-button' , BaseButton)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
