<template>
  <v-container>
    <v-card elevation="3" class="pa-5 mx-auto" style="border-radius: 20px; width: 1280px;">
      <v-row>
        <v-container class="pa-12">
          <v-row class="text-left" align="center">
            <!-- Avatar -->
            <v-col cols="auto">
              <v-avatar class="light-blue lighten-1 white--text mb-12"
                style="width: 220px; height: 280px; border-radius: 16px;">
                <img :src="user.photo" alt="Profile Photo" style="width: 100%; height: 100%; object-fit: cover;" />
              </v-avatar>
            </v-col>

            <!-- ปุ่ม -->
            <v-col cols="auto" class="d-flex flex-column">
              <v-btn color="primary" large elevation="2" rounded class="mb-2" @click="uploadNewPhoto">
                Upload Photo
              </v-btn>
              <v-btn color="error" elevation="2" rounded @click="resetForm">
                Reset
              </v-btn>
            </v-col>
          </v-row>

          <v-col cols="12" md="12" class="">
            <v-form ref="form">
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">คำนำหน้าชื่อ:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกคำนำหน้าชื่อ" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ชื่อจริง:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกชื่อจริง" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">นามสกุล:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกนามสกุล" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">คำนำหน้าชื่อ (อังกฤษ):</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกคำนำหน้าชื่อ (อังกฤษ)"
                    outlined v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ชื่อจริง (อังกฤษ):</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกชื่อจริง (อังกฤษ)"
                    outlined v-model="user.firstname"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">นามสกุล (อังกฤษ):</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกนามสกุล (อังกฤษ)" outlined
                    v-model="user.lastname"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">สัญชาติ:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกสัญชาติ" outlined
                    v-model="user.nationality"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">เชื้อชาติ:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกเชื้อชาติ" outlined
                    v-model="user.religion"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ศาสนา:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกศาสนา" outlined
                    v-model="user.birthday"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">กรุ๊ปเลือด:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกกรุ๊ปเลือด" outlined
                    v-model="user.nationality"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">เพศ:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกเพศ" outlined
                    v-model="user.religion"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">วัน-เดือน-ปี เกิด:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอก วัน-เดือน-ปี เกิด"
                    outlined v-model="user.birthday"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">บัตรประชาชน / หนังสือเดินทาง:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7"
                    placeholder="กรอกเลขบัตรประชาชน / หนังสือเดินทาง" outlined v-model="user.idCard"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">วันหมดอายุ:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกวันหมดอายุ" outlined
                    v-model="user.position"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ตำแหน่งงาน:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกตำแหน่งงาน" outlined
                    v-model="user.email"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ประเภทหน่วยงาน:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกประเภทหน่วยงาน" outlined
                    v-model="user.idCard"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">สถานที่ทำงาน:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกสถานที่ทำงาน" outlined
                    v-model="user.position"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">อีเมลที่ทำงาน:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกอีเมลที่ทำงาน" outlined
                    v-model="user.email"></v-text-field>
                </v-col>
              </v-row>
              <v-row cols="12" md="12">
                <v-col>
                  <div class="text-subtitle-1 text-medium-emphasis">ที่อยู่ในการจัดส่งเอกสาร:</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกที่อยู่ในการจัดส่งเอกสาร"
                    outlined></v-text-field>
                </v-col>
              </v-row>

              <div class="mt-5 mb-5 text-center">
                <v-btn style="background-color: #5c8a6e; color: white;" x-large class="mr-2" elevation="2" rounded
                  @click="saveData">Save
                  Changes</v-btn>
                <v-btn color="error" x-large elevation="2" rounded class="text-white" @click="resetForm">Reset</v-btn>
              </div>

            </v-form>
          </v-col>
        </v-container>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      user: {
        photo: 'https://picsum.photos/200/300',
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
        photo: 'https://picsum.photos/200/300',
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

.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 2px;
}

.botton-group1 {
  margin-top: auto;
  justify-content: center;
  align-items: center;
}
</style>