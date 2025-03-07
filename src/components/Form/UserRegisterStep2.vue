<template>
  <v-container>
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ข้อมูลส่วนตัว</h2>
      </v-col>
      <v-col cols="12" md="3" >
        <div class="mb-3">คำนำหน้าชื่อ</div>
        <v-text-field
          v-model="prefixTh"
          :items="prefixOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ</div>
        <v-text-field
          v-model="firstNameTh"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">นามสกุล</div>
        <v-text-field
          v-model="lastNameTh"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">คำนำหน้าชื่อ (อังกฤษ)</div>
        <v-text-field
          v-model="prefixEn"
          :items="prefixOptionsEn"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ (อังกฤษ)</div>
        <v-text-field
          v-model="firstNameEn"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">นามสกุล (อังกฤษ)</div>
        <v-text-field
          v-model="lastNameEn"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">เพศ</div>
        <v-text-field
          v-model="gender"
          :items="genderOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">สัญชาติ</div>
        <v-text-field
          v-model="nationality"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เชื้อชาติ</div>
        <v-text-field
          v-model="ethnicity"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ศาสนา</div>
        <v-text-field
          v-model="religion"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">หมู่โลหิต</div>
        <v-text-field
          v-model="bloodType"
          :items="bloodTypeOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ประเภทหน่วยงาน</div>
        <v-text-field
          v-model="organizationType"
          :items="organizationTypeOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ตำแหน่ง</div>
        <v-text-field
          v-model="position"
          :items="positionOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">โทรศัพท์มือถือ</div>
        <v-text-field
          v-model="phoneNumber"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อีเมล</div>
        <v-text-field
          v-model="email"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="custom-left-margin"> วัน-เดือน-ปีเกิด </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field
          v-model="day"
          :items="dayOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field
          v-model="month"
          :items="monthOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field
          v-model="year"
          :items="yearOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เลขบัตรประชาชน</div>
        <v-text-field
          v-model="idCard"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin"> วันหมดอายุบัตร </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field
          v-model="expireDay"
          :items="dayOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field
          v-model="expireMonth"
          :items="monthOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field
          v-model="expireYear"
          :items="yearOptions2"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ออกโดย</div>
        <v-text-field
          v-model="issuedBy"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ที่อยู่ตามทะเบียนบ้าน</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="12">
        <div class="mb-3">ชื่อสถานที่ทำงาน</div>
        <v-text-field
          v-model="workplaceName"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="4">
        <div class="mb-3">จังหวัด</div>
        <v-text-field
          v-model="province"
          :items="provinceOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field
          v-model="district"
          :items="districtOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field
          v-model="subdistrict"
          :items="subdistrictOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="4">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field
          v-model="postalCode"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">โทรศัพท์ที่ทำงาน</div>
        <v-text-field
          v-model="workPhone"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">อีเมล</div>
        <v-text-field
          v-model="jobEmail"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ที่อยู่ปัจจุบัน</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="12">
        <div class="mb-3">ที่อยู่</div>
        <v-text-field
          v-model="currentAddress"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="4">
        <div class="mb-3">จังหวัด</div>
        <v-text-field
          v-model="currentProvince"
          :items="currentprovinceOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field
          v-model="currentDistrict"
          :items="currentdistrictOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field
          v-model="currentSubdistrict"
          :items="currentsubdistrictOptions"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="4">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field
          v-model="currentPostalCode"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mb-3">โทรศัพท์มือถือ</div>
        <v-text-field
          v-model="mobilePhone"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สถานที่ที่ต้องการให้ติดต่อ / จัดส่งเอกสาร</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
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

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">วุฒิการศึกษา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="12">
        <div class="mb-3">ระดับการศึกษา</div>
        <v-checkbox
          v-for="(option, index) in educationLevels"
          :key="index"
          v-model="selectedEducation"
          :label="option.label"
          :value="option.value"
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">สถานที่ศึกษา</div>
        <v-text-field
          v-model="academy"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วุฒิการศึกษา</div>
        <v-text-field
          v-model="educational"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">สาขาวิชา</div>
        <v-text-field
          v-model="major"
          outlined
          class="custom-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="dayeducation"
              outlined
              class="custom-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="montheducation"
              outlined
              class="custom-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field
              v-model="yeareducation"
              outlined
              class="custom-input"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
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

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.transcript)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.educational)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">
          การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่าง ๆ
          (สมาคมที่เกี่ยวข้องเป็นหลัก)
        </h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="12">
        <div class="mb-3">โปรดระบุ (ถ้ามี)</div>
        <v-text-field v-model="A" outlined class="w-100"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">แนบหลักฐานประกอบการพิจารณา</h2>
      </v-col>
    </v-row>
    <!--  แนบไฟล์ -->
    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.picture">
        <div class="mb-3">
          ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก <br />
          ซึ่งถ่ายไว้แล้วไม่เกิน 6 เดือน ขนาด 1 นิ้ว
        </div>
      </v-col>
      <v-col cols="12" md="6" v-if="files.houseregistration">
        <div class="mb-3">สำเนาทะเบียนบ้าน</div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.picture">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.picture)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" v-if="files.houseregistration">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.houseregistration)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.idCard">
        <div class="mb-3">สำเนาบัตรประจำตัวประชาชน</div>
      </v-col>
      <v-col cols="12" md="6" v-if="files.Namechange">
        <div class="mb-3">ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่น ๆ ถ้ามี</div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.idCard">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.idCard)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" v-if="files.Namechange">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.Namechange)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.Medical">
        <div class="mb-3">ใบรับรองแพทย์</div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6" v-if="files.Medical">
        <v-btn
          x-large
          color="#FFD56D"
          style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.Medical)"
        >
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin2">
      <v-col cols="12" md="12">
        <h2 class="mb-5 textheader">หลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชน</h2>
        <h3 class="mb-5 required2" style="font-weight: 500; margin-top: -15px">
          ข้าพเจ้าได้แนบหลักฐานประกอบการสมัครสมาชิกสภาการสาธาณสุขชุมชน
          ดังต่อไปนี้
        </h3>
        <v-container fluid>
          <v-checkbox
            v-model="selected2"
            label="สำเนาทะเบียนบ้าน 1 ฉบับ"
            value="สำเนาทะเบียนบ้าน 1 ฉบับ"
            color="success"
          ></v-checkbox>
          <v-checkbox
            v-model="selected2"
            label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            value="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            color="success"
          ></v-checkbox>
          <v-checkbox
            v-model="selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            color="success"
          ></v-checkbox>
          <div style="margin-left: 30px">
            <v-checkbox
              v-model="selected2"
              label="Transcript"
              value="Transcript"
              color="success"
            ></v-checkbox>
            <v-checkbox
              v-model="selected2"
              label="ปริญญาบัคร"
              value="ปริญญาบัคร"
              color="success"
            ></v-checkbox>
            <v-checkbox
              v-model="selected2"
              label="อนุปริญญาบัคร"
              value="อนุปริญญาบัคร"
              color="success"
            ></v-checkbox>
            <v-checkbox
              v-model="selected2"
              label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              color="success"
            ></v-checkbox>
          </div>
          <v-checkbox
            v-model="selected2"
            label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            color="success"
          ></v-checkbox>
          <v-checkbox
            v-model="selected2"
            label="ใบรับรองแพทย์"
            value="ใบรับรองแพทย์"
            color="success"
          ></v-checkbox>
          <v-checkbox
            v-model="selected2"
            label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            color="success"
          ></v-checkbox>

          <v-col cols="12" md="12">
            <h2 class="mb-5 textheader">การให้ความยินยอม</h2>
          </v-col>
          <v-checkbox
            v-model="selected2"
            class="mt-n3"
            label="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            value="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            color="success"
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
      files: {
        transcript: "https://example.com/transcript.pdf",
        educational: "https://example.com/educational.pdf",
        picture: "https://example.com/picture.pdf", // ลิงก์ไฟล์สำเนาทะเบียนบ้าน
        houseregistration: "https://example.com/houseregistration.pdf", // ลิงก์ไฟล์สำเนาบัตรประชาชน
        idCard: "https://example.com/idcard.pdf", // ลิงก์ไฟล์สำเนาบัตรประชาชน
        Medical: "https://example.com/Medical.pdf", // ลิงก์ไฟล์ใบรับรองแพทย์
        Namechange: "https://example.com/Namechange.pdf", // ลิงก์ไฟล์ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่น ๆ ถ้ามี
      },
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
  methods: {
    viewFile(fileUrl) {
      window.open(fileUrl, "_blank");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap");

.required::after {
  content: "*";
  color: red;
}

* {
  font-size: 18px;
  color: black;
  font-family: "Prompt", sans-serif;
  font-weight: 400;
}

.custom-input {
  max-width: 300px;
  height: 80px;
}

.custom-left-margin {
  justify-content: space-between;
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #f5f6fa;
}

.custom-left-margin2 {
  margin-top: 50px;
}

.textheader {
  font-size: 20px;
  font-weight: bold;
}
</style>
