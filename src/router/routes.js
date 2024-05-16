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
      {path: '', component: () => import('pages/PageSobre.vue')}
    ]
  },
  {
    path: '/Curriculo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageCurriculo.vue')}
    ]
  },
  {
    path: '/Matricula',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageMatricula.vue')}
    ]
  },
  {
    path: '/Noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageNoticias.vue')}
    ]
  },
  {
    path: '/Calendario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageCalendario.vue')}
    ]
  },
  {
    path: '/Contato',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageContato.vue')}
    ]
  },
  {
    path: '/FAQ',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageFaq.vue')}
    ]
  },
  {
    path: '/Recursos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/PageRecursos.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
