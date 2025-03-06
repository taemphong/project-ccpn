<template>
  <v-container>
    <h2 class="sectionhead">ข้อมูลส่วนตัว</h2>
    <v-row class="v-raw-between">
      <v-col cols="12">
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ </div>
        <v-select v-model="prefixTh" :items="prefixOptions" outlined></v-select>
      </v-col>

      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ </div>
        <v-text-field v-model="firstNameTh" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล </div>
        <v-text-field v-model="lastNameTh" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row  class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ (อังกฤษ) </div>
        <v-select v-model="prefixEn" :items="prefixOptionsEn" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ (อังกฤษ) </div>
        <v-text-field v-model="firstNameEn" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล (อังกฤษ) </div>
        <v-text-field v-model="lastNameEn" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row  class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">เพศ </div>
        <v-select v-model="gender" :items="genderOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">สัญชาติ </div>
        <v-text-field v-model="nationality" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เชื้อชาติ </div>
        <v-text-field v-model="ethnicity" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row  class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ศาสนา </div>
        <v-text-field v-model="religion" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">หมู่โลหิต </div>
        <v-select v-model="bloodType" :items="bloodTypeOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ประเภทหน่วยงาน </div>
        <v-select v-model="organizationType" :items="organizationTypeOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row  class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำแหน่ง </div>
        <v-select v-model="position" :items="positionOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์มือถือ </div>
        <v-text-field v-model="phoneNumber" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field v-model="email" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-4 ml-1 required">
      วัน-เดือน-ปีเกิด
    </v-row>
    <v-row class="v-raw-between">
  <v-col cols="12" md="3"  class="custom-col">
    <div class="mb-3 required">วัน</div>
    <v-select v-model="day" :items="dayOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3"  class="custom-col">
    <div class="mb-3 required">เดือน</div>
    <v-select v-model="month" :items="monthOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3" class="custom-col margin-right">
    <div class="mb-3 required">ปี</div>
    <v-select v-model="year" :items="yearOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3"> 
    <div class="mb-3">เลขบัตรประชาชน</div>
    <v-text-field v-model="idCard" outlined></v-text-field>
  </v-col>
</v-row>



    <v-row class="mt-4 ml-1 required">
      วันหมดอายุบัตร
    </v-row>
<v-row class="v-raw-between">
  <v-col cols="12" md="3" class="custom-col">
    <div class="mb-3 required">วัน</div>
    <v-select v-model="expireDay" :items="dayOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3" class="custom-col">
    <div class="mb-3 required">เดือน</div>
    <v-select v-model="expireMonth" :items="monthOptions" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3" class="custom-col margin-right">
    <div class="mb-3 required">ปี</div>
    <v-select v-model="expireYear" :items="yearOptions2" outlined></v-select>
  </v-col>
  <v-col cols="12" md="3">
    <div class="mb-3">ออกโดย</div>
    <v-text-field v-model="issuedBy" outlined></v-text-field>
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
        <v-textarea  v-model="homeaddress" outlined rows="3"></v-textarea>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="homeprovince" :items="homeprovinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="homedistrict" :items="homedistrictOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="homesubdistrict" :items="homesubdistrictOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field v-model="homepostalCode" outlined></v-text-field>
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
        <v-text-field v-model="workname" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่ </div>
        <v-text-field v-model="workaddress" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="workprovince" :items="workprovinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="workdistrict" :items="workdistrictOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="worksubdistrict" :items="worksubdistrictOptions" outlined></v-select>
      </v-col>
    </v-row>

    
    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field v-model="workpostalCode" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์ที่ทำงาน </div>
        <v-text-field v-model="workPhone" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field v-model="workEmail" outlined></v-text-field>
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
        <v-text-field v-model="currentAddress" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="currentProvince" :items="currentprovinceOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="currentDistrict" :items="currentdistrictOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="currentSubdistrict" :items="currentsubdistrictOptions" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
  <v-col cols="12" md="3">
    <div class="mb-3 required">รหัสไปรษณีย์ </div>
    <v-text-field v-model="currentPostalCode" outlined></v-text-field>
  </v-col>
  <v-col cols="12" md="3" class="custom-margin">
    <div class="mb-3 required">โทรศัพท์มือถือ </div>
    <v-text-field v-model="currentPhone" outlined></v-text-field>
  </v-col>
</v-row>


    <v-row>
      <v-col cols="12">
        <h2  style="  font-size: 1.5rem;
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
        <h2  style="  font-size: 1.5rem;
        font-weight: 600;
        margin-bottom:-10px ;">วุฒิการศึกษา</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-container fluid>
        <div class="required">ระดับการศึกษา</div>
        <Educational1 :selected="selected"  />
        <Educational2 :selected="selected" />
        <Educational3 :selected="selected" />
        <Educational4 :selected="selected" />
        <Educational5 :selected="selected" />
      </v-container>
    </v-row>



    <v-row>
      <v-col cols="12" md="12">
        <h2  style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">
        การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่างๆ (สมาคมที่เกี่ยวข้องเป็นหลัก)</h2>
        <div class="mb-3 required">โปรดระบุ (ถ้ามี) </div>
        <v-text-field v-model="associations_involved" outlined></v-text-field>
      </v-col>



      <v-col cols="12" md="12">
        <h2  style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">แนบหลักฐานประกอบการพิจารณา</h2>
        <div class="mb-3 required">ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก ซึ่งถ่ายไว้แล้วไม่เกิน 6
          เดือน
          ขนาด 1 นิ้ว </div>
        <v-file-input v-model="photo" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png และ .jpeg
        </div>

        <div class="mb-3 required">สำเนาทะเบียนบ้าน </div>
        <v-file-input v-model="Copyof_houseregistration" outlined placeholder="File input"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>

        <div class="mb-3 required">สำเนาบัตรประจำตัวประชาชน </div>
        <v-file-input v-model="Copyof_IDcard" outlined placeholder="File input"></v-file-input>
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
        <h2  style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">หลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชน</h2>
        <h3 class=" required2" style="font-weight: 500; margin-top: -15px;">
          ข้าพเจ้าได้แนบหลักฐานประกอบการสมัครสมาชิกสภาการสาธาณสุขชุมชน ดังต่อไปนี้</h3>
        <v-container fluid>
          <v-checkbox color="light-green" v-model="selected2" label="สำเนาทะเบียนบ้าน 1 ฉบับ" value="สำเนาทะเบียนบ้าน 1 ฉบับ"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2" label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            value="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"></v-checkbox>
          <div style="margin-left: 30px;">
            <v-checkbox color="light-green" v-model="selected2" label="Transcript" value="Transcript"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="ปริญญาบัคร" value="ปริญญาบัคร"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="อนุปริญญาบัคร" value="อนุปริญญาบัคร"></v-checkbox>
            <v-checkbox color="light-green" v-model="selected2" label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"></v-checkbox>
          </div>
          <v-checkbox color="light-green" v-model="selected2"
            label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2" label="ใบรับรองแพทย์" value="ใบรับรองแพทย์"></v-checkbox>
          <v-checkbox color="light-green" v-model="selected2" label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"></v-checkbox>

          <v-col cols="12" md="12">
            <h2 class="mb-5 required2">การให้ความยินยอม</h2>
          </v-col>
          <v-checkbox color="light-green" v-model="selected2"
            label="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            value="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"></v-checkbox>

        </v-container>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>
import Educational1 from "./Educational1.vue";
import Educational2 from "./Educational2.vue";
import Educational3 from "./Educational3.vue";
import Educational4 from "./Educational4.vue";
import Educational5 from "./Educational5.vue";


export default {

  components: {
    Educational1,
    Educational2,
    Educational3,
    Educational4,
    Educational5,
  },

  data() {
    return {
      // คำนำหน้าชื่อภาษาไทย
      prefixTh: '',
      prefixOptions: ['นาย', 'นาง', 'นางสาว'],

      // คำนำหน้าชื่อภาษาอังกฤษ
      prefixEn: '',
      prefixOptionsEn: ['Mr.', 'Mrs.', 'Miss'],

      // ชื่อและนามสกุล
      firstNameTh: '',
      lastNameTh: '',
      firstNameEn: '',
      lastNameEn: '',

      // เพศ
      gender: '',
      genderOptions: ['ชาย', 'หญิง', 'อื่น ๆ'],

      // สัญชาติ & เชื้อชาติ
      nationality: '',
      ethnicity: '',

      // ศาสนา
      religion: '',

      // หมู่โลหิต
      bloodType: '',
      bloodTypeOptions: ['A', 'B', 'AB', 'O'],

      // ประเภทหน่วยงาน
      organizationType: '',
      organizationTypeOptions: ['ภาครัฐ', 'เอกชน', 'รัฐวิสาหกิจ', 'อื่น ๆ'],

      // ตำแหน่ง
      position: '',
      positionOptions: ['พนักงาน', 'ผู้จัดการ', 'ผู้บริหาร'],

      // เบอร์โทรศัพท์ & อีเมล
      phoneNumber: '',
      email: '',
      day: '',
      month: '',
      year: '',
      idCard: '',
      dayOptions: Array.from({ length: 31 }, (_, i) => i + 1), // 1-31
      monthOptions: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ],
      yearOptions: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
      expireDay: '',
      expireMonth: '',
      expireYear: '',
      issuedBy: '',
      yearOptions2: Array.from({ length: 50 }, (_, i) => new Date().getFullYear() + i),

      homeaddress: '',
      homeprovince: '',
      homedistrict: '',
      homesubdistrict: '',
      homepostalCode: '',
      homeprovinceOptions: ["ตามทะเบียนบ้าน", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      homedistrictOptions: [],
      homesubdistrictOptions: [],

      workprovince: '',
      workdistrict: '',
      worksubdistrict: '',
      workpostalCode: '',
      workPhone: '',
      workEmail: '',
      workaddress: '',
      workname: '',
      workprovinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      workdistrictOptions: [],
      worksubdistrictOptions: [],

      currentAddress: '',
      currentProvince: null,
      currentDistrict: null,
      currentSubdistrict: null,
      currentPostalCode: '',
      currentPhone: '',
      currentprovinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      currentdistrictOptions: [],
      currentsubdistrictOptions: [],

      radios: '',

      selected: [],
      selected2: [],
      photo: null,
      Copyof_houseregistration: null,
      Copyof_IDcard: null,
      Medical_certificate: null,
      Namechange_certificate: null,








    };
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
  background: #F5F6FA;
  border-radius: 10px ;
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
    margin-right: 0; /* ลบ margin-right เมื่อหน้าจอเล็ก */
  }
}

.custom-margin {
  margin-left: 190px;
}

@media (max-width: 960px) { /* Vuetify md breakpoint */
  .custom-margin {
    margin-left: 0 !important;
  }
}

.sectionhead{
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom:30px ;
}

.radio-box {
  padding: 10px;
  width: 320px;
  border-radius: 8px;
  margin-bottom: 10px;
}



</style>