<template>
  <v-container fluid class="login-container fill-height">
    <v-row no-gutters class="fill-height">
      <v-col cols="7" class="left-side">
        <v-img :src="require('@/assets/images/logo5.png')" alt="Logo" class="logo" contain max-width="500" />
        <div>
          <h2 class="text1">สภาการสาธารณสุขชุมชน</h2>
        </div>
        <div>
          <h2 class="text2">หากคุณยังไม่มีบัญชี กรุณาสมัครสมาชิก</h2>
        </div>
        <div>
          <h2 class="text3">
            คุณสามารถ
            <router-link to="/user-register-request" class="highlight">สมัครได้ที่นี้ !</router-link>
          </h2>
        </div>
      </v-col>
      <v-col cols="12" class="right-side d-flex align-center" style="padding-left: 150px">
        <v-col cols="12" sm="6" md="6">
          <h1>เข้าสู่ระบบ</h1>
          <br />
          <v-form class="login-form" @submit.prevent="loginUser">
            <div class="mb-4">เลขบัตรประชาชน</div>
            <v-text-field v-model="ml_customer_id" filled solo class="custom-input" placeholder="เลขบัตรประชาชน"
              background-color="#82D6631F" required></v-text-field>
            <div class="mb-4">รหัสความปลอดภัย</div>
            <v-text-field v-model="ml_licenses" :type="passwordVisible ? 'text' : 'password'" filled solo
              class="custom-input" placeholder="รหัสผ่าน" background-color="#82D6631F" required>
              <template v-slot:append>
                <v-icon @click="togglePasswordVisibility">
                  {{ passwordVisible ? "mdi-eye-off" : "mdi-eye" }}
                </v-icon>
              </template>
            </v-text-field>
            <router-link to="/forgotpassword" class="forgot-password">ลืมรหัสผ่าน?</router-link>
            <v-btn type="submit" block class="custom-button"> เข้าสู่ระบบ </v-btn>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

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

        const response = await axios.post("http://localhost:8002/ccph/api/login", payload);

        if (response.data.code === 200) {
          localStorage.setItem("authToken", JSON.stringify(response.data.data));
          this.$router.push("/home"); // ไปที่หน้า home
        } else {
          alert("เลขบัตรประชาชนหรือรหัสผ่านไม่ถูกต้อง");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
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
  background-image: url("@/assets/images/bg3.png");
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
  font-size: 3rem;
  font-weight: 1000;
  color: rgb(2, 2, 2);
  margin-top: 200px;
  text-align: center;
}

.text2 {
  font-size: 1.5rem;
  color: rgb(2, 2, 2);
  margin-top: 50px;
  margin-left: 270px;
}

.text3 {
  font-size: 1.5rem;
  color: #000000;
  margin-top: 5px;
  margin-left: 270px;
}

.highlight {
  padding: 2px 5px;
  border-radius: 5px;
  text-decoration: none;
  color: rgb(243, 168, 55);
  font-weight: bold;
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
  font-size: 1.4rem !important;
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
  font-size: 0.9rem;
  text-align: right;
  position: relative;
  top: -20px;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
