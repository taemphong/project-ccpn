<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">ประกาศนียบัตร</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution1" :items="educationalInstitutions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification1" :items="educationalQualifications" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy1" :items="fieldsOfStudy" outlined></v-select>
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
        <div class="mb-3 required">Transcript</div>
        <v-file-input v-model="transcript1" outlined placeholder="File input" multiple show-size
          :accept="['image/jpeg', 'image/png', 'application/pdf']" @change="onFileChange"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">
          หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล .jpg .png .jpeg และ .pdf
        </div>
      </v-col>
      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญาเอก *</div>
        <v-file-input v-model="showing_educational_qualifications1" outlined placeholder="File input" multiple show-size
          :accept="['image/jpeg', 'image/png', 'application/pdf']" @change="onFileChange"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">
          หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล .jpg .png .jpeg และ .pdf
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "ประกาศนียบัตร",
      value: "ประกาศนียบัตร",

      localSelected: false,
      educational_institution1: null,
      educational_qualification1: null,
      transcript1: [],
      showing_educational_qualifications1: [],
      daygraduation: null,
      monthgraduation: null,
      yeargraduation: null,
      fieldofstudy1: null,
      formData: {
        educational_institution1: "",
        educational_qualification1: "",
        fieldofstudy1: "",
        graduationDate1: "",
        transcript1: "",
        showing_educational_qualifications1: "",

      },
      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications: ["ประกาศนียบัตร", "อนุปริญญา", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions: [
        { text: "มกราคม", value: 1 },
        { text: "กุมภาพันธ์", value: 2 },
        { text: "มีนาคม", value: 3 },
        { text: "เมษายน", value: 4 },
        { text: "พฤษภาคม", value: 5 },
        { text: "มิถุนายน", value: 6 },
        { text: "กรกฎาคม", value: 7 },
        { text: "สิงหาคม", value: 8 },
        { text: "กันยายน", value: 9 },
        { text: "ตุลาคม", value: 10 },
        { text: "พฤศจิกายน", value: 11 },
        { text: "ธันวาคม", value: 12 },
      ],
      yeargraduationOptions: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
    };
  },

  watch: {
    educational_institution1(newVal) {
      this.formData.educational_institution1 = newVal;
    },
    educational_qualification1(newVal) {
      this.formData.educational_qualification1 = newVal;
    },
    fieldofstudy1(newVal) {
      this.formData.fieldofstudy1 = newVal;
    },
    daygraduation(newVal) {
      this.formData.graduationDate1 = `${newVal}-${this.monthgraduation}-${this.yeargraduation}`;
    },
    monthgraduation(newVal) {
      this.formData.graduationDate1 = `${this.daygraduation}-${newVal}-${this.yeargraduation}`;
    },
    yeargraduation(newVal) {
      this.formData.graduationDate1 = `${this.daygraduation}-${this.monthgraduation}-${newVal}`;
    },
    transcript1(newVal) {
      if (newVal instanceof File) {
        this.formData.transcript1 = newVal; // เก็บไฟล์ทั้งก้อน
      } else if (Array.isArray(newVal) && newVal.length > 0) {
        this.formData.transcript1 = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
      } else {
        this.formData.transcript1 = null;
      }
      console.log("ข้อมูลไฟล์:", this.formData.transcript1);
    },
    showing_educational_qualifications1(newVal) {
      if (newVal instanceof File) {
        this.formData.showing_educational_qualifications1 = newVal; // เก็บไฟล์ทั้งก้อน
      } else if (Array.isArray(newVal) && newVal.length > 0) {
        this.formData.showing_educational_qualifications1 = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
      } else {
        this.formData.showing_educational_qualifications1 = null;
      }
      console.log("ข้อมูลไฟล์:", this.formData.showing_educational_qualifications1);
    },

  },
  methods: {
    updateSelected() {
      // เพิ่มการอัพเดทเมื่อ checkbox เปลี่ยน
      this.$emit('input', this.formData); // ส่งข้อมูลกลับไปยัง parent component
    },
  },
};
</script>

<style scoped>
.required::after {
  content: '*';
  color: red;
}

.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f0f2f7;
}

.v-text-field {
  border-radius: 10px;
}
</style>