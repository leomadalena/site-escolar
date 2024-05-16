<template>
  <q-layout view="hhh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            <!--<img src="../assets/logobilinguetrans.gif"> -->
          </q-avatar>
          E.M.E.F de Surdos Bilíngue ...
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <template v-for="(link, index) in linksList" :key="index">
          <q-route-tab :to="link.link" :label="link.title" />
        </template>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            <!--<img src="../assets/logobilinguetrans.gif"> -->
          </q-avatar>
          <div>E.M.E.F ...</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    
  </q-layout>
</template>

<script setup>

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Inicio',
    caption: 'O ponto de partida para sua jornada educacional.',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Sobre',
    caption: 'Conheça nossa história e missão educacional.',
    icon: 'book',
    link: 'Sobre'
  },
  {
    title: 'Currículo Bilíngue',
    caption: 'Explore nossos programas e currículo.',
    icon: 'school',
    link: 'Curriculo'
  },
  {
    title: 'Matrícula',
    caption: 'Seja parte da nossa comunidade.',
    icon: 'assignment',
    link: 'Matricula'
  },
  {
    title: 'Notícias e Eventos',
    caption: 'As últimas novidades e eventos da escola.',
    icon: 'newspaper',
    link: 'Noticias'
  },
  {
    title: 'Calendário',
    caption: 'Não perca nossos eventos importantes - veja nosso calendário.',
    icon: 'calendar_today',
    link: 'Calendario'
  },
  {
    title: 'Contato',
    caption: 'Entre em contato conosco - estamos aqui para ajudar.',
    icon: 'email',
    link: 'Contato'
  },
  {
    title: 'FAQ',
    caption: 'Perguntas frequentes sobre nossa escola.',
    icon: 'help_outline',
    link: 'FAQ'
  },
  {
    title: 'Recursos',
    caption: 'Recursos úteis para alunos, pais e professores.',
    icon: 'folder',
    link: 'Recursos'
  }
]


</script>
