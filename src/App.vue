<template>
  <v-main>
    <Navbar v-if="$route.name !== 'login'" />
    <v-app class="mt-8" :style="{
      backgroundImage: `url(${require('@/assets/images/bg3.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }">
      <router-view />
    </v-app>
  </v-main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>