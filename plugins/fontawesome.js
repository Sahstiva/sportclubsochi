import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF, faVk, faInstagramSquare, faYoutube, faTelegram, faFacebookSquare,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = true;
library.add(
  faFacebookF, faVk, faInstagramSquare, faYoutube, faTelegram, faFacebookSquare,
  faPhoneVolume, faWhatsapp,
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
