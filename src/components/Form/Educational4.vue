<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">ปริญญาโท</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution4" :items="educationalInstitutions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification4" :items="educationalQualifications" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy4" :items="fieldsOfStudy" outlined></v-select>
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
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "ปริญญาโท",
      value: "ปริญญาโท",

      localSelected: false,
      educational_institution4: null,
      educational_qualification4: null,
      fieldofstudy4: null,
      daygraduation: null,
      monthgraduation: null,
      yeargraduation: null,
      formData: {
        educational_institution4: "",
        educational_qualification4: "",
        fieldofstudy4: "",
        graduationDate4: "",
      },
      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
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
    // คอยจับการเปลี่ยนแปลงของข้อมูลใน formData
    educational_institution4(newVal) {
      this.formData.educational_institution4 = newVal;
    },
    educational_qualification4(newVal) {
      this.formData.educational_qualification4 = newVal;
    },
    fieldofstudy4(newVal) {
      this.formData.fieldofstudy4 = newVal;
    },
    daygraduation(newVal) {
      this.formData.graduationDate4 = `${newVal}-${this.monthgraduation}-${this.yeargraduation}`;
    },
    monthgraduation(newVal) {
      this.formData.graduationDate4 = `${this.daygraduation}-${newVal}-${this.yeargraduation}`;
    },
    yeargraduation(newVal) {
      this.formData.graduationDate4 = `${this.daygraduation}-${this.monthgraduation}-${newVal}`;
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