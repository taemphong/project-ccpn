<template>
    <v-container>
      <v-card  style="padding: 100px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row style="justify-content: center;">
          <h1 class="mb-16"> แก้ไขข้อมูลส่วนตัว</h1>
        </v-row>

        <v-row style="justify-content: center;">
          <v-col cols="12" sm="4">
            <v-text-field
            label="คำนำหน้าชื่อ"
            placeholder="นาย"
            outlined
          ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="firstName"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="lastName"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row style="justify-content: center;">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="IDcardnumber"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="Email"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="Phonenumber"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row >
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="Gender"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="Birthday"
              outlined
              color="grey lighten-2"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-container class="d-flex justify-center align-center">
  <v-row justify="center" >
    <v-col cols="auto" class="mx-4" >
      <v-btn color="success">
        Submit
      </v-btn>
    </v-col>
    <v-col cols="auto" class="mx-4" >
      <v-btn color="error">
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
        lastName: ''
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  