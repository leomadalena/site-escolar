<template>
  <q-page padding>
    <div class="q-pa-md index-school">
      <h1 >Conheça nossos programas</h1>
      <p><strong>
        Na EMEF Salomão Watnick, buscamos promover o crescimento integral de
        cada aluno, oferecendo suporte próximo e acompanhamento personalizado ao
        longo de toda a sua trajetória educacional.
      </strong></p>

      <div class="row separador">
        <ItemIndex v-for="it in dados" v-bind:key="it" :item="it" />
      </div>
    </div>
  </q-page>
</template>
<script>
import ItemIndex from "./ItemIndex.vue";
export default {
  name: "NossosProgramas",
  components: { ItemIndex },
  data() {
    return {
      dados: [
        {
          imagem: "assets/edu-infantil.jpg",
          titulo: "Educação Infantil",
          corpo: ` Na nossa Educação Infantil, cada criança é vista como protagonista
            ativa na construção do conhecimento. Nossa abordagem educacional é
            centrada nas necessidades, interesses e motivações individuais de
            cada criança.`,
        },
        {
          imagem: "assets/edu-inicial.jpg",
          titulo: "Ensino Fundamental Anos Iniciais",
          corpo: `O Ensino Fundamental Anos Iniciais é uma fase crucial para o
            desenvolvimento integral do aluno. Aqui, priorizamos não só o
            crescimento acadêmico, mas também o desenvolvimento biopsicossocial
            e a formação de valores.`,
        },
        {
          imagem: "assets/edu-fundamental.jpg",
          titulo: "Ensino Fundamental Anos Finais",
          corpo: `Durante o Ensino Fundamental Anos Finais, os alunos começam a
            perceber a aplicabilidade dos conhecimentos adquiridos, assumindo
            responsabilidades e desenvolvendo habilidades críticas e
            organizacionais.`,
        },
        {
          imagem: "assets/edu-eja.jpg",
          titulo: "EJA (Educação de Jovens e Adultos)",
          corpo: `O programa de Educação de Jovens e Adultos oferece uma oportunidade
            valiosa para aqueles que buscam concluir seus estudos. Com
            flexibilidade e apoio dedicado, ajudamos os alunos a alcançarem seus
            objetivos educacionais e profissionais.`,
        },
      ],
    };
  },
};
</script>
<style scoped>

.row {
  border-radius: 10px;
}
</style>
