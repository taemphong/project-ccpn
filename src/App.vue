<template>
  <div>
    <Navbar v-if="$route.name !== 'login'" />
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
