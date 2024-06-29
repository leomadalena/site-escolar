<template>

    <div class="col-6 col-md-6 col-sm-6 col-xs-6 q-pa-md" >
      <q-img :src="item.img"></q-img>
    </div>
    <div class="col-6 col-md-6 col-sm-6 col-xs-6 q-pa-md" >
      <h2>{{ item.titulo }}</h2>
      <p>{{ item.corpo }}</p>
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

.img {
  height: 1em;
  width: auto;
}
</style>
