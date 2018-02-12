import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductList from "./components/productList.component.vue";
import ProductDetail from './components/productDetail.component.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/shop/:id', name:'ProductDetail', component: ProductDetail, props: true },
  { path: '/shop', name: 'ProductList', component: ProductList },
  { path: '*', redirect: '/shop' }
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;