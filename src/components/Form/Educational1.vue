<template>
    <div>
      <v-checkbox
        v-model="localSelected"
        @change="updateSelected"
        :label="label"
        :value="value"
      ></v-checkbox>
  
      <p v-if="localSelected">ประกาศนียบัตร</p>
      <v-row v-if="localSelected">
        <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution" :items="educationalInstitutions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification" :items="educationalQualifications" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy" :items="fieldsOfStudy" outlined></v-select>
      </v-col>

  <v-col cols="12" md="6">
  <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
  <v-row>
    <v-col cols="12" md="4">
      <v-select v-model="daygraduation" :items="daygraduationOptions" outlined></v-select>
    </v-col>
    <v-col cols="12" md="4">
      <v-select v-model="monthgraduation" :items="monthgraduationOptions" outlined></v-select>
    </v-col>
    <v-col cols="12" md="4">
      <v-select v-model="yeargraduation" :items="yeargraduationOptions" outlined></v-select>
    </v-col>
  </v-row>
</v-col>

<v-col cols="12" md="12">
    <div class="mb-3 required">Transcript({{ localSelected }})</div>
    <v-file-input v-model="Transcript" outlined placeholder="File input"></v-file-input>
    <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 
</v-col>

<v-col cols="12" md="12">
    <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร </div>
    <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
    <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 
</v-col>
 
      
<v-col cols="12" md="12">
    <h2 class="mb-5" >การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่างๆ (สมาคมที่เกี่ยวข้องเป็นหลัก)</h2>
        <div class="mb-3 required">โปรดระบุ (ถ้ามี) </div>
        <v-text-field v-model="educational_institution" :items="educationalInstitutions" outlined></v-text-field>
      </v-col>

      <v-col cols="12" md="12">
    <h2 class="mb-5" >แนบหลักฐานประกอบการพิจารณา</h2>
        <div class="mb-3 required">ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก ซึ่งถ่ายไว้แล้วไม่เกิน 6 เดือน ขนาด 1 นิ้ว </div>
        <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png และ .jpeg</div> 
        
        <div class="mb-3 required">สำเนาทะเบียนบ้าน </div>
        <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 

        <div class="mb-3 required">สำเนาบัตรประจำตัวประชาชน </div>
        <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 

        <div class="mb-3 required">ใบรับรองแพทย์ </div>
        <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 

        <div class="mb-3 required">ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่นๆ (ถ้ามี) </div>
        <v-file-input v-model="educational_qualifications" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ .pdf</div> 
      </v-col>


</v-row>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selected: Array, 
    },
    data() {
    return {
      label: "ประกาศนียบัตร",
      value: "ประกาศนียบัตร",
      localSelected: false,

      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript: null,
      educational_qualifications: null,
    };
  },
    watch: {
      selected: {
        handler(newVal) {
          this.localSelected = newVal.includes(this.value); 
        },
        immediate: true,
      },
    },
    methods: {
      updateSelected() {
        let newSelected = [...this.selected]; 
        if (this.localSelected) {
   
          if (!newSelected.includes(this.value)) {
            newSelected.push(this.value);
          }
        } else {
 
          newSelected = newSelected.filter((item) => item !== this.value);
        }
        this.$emit("update:selected", newSelected);
      },
    },
  };
  </script>

<style scoped>
.required::after {
content: '*';
color: red;
}


</style>
  