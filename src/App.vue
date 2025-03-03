<template>
  <v-app>
    <v-main>
      <Navbar v-if="$route.name !== 'login'" />
      <v-app :style="{
        backgroundImage: `url(${require('@/assets/images/bg3.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }">
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
};
</script>

<style>
body {
  font-family: 'Kanit', sans-serif;
}
</style>