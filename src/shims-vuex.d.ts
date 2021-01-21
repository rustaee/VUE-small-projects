import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
//import store from "./store";

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    hideMane: boolean
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}