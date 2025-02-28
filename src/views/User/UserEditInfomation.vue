<template>
    <v-container>
      <v-card  style="padding: 100px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row style="justify-content: center;">
          <h1 class="mb-16"> แก้ไขข้อมูลส่วนตัว</h1>
        </v-row>

        <v-row style="justify-content: center;">
          <v-col cols="12" sm="4">
            <div>คำนำหน้าชื่อ</div>
            <v-text-field
            background-color="#f5f5f5"
            v-model="prefix"
            placeholder="นาย/นางสาว/นาง"
            outlined
          ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <div>ชื่อจริง</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="firstName"
              outlined
              placeholder="กรอกชื่อจริง"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <div>นามสกุล</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="lastName"
              outlined
              label="นามสกุล"
              placeholder="กรอกนามสกุล"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row style="justify-content: center;">
          <v-col cols="12" sm="4">
            <div>เลขบัตรประชาชน</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="IDcardnumber"
              outlined
              placeholder="กรอกเลขบัตรประชาชน"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <div>อีเมล</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="Email"
              outlined
              placeholder="กรอกอีเมล"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <div>เบอร์โทรศัพท์</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="Phonenumber"
              outlined
              placeholder="กรอกเบอร์โทรศัพท์"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row >
          <v-col cols="12" sm="4">
            <div>เพศ</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="Gender"
              outlined
              placeholder="กรอกเพศ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <div>วัน-เดือน-ปีเกิด</div>
            <v-text-field
            background-color="#f5f5f5"
              v-model="Birthday"
              outlined
              placeholder="กรอกวัน-เดือน-ปีเกิด"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-container class="d-flex justify-center align-center">
  <v-row justify="center" >
    <v-col cols="auto" class="mx-4" >
      <v-btn color="success" large>
        Submit
      </v-btn>
    </v-col>
    <v-col cols="auto" class="mx-4" >
      <v-btn color="error " large>
        Cancle
      </v-btn>
    </v-col>
  </v-row>
</v-container>

        
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prefix: '',
        firstName: '',
        lastName: '',
        IDcardnumber: '',
        Email: '',
        Phonenumber: '',
        Gender: '',
        Birthday: ''
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  