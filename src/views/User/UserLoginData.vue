<template>
  <v-container>
    <v-card class="pa-5">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <v-avatar size="120">
            <img :src="user.photo" alt="Profile Photo" />
          </v-avatar>
          <v-file-input label="Upload New photo" @change="uploadPhoto"></v-file-input>
          <v-btn color="primary" class="mt-2" @click="uploadNewPhoto">Upload New Photo</v-btn>
          <v-btn color="grey" class="mt-2" @click="resetForm">Reset</v-btn>
        </v-col>
        <v-col cols="12" md="12" class="text-center">
          <v-form ref="form">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="user.title" label="คำนำหน้าชื่อ"></v-text-field>
                <v-text-field v-model="user.firstname" label="ชื่อจริง"></v-text-field>
                <v-text-field v-model="user.lastname" label="นามสกุล"></v-text-field>
                <v-text-field v-model="user.nationality" label="สัญชาติ"></v-text-field>
                <v-text-field v-model="user.religion" label="ศาสนา"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="user.idCard" label="บัตรประชาชน"></v-text-field>
                <v-text-field v-model="user.birthday" label="วันเกิด" type="date"></v-text-field>
                <v-text-field v-model="user.position" label="ตำแหน่งงาน"></v-text-field>
                <v-text-field v-model="user.email" label="อีเมลที่ทำงาน"></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="saveData">Save Changes</v-btn>
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
        photo: 'https://via.placeholder.com/120',
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
        photo: 'https://via.placeholder.com/120',
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