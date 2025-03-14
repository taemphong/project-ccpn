<template>
  <v-container fluid class="pa-0">
    <div>
      <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
    </div>
    <div style="justify-items: center">
      <v-stepper v-model="e1" alt-labels style="padding-left: 200px; padding-right: 200px; justify-items: center">
        <v-stepper-header style="width: 100%; max-width: 700px; border: none; box-shadow: none">
          <!-- Stepper Headers -->
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <UserRegisterStep1 ref="step1" v-model="formData" @validationChanged="updateStep1Validity" />
            <div class="d-flex justify-center">
              <v-btn @click="e1 = 2" class="my-btn" :style="{ backgroundColor: '#00B69B', color: '#fff' }"
                :disabled="isStep1Invalid">
                ถัดไป
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <UserRegisterStep2 :formData="formData" />
            <div class="d-flex justify-center">
              <v-btn v-if="e1 > 1" text @click="e1--" class="my-btn"
                :style="{ backgroundColor: '#4169E1', color: '#fff' }">
                ย้อนกลับ
              </v-btn>
              <v-btn @click="confirmSubmission" class="my-btn ml-5"
                :style="{ backgroundColor: '#00B69B', color: '#fff' }">
                ส่งใบสมัคร
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <UserRegisterStep3 />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import UserRegisterStep1 from "@/components/Form/UserRegisterStep1.vue";
import UserRegisterStep2 from "@/components/Form/UserRegisterStep2.vue";
import UserRegisterStep3 from "@/components/Form/UserRegisterStep3.vue";

export default {
  components: {
    UserRegisterStep1,
    UserRegisterStep2,
    UserRegisterStep3,
  },
  data() {
    return {
      e1: 1,
      isStep1Invalid: true,
      formData: {},
    };
  },
  methods: {
    updateStep1Validity(isInvalid) {
      this.isStep1Invalid = isInvalid;
    },
    async submitFormData() {
      try {
        const response = await axios.post('http://localhost:8002/ccph/api/member-register', this.formData);

        // ตรวจสอบผลลัพธ์จาก API
        if (response.data.code === 200) {
          this.$router.push('/success');
        } else {
          alert('เกิดข้อผิดพลาดในการสมัคร: ' + response.data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
      }
    },
    confirmSubmission() {
      this.submitFormData();
    },
  },
};
</script>

<style scoped>
.my-btn {
  width: 100%;
  max-width: 300px;
  height: 50px !important;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .my-btn {
    max-width: 200px;
    height: 40px !important;
  }
}

@media (max-width: 480px) {
  .my-btn {
    max-width: 150px;
    height: 35px !important;
  }
}
</style>
