import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import listPark from "../components/listPark"
import FindParkById from "../components/FindParkById"
import Login from "../components/Login"
import GetDataTest from "../test/GetDataTest"
import testHeader from "../test/postHeader"
import Register from "../components/Register";
import UploadHeadDemo from "../test/UploadHeadDemo";
import ImageCORSTest from "../test/ImageCORSTest";
import AddParking from "../components/AddParking";
import listMyPark from "../components/listMyPark";
import listDisablePark from "../components/listDisablePark";
import listNoVerifiedPark from "../components/listNoVerifiedPark";
import listVerifiedPark from "../components/listVerifiedPark";
import backToDisable from "../fallback/backToDisable";
import backToNoVerified from "../fallback/backToNoVerified";
import backToVerified from "../fallback/backToVerified";
import AddState from "../components/AddState";
import backToAddState from "../fallback/backToAddState";
import AddMark from "../components/AddMark";
import listMark from "../components/listMark";
import AddInfoImage from "../components/AddInfoImage";
import listVerifiedInfoImage from "../components/listVerifiedInfoImage";
import backToVerifiedImage from "../fallback/backToVerifiedImage";
import backToDisableImage from "../fallback/backToDisableImage";
import listDisableInfoImage from "../components/listDisableInfoImage";
import listNoVerifiedImage from "../components/listNoVerifiedImage";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/home', component: Home},
    {path: '/listPark', component: listPark},
    {path: '/infos/id', component: FindParkById},
    {path: '/login', component: Login},
    {path: '/gdata', component: GetDataTest},
    {path: '/testHeader', component: testHeader},
    {path: '/register', component: Register},
    {path: '/head', component: UploadHeadDemo},
    {path: '/uploadHeadDemo', component: UploadHeadDemo},
    {path: '/ImageCORSTest', component: ImageCORSTest},
    {path: '/addparking', component: AddParking},
    {path: '/findById/', component: FindParkById},
    {path: '/listMyPark', component: listMyPark},
    {path: '/listDisablePark', component: listDisablePark},
    {path: '/listNoVerifiedPark', component: listNoVerifiedPark},
    {path: '/listVerifiedPark', component: listVerifiedPark},
    {path: '/backToDisable', component: backToDisable},
    {path: '/backToNoVerified', component: backToNoVerified},
    {path: '/backToVerified', component: backToVerified},
    {path: '/backToAddState', component: backToAddState},
    {path: '/backToVerifiedImage', component: backToVerifiedImage},
    {path: '/backToDisableImage', component: backToDisableImage},
    {path: '/backToNoVerifiedImage', component: backToDisableImage},
    {path: '/addstate', component: AddState},
    {path: '/addmark', component: AddMark},
    {path: '/listMark', component: listMark},
    {path: '/addInfoImage', component: AddInfoImage},
    {path: '/listVerifiedImage', component: listVerifiedInfoImage},
    {path: '/listDisableImage', component: listDisableInfoImage},
    {path: '/listNoVerifiedImage', component: listNoVerifiedImage},
  ]
})
