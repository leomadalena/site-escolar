<template>

    <div class="col-3 col-md-3 col-sm-6 col-xs-12 q-pa-md">
      <q-img :src="item.imagem" class="col-image around" />
      <h5 class="text-primary" >{{ item.titulo }}</h5>
      <p>
        {{ item.corpo }}
      </p>
    </div>

</template>
<script>
export default {
  name: "ItemIndex",
  props: {
    item: Object,
  },
};
</script>
<style scoped>
h5 {
  margin: 0;
}
p {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
div {
  padding-top: 50px;

}

.around {
  border-radius: 10px;
}
</style>
