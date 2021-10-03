import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Report from '@/pages/Report.vue'
import Edit from '@/pages/Edit.vue'
import Login from '@/pages/Login.vue'
import Cadastro from '@/pages/Cadastro.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/',
      name: 'home',
      component: Login,
      meta: {
        publica: true
      }
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
      meta: {
        publica: true
      }
    },
];

const router = new VueRouter({
  routes
})
  

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !store.state.token) {
    return next({
      path:'/login'
    });
  }
  next();
})

export default router