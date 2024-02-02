<template>
  <router-view name="header" />
  <transition-group name="slide" mode="out-in">
    <router-view name="default" />
    <router-view name="about" />
    <router-view name="resume" />
    <router-view name="portfolio" />
    <router-view name="contact" />
  </transition-group>
  <router-view name="footer" />
</template>

<script lang="ts">

import AOS from 'aos';
import '../node_modules/glightbox/dist/js/glightbox.min.js';



export default {

  mounted() {
    AOS.init();
  }
}
</script >

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
