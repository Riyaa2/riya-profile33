
const routes = [
  {
    path: '/',
    component: () => import('layouts/search.vue'),
    children: [
      { path: '/riya', component: () => import('pages/IndexPage.vue') },
      { path: '/riya/:id',name: 'About', component: () => import('pages/profile.vue') },
      { path: '/riya/:id',name: 'Interest', component: () => import('pages/interest.vue') },
      { path: '/riya/:id',name: 'Thought', component: () => import('pages/thought.vue') }
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
