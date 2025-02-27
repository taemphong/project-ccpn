<template>
  <v-container>
    <v-card class="pa-5">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <v-avatar size="120" class="light-blue lighten-1 white--text">
            <img :src="user.photo" alt="Profile Photo" />
          </v-avatar>
          <v-col cols="12">
            <v-btn color="primary" class="mt-2 mr-2" @click="uploadNewPhoto">Upload New Photo</v-btn>
            <v-btn color="grey" class="mt-2" @click="resetForm">Reset</v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" md="12" class="text-center">
          <v-form ref="form">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="คำนำหน้าชื่อ" placeholder="กรอกคำนำหน้าชื่อ" outlined
                  v-model="user.title"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="ชื่อจริง" placeholder="กรอกชื่อจริง" outlined
                  v-model="user.firstname"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="นามสกุล" placeholder="กรอกนามสกุล" outlined v-model="user.lastname"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="คำนำหน้าชื่อ (อังกฤษ)" placeholder="กรอกคำนำหน้าชื่อ (อังกฤษ)" outlined
                  v-model="user.title"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="ชื่อจริง (อังกฤษ)" placeholder="กรอกชื่อจริง (อังกฤษ)" outlined
                  v-model="user.firstname"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="นามสกุล (อังกฤษ)" placeholder="กรอกนามสกุล (อังกฤษ)" outlined
                  v-model="user.lastname"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="สัญชาติ" placeholder="กรอกสัญชาติ" outlined
                  v-model="user.nationality"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="เชื้อชาติ" placeholder="กรอกเชื้อชาติ" outlined
                  v-model="user.religion"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="ศาสนา" placeholder="กรอกศาสนา" outlined v-model="user.birthday"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="กรุ๊ปเลือด" placeholder="กรอกกรุ๊ปเลือด" outlined
                  v-model="user.nationality"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="เพศ" placeholder="กรอกเพศ" outlined v-model="user.religion"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="วัน-เดือน-ปี เกิด" placeholder="กรอก วัน-เดือน-ปี เกิด" outlined
                  v-model="user.birthday"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="บัตรประชาชน / หนังสือเดินทาง" placeholder="กรอกเลขบัตร" outlined
                  v-model="user.idCard"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="วันหมดอายุบัตรประชาชน / หนังสือเดินทาง"
                  placeholder="กรอกวันหมดอายุบัตรประชาชน / หนังสือเดินทาง" outlined
                  v-model="user.position"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="อีเมลที่ทำงาน" placeholder="กรอกอีเมลที่ทำงาน" outlined
                  v-model="user.email"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="บัตรประชาชน / หนังสือเดินทาง" placeholder="กรอกเลขบัตร" outlined
                  v-model="user.idCard"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="ตำแหน่งงาน" placeholder="กรอกตำแหน่งงาน" outlined
                  v-model="user.position"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="อีเมลที่ทำงาน" placeholder="กรอกอีเมลที่ทำงาน" outlined
                  v-model="user.email"></v-text-field>
              </v-col>
            </v-row>
            <v-row cols="12" md="12">
              <v-col>
                <v-text-field label="ที่อยู่ในการจัดส่งเอกสาร" placeholder="กรอกที่อยู่" outlined></v-text-field>
              </v-col>
            </v-row>
            <row cols="12" md="12">
              <div class="mt-5 mb-5">
                <v-btn color="success" class="mr-2" elevation="2" rounded @click="saveData">Save Changes</v-btn>
                <v-btn color="error" elevation="2" rounded @click="resetForm">Reset</v-btn>
              </div>
            </row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      user: {
        photo: 'https://source.boringavatars.com/marble/120',
        title: '',
        firstname: '',
        lastname: '',
        nationality: '',
        religion: '',
        idCard: '',
        birthday: '',
        position: '',
        email: '',
      },
    };
  },

  methods: {
    uploadPhoto(event) {
      const file = event.target.files[0];
      if (file) {
        this.user.photo = URL.createObjectURL(file);
      }
    },
    uploadNewPhoto() {
      this.$refs.fileInput.click();
    },
    resetForm() {
      this.user = {
        photo: 'https://source.boringavatars.com/marble/120',
        title: '',
        firstname: '',
        lastname: '',
        nationality: '',
        religion: '',
        idCard: '',
        birthday: '',
        position: '',
        email: '',
      };
    },
    saveData() {
      console.log('User data saved:', this.user);
    },
  },
};
</script>

<style scoped>
.v-avatar {
  margin-bottom: 10px;
}
</style>