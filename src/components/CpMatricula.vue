<template>
  <div>
    <h1>Teste</h1>
    <q-btn @click="digaOla">Diga Olá!</q-btn>
    <ul>
      <li v-for="ipsum in teste" :key="ipsum">
        {{ ipsum.txt }}
      </li>
    </ul>
    <a href="assets/exemplo.jpg" download>Download do PDF</a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineOptions({
  name: "CpMatricula",
});
const props = defineProps({
  teste: {
    type: Array,
    required: true,
  },
});

function digaOla() {
  alert("Olá!");
}
</script>

<style scoped></style>
