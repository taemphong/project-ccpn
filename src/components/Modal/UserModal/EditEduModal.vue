<template>
  <v-dialog v-model="dialog" max-width="1090px">
    <v-card class="pa-5">
      <v-card-title class="d-flex justify-center" style="font-size: 2rem; font-weight: bold; margin-bottom: 40px;">
  แก้ไขข้อมูลการศึกษา
</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col md="6">
              <div class="mb-2">ระดับการศึกษา:</div>
              <v-select
                class="textfield"
                v-model="editedItem.me_level"
                :items="educationLevels"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col md="6">
              <div class="mb-2">ชื่อสถาบัน:</div>
              <v-select
                class="textfield"
                v-model="editedItem.me_institution"
                :items="institutions"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6">
              <div class="mb-2">ปริญญา/วุฒิการศึกษา:</div>
              <v-select
                class="textfield"
                v-model="editedItem.me_faculty"
                :items="degrees"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
            <v-col md="6">
              <div class="mb-2">หลักสูตร:</div>
              <v-select
                class="textfield"
                v-model="editedItem.me_major"
                :items="majors"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
          </v-row>

          <!-- ช่องแยกสำหรับวัน เดือน ปี -->
          <v-row>
            <v-col md="4">
              <div class="mb-2">วัน:</div>
              <v-select
                class="textfield"
                v-model="editedItem.graduated_day"
                :items="graduationDays"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
            <v-col md="4">
              <div class="mb-2">เดือน:</div>
              <v-select
                class="textfield"
                v-model="editedItem.graduated_month"
                :items="graduationMonths"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
            <v-col md="4">
              <div class="mb-2">ปี:</div>
              <v-select
                class="textfield"
                v-model="editedItem.graduated_year"
                :items="graduationYears"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </v-col>
          </v-row>

        </v-form>
      </v-card-text>

    <v-card-actions class="d-flex justify-center">

      <v-btn 
  class="rounded-xl px-5 py-3 ml-4 my-btn" 
  color="white" 
  text 
  @click="saveChanges"
  style=" background-color: green"
>
  บันทึก
</v-btn>

<v-btn 
  class="rounded-xl px-5 py-3 my-btn" 
  text 
  color="white" 
  @click="$emit('close')"
  style=" background-color: grey"
>
  ยกเลิก
</v-btn>

</v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    item: Object,
  },
  data() {
    return {
      editedItem: {
        ...this.item,
        graduated_day: null,
        graduated_month: null,
        graduated_year: null,
      },
      educationLevels: ["ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      institutions: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      degrees: ["วิทยาศาสตรบัณฑิต", "บริหารธุรกิจบัณฑิต", "ศิลปศาสตรบัณฑิต"],
      majors: ["วิทยาการคอมพิวเตอร์", "บริหารธุรกิจ", "วิศวกรรมศาสตร์"],
      graduationDays: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // 1-31
      graduationMonths: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      graduationYears: ["2565", "2566", "2567"],
      rules: {
        required: (value) => !!value || "กรุณากรอกข้อมูล",
      },
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    formattedGraduationDate() {
      if (this.editedItem.graduated_day && this.editedItem.graduated_month && this.editedItem.graduated_year) {
        return `${this.editedItem.graduated_day} ${this.editedItem.graduated_month} ${this.editedItem.graduated_year}`;
      }
      return "";
    }
  },
  watch: {
    item: {
      handler(newValue) {
        this.editedItem = { ...newValue };
      },
      deep: true,
    },
  },
  methods: {
    saveChanges() {
      if (this.$refs.form.validate()) {
        this.editedItem.me_graduated_date = this.formattedGraduationDate;
        this.$emit("save", this.editedItem);
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f0f2f7;
  border-radius: 14px;
}

.my-btn {
  transition: background-color 0.3s ease;
}

.my-btn:hover {
  background-color: #45a049; /* สีเมื่อ hover */
}

.required::after {
content: '*';
color: red;
}


</style>
