<template>
  <div class="d-flex flex-column align-center justify-center mt-n7" style="min-height: 90vh">
    <h2 class="textheader text-center mb-4">
      เอกสารการสมัครของท่านได้รับส่งเข้าสู่ระบบเรียบร้อยแล้ว
    </h2>
    <v-card class="pa-4" max-width="800" width="100%" style="background-color: #52d6794a">
      <v-card-text>
        <div class="text">
          ให้จัดเตรียมเอกสาร / หลักฐานต่าง ๆ พร้อมรับรองสำเนาถูกต้อง <br />
          จัดส่งมายังสภาการสารธรณสุขชุมชน <br />
          (1) สธช.1 จำนวน 1 ฉบับ <br />
          (2) สำเนาทะเบียนบ้าน จำนวน 1 ฉบับ (3) สำเนาบัตรประจำตัวประชาชน จำนวน 1
          ฉบับ <br />
          (4) สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ
          ปริญญา <br />
          ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร
          หรือวุฒิบัตรในวิชาชีพการสารธรณสุขชุมชน <br />
          จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง <br />
          - Transcript <br />
          - ปริญญาบัตร <br />
          - อนุปริญญาบัตร <br />
          - วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา <br />
          (5) ภาพถ่ายหน้าตรงครึ่งตัวเท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6
          เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ <br />
          (6) ใบรับรองแพทย์ <br />
          (7) ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่น ๆ (ถ้ามี)
          <br />
          <br />
          <div>จัดส่งมาที่</div>
          สภาการสาธารณสุขชุมชน 88/20 อาคาร 5 ชั้น 5 ตึก
          ตึกสำนักงานปลัดกระทรวงสาธารณสุข <br />
          ต.ตลาดขวัญ อ.เมือง จ.นนทบุรี 11000 *วงเล็บมุมซอง (คำขอเป็นสมาชิก)
        </div>
      </v-card-text>
    </v-card>
    <br />
  </div>
</template>

<script setup></script>

<style>
/* โหลดฟอนต์ Prompt SemiBold 600 และ Regular 400 */
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap');

/* กำหนดฟอนต์สำหรับหัวข้อ */
.textheader {
  font-size: 24px;
  color: #34854b;
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  /* SemiBold 600 */
}

/* กำหนดฟอนต์สำหรับเนื้อหาหลัก */
.text {
  font-size: 18px;
  color: black;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
  /* Regular 400 */
}

.text {
  font-size: 16px;
  /* ปรับขนาดตัวหนังสือ */
  line-height: 1.8;
  /* ปรับระยะห่างระหว่างบรรทัด */
}
</style>
