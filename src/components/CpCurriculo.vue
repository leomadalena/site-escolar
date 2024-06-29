<template>
  <q-page padding>
    <div class="about-curriculo q-pa-md">

      <h1>Apresentação</h1>
      <p>
        <strong>
          A Escola oferece um ambiente educacional inclusivo e especializado para crianças surdas, com foco em promover o desenvolvimento integral e a comunicação efetiva. A estrutura curricular é cuidadosamente projetada para atender às necessidades específicas dos alunos, abrangendo diversas faixas etárias e fases de desenvolvimento.
        </strong>
      </p>
      <h2>Ensino Fundamental</h2>
      <p>
        O Ensino Fundamental é destinado a crianças surdas de 6 a 14 anos, dividindo-se em dois ciclos:
      </p>
      <ul>
        <li>
          <strong>1° Ciclo:</strong> Envolve as séries iniciais, onde o foco é no desenvolvimento das habilidades básicas de leitura, escrita, matemática, ciências e estudos sociais. A língua de instrução é a Libras (Língua Brasileira de Sinais), garantindo que os alunos compreendam plenamente o conteúdo.
        </li>
        <li>
          <strong>2° Ciclo:</strong> Continua o desenvolvimento das habilidades adquiridas no 1º ciclo, aprofundando os conhecimentos e preparando os alunos para o ensino médio. A Língua Portuguesa está presente em sua forma escrita, complementando o aprendizado em Libras.
        </li>
      </ul>
      <div
        v-for="(item, index) in dados"
        :key="index"
        :class="['row', 'q-pa-md', {'separador': index % 2 === 0, 'bg-white': index % 2 !== 0}]"

        >
        <div v-if="index % 2 === 0" class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md" align="middle">
          <q-img :src="item.img" class="image rounded-image" />
        </div>
        <div class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md" align="left">
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.corpo }}</p>
        </div>
        <div v-if="index % 2 !== 0" class="col-6 col-md-6 col-sm-6 col-xs-12 q-pa-md" align="middle">
          <q-img :src="item.img" class="image rounded-image" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "CurriculoExample",
  data() {
    return {
      dados: [
        {
          img: "assets/servico-educacao-precoce.jpg",
          titulo: "Serviço de Educação Precoce (EP)",
          corpo: `Para crianças de zero a 3 anos, a Escola oferece o Serviço de Educação Precoce (EP). Este programa visa estimular o desenvolvimento cognitivo, emocional e social das crianças desde os primeiros anos de vida, utilizando a Libras como meio de comunicação. As atividades são planejadas para promover o desenvolvimento motor, sensorial e linguístico.`,
        },
        {
          img: "assets/psicopedagogia-inicial.jpg",
          titulo: "Psicopedagogia Inicial (PI)",
          corpo: `De 3 a 5 anos, as crianças participam do programa de Psicopedagogia Inicial (PI). Este programa é focado em preparar as crianças para o Ensino Fundamental, trabalhando habilidades pré-acadêmicas, sociais e de comunicação. A Libras é usada para instrução, garantindo que as crianças estejam bem preparadas para a próxima fase educacional.`,
        },
        {
          img: "assets/aulas-libras-pais-responsaveis.jpg",
          titulo: "Aulas de Libras para Pais e Responsáveis",
          corpo: `Reconhecendo a importância da comunicação entre os alunos e suas famílias, a Escola oferece aulas de Libras para pais e responsáveis. Estas aulas têm o objetivo de facilitar a comunicação em casa, fortalecendo o vínculo familiar e apoiando o desenvolvimento acadêmico e social dos alunos.`,
        },
        {
          img: "assets/processo-ensino-aprendizagem-bilingue.jpg",
          titulo: "Processo de Ensino Aprendizagem Bilíngue",
          corpo: `O processo de ensino-aprendizagem na Escola é bilíngue, integrando a Libras como a língua de instrução principal e a Língua Portuguesa em sua forma escrita. Este modelo bilíngue proporciona aos alunos uma base sólida em Libras, permitindo que eles compreendam e se expressem efetivamente, enquanto desenvolvem habilidades de leitura e escrita em Português.
          A Escola se dedica a oferecer um currículo inclusivo e adaptado, garantindo que cada aluno receba a atenção e o apoio necessários para alcançar seu pleno potencial.`,
        },
      ],
    };
  },
};
</script>

<style scoped>

.about-curriculo h2 {
  color: var(--q-secondary);
  margin-top: 40px;
  margin-bottom: 30px;
  max-width: 100%;
  word-wrap: break-word;
}

.about-curriculo ul {
  list-style-type: none;
  padding: 0;
}

.about-curriculo li {
  margin: 10px 0;
  margin-left: 20px;
  margin-right: 20px;
}

.row {
  display: flex;
  align-items: stretch;
}

.image {
  object-fit: cover;
  height: 100%;
  max-width: 400px;
}

.bg-white {
  background-color: white;
}
p {
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
.rounded-image {
  border-radius: 7px;
}

</style>
