import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Park from "../components/Park";
import FindParkById from "../components/FindParkById";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: Home},
    {path: '/parking', component: Park},
    {path: '/infos/1', component: FindParkById},
  ]
})
