import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Test from "@/views/test.vue";
import UserLoginData from "@/views/User/UserLoginData.vue";
import UserPersonalInformation from "@/views/User/UserPersonalInformation.vue";
import UserAddressInformation from "@/views/User/UserAddressInformation.vue";
import UserEducationInformation from "@/views/User/UserEducationInformation.vue";
import Login from "@/views/login.vue";
import 'vuetify/dist/vuetify.min.css';
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/about", name: "about", component: Test },
  { path: "/home", name: "home", componen: Home },
  { path: "/user-login-data", name: "user-login-data", component: UserLoginData },
  { path: "/user-personal-information", name: "user-personal-information", component: UserPersonalInformation },
  { path: "/user-address", name: "user-address-information", component: UserAddressInformation },
  { path: "/user-education-information", name: "user-education-information", component: UserEducationInformation }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
