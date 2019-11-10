import Vue from 'vue';
import App from './App.vue';

// Custom scss
import './assets/scss/main.scss'

// PWA Script
import './registerServiceWorker';

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);
library.add(faFontAwesome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
}).$mount('#app');
