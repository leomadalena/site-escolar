<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-img src="src/assets/frente_escola.png" />
      <h1>Sobre a Escola</h1>
      <p>
        <strong
          >Bem-vindo à nossa escola, uma instituição da rede pública municipal
          de Porto Alegre, dedicada ao ensino bilíngue (Libras/Português
          escrito) para surdos. Desde a sua fundação em 2008, nossa escola tem
          sido uma conquista significativa da comunidade surda, proporcionando
          um ambiente inclusivo e acolhedor para estudantes surdos.</strong
        >
      </p>

      <h2>Nossa Missão</h2>
      <p>
        Nossa missão é oferecer uma educação de qualidade, garantindo que todos
        os alunos surdos tenham acesso pleno ao conhecimento, cultura e
        desenvolvimento pessoal. Priorizamos a Língua Brasileira de Sinais
        (Libras) como a primeira língua de instrução e o Português escrito como
        a segunda língua, assegurando que nossos estudantes desenvolvam
        habilidades essenciais para a vida.
      </p>

      <h2>Proposta Educacional</h2>
      <ul>
        <li>
          <strong>Inclusão e Acessibilidade:</strong> Criamos um ambiente onde
          todos os alunos se sintam valorizados e compreendidos, promovendo a
          igualdade de oportunidades.
        </li>
        <li>
          <strong>Qualificação dos Professores:</strong> Contamos com uma equipe
          de profissionais especializados e capacitados no ensino de Libras e
          Português escrito, dedicados ao progresso acadêmico e social dos
          alunos.
        </li>
        <li>
          <strong>Tecnologia e Recursos Didáticos:</strong> Utilizamos
          ferramentas tecnológicas e recursos didáticos adaptados para facilitar
          a aprendizagem dos nossos estudantes, respeitando suas necessidades e
          potencialidades.
        </li>
      </ul>

      <h2>Matrículas</h2>
      <p>
        Estamos sempre de portas abertas para novos alunos! As matrículas estão
        permanentemente abertas, e estamos prontos para receber novos membros em
        nossa comunidade escolar.
      </p>

      <p>
        Venha nos conhecer e fazer parte desta conquista da comunidade surda.
        Juntos, construímos um futuro mais inclusivo e cheio de oportunidades.
      </p>

      <h2>Venha conhecer a escola</h2>

      <h5>
        Endereço: R. Cap. Pedro Werlang, 1011 - Intercap, Porto Alegre - RS,
        91530-110
      </h5>

      <div class="q-col-12 q-col-md-6 q-col-xs-12 q-pa-md">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-51.15469233218933%2C-30.0655879039394%2C-51.15069233218933%2C-30.0615879039394&layer=mapnik&marker=-30.0635879039394%2C-51.15269233218933"
          style="border: 1px solid black"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
.about-school h1 {
  color: var(--q-primary);
}

.about-school h2 {
  color: var(--q-secondary);
  margin-top: 40px;
  margin-bottom: 15px;
}

.about-school ul {
  list-style-type: none;
  padding: 0;
}

.about-school li {
  margin: 10px 0;
  margin-left: 20px;
}
</style>
