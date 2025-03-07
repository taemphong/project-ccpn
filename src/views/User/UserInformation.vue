<template>
  <v-container>
    <v-card elevation="3" class="pa-5 mx-auto" style="border-radius: 14px; width: 1680px;">
      <v-row>
        <v-container class="pa-12">
          <v-row class="text-left" align="center">
            <!-- Avatar -->
            <v-col cols="auto">
              <v-avatar class="light-blue lighten-1 white--text mb-12"
                style="width: 180px; height: 220px; border-radius: 16px;">
                <img :src="user.photo" alt="Profile Photo" style="width: 100%; height: 100%; object-fit: cover;" />
              </v-avatar>
            </v-col>

            <!-- ปุ่ม -->
            <v-col cols="2" class="d-flex justify-space-between">
              <v-btn large elevation="2" rounded class="upload-btn mr-2 " @click="uploadNewPhoto">
                อัพโหลดรูปภาพ
              </v-btn>
              <v-btn large elevation="2" rounded class="reset-btn text-white mb-2" @click="resetForm">
                รีเซ็ต
              </v-btn>
            </v-col>
          </v-row>

          <v-col cols="12" md="12" class="">
            <v-form ref="form">
              <v-row>
                <v-col cols="12" md="4">
                  <div>คำนำหน้าชื่อ:</div>
                  <v-text-field class="textfield" placeholder="กรอกคำนำหน้าชื่อ" outlined
                    v-model="user.mp_name1"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>ชื่อจริง:</div>
                  <v-text-field class="textfield" placeholder="กรอกชื่อจริง" outlined
                    v-model="user.mp_name2"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>นามสกุล:</div>
                  <v-text-field class="textfield" placeholder="กรอกนามสกุล" outlined
                    v-model="user.mp_name3"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div>คำนำหน้าชื่อ (อังกฤษ):</div>
                  <v-text-field class="textfield" placeholder="กรอกคำนำหน้าชื่อ (อังกฤษ)" outlined
                    v-model="user.mp_name1_eng"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>ชื่อจริง (อังกฤษ):</div>
                  <v-text-field class="textfield" placeholder="กรอกชื่อจริง (อังกฤษ)" outlined
                    v-model="user.mp_name2_eng"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>นามสกุล (อังกฤษ):</div>
                  <v-text-field class="textfield" placeholder="กรอกนามสกุล (อังกฤษ)" outlined
                    v-model="user.mp_name3_eng"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div>สัญชาติ:</div>
                  <v-text-field class="textfield" placeholder="กรอกสัญชาติ" outlined
                    v-model="user.mp_nationality"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>เชื้อชาติ:</div>
                  <v-text-field class="textfield" placeholder="กรอกเชื้อชาติ" outlined
                    v-model="user.mp_ethnicity"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>ศาสนา:</div>
                  <v-text-field class="textfield" placeholder="กรอกศาสนา" outlined
                    v-model="user.mp_religion"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div>กรุ๊ปเลือด:</div>
                  <v-text-field class="textfield" placeholder="กรอกกรุ๊ปเลือด" outlined
                    v-model="user.mp_blood"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>เพศ:</div>
                  <v-text-field class="textfield" placeholder="กรอกเพศ" outlined
                    v-model="user.mp_gender"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>วัน-เดือน-ปี เกิด:</div>
                  <v-text-field class="textfield" placeholder="กรอก วัน-เดือน-ปี เกิด" outlined
                    v-model="user.mp_birthday"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div>บัตรประชาชน / หนังสือเดินทาง:</div>
                  <v-text-field class="textfield" placeholder="กรอกเลขบัตรประชาชน / หนังสือเดินทาง" outlined
                    v-model="user.mp_customer_id"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>วันหมดอายุ:</div>
                  <v-text-field class="textfield" placeholder="กรอกวันหมดอายุ" outlined
                    v-model="user.mp_dateexp"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>ตำแหน่งงาน:</div>
                  <v-text-field class="textfield" placeholder="กรอกตำแหน่งงาน" outlined
                    v-model="user.mp_position"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div>ประเภทหน่วยงาน:</div>
                  <v-text-field class="textfield" placeholder="กรอกประเภทหน่วยงาน" outlined
                    v-model="user.mp_company_type"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>สถานที่ทำงาน:</div>
                  <v-text-field class="textfield" placeholder="กรอกสถานที่ทำงาน" outlined
                    v-model="user.mp_company"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div>อีเมลที่ทำงาน:</div>
                  <v-text-field class="textfield" placeholder="กรอกอีเมลที่ทำงาน" outlined
                    v-model="user.mp_email"></v-text-field>
                </v-col>
              </v-row>
              <v-row cols="12" md="12">
                <v-col>
                  <div>ที่อยู่ในการจัดส่งเอกสาร:</div>
                  <v-text-field class="textfield" placeholder="กรอกที่อยู่ในการจัดส่งเอกสาร" outlined
                    v-model="user.moa_address"></v-text-field>
                </v-col>
              </v-row>

              <div class="mt-5 mb-5 text-center">
                <v-btn large elevation="2" class="mr-2 save-btn" @click="saveData">บันทึก</v-btn>
                <v-btn large elevation="2" class="reset-btn" @click="resetForm">ล้าง</v-btn>
              </div>

            </v-form>
          </v-col>
        </v-container>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        photo: 'https://picsum.photos/200/300',
        mp_name1: '',
        mp_name2: '',
        mp_name3: '',
        mp_name1_eng: '',
        mp_name2_eng: '',
        mp_name3_eng: '',
        mp_nationality: '',
        mp_ethnicity: '',
        mp_religion: '',
        mp_blood: '',
        mp_gender: '',
        mp_birthday: '',
        mp_customer_id: '',
        mp_dateexp: '',
        mp_position: '',
        mp_company_type: '',
        mp_company: '',
        mp_email: '',
        moa_address: '',
      },
    };
  },

  mounted() {
    this.fetchUserData();
  },

  methods: {
    async fetchUserData() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) return;

      const userData = JSON.parse(authToken);
      const payload = { CustomerID: userData.ml_customer_id };

      try {
        const response = await axios.post('http://localhost:8002/ccph/api/test-get-info-member', payload);
        if (response.data.code === 200 && response.data.data.length > 0) {
          this.user = { ...this.user, ...response.data.data[0] };
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },

    resetForm() {
      this.fetchUserData();
    },

    saveData() {
      console.log('User data saved:', this.user);
    },

    uploadNewPhoto() {
      console.log('Upload photo button clicked');
    },
  },
};
</script>
<style scoped>
.v-avatar {
  margin-bottom: 10px;
}

.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f0f2f7;
}

.botton-group1 {
  margin-top: auto;
  justify-content: center;
  align-items: center;
}

.textfield {
  width: 100%;
}

.upload-btn {
  color: white !important;
  background-color: rgb(95, 106, 255) !important;
  width: 150px;
  border-radius: 10px;
  font-size: 16px !important;
}

.reset-btn {
  color: white !important;
  background-color: #bebebe !important;
  width: 100px;
  border-radius: 10px;
  font-size: 16px !important;
}

.save-btn {
  color: white !important;
  background-color: #2a8f50 !important;
  width: 150px;
  border-radius: 10px;
  font-size: 16px !important;
}
</style>