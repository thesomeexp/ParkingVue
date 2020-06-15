import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import Park from "../components/Park"
import FindParkById from "../components/FindParkById"
import LoginTokenDemo from "../components/LoginTokenDemo"
import GetDataTest from "../components/GetDataTest"
import testHeader from "../components/postHeader"
import RegisterDemo from "../components/RegisterDemo";
import UploadHeadDemo from "../components/UploadHeadDemo";
import ImageCORSTest from "../components/ImageCORSTest";
import AddParking from "../components/AddParking";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: Home},
    {path: '/parking', component: Park},
    {path: '/infos/1', component: FindParkById},
    {path: '/login', component: LoginTokenDemo},
    {path: '/gdata', component: GetDataTest},
    {path: '/testHeader', component: testHeader},
    {path: '/register', component: RegisterDemo},
    {path: '/head', component: UploadHeadDemo},
    {path: '/uploadHeadDemo', component: UploadHeadDemo},
    {path: '/ImageCORSTest', component: ImageCORSTest},
    {path: '/addparking', component: AddParking}
  ]
})
