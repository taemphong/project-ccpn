import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Test from "@/views/test.vue";
import UserInformation from "@/views/User/UserInformation.vue";
import Profile from "@/views/User/UserPersonalInformation.vue";
import UserAddressInformation from "@/views/User/UserAddressInformation.vue";
import UserEducationInformation from "@/views/User/UserEducationInformation.vue";
import Login from "@/views/login.vue";
import 'vuetify/dist/vuetify.min.css';
import UserRegister from "@/views/User/UserRegister.vue";
import UserRegisterRequest from "@/views/User/UserRegisterRequest.vue";
import CheckDocumentStatus from "@/views/Document/CheckDocumentStatus.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/about", name: "about", component: Test },
  { path: "/home", name: "home", component: Home },
  { path: "/user-information", name: "user-information", component: UserInformation },
  { path: "/user-profile", name: "user-profile", component: Profile },
  { path: "/user-address", name: "user-address-information", component: UserAddressInformation },
  { path: "/user-education-information", name: "user-education-information", component: UserEducationInformation },
  { path: "/user-register", name: "user-register", component: UserRegister },
  { path: "/user-register-request", name: "user-register-request", component: UserRegisterRequest },
  { path: "/check-document-status", name: "check-document-status", component: CheckDocumentStatus },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'user-register', 'user-register-request', 'check-document-status'];
  const authRequired = !publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('authToken');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  if (loggedIn && to.name === 'login') {
    return next('/home');
  }

  next();
});

export default router;