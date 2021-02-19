import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes, faHome, faUserAlt, faEnvelope, faSearch, faEnvelopeOpenText, faSpinner, faImages, faFan, faScroll, faLaughSquint } from '@fortawesome/free-solid-svg-icons'

//BaseUi Components
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"
import Loading from "./components/ui/Loading.vue"
import BasePageDescription from "./components/ui/BasePageDescription.vue"
import BaseGameBox from "@/components/ui/BaseGameBox.vue"

//Layouts
import EffectLayout from "./components/layout/EffectLayout.vue"
import GameLayout from "./components/layout/GameLayout.vue"
import Default from "./components/layout/DefaultLayout.vue"

library.add(faBars,faTimes, faHome, faUserAlt, faEnvelope, faSearch,faEnvelopeOpenText, faSpinner, faImages, faFan, faScroll,faLaughSquint)
createApp(App)
  .use(store)
  .use(router)
  .component('base-card' , BaseCard)
  .component('base-button' , BaseButton)
  .component('base-loading', Loading)
  .component('base-page-description', BasePageDescription)
  .component('game-base-box' , BaseGameBox)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('game-layout', GameLayout)
  .component('effect-layout', EffectLayout)
  .component('default-layout', Default)
  .mount("#app");
