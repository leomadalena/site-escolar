<template>
  <q-page padding class="d-flex justify-center align-center" style="min-height: auto;">
    <q-carousel
      v-model="slideIndex"
      thumbnails
      swipeable
      animated
      infinite
      control-color="white"
      control-size="50px"
      :style="{ 'max-width': '800px', 'width': '80%', 'border-radius': '10px', 'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)' }"
    >
      <q-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :name="index"
        :img-src="slide.imgSrc"
        :caption="slide.caption"
      >
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const slideIndex = ref(0);
const slides = [
  { imgSrc: 'assets/teste2.png', caption: 'img' },
  { imgSrc: 'assets/banner2.jpg', caption: 'img' },
  { imgSrc: 'assets/banner3.jpg', caption: 'img' },
  { imgSrc: 'assets/banner4.jpg', caption: 'img' }
];
</script>

<style scoped>
/* Estilo para centralizar a página */
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}
</style>
