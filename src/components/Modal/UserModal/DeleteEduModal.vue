<template>
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="headline red--text">
          ยืนยันการลบข้อมูล
        </v-card-title>
  
        <v-card-text>
          <p>คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลการศึกษานี้?</p>
          <p><strong>ระดับการศึกษา:</strong> {{ item.me_level }}</p>
          <p><strong>สถาบัน:</strong> {{ item.me_institution }}</p>
        </v-card-text>
  
        <v-card-actions class="justify-end">
          <v-btn text @click="$emit('close')">ยกเลิก</v-btn>
          <v-btn color="red" dark @click="confirmDelete">ลบ</v-btn>
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
    methods: {
      confirmDelete() {
        console.log("กำลังลบข้อมูล:", this.item); // ตรวจสอบว่าข้อมูลถูกต้องไหม
        this.$emit("delete", this.item);
        this.$emit("close");
      },
    },
  };
  </script>
  
  