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
import { faStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGitlab, faGithub, faFacebookF, faTelegramPlane, faHtml5, faCss3, faSass, faJs, faWordpressSimple, faReact, faVuejs, faNodeJs, faNpm, faGulp, faYarn, faGit, faJira, faAdobe, faLinux } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar, faEnvelope, faPhone);
library.add(faLinkedin, faGitlab, faGithub, faFacebookF, faTelegramPlane, faHtml5, faCss3, faSass, faJs, faWordpressSimple, faReact, faVuejs, faNodeJs, faNpm, faGulp, faYarn, faGit, faJira, faAdobe, faLinux);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
}).$mount('#app');
