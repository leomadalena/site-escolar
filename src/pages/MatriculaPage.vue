<template>
  <CpMatricula :items="listaIpsum"/>
</template>
<script setup>
import { ref } from "vue";
import CpMatricula from "components/CpMatricula.vue";
defineOptions({
  name: "MatriculaPage",
});
const listaIpsum = ref([
  {txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {txt: 'Nulla efficitur augue eget dapibus blandit.'},
  {txt: 'Etiam tempus urna et enim dictum placerat.'},
  {txt: 'Maecenas dictum dolor id ligula faucibus ornare.'},
  {txt: 'Aliquam eu nulla tincidunt, tincidunt nulla at, vestibulum dui.'}
])
</script>
<style scoped></style>
