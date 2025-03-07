<template>
  <div>
    <v-checkbox color="light-green" v-model="localSelected" @change="updateSelected" :label="label"
      :value="value"></v-checkbox>

    <p v-if="localSelected">ปริญญาตรี</p>
    <v-row v-if="localSelected">
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution3" :items="educationalInstitutions3" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification3" :items="educationalQualifications3" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy3" :items="fieldsOfStudy3" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="daygraduation3" :items="daygraduationOptions3" outlined placeholder="วันที่"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="monthgraduation3" :items="monthgraduationOptions3" outlined
              placeholder="เดือน"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="yeargraduation3" :items="yeargraduationOptions3" outlined placeholder="ปี"></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">Transcript({{ localSelected }})</div>
        <v-file-input v-model="Transcript3" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร
        </div>
        <v-file-input v-model="educational_qualifications3" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสถาบันสถานศึกษา </div>
        <v-select v-model="educational_institution33" :items="educationalInstitutions33" outlined></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกวุฒิการศึกษา </div>
        <v-select v-model="educational_qualification33" :items="educationalQualifications33" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">เลือกสาขาวิชา </div>
        <v-select v-model="fieldofstudy33" :items="fieldsOfStudy33" outlined></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3 required">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-select v-model="daygraduation33" :items="daygraduationOptions33" outlined
              placeholder="วันที่"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="monthgraduation33" :items="monthgraduationOptions33" outlined
              placeholder="เดือน"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="yeargraduation33" :items="yeargraduationOptions33" outlined placeholder="ปี"></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">Transcript({{ localSelected }}ใบที่ 2)</div>
        <v-file-input v-model="Transcript33" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf</div>
      </v-col>

      <v-col cols="12" md="12">
        <div class="mb-3 required">สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ประกาศนียบัตร
        </div>
        <v-file-input v-model="educational_qualifications33" outlined placeholder="File input"></v-file-input>
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
      label: "ปริญญาตรี",
      value: "ปริญญาตรี",
      localSelected: false,

      // 🔹 ตัวเลือกสำหรับ v-select
      educationalInstitutions3: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications3: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy3: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions3: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions3: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions3: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript3: null,
      educational_qualifications3: null,

      educational_institution3: null,
      educational_qualification3: null,
      fieldofstudy3: null,

      daygraduation3: null,
      monthgraduation3: null,
      yeargraduation3: null,

      educationalInstitutions33: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      educationalQualifications33: ["ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      fieldsOfStudy33: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "บริหารธุรกิจ", "ศิลปศาสตร์"],

      // 🔹 ตัวเลือกสำหรับวัน/เดือน/ปี ที่จบการศึกษา
      daygraduationOptions33: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      monthgraduationOptions33: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yeargraduationOptions33: Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()),
      Transcript33: null,
      educational_qualifications33: null,

      educational_institution33: null,
      educational_qualification33: null,
      fieldofstudy33: null,

      daygraduation33: null,
      monthgraduation33: null,
      yeargraduation33: null,
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
