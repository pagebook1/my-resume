import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import './style.css'
import App from './App.vue'
import Hero from './components/Hero.vue'
import AboutVue from './components/About.vue'
import ResumeVue from './components/Resume.vue'
import HeaderVue from './components/Header.vue'
import ContactVue from './components/Contact.vue'
import FooterVue from './components/Footer.vue'
import PortfolioVue from './components/Portfolio.vue'
import './assets/vendor/purecounter/purecounter.js';
import 'bootstrap'
import '../node_modules/glightbox/dist/js/glightbox.min.js';
import './assets/vendor/swiper/swiper-bundle.min.js';
import './assets/vendor/waypoints/noframework.waypoints.js';
// Import main.js
import './assets/js/main.js';


const routes = [
    { path: '/', components: { default: Hero, header: HeaderVue, about: AboutVue, portfolio: PortfolioVue, resume: ResumeVue, contact: ContactVue, footer: FooterVue } },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})



createApp(App).use(router).mount('#app')

