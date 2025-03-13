<template>
  <v-container fluid class="login-container left-side fill-height">
    <v-row no-gutters class="fill-height">
      <v-col cols="7">
        <v-img :src="require('@/assets/images/logo5.png')" alt="Logo" class="logo" contain max-width="500" />
        <div>
          <h1 class="text1">สภาการสาธารณสุขชุมชน</h1>
        </div>
      </v-col>
      <v-col cols="12" class="right-side d-flex align-center" style="padding-left: 150px">
        <v-col cols="12" sm="6" md="6">
          <h1 class="text4">เข้าสู่ระบบ</h1>
          <br />
          <v-form class="login-form" @submit.prevent="loginUser">
            <div class="mb-4">เลขบัตรประชาชน</div>
            <v-text-field v-model="ml_customer_id" filled solo class="custom-input" placeholder="เลขบัตรประชาชน"
              background-color="#82D6631F" required autocomplete="cc-number" maxlength="13"></v-text-field>

            <div class="mb-4">รหัสความปลอดภัย</div>
            <v-text-field v-model="ml_licenses" :type="passwordVisible ? 'text' : 'password'" filled solo
              class="custom-input" placeholder="รหัสผ่าน" background-color="#82D6631F" required
              autocomplete="current-password">
              <template v-slot:append>
                <v-icon @click="togglePasswordVisibility">
                  {{ passwordVisible ? "mdi-eye-off" : "mdi-eye" }}
                </v-icon>
              </template>
            </v-text-field>
            <router-link to="/forgotpassword" class="forgot-password">ลืมรหัสผ่าน?</router-link>
            <v-btn type="submit" block class="custom-button"> เข้าสู่ระบบ </v-btn>
            <div>
              <h2 class="text2">หากคุณยังไม่มีบัญชี กรุณาสมัครสมาชิก</h2>
            </div>
            <div>
              <h2 class="text3">
                คุณสามารถ
                <router-link to="/user-register-request" class="highlight">สมัครสมาชิกได้ที่นี่!</router-link>
              </h2>
            </div>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
import variable from "../../main.config.js";
export default {
  data() {
    return {
      ml_customer_id: "",
      ml_licenses: "",
      passwordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    async loginUser() {
      try {
        const payload = {
          ml_customer_id: this.ml_customer_id,
          ml_licenses: this.ml_licenses,
        };

        const response = await axios.post(variable.URL_BACKEND + "/login", payload);

        if (response.data.code === 200) {
          localStorage.setItem("authToken", JSON.stringify(response.data.data));
          this.$router.push("/home");
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'เลขบัตรประชาชนหรือรหัสผ่านไม่ถูกต้อง',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    },
  },
};
</script>


<style scoped>
.login-container {
  height: 100vh;
}

.left-side {
  background-image: url("@/assets/images/bgreal.jpg");
  background-size: cover;
  background-position: center;
}

.right-side {
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 41.666%;
}

.text1 {
  font-size: 3.5rem;
  font-weight: 1000;
  color: rgb(2, 2, 2);
  margin-top: 200px;
  text-align: center;
  margin-right: 50px;
}

.text2 {
  font-size: 1.5rem;
  color: rgb(2, 2, 2);
  margin-top: 30px;
  margin-left: 20px;
}

.text3 {
  font-size: 1.5rem;
  color: #000000;
  margin-top: 5px;
  margin-left: 20px;

}

.text4 {
  font-size: 2rem;
  font-weight: 600;
}

.highlight {
  border-radius: 5px;
  text-decoration: none;
  color: #FF0000;
  font-weight: bold;
  font-size: 1.5rem;
}

/* ปรับขนาดฟอร์ม */
.login-form {
  max-width: 500px;
  width: 150%;
  margin: auto;
}

/* ปรับขนาดช่องกรอกข้อมูล */
.custom-input ::v-deep(input) {
  font-size: 1.2rem;
  /* ขนาดตัวอักษรใหญ่ขึ้น */
  height: 56px;
  /* ปรับความสูง */
}

.custom-input ::v-deep .v-input__control .v-input__slot input::placeholder {
  color: #468041 !important;
}

/* ปรับขนาดปุ่ม */
.custom-button {
  margin-top: 40px;
  background-color: #48bf6a !important;
  /* เพิ่ม !important เพื่อบังคับใช้ */
  color: white !important;
  /* เพิ่มสีข้อความ */
  font-size: 1.5rem !important;
  /* ขนาดตัวอักษร */
  height: 56px !important;
  /* ความสูงของปุ่ม */
  border-radius: 8px;
  /* มุมโค้ง */
  box-shadow: 1px 1px 80px 10px #4d47c366 !important;
  /* เงา */
}

.custom-button:hover {
  background-color: #468041 !important;
  /* เปลี่ยนสีพื้นหลังเมื่อ hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  /* เพิ่มเงาขณะ hover */
  transform: translateY(-2px);
  /* ปรับตำแหน่งเมื่อ hover */
}

.custom-button:focus {
  outline: none;
  /* ลบเส้นขอบเมื่อคลิก */
}

.forgot-password {
  display: block;
  /* หรือใช้ inline-block */
  color: #b0b0b0;
  cursor: pointer;
  font-size: 1rem;
  text-align: right;
  position: relative;
  top: -15px;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
