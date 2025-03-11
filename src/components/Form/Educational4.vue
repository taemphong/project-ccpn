<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">ปริญญาโท</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution4" :items="educationalInstitutions4" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification4" :items="educationalQualifications4" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy4" :items="fieldsOfStudy4" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="daygraduation4" :items="daygraduationOptions4" outlined placeholder="วันที่"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="monthgraduation4" :items="monthgraduationOptions4" outlined
              placeholder="เดือน"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="yeargraduation4" :items="yeargraduationOptions4" outlined placeholder="ปี"></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">Transcript({{ localSelected }})</div>
        <v-file-input v-model="Transcript4" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร
        </div>
        <v-file-input v-model="educational_qualifications4" outlined placeholder="File input"></v-file-input>
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
      label: "ปริญญาโท",
      value: "ปริญญาโท",
      localSelected: false,

      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions4: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications4: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy4: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions4: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions4: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions4: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript4: null,
      educational_qualifications4: null,

      educational_institution4: null,
      educational_qualification4: null,
      fieldofstudy4: null,

      daygraduation4: null,
      monthgraduation4: null,
      yeargraduation4: null,
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
