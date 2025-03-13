<template>
  <v-container fluid class="pa-0">
    <div>
      <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
    </div>
    <div style="justify-items: center">
      <v-stepper v-model="e1" alt-labels style="padding-left: 200px; padding-right: 200px; justify-items: center">
        <v-stepper-header style="width: 100%; max-width: 700px; border: none; box-shadow: none">
          <v-stepper-step :complete="e1 > 1" step="1" class="no-number" 
  :class="{ active: e1 === 1 }">
  <div :style="{ color: e1 === 1 ? '#5FC77D' : '#858585' }">
    กรอกข้อมูล
  </div>
</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step :complete="e1 > 2" step="2" class="no-number" 
  :class="{ active: e1 === 2 }">
  <div :style="{ color: e1 === 2 ? '#5FC77D' : '#858585' }">
    ตรวจสอบข้อมูล
  </div>
</v-stepper-step>

<v-divider></v-divider>

<v-stepper-step step="3" class="no-number" 
  :class="{ active: e1 === 3 }">
  <div :style="{ color: e1 === 3 ? '#5FC77D' : '#858585' }">
    ชำระเงิน
  </div>
</v-stepper-step>


        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <UserRegisterStep1 ref="step1" @validationChanged="updateStep1Validity"
            v-model="formData"  />
            <div class="d-flex justify-center">
              <v-btn 
  @click="e1 = 2" 
  class="my-btn" 
  :style="{ backgroundColor: '#00B69B', color: '#fff' }"
  :disabled="isStep1Invalid"
  
>
  ถัดไป
</v-btn>


            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <UserRegisterStep2 
            :formData="formData"/>
            <div class="d-flex justify-center">
              <v-btn v-if="e1 > 1" text @click="e1--" class="my-btn"
                :style="{ backgroundColor: '#4169E1', color: '#fff' }">
                ย้อนกลับ
              </v-btn>
              <v-btn
                @click="confirmSubmission"
                class="my-btn ml-5"
                :style="{ backgroundColor: '#00B69B', color: '#fff' }"
              >
                ส่งใบสมัคร
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <UserRegisterStep3 />
            <div class="d-flex justify-center">
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-container>
</template>

<script>
import UserRegisterStep1 from "@/components/Form/UserRegisterStep1.vue";
import UserRegisterStep2 from "@/components/Form/UserRegisterStep2.vue";
import UserRegisterStep3 from "@/components/Form/UserRegisterStep3.vue";
import Swal from "sweetalert2";

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
    confirmSubmission() {
      Swal.fire({
        title: "กรุณาตรวจสอบความถูกต้องก่อนกดปุ่มยืนยันการสมัคร",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00B69B",
        cancelButtonColor: "#FF0000",
        confirmButtonText: "ยืนยันการสมัคร",
        cancelButtonText: "ยกเลิก",
        customClass: {
          confirmButton: "custom-confirm-btn",
          cancelButton: "custom-cancel-btn",
        },
        didOpen: () => {
          document.querySelector(".custom-confirm-btn").style.color = "white";
          document.querySelector(".custom-cancel-btn").style.color = "white";
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "บันทึกข้อมูลเรียบร้อย",
            icon: "success",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#00B69B",
            customClass: {
              confirmButton: "custom-ok-btn",
            },
            didOpen: () => {
              document.querySelector(".custom-ok-btn").style.color = "white";
            },
          }).then(() => {
            this.e1 = 3;
          });
        }
      });
    },
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
/* กำหนดสีของวงกลมรอบ step */
.no-number >>> .v-stepper__step__step {
  border: 2px solid #C2C2C2 !important; /* สีเทาเมื่อไม่ active */
  background-color: white !important;
}

.no-number.active >>> .v-stepper__step__step {
  border: 2px solid #48BF6A !important; /* สีเขียวเมื่อ active */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* เพิ่มเงา */
  
}


</style>
