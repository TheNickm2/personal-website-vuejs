import Vue from 'vue';
import App from './App.vue';

// PWA Script
import './registerServiceWorker';

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Base CSS
import './assets/scss/_variables.scss';
import './assets/scss/_shared.scss';

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faEnvelope, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGitlab, faGithub, faFacebookF, faTelegramPlane, faHtml5, faCss3, faSass, faJs, faWordpressSimple, faReact, faVuejs, faNodeJs, faNpm, faGulp, faYarn, faGit, faJira, faAdobe, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar, faEnvelope, faPhone, faAddressCard);
library.add(faLinkedinIn, faGitlab, faGithub, faFacebookF, faTelegramPlane, faHtml5, faCss3, faSass, faJs, faWordpressSimple, faReact, faVuejs, faNodeJs, faNpm, faGulp, faYarn, faGit, faJira, faAdobe, faLinux, faPython);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
}).$mount('#app');
