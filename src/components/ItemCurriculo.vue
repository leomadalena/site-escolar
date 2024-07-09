<template>
  <div
    v-for="(it, index) in item"
    :key="index"
    :class="[
      'row',
      'q-pa-md',
      { separador: index % 2 === 0, 'bg-white': index % 2 !== 0 },
    ]"
  >
    <div
      v-if="index % 2 === 0"
      class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md"
      align="middle"
    >
      <q-img :src="it.img" class="image rounded-image" />
    </div>
    <div class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md" align="left">
      <h2>{{ it.titulo }}</h2>
      <p>{{ it.corpo }}</p>
    </div>
    <div
      v-if="index % 2 !== 0"
      class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md"
      align="middle"
    >
      <q-img :src="it.img" class="image rounded-image" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemCurriculo",
  props: {
    item: Object,
  },
};
</script>
<style>
h2 {
  color: var(--q-secondary);
  margin-top: 40px;
  margin-bottom: 15px;
  text-decoration: underline;
}

.image {
  object-fit: cover;
  height: 100%;
  max-width: 400px;
}
.rounded-image {
  border-radius: 7px;
}
</style>
