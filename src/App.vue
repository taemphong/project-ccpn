<template>
  <div>
    <Navbar v-if="$route.name !== 'login'" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
