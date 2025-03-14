<template>
  <v-container>
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ข้อมูลส่วนตัว</h2>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">คำนำหน้าชื่อ</div>
        <v-text-field :value="formData.mp_name1" outlined class="custom-input" readonly></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ</div>
        <v-text-field :value="formData.mp_name2" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">นามสกุล</div>
        <v-text-field :value="formData.mp_name3" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">คำนำหน้าชื่อ (อังกฤษ)</div>
        <v-text-field v-model="mp_name1_eng" :items="prefixOptionsEn" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ (อังกฤษ)</div>
        <v-text-field v-model="mp_name2_eng" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">นามสกุล (อังกฤษ)</div>
        <v-text-field v-model="mp_name3_eng" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">เพศ</div>
        <v-text-field v-model="mp_gender" :items="genderOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">สัญชาติ</div>
        <v-text-field v-model="mp_nationality" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เชื้อชาติ</div>
        <v-text-field v-model="mp_ethnicity" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ศาสนา</div>
        <v-text-field v-model="mp_religion" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">หมู่โลหิต</div>
        <v-text-field v-model="mp_blood" :items="bloodTypeOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ประเภทหน่วยงาน</div>
        <v-text-field v-model="mp_company_type" :items="organizationTypeOptions" outlined
          class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ตำแหน่ง</div>
        <v-text-field v-model="mp_position" :items="positionOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">โทรศัพท์มือถือ</div>
        <v-text-field v-model="mp_tel" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อีเมล</div>
        <v-text-field v-model="mp_email" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="custom-left-margin"> วัน-เดือน-ปีเกิด </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field v-model="day" :items="mp_birthday" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field v-model="month" :items="mp_birthday" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field v-model="year" :items="mp_birthday" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เลขบัตรประชาชน</div>
        <v-text-field v-model="mp_customer_id" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin"> วันหมดอายุบัตร </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field v-model="mp_dateexp" :items="dayOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field v-model="mp_dateexp" :items="monthOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field v-model="mp_dateexp" :items="yearOptions2" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ออกโดย</div>
        <v-text-field v-model="mp_issued_by" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ที่อยู่ตามทะเบียนบ้าน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 ">ที่อยู่ </div>
        <v-text-field v-model="mha_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field v-model="mha_province" :items="positionOptions" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field v-model="mha_amphoe" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field v-model="mha_district" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field v-model="mha_zipcode" :items="positionOptions" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สถานที่ทำงาน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 ">ชื่อสถานที่ทำงาน </div>
        <v-text-field v-model="mca_company" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 ">ที่อยู่ </div>
        <v-text-field v-model="mca_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field v-model="position" :items="mca_province" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field v-model="mca_amphoe" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field v-model="mca_district" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field v-model="mca_zipcode" :items="workpostalCode" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">โทรศัพท์ที่ทำงาน</div>
        <v-text-field v-model="mca_phone" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อีเมล</div>
        <v-text-field v-model="mca_email" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ที่อยู่ปัจจุบัน</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 ">ที่อยู่ </div>
        <v-text-field v-model="moa_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field v-model="moa_province" :items="currentProvince" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field v-model="moa_amphoe" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field v-model="moa_district" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field v-model="moa_zipcode" :items="currentPostalCode" outlined class="custom-input"></v-text-field>
      </v-col>
      <v-col cols="12" md="8">
        <div class="mb-3 currentphone">โทรศัพท์มือถือ</div>
        <v-text-field v-model="moa_phone" outlined class="custom-input3"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สถานที่ที่ต้องการให้ติดต่อ / จัดส่งเอกสาร</h2>
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

    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">วุฒิการศึกษา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="12">
        <div class="mb-3">ระดับการศึกษา</div>
        <v-checkbox v-for="(option, index) in educationLevels" :key="index" v-model="selectedEducation"
          :label="option.label" :value="option.value" color="green"></v-checkbox>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">สถานที่ศึกษา</div>
        <v-text-field v-model="me_institution" outlined class="custom-input"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วุฒิการศึกษา</div>
        <v-text-field v-model="me_faculty" outlined class="custom-input"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">สาขาวิชา</div>
        <v-text-field v-model="me_major" outlined class="custom-input"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field v-model="me_graduated_date" outlined class="custom-input"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field v-model="me_graduated_date" outlined class="custom-input"></v-text-field>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex">
            <v-text-field v-model="me_graduated_date" outlined class="custom-input"></v-text-field>
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
        <div class="mb-3">Transcript ({{ selectedEducationLabel }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ selectedEducationLabel }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.transcript)">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.educational)">
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
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.picture)">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" v-if="files.houseregistration">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.houseregistration)">
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
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black" @click="viewFile(files.idCard)">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" v-if="files.Namechange">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.Namechange)">
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
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
          @click="viewFile(files.Medical)">
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
          <v-checkbox v-model="selected2" label="สำเนาทะเบียนบ้าน 1 ฉบับ" value="สำเนาทะเบียนบ้าน 1 ฉบับ"
            color="success"></v-checkbox>
          <v-checkbox v-model="selected2" label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            value="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ" color="success"></v-checkbox>
          <v-checkbox v-model="selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            color="success"></v-checkbox>
          <div style="margin-left: 30px">
            <v-checkbox v-model="selected2" label="Transcript" value="Transcript" color="success"></v-checkbox>
            <v-checkbox v-model="selected2" label="ปริญญาบัคร" value="ปริญญาบัคร" color="success"></v-checkbox>
            <v-checkbox v-model="selected2" label="อนุปริญญาบัคร" value="อนุปริญญาบัคร" color="success"></v-checkbox>
            <v-checkbox v-model="selected2" label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา" color="success"></v-checkbox>
          </div>
          <v-checkbox v-model="selected2"
            label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            color="success"></v-checkbox>
          <v-checkbox v-model="selected2" label="ใบรับรองแพทย์" value="ใบรับรองแพทย์" color="success"></v-checkbox>
          <v-checkbox v-model="selected2" label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)" value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            color="success"></v-checkbox>

          <v-col cols="12" md="12">
            <h2 class="mb-5 textheader">การให้ความยินยอม</h2>
          </v-col>
          <v-checkbox v-model="selected2" class="mt-n3"
            label="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            value="ข้าพเจ้าขอรับรองว่า ข้าพเจ้ามีคุณสมบัติและไม่มีลักษณะต้องห้ามตามที่กำหนดในมาตรา 10 แห่งพระราชบัญญัติวิชาชีพการสาธารณสุขชุมชน พ.ศ. 2556 และข้อความที่ให้ไว้ข้างต้นเป็นความจริงทุกประการ นอกจากนี้ เพื่อประโยชน์ในการพิจารณารับเป็นสมาชิก ข้าพเจ้ายินยอมให้เจ้าหน้าที่ของสภาการสาธารณสุขชุมชนขอเอกสารและหลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชนเพิ่มเติมจากข้าพเจ้าได้"
            color="success"></v-checkbox>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
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
      //ระดับการศึกษา
      selectedEducation: [], // เก็บค่าที่ถูกเลือก
      educationLevels: [
        { label: "ประกาศนียบัตร", value: "certificate" },
        { label: "อนุปริญญา", value: "advanced-certificate" },
        { label: "ปริญญาตรี", value: "bachelor" },
        { label: "ปริญญาโท", value: "master" },
        { label: "ปริญญาเอก", value: "phd" },
      ],
      me_level: ["bachelor"],

    };
  },
  methods: {
    viewFile(fileUrl) {
      window.open(fileUrl, "_blank");
    },
    submitStep2() {
      console.log("ข้อมูลที่ยืนยันแล้ว: ", this.formData);
      this.$emit("step2Submitted", this.formData);
    },
  },
  mounted() {
    this.selectedEducation = [...this.me_level];
  },
  watch: {
    me_level(newVal) {
      this.selectedEducation = [...newVal];
    }
  },
  computed: {
    selectedEducationLabel() {
      return this.educationLevels
        .filter(option => this.selectedEducation.includes(option.value))
        .map(option => option.label)
        .join(", ") || "ไม่ระบุ";
    }
  }
};
</script>

<style scoped>
.required::after {
  content: "*";
  color: red;
}

.custom-input {
  max-width: 300px;
  height: 80px;
}

.custom-left-margin {
  justify-content: space-between;
}

.v-text-field--outlined>>>fieldset {
  border-color: rgba(218, 218, 218, 0.986);
  border-width: 1px;
  background: #F5F6FA;
  border-radius: 10px;
}

.cardradio {
  border-radius: 10px;
}

.custom-left-margin2 {
  margin-top: 50px;
}

.textheader {
  font-size: 20px;
  font-weight: bold;
}

.currentphone {
  margin-left: 60px;
}

.custom-input3 {
  max-width: 300px;
  height: 80px;
  margin-left: 60px;
}

.radio-box {
  padding: 10px;
  width: 320px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
