
// UserRegisterStep1.vue
<template>
  <v-card class="pa-4">
    <v-card-title>ข้อมูลส่วนตัว</v-card-title>
    <v-card-text>
      <v-form>
        <v-select
          v-model="prefix"
          :items="prefixOptions"
          label="คำนำหน้าชื่อ"
          outlined
        ></v-select>
        <v-text-field v-model="firstName" label="ชื่อ" outlined></v-text-field>
        <v-text-field v-model="lastName" label="นามสกุล" outlined></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      prefix: '',
      firstName: '',
      lastName: '',
      prefixOptions: ['นาย', 'นาง', 'นางสาว'],
    };
  },
};
</script>

<style scoped>
</style>
