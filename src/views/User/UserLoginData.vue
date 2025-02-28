<template>
  <v-container>
    <v-card elevation="3" class="pa-5" style="border-radius: 20px;">
      <v-row>
        <v-container class="pa-12">
          <v-col cols="12" md="6" class="text-left">
            <v-avatar class="avatar-wrapper light-blue lighten-1 white--text"
              style="width: 180px; height: 240px; border-radius: 16px; position: relative; overflow: hidden;">
              <img :src="user.photo" alt="Profile Photo" class="avatar-image" />

              <!-- เมื่อ hover จะแสดง overlay -->
              <div class="avatar-overlay">
                <v-btn icon color="primary" class="upload-btn" @click="uploadNewPhoto">
                  <v-icon>mdi-upload</v-icon>
                </v-btn>
                <v-btn icon color="error" class="delete-btn" @click="removePhoto">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-avatar>
            <div class="text-subtitle-1 text-medium-emphasis">คำนำหน้าชื่อ</div>

          </v-col>
          <v-col cols="12" md="12" class="">
            <v-form ref="form">
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">คำนำหน้าชื่อ</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกคำนำหน้าชื่อ" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ชื่อจริง</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกชื่อจริง" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">นามสกุล</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกนามสกุล" outlined
                    v-model="user.title"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">คำนำหน้าชื่อ (อังกฤษ)</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกคำนำหน้าชื่อ (อังกฤษ)"
                    outlined v-model="user.title"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ชื่อจริง (อังกฤษ)</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกชื่อจริง (อังกฤษ)"
                    outlined v-model="user.firstname"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">นามสกุล (อังกฤษ)</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกนามสกุล (อังกฤษ)" outlined
                    v-model="user.lastname"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">สัญชาติ</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกสัญชาติ" outlined
                    v-model="user.nationality"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">เชื้อชาติ</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกเชื้อชาติ" outlined
                    v-model="user.religion"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ศาสนา</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกศาสนา" outlined
                    v-model="user.birthday"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">กรุ๊ปเลือด</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกกรุ๊ปเลือด" outlined
                    v-model="user.nationality"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">เพศ</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกเพศ" outlined
                    v-model="user.religion"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">วัน-เดือน-ปี เกิด</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอก วัน-เดือน-ปี เกิด"
                    outlined v-model="user.birthday"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">บัตรประชาชน / หนังสือเดินทาง</div>
                  <v-text-field class="textfield" background-color="#f0f2f7"
                    placeholder="กรอกเลขบัตรประชาชน / หนังสือเดินทาง" outlined v-model="user.idCard"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">วันหมดอายุ</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกวันหมดอายุ" outlined
                    v-model="user.position"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ตำแหน่งงาน</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกตำแหน่งงาน" outlined
                    v-model="user.email"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">ประเภทหน่วยงาน</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกประเภทหน่วยงาน" outlined
                    v-model="user.idCard"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">สถานที่ทำงาน</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกสถานที่ทำงาน" outlined
                    v-model="user.position"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">อีเมลที่ทำงาน</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกอีเมลที่ทำงาน" outlined
                    v-model="user.email"></v-text-field>
                </v-col>
              </v-row>
              <v-row cols="12" md="12">
                <v-col>
                  <div class="text-subtitle-1 text-medium-emphasis">ที่อยู่ในการจัดส่งเอกสาร</div>
                  <v-text-field class="textfield" background-color="#f0f2f7" placeholder="กรอกที่อยู่ในการจัดส่งเอกสาร"
                    outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row cols="12" md="12">
                <div class="mt-5 mb-5 justify-center">
                  <v-btn color="success" x-large class="mr-2" elevation="2" rounded @click="saveData">Save
                    Changes</v-btn>
                  <v-btn color="error" x-large elevation="2" rounded @click="resetForm">Reset</v-btn>
                </div>
              </v-row>
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
    uploadNewPhoto() {
      this.$refs.fileInput.click();
    },
    removePhoto() {
      this.user.photo = 'https://picsum.photos/200/300';
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

.avatar-wrapper {
  transition: box-shadow 0.3s ease-in-out;
}

.avatar-wrapper:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.avatar-wrapper:hover .avatar-overlay {
  opacity: 1;
}

.upload-btn,
.delete-btn {
  background: rgba(255, 255, 255, 0.8);
  transition: transform 0.2s ease-in-out;
}

.upload-btn:hover,
.delete-btn:hover {
  transform: scale(1.1);
}
</style>