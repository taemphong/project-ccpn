<template>
  <v-container fluid class="pa-0">
    <div>
      <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
    </div>
    <div style="justify-items: center;">
      <v-stepper v-model="e1" alt-labels style="padding-left: 160px;padding-right: 160px; justify-items: center;">
        <v-stepper-header style="width: 100%; max-width: 900px; border: none; box-shadow: none;">
          <v-stepper-step :complete="e1 > 1" step="1" color="green" class="no-number">
            กรอกข้อมูล
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="green" class="no-number">
            ตรวจสอบข้อมูล
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" color="green" class="no-number">
            ชำระเงิน
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <UserRegisterStep1 />
            <div class="d-flex justify-center">
              <v-btn @click="e1 = 2" class="my-btn" :style="{ backgroundColor: '#00B69B', color: '#fff' }">
                ถัดไป
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <UserRegisterStep2 />
            <div class="d-flex justify-center">
              <v-btn @click="e1 = 3" class="my-btn" :style="{ backgroundColor: '#00B69B', color: '#fff' }">
                ถัดไป
              </v-btn>
              <v-btn v-if="e1 > 1" text @click="e1--" class="my-btn ml-5"
                :style="{ backgroundColor: '#4169E1', color: '#fff' }"> ย้อนกลับ </v-btn>
            </div>

          </v-stepper-content>

          <v-stepper-content step="3">
            <UserRegisterStep3 />
            <div class="d-flex justify-center">
              <v-btn @click="e1 = 3" class="my-btn" :style="{ backgroundColor: '#00B69B', color: '#fff' }">
                ถัดไป
              </v-btn>
              <v-btn v-if="e1 > 1" text @click="e1--" class="my-btn ml-5"
                :style="{ backgroundColor: '#4169E1', color: '#fff' }"> ย้อนกลับ </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-container>
</template>

<script>
import UserRegisterStep1 from "@/components/Form/UserRegisterStep1.vue";
import UserRegisterStep3 from "@/components/Form/UserRegisterStep3.vue";
import UserRegisterStep2 from "@/components/Form/UserRegisterStep2.vue";

export default {
  components: {
    UserRegisterStep1,
    UserRegisterStep2,
    UserRegisterStep3
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style scoped>
.my-btn {
  width: 100%;
  /* ทำให้ปุ่มยาวเต็ม */
  max-width: 300px;
  /* กำหนดความกว้างสูงสุด */
  height: 50px !important;
  /* กำหนดความสูงของปุ่ม */
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .my-btn {
    max-width: 200px;
    /* ขนาดปุ่มจะเล็กลงเมื่อหน้าจอขนาดเล็ก */
    height: 40px !important;
    /* ลดความสูงของปุ่ม */
  }
}

@media (max-width: 480px) {
  .my-btn {
    max-width: 150px;
    /* ขนาดปุ่มจะเล็กลงอีกเมื่อหน้าจอขนาดเล็กลง */
    height: 35px !important;
    /* ลดความสูงของปุ่มมากขึ้น */
  }
}

/* ซ่อนตัวเลขใน v-stepper-step */
.no-number>>>.v-stepper__step__step {
  color: transparent;
  border: 2px solid #00B69B !important; /* กำหนดสีขอบให้ชัดเจน */
  background-color: white !important; /* ให้พื้นหลังเป็นสีขาว */
}

/* เมื่อเป็น step ปัจจุบันหรือเสร็จสมบูรณ์ */
.no-number >>> .v-stepper__step--active .v-stepper__step__step,
.no-number >>> .v-stepper__step--complete .v-stepper__step__step {
  background-color: #00B69B !important;
  color: white !important;
}
</style>