<template>
  <v-dialog v-model="settingsModal" max-width="600px" persistent>
    <v-card style="border-radius: 14px;">
      <v-container style="padding: 20px;">
        <v-toolbar color="white" flat>
          <v-card-title class="card-title ">เปลี่ยนรหัสผ่าน</v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row style="justify-content: center;">
              <v-col cols="12" sm="6">
                <div>รหัสผ่านปัจจุบัน</div>
                <v-text-field 
                  class="textfield"
                  background-color="#f0f2f7"
                  v-model="currentPassword"
                  outlined
                  :type="showCurrentPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                >
                  <template v-slot:append>
                    <v-icon @click="showCurrentPassword = !showCurrentPassword">
                      {{ showCurrentPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                    </v-icon>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <div>รหัสผ่านใหม่</div>
                <v-text-field 
                  class="textfield"
                  background-color="#f0f2f7"
                  v-model="newPassword"
                  outlined
                  :type="showNewPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                >
                  <template v-slot:append>
                    <v-icon @click="showNewPassword = !showNewPassword">
                      {{ showNewPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                    </v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>

            <v-container class="d-flex justify-center align-center">
              <v-row justify="center">
                <v-col cols="auto" >
                  <v-btn class="save-btn mr-4" large @click="changePassword" :disabled="!isValid">
                    เปลี่ยนรหัสผ่าน
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    isValid() {
      return this.currentPassword.length > 0 && this.newPassword.length >= 8;
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newValue) {
      this.settingsModal = newValue;
    }
  },
  data() {
    return {
      settingsModal: this.value,
      currentPassword: "",
      newPassword: "",
      showCurrentPassword: false,
      showNewPassword: false
    };
  },
  methods: {
    closeModal() {
      this.$emit('input', false);
      this.currentPassword = "";
      this.newPassword = "";
    },
    async changePassword() {
      console.log("Changing password...");

      // ตรวจสอบว่า valid หรือไม่
      if (!this.isValid) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      try {
        // ดึงค่า ml_customer_id จาก localStorage
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.error('No auth token found');
          return;
        }

        const userData = JSON.parse(authToken);
        const payload = {
          ml_customer_id: userData.ml_customer_id,
          oldPassword: this.currentPassword,
          newPassword: this.newPassword
        };

        const response = await axios.post('http://localhost:8002/ccph/api/resetpassword', payload);

        if (response.data.code === 200) {
          alert("เปลี่ยนรหัสผ่านสำเร็จ");
        } else {
          alert(response.data.data || "เกิดข้อผิดพลาด");
        }
      } catch (error) {
        console.error("Error changing password:", error);
        alert("ไม่สามารถเปลี่ยนรหัสผ่านได้");
      }

      this.closeModal(); // ปิด Modal หลังจากเปลี่ยนรหัส
    }
  }
};
</script>



<style scoped>
.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f0f2f7;
}

.v-text-field {
  border-radius: 10px;
}

.card-title {
  font-size: 26px;
  font-weight: bold;
}

.save-btn {
  color: white !important;
  background-color: #2a8f50 !important;
  width: 250px;
  border-radius: 10px;
  font-size: 16px !important;
}
</style>
