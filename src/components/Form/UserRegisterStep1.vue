<template>
  <v-container>
    <h2 class="sectionhead">ข้อมูลส่วนตัว</h2>
    <v-row class="v-raw-between">
      <v-col cols="12">
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ </div>
        <v-select :rules="[validateRequired]"  v-model="formData.mp_name1"
        @input="validateForm" :items="prefixOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ </div>
        <v-text-field :rules="[validateRequired]"  v-model="formData.mp_name2"
        @input="validateForm" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล </div>
        <v-text-field :rules="[validateRequired]"  v-model="formData.mp_name3" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ (อังกฤษ) </div>
        <v-select v-model="mp_name1_eng" :items="prefixOptionsEn" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ (อังกฤษ) </div>
        <v-text-field  v-model="mp_name2_eng" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล (อังกฤษ) </div>
        <v-text-field  v-model="mp_name3_eng" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">เพศ </div>
        <v-select v-model="mp_gender" :items="mp_genderOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">สัญชาติ </div>
        <v-text-field  v-model="mp_nationality" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เชื้อชาติ </div>
        <v-text-field  v-model="mp_ethnicity" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ศาสนา </div>
        <v-text-field  v-model="mp_religion" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">หมู่โลหิต </div>
        <v-select v-model="mp_blood" :items="mp_bloodOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ประเภทหน่วยงาน </div>
        <v-select v-model="mp_company_type" :items="mp_company_typeOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำแหน่ง </div>
        <v-select v-model="mp_position" :items="mp_positionOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์มือถือ </div>
        <v-text-field  v-model="mp_tel" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field  v-model="mp_email" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ml-1 ">
      <div class="required">
        วัน-เดือน-ปีเกิด
      </div>
    </v-row>
    <v-row class="v-raw-between">
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">วัน </div>
        <v-select v-model="mp_birthday" :items="dayOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">เดือน </div>
        <v-select v-model="mp_birthmonth" :items="monthOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col margin-right">
        <div class="mb-3 required">ปี </div>
        <v-select v-model="mp_birthyear" :items="yearOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เลขบัตรประชาชน</div>
        <v-text-field  v-model="mp_customer_id" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="ml-1 ">
      <div class="required">
        วันหมดอายุบัตร
      </div>
    </v-row>
    <v-row class="v-raw-between">
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">วัน </div>
        <v-select v-model="ml_expired" :items="dayOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">เดือน </div>
        <v-select v-model="ml_expired" :items="monthOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col margin-right">
        <div class="mb-3 required">ปี </div>
        <v-select v-model="ml_expired" :items="yearOptions2" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ออกโดย</div>
        <v-text-field  v-model="mp_issued_by" outlined></v-text-field>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <h2 class="sectionhead">ที่อยู่ตามทะเบียนบ้าน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่ </div>
        <v-textarea v-model="mha_address" outlined rows="3"></v-textarea>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="mha_province" :items="mha_provinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="mha_amphoe" :items="mha_amphoeOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="mha_district" :items="mha_districtOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field  v-model="mha_zipcode" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="sectionhead">สถานที่ทำงาน</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ชื่อสถานที่ทำงาน </div>
        <v-text-field  v-model="mca_company" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่ </div>
        <v-text-field  v-model="mca_address" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="mca_province" :items="mca_provinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="mca_amphoe" :items="mca_amphoeOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="mca_district" :items="mca_districtOptions" outlined></v-select>
      </v-col>
    </v-row>


    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field  v-model="mca_zipcode" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์ที่ทำงาน </div>
        <v-text-field  v-model="mca_phone" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field  v-model="mca_email" outlined></v-text-field>
      </v-col>
    </v-row>



    <v-row>
      <v-col cols="12">
        <h2 class="sectionhead">ที่อยู่ปัจจุบัน </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่ </div>
        <v-text-field  v-model="moa_address" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select  v-model="moa_province" :items="moa_provinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="moa_amphoe" :items="moa_amphoeOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="moa_district" :items="moa_districtOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field  v-model="moa_zipcode" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3" class="custom-margin">
        <div class="mb-3 required">โทรศัพท์มือถือ </div>
        <v-text-field  v-model="moa_phone" outlined></v-text-field>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;
        margin-bottom:-10px ;">สถานที่ที่ต้องการให้ติดต่อ / จัดส่งเอกสาร </h2>
      </v-col>
    </v-row>

    <v-container fluid>
      <v-radio-group v-model="radios">
        <v-sheet outlined class="radio-box">
          <v-radio value="radiosHome">
            <template v-slot:label>
              <div>ที่อยู่ตามทะเบียนบ้าน</div>
            </template>
          </v-radio>
        </v-sheet>

        <v-sheet outlined class="radio-box">
          <v-radio value="radiosWork">
            <template v-slot:label>
              <div>สถานที่ทำงาน</div>
            </template>
          </v-radio>
        </v-sheet>

        <v-sheet outlined class="radio-box">
          <v-radio value="radiosCurrent">
            <template v-slot:label>
              <div>ที่อยู่ปัจจุบัน</div>
            </template>
          </v-radio>
        </v-sheet>
      </v-radio-group>
    </v-container>

    <v-row>
      <v-col cols="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;
        margin-bottom:-10px ;">วุฒิการศึกษา</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-container fluid>
        <div class="required">ระดับการศึกษา</div>
        <Educational1 :selected="selected" />
        <Educational2 :selected="selected" />
        <Educational3 :selected="selected" />
        <Educational4 :selected="selected" />
        <Educational5 :selected="selected" />
      </v-container>
    </v-row>



    <v-row>
      <v-col cols="12" md="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">
          การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่างๆ (สมาคมที่เกี่ยวข้องเป็นหลัก)</h2>
        <div class="mb-3 required">โปรดระบุ (ถ้ามี) </div>
        <v-text-field  v-model="associations_involved" outlined></v-text-field>
      </v-col>



      <v-col cols="12" md="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">แนบหลักฐานประกอบการพิจารณา</h2>
        <div class="mb-3 required">ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก ซึ่งถ่ายไว้แล้วไม่เกิน 6
          เดือน
          ขนาด 1 นิ้ว </div>
        <v-file-input v-model="photo" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png และ .jpeg
        </div>
        
        <div class="mb-3 required">สำเนาทะเบียนบ้าน</div>
    <v-file-input v-model="Copyof_houseregistration" outlined placeholder="File input" :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
    <div style="text-align: end; margin-top: -20px;">
      หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล .jpg .png .jpeg และ .pdf
    </div>

        <div class="mb-3 required">สำเนาบัตรประจำตัวประชาชน </div>
        <v-file-input v-model="Copyof_mp_customer_id" outlined placeholder="File input" :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>

        <div class="mb-3 required">ใบรับรองแพทย์ </div>
        <v-file-input v-model="Medical_certificate" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>

        <div class="mb-3 required">ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่นๆ (ถ้ามี) </div>
        <v-file-input v-model="Namechange_certificate" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">หลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชน</h2>
        <h3 class=" required2" style="font-weight: 500; margin-top: -15px;">
          ข้าพเจ้าได้แนบหลักฐานประกอบการสมัครสมาชิกสภาการสาธาณสุขชุมชน ดังต่อไปนี้</h3>
        <v-container fluid>
          <v-checkbox :style="checkboxStyle" v-model="selectedhouse_registration" label="สำเนาทะเบียนบ้าน 1 ฉบับ"
      :disabled="!Copyof_houseregistration || selectedhouse_registration"></v-checkbox>

          <v-checkbox :style="checkboxStyle2" v-model="selectedmp_customer_id" label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
      :disabled="!Copyof_mp_customer_id || selectedmp_customer_id"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"></v-checkbox>
          <div style="margin-left: 30px;">
            <v-checkbox color="light-green" v-model="selected2" label="Transcript" value="Transcript"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="ปริญญาบัตร" value="ปริญญาบัตร"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="อนุปริญญาบัตร"
              value="อนุปริญญาบัตร"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"></v-checkbox>
          </div>
          <v-checkbox color="light-green" v-model="selected2"
            label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2" label="ใบรับรองแพทย์" value="ใบรับรองแพทย์"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2" label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"></v-checkbox>
        </v-container>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <h2 style=" font-size: 1.5rem;
        font-weight: 600;" class="mt-5 required2">การให้ความยินยอม</h2>
        <v-container fluid>
          <v-checkbox color="light-green" v-model="selected2"
            label="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            value="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"></v-checkbox>
        </v-container>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>
import { validateRequired, validateEmail, validatePhone } from "../../plugins/validate.js";
import Educational1 from "./Educational1.vue";
import Educational2 from "./Educational2.vue";
import Educational3 from "./Educational3.vue";
import Educational4 from "./Educational4.vue";
import Educational5 from "./Educational5.vue";


export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    Copyof_houseregistration(newValue) {

  // ถ้ามีไฟล์ ให้ติ๊ก checkbox อัตโนมัติ และล็อคการเปลี่ยนแปลง checkbox
  if (newValue !== null) {
    this.selectedhouse_registration = true;
  } else {
    // ถ้าไม่มีไฟล์ ให้ uncheck ออก
    this.selectedhouse_registration = false;
  }
},
Copyof_mp_customer_id(newValue) {

// ถ้ามีไฟล์ ให้ติ๊ก checkbox อัตโนมัติ และล็อคการเปลี่ยนแปลง checkbox
if (newValue !== null) {
  this.selectedmp_customer_id = true;
} else {
  // ถ้าไม่มีไฟล์ ให้ uncheck ออก
  this.selectedmp_customer_id = false;
}
},

  formData: {
    handler(newVal) {
      console.log("formData changed: ", newVal);
      const isInvalid = Object.values(newVal).some(value => validateRequired(value) !== true);
      console.log("Validation result: ", isInvalid);
      this.$emit("validationChanged", isInvalid);
    },
    deep: true,
    immediate: true
  }
}
,

  components: {
    Educational1,
    Educational2,
    Educational3,
    Educational4,
    Educational5,
  },

  data() {
    return {
      Copyof_houseregistration: null, // เก็บไฟล์
      selectedhouse_registration: false, // ค่า Checkbox
      Copyof_mp_customer_id: null,
      selectedmp_customer_id: false,
      formData: {
        mp_name1: "",
        mp_name2: "",
        mp_name3: "",
        // เพิ่มได้เรื่อยๆ
      },
      // formData: this.value,
      
     
      formValid: false,
      // คำนำหน้าชื่อภาษาไทย

      prefixOptions: ['นาย', 'นาง', 'นางสาว'],

      // คำนำหน้าชื่อภาษาอังกฤษ
      mp_name1_eng: '',
      prefixOptionsEn: ['Mr.', 'Mrs.', 'Miss'],

      // ชื่อและนามสกุล
      mp_name2_eng: '',
      mp_name3_eng: '',

      // เพศ
      mp_gender: '',
      mp_genderOptions: ['ชาย', 'หญิง', 'อื่น ๆ'],

      // สัญชาติ & เชื้อชาติ
      mp_nationality: '',
      mp_ethnicity: '',

      // ศาสนา
      mp_religion: '',

      // หมู่โลหิต
      mp_blood: '',
      mp_bloodOptions: ['A', 'B', 'AB', 'O'],

      // ประเภทหน่วยงาน
      mp_company_type: '',
      mp_company_typeOptions: ['ภาครัฐ', 'เอกชน', 'รัฐวิสาหกิจ', 'อื่น ๆ'],

      // ตำแหน่ง
      mp_position: '',
      mp_positionOptions: ['พนักงาน', 'ผู้จัดการ', 'ผู้บริหาร'],

      // เบอร์โทรศัพท์ & อีเมล
      mp_tel: '',
      mp_email: '',
      mp_birthday: '',
      mp_birthmonth: '',
      mp_birthyear: '',
      mp_customer_id: '',
      dayOptions: Array.from({ length: 31 }, (_, i) => i + 1), // 1-31
      monthOptions: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yearOptions: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
      ml_expired: '',
      mp_issued_by: '',
      yearOptions2: Array.from({ length: 50 }, (_, i) => new Date().getFullYear() + i),

      mha_address: '',
      mha_province: '',
      mha_amphoe: '',
      mha_district: '',
      mha_zipcode: '',
      mha_provinceOptions: ["ตามทะเบียนบ้าน", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      mha_amphoeOptions: [],
      mha_districtOptions: [],

      mca_province: '',
      mca_amphoe: '',
      mca_district: '',
      mca_zipcode: '',
      mca_phone: '',
      mca_email: '',
      mca_address: '',
      mca_company: '',
      mca_provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      mca_amphoeOptions: [],
      mca_districtOptions: [],

      moa_address: '',
      moa_province: null,
      moa_amphoe: null,
      moa_district: null,
      moa_zipcode: '',
      moa_phone: '',
      moa_provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      moa_amphoeOptions: [],
      moa_districtOptions: [],

      radios: '',

      selected: [],
      photo: null,
      Medical_certificate: null,
      Namechange_certificate: null,

    };
  },
  computed: {
    checkboxStyle() {
      if (this.Copyof_houseregistration && this.selectedhouse_registration) {
        return {
          color: '#4caf50',
        };
      }
      return {};
    },
    checkboxStyle2() {
      if (this.Copyof_mp_customer_id && this.selectedmp_customer_id) {
        return {
          color: '#4caf50',
        };
      }
      return {};
    },
    hasError() {
      return this.validateForm();
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log("Form Submitted!");
      } else {
        console.log("Form validation failed");
      }
    },
    validateRequired,
    validateEmail,
    validatePhone,
    
  },
  
  
};



</script>

<style scoped>
.required::after {
  content: '*';
  color: red;
}

.required2::before {
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

.v-raw-between {
  justify-content: space-between;
}

.custom-col {
  max-width: 300px;
}

.margin-right {
  margin-right: 100px;
}

/* ใช้ media query เพื่อกำหนด margin-right ให้หายไปเมื่อหน้าจอเล็กกว่า 600px */
@media (max-width: 400px) {
  .margin-right {
    margin-right: 0;
    /* ลบ margin-right เมื่อหน้าจอเล็ก */
  }
}

.custom-margin {
  margin-left: 190px;
}

@media (max-width: 960px) {

  /* Vuetify md breakpoint */
  .custom-margin {
    margin-left: 0 !important;
  }
}

.sectionhead {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
}

.radio-box {
  padding: 10px;
  width: 320px;
  border-radius: 8px;
  margin-bottom: 10px;
}

::v-deep(.v-messages__message) {
  color: red !important;
  margin: 5px;
}


</style>