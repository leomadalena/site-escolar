const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/Sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SobrePage.vue') }
    ]
  },
  {
    path: '/Curriculo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CurriculoPage.vue') }
    ]
  },
  {
    path: '/Matricula',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MatriculaPage.vue') }
    ]
  },
  {
    path: '/NoticiasEventos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NoticiasEventosPage.vue') }
    ]
  },
  {
    path: '/Calendario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CalendarioPage.vue') }
    ]
  },
  {
    path: '/Contato',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ContatoPage.vue') }
    ]
  },
  {
    path: '/Faq',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FaqPage.vue') }
    ]
  },
  {
    path: '/Recursos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RecursosPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFoundPage.vue')
  }
]

export default routes
