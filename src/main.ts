import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes, faHome, faUserAlt, faEnvelope, faSearch, faEnvelopeOpenText, faSpinner } from '@fortawesome/free-solid-svg-icons'

//BaseUi Components
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"
import Loading from "./components/ui/Loading.vue"

//Layouts
import IntroTemplate from "./components/layout/IntroTemplate.vue"
import EffectTemplate from "./components/layout/EffectTemplate.vue"
import GameTemplate from "./components/layout/GameTemplate.vue"
import Default from "./components/layout/DefaultTemplate.vue"

library.add(faBars,faTimes, faHome, faUserAlt, faEnvelope, faSearch,faEnvelopeOpenText, faSpinner)
createApp(App)
  .use(store)
  .use(router)
  .component('base-card' , BaseCard)
  .component('base-button' , BaseButton)
  .component('base-loading', Loading)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('intro-template', IntroTemplate)
  .component('game-template', GameTemplate)
  .component('effect-template', EffectTemplate)
  .component('default-template', Default)
  .mount("#app");
