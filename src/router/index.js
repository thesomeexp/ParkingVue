import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import listPark from "../components/listPark"
import FindParkById from "../components/FindParkById"
import LoginTokenDemo from "../components/LoginTokenDemo"
import GetDataTest from "../test/GetDataTest"
import testHeader from "../test/postHeader"
import RegisterDemo from "../components/RegisterDemo";
import UploadHeadDemo from "../test/UploadHeadDemo";
import ImageCORSTest from "../test/ImageCORSTest";
import AddParking from "../components/AddParking";
import FindByLocation from "../components/FindByLocation";
import listMyPark from "../components/listMyPark";
import listDisablePark from "../components/listDisablePark";
import listNoVerifiedPark from "../components/listNoVerifiedPark";
import listVerifiedPark from "../components/listVerifiedPark";
import backToDisable from "../fallback/backToDisable";
import backToNoVerified from "../fallback/backToNoVerified";
import backToVerified from "../fallback/backToVerified";
import AddState from "../components/AddState";
import backToAddState from "../fallback/backToAddState";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/home', component: Home},
    {path: '/listPark', component: listPark},
    {path: '/infos/id', component: FindParkById},
    {path: '/login', component: LoginTokenDemo},
    {path: '/gdata', component: GetDataTest},
    {path: '/testHeader', component: testHeader},
    {path: '/register', component: RegisterDemo},
    {path: '/head', component: UploadHeadDemo},
    {path: '/uploadHeadDemo', component: UploadHeadDemo},
    {path: '/ImageCORSTest', component: ImageCORSTest},
    {path: '/addparking', component: AddParking},
    {path: '/findBylocation', component: FindByLocation},
    {path: '/findById/', component: FindParkById},
    {path: '/listMyPark', component: listMyPark},
    {path: '/listDisablePark', component: listDisablePark},
    {path: '/listNoVerifiedPark', component: listNoVerifiedPark},
    {path: '/listVerifiedPark', component: listVerifiedPark},
    {path: '/backToDisable', component: backToDisable},
    {path: '/backToNoVerified', component: backToNoVerified},
    {path: '/backToVerified', component: backToVerified},
    {path: '/backToAddState', component: backToAddState},
    {path: '/addstate', component: AddState}
  ]
})
