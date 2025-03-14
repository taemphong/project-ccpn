<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

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
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localSelected: false,
      educational_institution: null,
      educational_qualification: null,
      fieldofstudy: null,
      daygraduation: null,
      monthgraduation: null,
      yeargraduation: null,
      formData: {
        educational_institution: "",
        educational_qualification: "",
        fieldofstudy: "",
        graduationDate: "",
      },
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
    };
  },
  watch: {
    educational_institution(newVal) {
      this.formData.educational_institution = newVal;
    },
    educational_qualification(newVal) {
      this.formData.educational_qualification = newVal;
    },
    fieldofstudy(newVal) {
      this.formData.fieldofstudy = newVal;
    },
    daygraduation(newVal) {
      this.formData.graduationDate = `${newVal}-${this.monthgraduation}-${this.yeargraduation}`;
    },
    monthgraduation(newVal) {
      this.formData.graduationDate = `${this.daygraduation}-${newVal}-${this.yeargraduation}`;
    },
    yeargraduation(newVal) {
      this.formData.graduationDate = `${this.daygraduation}-${this.monthgraduation}-${newVal}`;
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
