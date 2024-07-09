<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <!--<q-item clickable tag="a" :href="linksList[0].link" style="outline: none!;">{{ globals.companyName }} <q-avatar> <q-img src="assets/logobilinguetrans.gif" /> </q-avatar></q-item>-->
          {{ globals.companyName }}
          <q-avatar> <q-img src="assets/logobilinguetrans.gif" /> </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Links Essênciais </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "src/components/ItemEssentialLink.vue";
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
const globals = proxy.$globals;

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Inicio",
    caption: "O ponto de partida para sua jornada educacional.",
    icon: "home",
    link: "/",
  },
  {
    title: "Sobre",
    caption: "Conheça nossa história e missão educacional.",
    icon: "book",
    link: "#/Sobre",
  },
  {
    title: "Currículo Bilíngue",
    caption: "Explore nossos programas e currículo.",
    icon: "school",
    link: "#/Curriculo",
  },
  {
    title: "Matrícula",
    caption: "Seja parte da nossa comunidade.",
    icon: "assignment",
    link: "#/Matricula",
  },
  {
    title: "Notícias e Eventos",
    caption: "As últimas novidades e eventos da escola.",
    icon: "newspaper",
    link: "#/NoticiasEventos",
  },
  {
    title: "Calendário",
    caption: "Não perca nossos eventos importantes - veja nosso calendário.",
    icon: "calendar_today",
    link: "#/Calendario",
  },
  {
    title: "Contato",
    caption: "Entre em contato conosco - estamos aqui para ajudar.",
    icon: "email",
    link: "#/Contato",
  },
  {
    title: "FAQ",
    caption: "Perguntas frequentes sobre nossa escola.",
    icon: "help_outline",
    link: "#/FAQ",
  },
  {
    title: "Recursos",
    caption: "Recursos úteis para alunos, pais e professores.",
    icon: "folder",
    link: "#/Recursos",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
