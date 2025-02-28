<template>
  <v-app>
    <Navbar />
    <v-main class="mt-8" :style="{
      backgroundImage: `url(${require('@/assets/images/bg3.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }">
      <router-view />
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