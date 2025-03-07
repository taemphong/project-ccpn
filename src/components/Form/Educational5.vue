<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">ปริญญาเอก</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution5" :items="educationalInstitutions5" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification5" :items="educationalQualifications5" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy5" :items="fieldsOfStudy5" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="daygraduation5" :items="daygraduationOptions5" outlined placeholder="วันที่"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="monthgraduation5" :items="monthgraduationOptions5" outlined
              placeholder="เดือน"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="yeargraduation5" :items="yeargraduationOptions5" outlined placeholder="ปี"></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">Transcript({{ localSelected }})</div>
        <v-file-input v-model="Transcript5" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร
        </div>
        <v-file-input v-model="educational_qualifications5" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
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
      label: "ปริญญาเอก",
      value: "ปริญญาเอก",
      localSelected: false,

      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions5: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications5: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy4: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions5: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions5: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions5: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript5: null,
      educational_qualifications5: null,

      educational_institution5: null,
      educational_qualification5: null,
      fieldofstudy5: null,

      daygraduation5: null,
      monthgraduation5: null,
      yeargraduation5: null,
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

.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f0f2f7;
}

.v-text-field {
  border-radius: 10px;
}
</style>
