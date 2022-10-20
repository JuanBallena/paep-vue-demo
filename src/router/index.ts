import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Redirect } from './redirect';
import * as Rol from '@/definition/Rol';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      isLogged: true
    }
  },
  {
    path: '/introduccion-encuesta/:nombreEncuesta',
    name: 'IntroduccionEncuesta',
    component: () => import('@/views/IntroduccionEncuesta/IntroduccionEncuesta.vue')
  },
  {
    path: '/iniciar-encuesta/:nombreEncuesta',
    name: 'IniciarEncuesta',
    component: () => import('@/views/IniciarEncuesta/IniciarEncuesta.vue')
  },
  {
    path: '/hacer-encuesta/:nombreEncuesta',
    name: 'HacerEncuesta',
    component: () => import('@/views/HacerEncuesta/HacerEncuesta.vue'),
    meta: {
      requiredEncuestaIniciadaId: true
    },
  },
  {
    path: '/culminar-encuesta',
    name: 'CulminarEncuesta',
    component: () => import('@/views/CulminarEncuesta/CulminarEncuesta.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout/Layout.vue'),
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: '/mis-encuestas',
        name: 'MisEncuestas',
        component: () => import('@/views/MisEncuestas/MisEncuestas.vue'),
        meta: {
          psicologo: true
        },
      },
      {
        path: '/encuesta/:id',
        name: 'Encuesta',
        component: () => import('@/views/Encuesta/Encuesta.vue'),
        meta: {
          psicologo: true
        },
      },
      {
        path: '/recopilar-respuestas/:id',
        name: 'RecopilarRespuestas',
        component: () => import('@/views/RecopilarRespuestas/RecopilarRespuestas.vue'),
        meta: {
          psicologo: true
        },
      },
      {
        path: '/mi-cuenta',
        name: 'MiCuenta',
        component: () => import('@/views/MiCuenta/MiCuenta.vue'),
        meta: {
          psicologo: true
        },
      },
      {
        path: '/resultados',
        name: 'Resultados',
        component: () => import('@/views/Resultados/Resultados.vue'),
        meta: {
          psicologo: true
        },
        children: [
          {
            path: 'analizar-resultados/:id',
            name: 'AnalizarResultados',
            component: () => import('@/views/Resultados/AnalizarResultados.vue')
          },
          {
            path: 'estadisticas/:id',
            name: 'Estadisticas',
            component: () => import('@/views/Resultados/Estadisticas.vue')
          },
          {
            path: 'respuestas-individuales/:id',
            name: 'RespuestasIndividuales',
            component: () => import('@/views/Resultados/RespuestasIndividuales.vue')
          }
        ]
      },
      {
        path: 'administrador',
        name: 'Administrador',
        component: () => import('@/views/Administrador/Administrador.vue'),
        meta: {
          admin: true
        },
        children: [
          {
            path: 'usuarios',
            name: 'Usuarios',
            component: () => import('@/views/Administrador/Usuarios.vue')
          },
          {
            path: 'mi-perfil',
            name: 'MiPerfil',
            component: () => import('@/views/Administrador/MiPerfil.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/error-general',
    name: 'ErrorGeneral',
    component: () => import('@/views/ErrorPage/ErrorGeneral.vue')
  },
  {
    path: '/not-found-page',
    name: 'NotFoundPage',
    component: () => import('@/views/ErrorPage/NotFoundPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/ErrorPage/NotFoundPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition): any {

    // if (savedPosition) {
    //   return savedPosition
    // } else {
      return { left: 0, top: 0}
    // }
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.isLogged)) {

//     const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
//     const redirect: Redirect = new Redirect();

//     if (usuarioLogueado.usuario) {
//       redirect.redirectToPrincipal(usuarioLogueado.rolId);
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.requiredAuth)) {

//     const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

//     if (usuarioLogueado.usuario) {
//       next();
//     } else {
//       next({
//         name: 'Home'
//       });
//     }
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.requiredEncuestaIniciadaId)) {

//     const encuestaIniciadaId = localStorage.getItem('encuestaIniciadaId') || "";

//     if (encuestaIniciadaId) {
//       next();
//     } else {
//       next({
//         name: 'IniciarEncuesta', params: { nombreEncuesta: to.params.nombreEncuesta }
//       });
//     }
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.admin)) {

//     const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
//     const redirect: Redirect = new Redirect();

//     if (usuarioLogueado.rolId == Rol.ADMINISTRADOR) {
//       next();
//     } else {
//       redirect.redirectToPrincipal(usuarioLogueado.rolId);
//     }
//   } else {
//     next();
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.psicologo)) {

//     const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
//     const redirect: Redirect = new Redirect();

//     if (usuarioLogueado.rolId == Rol.PSICOLOGO) {
//       next();
//     } else {
//       redirect.redirectToPrincipal(usuarioLogueado.rolId);
//     }
//   } else {
//     next();
//   }
// })

export default router
