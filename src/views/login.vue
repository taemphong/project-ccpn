<template>
  <v-container fluid class="login-container fill-height">
    <v-row no-gutters class="fill-height">
      <!-- ด้านซ้าย  -->
      <v-col cols="7" class="left-side">
    <v-img
      :src="require('@/assets/images/logo123.png')"
      alt="Logo"
      class="logo"
      contain
      max-width="100"
    />
        <div >
          <h2
            class="text1 "
          >
            สภาการสาธารณสุขชุมชน
          </h2>
        </div>
        <div >
          <h2
            class="text2"
          >
            หากคุณยังไมม่มีบัญชี กรุณาสมัครสมาชิก
          </h2>
        </div>
        <div >
          <h2
            class="text3"
          >
          คุณสามารถ <router-link to="/register" class="highlight">สมัครได้ที่นี้ !</router-link>
          </h2>
        </div>
      </v-col>
      <!-- ด้านขวา  -->
      <v-col cols="5" class="right-side d-flex align-center justify-center">
        <v-col cols="12" sm="6" md="4">
        <h2 class="text-center">คำขอเป็นสมาชิก</h2>
        <br>
        <v-form class="login-form">
          <v-text-field 
            label="รหัสบัตรประชาชน" 
            filled 
            dense
            class="custom-input"
          ></v-text-field>
          <v-text-field 
            label="รหัสผ่าน" 
            type="password" 
            filled 
            dense
            class="custom-input"
          ></v-text-field>
          <v-btn block color="primary" class="custom-button">
            เข้าสู่ระบบ
          </v-btn>
        </v-form>
      </v-col>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

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
  font-size: 2.5rem;
  font-weight: 500;
  color: rgb(2, 2, 2);
  margin-top: 200px;
  text-align: center;   
}

.text2 {
  font-size: 1.5rem;
  color: rgb(2, 2, 2);
  margin-top: 50px;
  margin-left: 340px;
}

.text3 {
  font-size: 1.5rem;
  color: rgb(2, 2, 2);
  margin-top: 5px; 
  margin-left: 340px;
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
  font-size: 1.2rem; /* ขนาดตัวอักษรใหญ่ขึ้น */
  height: 56px; /* ปรับความสูง */
}

/* ปรับขนาดปุ่ม */
.custom-button {
  font-size: 1.2rem;
  height: 56px;
  margin-top: 10px;
}
</style>
