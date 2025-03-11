<template>
  <v-app>
    <v-main>
      <Navbar
        v-if="$route.name !== 'login' && $route.name !== 'user-register' && $route.name !== 'user-register-request' && $route.name !== 'check-document-status' && $route.name !== 'payment'" />
      <v-app :style="backgroundStyle">
        <router-view />
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    backgroundStyle() {
      if (this.$route.name === 'user-register') {
        return {};
      }
      return {
        backgroundImage: `url(${require('@/assets/images/bg3.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    },
  },
};
</script>

<style>
* {
  font-size: 18px;
  color: black;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
}
</style>
