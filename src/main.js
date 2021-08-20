import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTint);
library.add(faThermometer);
library.add(faWind);
library.add(faWaveSquare);
library.add(faSearchLocation);
library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
