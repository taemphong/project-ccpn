<template>
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title class="d-flex justify-center">
          แก้ไขข้อมูลการศึกษา
        </v-card-title>
  
        <v-card-text>
          <v-form ref="form">
            <v-select
              label="ระดับการศึกษา"
              v-model="editedItem.me_level"
              :items="educationLevels"
              required
              :rules="[rules.required]"
            ></v-select>
  
            <v-text-field
              label="ชื่อสถาบัน"
              v-model="editedItem.me_institution"
              required
              :rules="[rules.required]"
            ></v-text-field>
  
            <v-text-field
              label="ปริญญา/วุฒิการศึกษา"
              v-model="editedItem.me_faculty"
              required
              :rules="[rules.required]"
            ></v-text-field>
  
            <v-text-field
              label="หลักสูตร"
              v-model="editedItem.me_major"
              required
              :rules="[rules.required]"
            ></v-text-field>
  
            <v-text-field
              label="วันจบการศึกษา"
              v-model="editedItem.me_graduated_date"
              type="date"
              required
              :rules="[rules.required]"
            ></v-text-field>
          </v-form>
        </v-card-text>
  
        <v-card-actions class="justify-end">
          <v-btn text @click="$emit('close')">ยกเลิก</v-btn>
          <v-btn color="primary" @click="saveChanges">บันทึก</v-btn>
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
        editedItem: { ...this.item },
        educationLevels: ["ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"],
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
          this.$emit("save", this.editedItem);
          this.$emit("close");
        }
      },
    },
  };
  </script>
  