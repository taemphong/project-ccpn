<template>
  <v-dialog v-model="settingsModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">เปลี่ยนรหัสผ่าน</span>
      </v-card-title>

      <v-card-subtitle>
        <p>กรุณากรอกข้อมูลเพื่อเปลี่ยนรหัสผ่าน</p>
      </v-card-subtitle>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="currentPassword"
            :rules="[rules.required]"
            label="รหัสผ่านปัจจุบัน"
            type="password"
          ></v-text-field>

          <v-text-field
            v-model="newPassword"
            :rules="[rules.required, rules.password]"
            label="รหัสผ่านใหม่"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" text @click="closeModal">ยกเลิก</v-btn>
        <v-btn color="green" text @click="changePassword" :disabled="!valid">บันทึก</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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
      settingsModal: this.value,  // ใช้ prop value เพื่อควบคุม modal
      currentPassword: "",
      newPassword: "",
      valid: false,
      rules: {
        required: (value) => !!value || "กรุณากรอกข้อมูล",
        password: (value) => (value && value.length >= 6) || "รหัสผ่านต้องมีอย่างน้อย 6 ตัว",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('input', false);  // ส่งค่า false ไปยัง parent เพื่อปิด modal
    },
    changePassword() {
      if (this.$refs.form.validate()) {
        console.log("Changing password...");
        // ส่งข้อมูลการเปลี่ยนรหัสผ่านไปที่เซิร์ฟเวอร์
        // ตัวอย่างเช่น axios.post("/change-password", { currentPassword, newPassword })
        this.closeModal();  // ปิด Modal หลังจากบันทึก
      }
    }
  }
};
</script>

<style scoped>
.headline {
  font-size: 18px;
  font-weight: bold;
  color: #2e2e2e;
}

.v-card-title {
  background-color: #f4f4f4;
}

.v-btn {
  border-radius: 12px;
  font-weight: bold;
}
</style>
