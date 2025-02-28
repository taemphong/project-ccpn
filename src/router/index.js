import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Test from '@/views/test.vue';
import UserLoginData from '@/views/User/UserLoginData.vue';
import UserPersonalInformation from '@/views/User/UserPersonalInformation.vue';
import UserAddressInformation from '@/views/User/UserAddressInformation.vue';
import UserEditInformation from '@/views/User/UserEditInfomation.vue';
import UserEducationInfo from '@/views/User/UserEducationInfo.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Test },
  { path: '/user-login-data', component: UserLoginData },
  { path: '/user-personal-information', component: UserPersonalInformation },
  { path: '/user-edit-information', component: UserEditInformation },
  { path: '/user-address-information', component: UserAddressInformation },
  { path: '/user-education-information', component: UserEducationInfo },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
