<template>
  <div>
    <v-checkbox v-model="localSelected" color="light-green" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">อนุปริญญา</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution2" :items="educationalInstitutions2" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification2" :items="educationalQualifications2" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy2" :items="fieldsOfStudy2" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="daygraduation2" :items="daygraduationOptions2" outlined placeholder="วันที่"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="monthgraduation2" :items="monthgraduationOptions2" outlined
              placeholder="เดือน"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="yeargraduation2" :items="yeargraduationOptions2" outlined placeholder="ปี"></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">Transcript({{ localSelected }})</div>
        <v-file-input v-model="Transcript2" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร
        </div>
        <v-file-input v-model="educational_qualifications2" outlined placeholder="File input"></v-file-input>
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
      label: "อนุปริญญา",
      value: "อนุปริญญา",
      localSelected: false,

      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions2: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications2: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy2: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions2: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions2: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions2: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript2: null,
      educational_qualifications2: null,

      educational_institution2: null,
      educational_qualification2: null,
      fieldofstudy2: null,

      daygraduation2: null,
      monthgraduation2: null,
      yeargraduation2: null,
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
