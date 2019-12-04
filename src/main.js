import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Router from 'vue-router';
import Lista from './components/ListaUsuarios';
import Home from './components/Home';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Lista',
      component: Lista
    }
  ]
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
