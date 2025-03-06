<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>ข้อมูลส่วนตัว</h2>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">คำนำหน้าชื่อ</div>
        <v-select v-model="prefixTh" :items="prefixOptions" outlined></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <div class="mb-3 required">ชื่อ</div>
        <v-text-field v-model="firstNameTh" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">นามสกุล</div>
        <v-text-field v-model="lastNameTh" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">คำนำหน้าชื่อ (อังกฤษ)</div>
        <v-select
          v-model="prefixEn"
          :items="prefixOptionsEn"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ชื่อ (อังกฤษ)</div>
        <v-text-field v-model="firstNameEn" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">นามสกุล (อังกฤษ)</div>
        <v-text-field v-model="lastNameEn" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">เพศ</div>
        <v-select v-model="gender" :items="genderOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">สัญชาติ</div>
        <v-text-field v-model="nationality" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">เชื้อชาติ</div>
        <v-text-field v-model="ethnicity" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ศาสนา</div>
        <v-text-field v-model="religion" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">หมู่โลหิต</div>
        <v-select
          v-model="bloodType"
          :items="bloodTypeOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ประเภทหน่วยงาน</div>
        <v-select
          v-model="organizationType"
          :items="organizationTypeOptions"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ตำแหน่ง</div>
        <v-select
          v-model="position"
          :items="positionOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">โทรศัพท์มือถือ</div>
        <v-text-field v-model="phoneNumber" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">อีเมล</div>
        <v-text-field v-model="email" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-4 ml-1"> วัน-เดือน-ปีเกิด </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">วัน</div>
        <v-select v-model="day" :items="dayOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เดือน</div>
        <v-select v-model="month" :items="monthOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ปี</div>
        <v-select v-model="year" :items="yearOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เลขบัตรประชาชน</div>
        <v-text-field v-model="idCard" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mt-4 ml-1"> วันหมดอายุบัตร </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">วัน</div>
        <v-select v-model="expireDay" :items="dayOptions" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เดือน</div>
        <v-select
          v-model="expireMonth"
          :items="monthOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ปี</div>
        <v-select
          v-model="expireYear"
          :items="yearOptions2"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ออกโดย</div>
        <v-text-field v-model="issuedBy" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>ที่อยู่ตามทะเบียนบ้าน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ชื่อสถานที่ทำงาน</div>
        <v-text-field v-model="workplaceName" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">จังหวัด</div>
        <v-select
          v-model="province"
          :items="provinceOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">อำเภอ/เขต</div>
        <v-select
          v-model="district"
          :items="districtOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ตำบล/แขวง</div>
        <v-select
          v-model="subdistrict"
          :items="subdistrictOptions"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">รหัสไปรษณีย์</div>
        <v-text-field v-model="postalCode" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">โทรศัพท์ที่ทำงาน</div>
        <v-text-field v-model="workPhone" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">อีเมล</div>
        <v-text-field v-model="jobEmail" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>ที่อยู่ปัจจุบัน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่</div>
        <v-text-field v-model="currentAddress" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">จังหวัด</div>
        <v-select
          v-model="currentProvince"
          :items="currentprovinceOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">อำเภอ/เขต</div>
        <v-select
          v-model="currentDistrict"
          :items="currentdistrictOptions"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">ตำบล/แขวง</div>
        <v-select
          v-model="currentSubdistrict"
          :items="currentsubdistrictOptions"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <div class="mb-3 required">รหัสไปรษณีย์</div>
        <v-text-field v-model="currentPostalCode" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3 required">โทรศัพท์มือถือ</div>
        <v-text-field v-model="mobilePhone" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>สถานที่ที่ต้องการให้ติดต่อ / จัดส่งเอกสาร</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <v-radio-group v-model="radioGroup">
          <v-row class="d-flex flex-column">
            <v-col cols="12" v-for="(option, index) in options" :key="index">
              <v-card outlined max-width="250px">
                <v-card-text>
                  <v-radio
                    :label="option.label"
                    :value="option.value"
                  ></v-radio>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>วุฒิการศึกษา</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ระดับการศึกษา</div>
        <v-checkbox
          v-for="(option, index) in educationLevels"
          :key="index"
          v-model="selectedEducation"
          :label="option.label"
          :value="option.value"
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="mb-3">สถานที่ศึกษา</div>
        <v-text-field v-model="academy" outlined class="w-100"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วุฒิการศึกษา</div>
        <v-text-field
          v-model="educational"
          outlined
          class="w-100"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="mb-3">สาขาวิชา</div>
        <v-text-field v-model="major" outlined class="w-100"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="dayeducation"
              outlined
              class="w-100"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="montheducation"
              outlined
              class="w-100"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="yeareducation"
              outlined
              class="w-100"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ selectedEducation }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ ({{ selectedEducation }})
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>
          การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่าง ๆ
          (สมาคมที่เกี่ยวข้องเป็นหลัก)
        </h2>
      </v-col>
    </v-row>

    <v-col cols="12" md="12">
      <div class="mb-3">โปรดระบุ (ถ้ามี)</div>
      <v-text-field v-model="A" outlined class="w-100"></v-text-field>
    </v-col>

    <v-row>
      <v-col cols="12">
        <h2>แนบหลักฐานประกอบการพิจารณา</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3">
          ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก
          ซึ่งถ่ายไว้แล้วไม่เกิน 6 เดือน ขนาด 1 นิ้ว
        </div>
      </v-col>
    </v-row>

    <v-col cols="12" md="6">
      <v-btn x-large color="#FFD56D" dark style="width: 800px; height: 50px">
        คลิกดูไฟล์ที่แนบ
      </v-btn>
    </v-col>

    <v-row>
      <v-col cols="12">
        <h2>หลักฐานการสมัครสมาชิกสภาการสาธรณสุขชุมชน</h2>
      </v-col>
    </v-row>  

    <v-row>
      <v-col cols="12" md="6">
        <div class="mb-3">สำเนาทะเบียนบ้าน</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาบัตรประจำตัวประชาชน
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="mb-3">ใบรับรองแพทย์</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่น ๆ ถ้ามี
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" dark style="width: 300px; height: 50px">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
<v-col cols="12" md="12">
    <h2 class="mb-5" >หลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชน</h2>
    <h3 class="mb-5 required2" style="font-weight: 500; margin-top: -15px;"  >ข้าพเจ้าได้แนบหลักฐานประกอบการสมัครสมาชิกสภาการสาธาณสุขชุมชน ดังต่อไปนี้</h3>
    <v-container fluid>
    <v-checkbox
      v-model="selected2"
      label="สำเนาทะเบียนบ้าน 1 ฉบับ"
      value="สำเนาทะเบียนบ้าน 1 ฉบับ"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
      value="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
      value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
    ></v-checkbox>
    <div style="margin-left: 30px;">
    <v-checkbox
      v-model="selected2"
      label="Transcript"
      value="Transcript"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="ปริญญาบัคร"
      value="ปริญญาบัคร"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="อนุปริญญาบัคร"
      value="อนุปริญญาบัคร"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
      value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
    ></v-checkbox>
  </div>
  <v-checkbox
      v-model="selected2"
      label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
      value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="ใบรับรองแพทย์"
      value="ใบรับรองแพทย์"
    ></v-checkbox>
    <v-checkbox
      v-model="selected2"
      label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
      value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
    ></v-checkbox>

    <v-col cols="12" md="12">
      <h2 class="mb-5 required2" >การให้ความยินยอม</h2>
    </v-col>
    <v-checkbox
      v-model="selected2"
      label="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
      value="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
    ></v-checkbox>

  </v-container>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // คำนำหน้าชื่อภาษาไทย
      prefixTh: "",
      prefixOptions: ["นาย", "นาง", "นางสาว"],

      // คำนำหน้าชื่อภาษาอังกฤษ
      prefixEn: "",
      prefixOptionsEn: ["Mr.", "Mrs.", "Miss"],

      // ชื่อและนามสกุล
      firstNameTh: "",
      lastNameTh: "",
      firstNameEn: "",
      lastNameEn: "",

      // เพศ
      gender: "",
      genderOptions: ["ชาย", "หญิง", "อื่น ๆ"],

      // สัญชาติ & เชื้อชาติ
      nationality: "",
      ethnicity: "",

      // ศาสนา
      religion: "",

      // หมู่โลหิต
      bloodType: "",
      bloodTypeOptions: ["A", "B", "AB", "O"],

      // ประเภทหน่วยงาน
      organizationType: "",
      organizationTypeOptions: ["ภาครัฐ", "เอกชน", "รัฐวิสาหกิจ", "อื่น ๆ"],

      // ตำแหน่ง
      position: "",
      positionOptions: ["พนักงาน", "ผู้จัดการ", "ผู้บริหาร"],

      // เบอร์โทรศัพท์ & อีเมล
      phoneNumber: "",
      email: "",
      day: "",
      month: "",
      year: "",
      idCard: "",
      dayOptions: Array.from({ length: 31 }, (_, i) => i + 1), // 1-31
      monthOptions: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ],
      yearOptions: Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - i
      ),
      expireDay: "",
      expireMonth: "",
      expireYear: "",
      issuedBy: "",
      yearOptions2: Array.from(
        { length: 50 },
        (_, i) => new Date().getFullYear() + i
      ),
      workplaceName: "",
      province: "",
      district: "",
      subdistrict: "",
      postalCode: "",
      workPhone: "",
      jobEmail: "",
      provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      districtOptions: [],
      subdistrictOptions: [],

      currentAddress: "",
      currentProvince: null,
      currentDistrict: null,
      currentSubdistrict: null,
      currentPostalCode: "",
      mobilePhone: "",
      currentprovinceOptions: [
        "กรุงเทพมหานคร",
        "เชียงใหม่",
        "ขอนแก่น",
        "ภูเก็ต",
      ], // เพิ่มจังหวัดที่ต้องการ
      currentdistrictOptions: [],
      currentsubdistrictOptions: [],
      // สถานที่ที่ต้องการให้ติดต่อ / จัดส่งเอกสาร
      radioGroup: null,
      options: [
        { label: "ที่อยู่ตามทะเบียนบ้าน", value: "ที่อยู่ตามทะเบียนบ้าน" },
        { label: "สถานที่ทำงาน", value: "สถานที่ทำงาน" },
        { label: "ที่อยู่ปัจจุบัน", value: "ที่อยู่ปัจจุบัน" },
      ],
      //   วุฒิการศึกษา
      selectedEducation: null,
      educationLevels: [
        { label: "ประกาศนียบัตร", value: "ประกาศนียบัตร" },
        { label: "อนุปริญญา", value: "อนุปริญญา" },
        { label: "ปริญญาตรี", value: "ปริญญาตรี" },
        { label: "ปริญญาโท", value: "ปริญญาโท" },
        { label: "ปริญญาเอก", value: "ปริญญาเอก" },
      ],
      academy: "",
      educational: "",
      major: "",
      //   วันเดือนปีที่จบการศึกษา
      dayeducation: "",
      montheducation: "",
      yeareducation: "",
      // แนบหลักฐานประกอบการพิจารณา
      A: "",
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap');

.required::after {
  content: "*";
  color: red;
}

* {
  font-size: 18px;
  color: black;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
}
</style>
