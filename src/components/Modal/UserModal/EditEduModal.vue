<template>
  <v-dialog v-model="dialog" max-width="1090px">
    <v-card class="pa-5">
      <v-card-title class="d-flex justify-center" style="font-size: 2rem; font-weight: bold; margin-bottom: 40px;">
        แก้ไขข้อมูลการศึกษา
      </v-card-title>
      <v-card-text style="padding: 50px;">
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col md="12">
              <div class="mb-2 required">สถาบันการศึกษา </div>
              <v-select
                class="textfield"
                v-model="editedItem.edit_institution"
                :items="institutions"
                outlined
                :rules="[validateSelect]"
              ></v-select>
            </v-col>

            <v-col md="12">
              <div class="mb-2 required">วุฒิการศึกษา </div>
              <v-select
                class="textfield"
                v-model="editedItem.edit_educationLevel"
                :items="educationLevels"
                outlined
                :rules="[validateSelect]"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <div class="mb-2 required">สาขาวิชา </div>
              <v-select
                class="textfield"
                v-model="editedItem.edit_major"
                :items="majors"
                outlined
                :rules="[validateSelect]"
              ></v-select>
            </v-col>
          </v-row>

          <v-row style="margin-bottom: -20px">
            <v-col>
              <div class="required">
                วันที่จบการศึกษา 
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4">
              <v-select
                class="textfield"
                v-model="editedItem.graduated_day"
                :items="graduationDays"
                outlined
                placeholder="วัน"
                :rules="[validateSelect]"
              ></v-select>
            </v-col>
            <v-col md="4">
              <v-select
                class="textfield"
                v-model="editedItem.graduated_month"
                :items="graduationMonths"
                outlined
                placeholder="เดือน"
                :rules="[validateSelect]"
              ></v-select>
            </v-col>
            <v-col md="4">
              <v-select
                class="textfield"
                v-model="editedItem.graduated_year"
                :items="graduationYears"
                outlined
                placeholder="ปี"
                :rules="[validateSelect]"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
        
        <v-card-actions class="d-flex justify-center">
          <v-btn 
            class="rounded-xl px-10 my-btn" 
            color="white" 
            text 
            @click="saveChanges"
            style="background-color: green"
          >
            บันทึก
          </v-btn>

          <v-btn 
            class="rounded-xl px-10 ml-8 my-btn" 
            text 
            color="white" 
            @click="$emit('close')"
            style="background-color: grey"
          >
            ยกเลิก
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Swal from 'sweetalert2';
import {validateSelect } from "../../../plugins/validate.js";


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
        edit_institution: null,
        edit_educationLevel: null,
        edit_major: null,
      },
      educationLevels: ["ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
      institutions: ["มหาวิทยาลัย A", "มหาวิทยาลัย B", "มหาวิทยาลัย C"],
      majors: ["วิทยาการคอมพิวเตอร์", "บริหารธุรกิจ", "วิศวกรรมศาสตร์"],
      graduationDays: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // 1-31
      graduationMonths: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      graduationYears: ["2565", "2566", "2567"],
      valid: false,
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
      if (!this.$refs.form.validate()) {
        Swal.fire({
            icon: 'warning',
            title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            text: 'มีช่องที่ต้องกรอกแต่ยังไม่ได้กรอกหรือกรอกข้อมูลไม่ถูกต้อง',
        });
        return;
    }
  console.log("Before validation:", this.editedItem);
  if (this.$refs.form.validate()) {
    this.editedItem.me_graduated_date = this.formattedGraduationDate;
    this.$emit("save", this.editedItem);
    this.$emit("close");
  } else {
    console.log("Validation failed");
  }
},
        validateSelect,
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

::v-deep(.v-messages__message) {
  color: red !important;
  margin: 5px;
}
</style>