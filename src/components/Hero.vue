<script lang="ts">
import { inject } from 'vue';

const isDarkMode = inject('isDarkMode');
export default {
  mounted() {
    const typedElement = this.$refs.typed as HTMLElement;
    const typedItems = typedElement.getAttribute('data-typed-items')!.split(',');
    let currentItem = 0;
    let currentText = '';
    let letter = 0;

    const type = () => {
      if (currentItem === typedItems.length) {
        currentItem = 0;
      }
      currentText = typedItems[currentItem];
      if (letter < currentText.length) {
        typedElement.textContent += currentText.charAt(letter);
        letter++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (letter > 0) {
        typedElement.textContent = currentText.substring(0, letter - 1);
        letter--;
        setTimeout(erase, 100);
      } else {
        currentItem++;
        type();
      }
    };

    type()
  },
  data() {
    return {
      isDarkMode
    }
  }

}
</script>
<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center" :class="{ 'dark-mode': isDarkMode }">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Marc Kevin Salagubang</h1>
      <p>I'm <span class="typed" ref="typed" data-typed-items="Developer, Freelancer"></span></p>
      <div class="social-links">
        <a href="//twitter.com/Kevin_Beetle" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="//facebook.com/kevinbeetle" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="//www.linkedin.com/in/marckevinsalagubang" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->
</template>


<style scoped>
.dark-mode #hero h1 {
  color: #fff;
}
.dark-mode #hero p {
  color: #fff;
}
</style>