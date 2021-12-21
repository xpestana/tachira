require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

import 'swiper/swiper-bundle.css'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
//import VueYoutube from 'vue-youtube'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueMasonry from 'vue-masonry-css'

/*****Icons*****/
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
        faArrowUp, 
        faStreetView,
        faSearchLocation,
        faCommentsDollar,
        faHandsHelping,
        faPlay,
        } from '@fortawesome/free-solid-svg-icons'
    
import { 
        faFacebookF,
        faInstagram 
        } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/*****************/
library.add(
            faArrowUp, 
            faStreetView, 
            faFacebookF, 
            faInstagram, 
            faSearchLocation, 
            faCommentsDollar, 
            faHandsHelping,
            faPlay
        )

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(BootstrapVue3)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(VueScrollTo, {
                duration: 3000,
                easing: "ease"
            })
            .use(Scrollspy)
            
            .use(vueVimeoPlayer)
            .use(VueMasonry)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
