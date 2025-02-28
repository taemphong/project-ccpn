<template>
    <v-container>
      <v-card  style="padding: 100px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row style="justify-content: center;">
          <h1 class="mb-16"> แก้ไขข้อมูลส่วนตัว</h1>
        </v-row>

        <v-row style="justify-content: center;">
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
            v-model="prefix"
            label="คำนำหน้าชื่อ"
            placeholder="นาย"
            outlined
          ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
              v-model="firstName"
              outlined
              label="ชื่อจริง"
              placeholder="กรอกชื่อจริง"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
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
            <v-text-field
            background-color="#f5f5f5"
              v-model="IDcardnumber"
              outlined
              label="เลขบัตรประชาชน"
              placeholder="กรอกเลขบัตรประชาชน"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
              v-model="Email"
              outlined
              label="อีเมล"
              placeholder="กรอกอีเมล"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
              v-model="Phonenumber"
              outlined
              label="เบอร์โทรศัพท์"
              placeholder="กรอกเบอร์โทรศัพท์"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row >
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
              v-model="Gender"
              outlined
              label="เพศ"
              placeholder="กรอกเพศ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
            background-color="#f5f5f5"
              v-model="Birthday"
              outlined
              label="วัน-เดือน-ปีเกิด"
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
  