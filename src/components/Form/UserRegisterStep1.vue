<template> 
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>ข้อมูลส่วนตัว</h2>
        </v-col>
        <v-col cols="12" md="4">
         <div class="mb-3 required">คำนำหน้าชื่อ </div>
        <v-select v-model="prefixTh" :items="prefixOptions" outlined></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <div class="mb-3 required">ชื่อ </div>
          <v-text-field v-model="firstNameTh" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">นามสกุล </div>
          <v-text-field v-model="lastNameTh" outlined></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-3 required">คำนำหน้าชื่อ (อังกฤษ) </div>
          <v-select v-model="prefixEn" :items="prefixOptionsEn" outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">ชื่อ (อังกฤษ) </div>
          <v-text-field v-model="firstNameEn" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">นามสกุล (อังกฤษ) </div>
          <v-text-field v-model="lastNameEn" outlined></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-3 required">เพศ </div>
          <v-select v-model="gender" :items="genderOptions" outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">สัญชาติ </div>
          <v-text-field v-model="nationality" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">เชื้อชาติ </div>
          <v-text-field v-model="ethnicity" outlined></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-3 required">ศาสนา </div>
          <v-text-field v-model="religion" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">หมู่โลหิต </div>
          <v-select v-model="bloodType" :items="bloodTypeOptions" outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">ประเภทหน่วยงาน </div>
          <v-select v-model="organizationType" :items="organizationTypeOptions" outlined></v-select>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-3 required">ตำแหน่ง </div>
          <v-select v-model="position" :items="positionOptions" outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">โทรศัพท์มือถือ </div>
          <v-text-field v-model="phoneNumber" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-3 required">อีเมล </div>
          <v-text-field v-model="email" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-4 ml-1">
  วัน-เดือน-ปีเกิด
</v-row>
<v-row>
  <v-col cols="12" md="3">
    <div class="mb-3 required">วัน </div>
    <v-select v-model="day" :items="dayOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">เดือน </div>
    <v-select v-model="month" :items="monthOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">ปี </div>
    <v-select v-model="year" :items="yearOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">เลขบัตรประชาชน </div>
    <v-text-field v-model="idCard" outlined></v-text-field>
  </v-col>
</v-row>


<v-row class="mt-4 ml-1">
  วันหมดอายุบัตร
</v-row>
<v-row>
  <v-col cols="12" md="3">
    <div class="mb-3 required">วัน </div>
    <v-select v-model="expireDay" :items="dayOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">เดือน </div>
    <v-select v-model="expireMonth" :items="monthOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">ปี </div>
    <v-select v-model="expireYear" :items="yearOptions2" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3 required">ออกโดย </div>
    <v-text-field v-model="issuedBy" outlined></v-text-field>
  </v-col>
</v-row>


<v-row>
  <v-col cols="12">
    <h2>ที่อยู่ตามทะเบียนบ้าน</h2>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="12">
    <div class="mb-3 required">ชื่อสถานที่ทำงาน </div>
    <v-text-field v-model="workplaceName" outlined></v-text-field>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="4">
    <div class="mb-3 required">จังหวัด </div>
    <v-select v-model="province" :items="provinceOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">อำเภอ/เขต </div>
    <v-select v-model="district" :items="districtOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">ตำบล/แขวง </div>
    <v-select v-model="subdistrict" :items="subdistrictOptions" outlined></v-select>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="4">
    <div class="mb-3 required">รหัสไปรษณีย์ </div>
    <v-text-field v-model="postalCode" outlined></v-text-field>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">โทรศัพท์ที่ทำงาน </div>
    <v-text-field v-model="workPhone" outlined></v-text-field>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">อีเมล </div>
    <v-text-field v-model="jobEmail" outlined></v-text-field>
  </v-col>
</v-row>


     <v-row>
  <v-col cols="12">
    <h2>ที่อยู่ปัจจุบัน </h2>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="12">
    <div class="mb-3 required">ที่อยู่ </div>
    <v-text-field v-model="currentAddress" outlined></v-text-field>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="4">
    <div class="mb-3 required">จังหวัด </div>
    <v-select v-model="currentProvince" :items="currentprovinceOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">อำเภอ/เขต </div>
    <v-select v-model="currentDistrict" :items="currentdistrictOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">ตำบล/แขวง </div>
    <v-select v-model="currentSubdistrict" :items="currentsubdistrictOptions" outlined></v-select>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="4">
    <div class="mb-3 required">รหัสไปรษณีย์ </div>
    <v-text-field v-model="currentPostalCode" outlined></v-text-field>
  </v-col>
  <v-col cols="12" md="4">
    <div class="mb-3 required">โทรศัพท์มือถือ </div>
    <v-text-field v-model="mobilePhone" outlined></v-text-field>
  </v-col>
</v-row>



    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // คำนำหน้าชื่อภาษาไทย
    prefixTh: '',
    prefixOptions: ['นาย', 'นาง', 'นางสาว'],
  
        // คำนำหน้าชื่อภาษาอังกฤษ
    prefixEn: '',
    prefixOptionsEn: ['Mr.', 'Mrs.', 'Miss'],
  
        // ชื่อและนามสกุล
    firstNameTh: '',
    lastNameTh: '',
    firstNameEn: '',
    lastNameEn: '',
  
        // เพศ
    gender: '',
    genderOptions: ['ชาย', 'หญิง', 'อื่น ๆ'],
  
        // สัญชาติ & เชื้อชาติ
    nationality: '',
    ethnicity: '',
  
        // ศาสนา
    religion: '',
  
        // หมู่โลหิต
    bloodType: '',
    bloodTypeOptions: ['A', 'B', 'AB', 'O'],
  
        // ประเภทหน่วยงาน
    organizationType: '',
    organizationTypeOptions: ['ภาครัฐ', 'เอกชน', 'รัฐวิสาหกิจ', 'อื่น ๆ'],
  
        // ตำแหน่ง
    position: '',
    positionOptions: ['พนักงาน', 'ผู้จัดการ', 'ผู้บริหาร'],
  
        // เบอร์โทรศัพท์ & อีเมล
     phoneNumber: '',
    email: '',
    day: '',
    month: '',
    year: '',
    idCard: '',
    dayOptions: Array.from({ length: 31 }, (_, i) => i + 1), // 1-31
    monthOptions: [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ],
    yearOptions: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
    expireDay: '',
    expireMonth: '',
    expireYear: '',
    issuedBy: '',
    yearOptions2: Array.from({ length: 50 }, (_, i) => new Date().getFullYear() + i),
    workplaceName: '',
    province: '',
    district: '',
    subdistrict: '',
    postalCode: '',
    workPhone: '',
    jobEmail: '',
    provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
    districtOptions: [],
    subdistrictOptions: [],
    
    currentAddress: '',
    currentProvince: null,
    currentDistrict: null,
    currentSubdistrict: null,
    currentPostalCode: '',
    mobilePhone: '',
    currentprovinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
    currentdistrictOptions: [],
    currentsubdistrictOptions: [],
    


    
      };
    },
  };


    
  </script>
  
  <style scoped>
  .required::after {
  content: '*';
  color: red;
}

  </style>
  