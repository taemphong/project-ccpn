<template>
  <v-container fluid class="pa-0">
    <div>
      <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
    </div>
    <div style="justify-items: center; ">
      <v-stepper v-model="e1" alt-labels style="width: 2000px; justify-items: center;">
        <v-stepper-header style="width: 700px; border: none; box-shadow: none;">
          <v-stepper-step :complete="e1 > 1" step="1" color="green">
            กรอกข้อมูล
          </v-stepper-step>


          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="green">
            ตรวจสอบข้อมูล
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" color="green">
            ชำระเงิน
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <UserRegisterStep1 />
            <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

            <v-btn v-if="e1 > 1" text @click="e1--"> ย้อนกลับ </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

            <v-btn v-if="e1 > 1" text @click="e1--"> ย้อนกลับ </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-container>
</template>

<script>
import UserRegisterStep1 from "@/components/Form/UserRegisterStep1.vue";

export default {
  components: {
    UserRegisterStep1,
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>
