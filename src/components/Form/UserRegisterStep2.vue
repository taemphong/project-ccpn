<template>
  <v-container>
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">ข้อมูลส่วนตัว </h2>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">คำนำหน้าชื่อ</div>
        <v-text-field :value="formData.mp_name1" outlined class="custom-input" readonly></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ </div>
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
        <v-text-field :value="formData.mp_name1_eng" :items="prefixOptionsEn" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ชื่อ (อังกฤษ)</div>
        <v-text-field :value="formData.mp_name2_eng" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">นามสกุล (อังกฤษ)</div>
        <v-text-field :value="formData.mp_name3_eng" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">เพศ</div>
        <v-text-field :value="formData.mp_gender" :items="genderOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">สัญชาติ</div>
        <v-text-field :value="formData.mp_nationality" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เชื้อชาติ</div>
        <v-text-field :value="formData.mp_ethnicity" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ศาสนา</div>
        <v-text-field :value="formData.mp_religion" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">หมู่โลหิต</div>
        <v-text-field :value="formData.mp_blood" :items="bloodTypeOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ประเภทหน่วยงาน</div>
        <v-text-field :value="formData.mp_company_type" :items="organizationTypeOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">ตำแหน่ง</div>
        <v-text-field :value="formData.mp_position" :items="positionOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">โทรศัพท์มือถือ</div>
        <v-text-field :value="formData.mp_tel" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อีเมล</div>
        <v-text-field :value="formData.mp_email" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row class="custom-left-margin"> วัน-เดือน-ปีเกิด </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field :value="formData.day" :items="mp_birthday" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field :value="formData.month" :items="mp_birthday" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field :value="formData.year" :items="mp_birthday" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เลขบัตรประชาชน</div>
        <v-text-field :value="formData.mp_customer_id" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin"> วันหมดอายุบัตร </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">วัน</div>
        <v-text-field :value="formData.mp_dateexp" :items="dayOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เดือน</div>
        <v-text-field :value="formData.mp_dateexp" :items="monthOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ปี</div>
        <v-text-field :value="formData.mp_dateexp" :items="yearOptions2" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ออกโดย</div>
        <v-text-field :value="formData.mp_issued_by" outlined class="custom-input" readonly></v-text-field>
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
        <v-text-field :value="formData.mha_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field :value="formData.mha_province" :items="positionOptions" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field :value="formData.mha_amphoe" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field :value="formData.mha_district" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field :value="formData.mha_zipcode" :items="positionOptions" outlined class="custom-input"
          readonly></v-text-field>
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
        <v-text-field :value="formData.mca_company" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 ">ที่อยู่ </div>
        <v-text-field :value="formData.mca_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field :value="formData.position" :items="mca_province" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field :value="formData.mca_amphoe" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field :value="formData.mca_district" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field :value="formData.mca_zipcode" :items="workpostalCode" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">โทรศัพท์ที่ทำงาน</div>
        <v-text-field :value="formData.mca_phone" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อีเมล</div>
        <v-text-field :value="formData.mca_email" outlined class="custom-input" readonly></v-text-field>
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
        <v-text-field :value="formData.moa_address" outlined rows="3"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">จังหวัด</div>
        <v-text-field :value="formData.moa_province" :items="currentProvince" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">อำเภอ/เขต</div>
        <v-text-field :value="formData.moa_amphoe" outlined class="custom-input" readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ตำบล/แขวง</div>
        <v-text-field :value="formData.moa_district" outlined class="custom-input" readonly></v-text-field>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="3">
        <div class="mb-3">รหัสไปรษณีย์</div>
        <v-text-field :value="formData.moa_zipcode" :items="currentPostalCode" outlined class="custom-input"
          readonly></v-text-field>
      </v-col>
      <v-col cols="12" md="8">
        <div class="mb-3 currentphone">โทรศัพท์มือถือ</div>
        <v-text-field :value="formData.moa_phone" outlined class="custom-input3"></v-text-field>
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
          <v-checkbox
    v-for="(option, index) in educationLevels"
    :key="index"
    v-model="selectedEducation"
    :label="option.label"
    :value="option.value"
    color="green"
    :disabled="isEducationDisabled(option.value)"
  ></v-checkbox>
      </v-col>
    </v-row>

    <!-- วุฒิที่1 -->
    <template v-if="formData.educationalData1 && Object.keys(formData.educationalData1).length > 0">
  <v-row class="custom-left-margin ml-10">
    <v-col><div>ประกาศนียบัตร</div></v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สถานที่ศึกษา</div>
      <v-text-field :value="formData.educationalData1.educational_institution1" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วุฒิการศึกษา</div>
      <v-text-field :value="formData.educationalData1.educational_qualification1" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สาขาวิชา</div>
      <v-text-field :value="formData.educationalData1.fieldofstudy1" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
      <v-text-field :value="formData.educationalData1.graduationDate1" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-container v-if="transcriptPreview(1) || qualificationPreview(1)">
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ formData.educationalData1.educational_qualification1 }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ formData.educationalData1.educational_qualification1 }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="transcriptPreview(1)" :href="transcriptPreview(1)" target="_blank">
          คลิกดูไฟล์ที่แนบ 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="qualificationPreview(1)" :href="qualificationPreview(1)" target="_blank">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

   <!-- วุฒิที่2 -->
   <template v-if="formData.educationalData2 && Object.keys(formData.educationalData2).length > 0">
  <v-row class="custom-left-margin ml-10">
    <v-col><div>อนุปริญญา</div></v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สถานที่ศึกษา</div>
      <v-text-field :value="formData.educationalData2.educational_institution2" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วุฒิการศึกษา</div>
      <v-text-field :value="formData.educationalData2.educational_qualification2" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สาขาวิชา</div>
      <v-text-field :value="formData.educationalData2.fieldofstudy2" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
      <v-text-field :value="formData.educationalData2.graduationDate2" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-container v-if="transcriptPreview(2) || qualificationPreview(2)">
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ formData.educationalData2.educational_qualification2 }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ formData.educationalData2.educational_qualification2 }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="transcriptPreview(2)" :href="transcriptPreview(2)" target="_blank">
          คลิกดูไฟล์ที่แนบ 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="qualificationPreview(2)" :href="qualificationPreview(2)" target="_blank">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- วุฒิที่3 -->
<template v-if="formData.educationalData3 && Object.keys(formData.educationalData3).length > 0">
  <v-row class="custom-left-margin ml-10">
    <v-col><div>ปริญญาตรี</div></v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สถานที่ศึกษา</div>
      <v-text-field :value="formData.educationalData3.educational_institution3" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วุฒิการศึกษา</div>
      <v-text-field :value="formData.educationalData3.educational_qualification3" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สาขาวิชา</div>
      <v-text-field :value="formData.educationalData3.fieldofstudy3" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
      <v-text-field :value="formData.educationalData3.graduationDate3" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-container v-if="transcriptPreview(3) || qualificationPreview(3)">
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ formData.educationalData3.educational_qualification3 }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ formData.educationalData3.educational_qualification3 }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="transcriptPreview(3)" :href="transcriptPreview(3)" target="_blank">
          คลิกดูไฟล์ที่แนบ 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="qualificationPreview(3)" :href="qualificationPreview(3)" target="_blank">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- วุฒิที่4 -->
<template v-if="formData.educationalData4 && Object.keys(formData.educationalData4).length > 0">
  <v-row class="custom-left-margin ml-10">
    <v-col><div>ปริญญาโท</div></v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สถานที่ศึกษา</div>
      <v-text-field :value="formData.educationalData4.educational_institution4" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วุฒิการศึกษา</div>
      <v-text-field :value="formData.educationalData4.educational_qualification4" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สาขาวิชา</div>
      <v-text-field :value="formData.educationalData4.fieldofstudy4" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
      <v-text-field :value="formData.educationalData4.graduationDate4" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-container v-if="transcriptPreview(4) || qualificationPreview(4)">
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ formData.educationalData4.educational_qualification4 }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ formData.educationalData4.educational_qualification4 }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="transcriptPreview(4)" :href="transcriptPreview(4)" target="_blank">
          คลิกดูไฟล์ที่แนบ 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="qualificationPreview(4)" :href="qualificationPreview(4)" target="_blank">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- วุฒิที่5 -->
<template v-if="formData.educationalData5 && Object.keys(formData.educationalData5).length > 0">
  <v-row class="custom-left-margin ml-10">
    <v-col><div>ปริญญาเอก</div></v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สถานที่ศึกษา</div>
      <v-text-field :value="formData.educationalData5.educational_institution5" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วุฒิการศึกษา</div>
      <v-text-field :value="formData.educationalData5.educational_qualification5" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-row class="custom-left-margin">
    <v-col cols="12" md="6">
      <div class="mb-3">สาขาวิชา</div>
      <v-text-field :value="formData.educationalData5.fieldofstudy5" outlined class="custom-input" readonly></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <div class="mb-3">วัน/เดือน/ปี ที่จบการศึกษา</div>
      <v-text-field :value="formData.educationalData5.graduationDate5" outlined class="custom-input" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-container v-if="transcriptPreview(5) || qualificationPreview(5)">
    <v-row class="custom-left-margin">
      <v-col cols="12">
        <h2 class="textheader">สิ่งที่แนบมา</h2>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <div class="mb-3">Transcript ({{ formData.educationalData5.educational_qualification5 }})</div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-3">
          สำเนาหลักฐานแสดงวุฒิการศึกษา <br />
          หรือหนังสือรับรองการจบการศึกษาในระดับ {{ formData.educationalData5.educational_qualification5 }}
        </div>
      </v-col>
    </v-row>

    <v-row class="custom-left-margin">
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="transcriptPreview(5)" :href="transcriptPreview(5)" target="_blank">
          คลิกดูไฟล์ที่แนบ 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn x-large color="#FFD56D" style="width: 400px; height: 50px; color: black"
        v-if="qualificationPreview(5)" :href="qualificationPreview(5)" target="_blank">
          คลิกดูไฟล์ที่แนบ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>



    <v-container>
     

      
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
      @click="showPhotoInfo = !showPhotoInfo"
    >
      คลิกดูไฟล์ที่แนบ
    </v-btn>
    <div style="margin-top: 10px;" v-if="showPhotoInfo">
      <p>photoName: {{ formData.photo.name }}</p>
      <p>photoSize: {{ (formData.photo.size / 1024).toFixed(2) }} KB</p>
      <p>photoType: {{ formData.photo.type }}</p>
    </div>


        </v-col>
        <v-col cols="12" md="6" v-if="files.houseregistration">
          <v-btn 
      x-large 
      color="#FFD56D" 
      style="width: 400px; height: 50px; color: black"
      @click="showHouseInfo = !showHouseInfo"
    >
      คลิกดูไฟล์ที่แนบ
    </v-btn>
    <div style="margin-top: 10px;" v-if="showHouseInfo">
      <p>COH_Name: {{ formData.Copyof_houseregistration.name }}</p>
      <p>COH_Size: {{ (formData.Copyof_houseregistration.size / 1024).toFixed(2) }} KB</p>
      <p>COH_Type: {{ formData.Copyof_houseregistration.type }}</p>
    </div>
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
      @click="showCustomerInfo = !showCustomerInfo"
    >
      คลิกดูไฟล์ที่แนบ
    </v-btn>
    <div style="margin-top: 10px;" v-if="showCustomerInfo">
      <p>IdCardName: {{ formData.Copyof_mp_customer_id.name }}</p>
      <p>IdCardSize: {{ (formData.Copyof_mp_customer_id.size / 1024).toFixed(2) }} KB</p>
      <p>IdCardType: {{ formData.Copyof_mp_customer_id.type }}</p>
    </div>
        </v-col>
        <v-col cols="12" md="6" v-if="files.Namechange">
          <v-btn 
      x-large 
      color="#FFD56D" 
      style="width: 400px; height: 50px; color: black"
      @click="showOtherinfo = !showOtherinfo"
    >
      คลิกดูไฟล์ที่แนบ
    </v-btn>
    <div style="margin-top: 10px;" v-if="showOtherinfo">
      <p>OtherName: {{ formData.Namechange_certificate.name }}</p>
      <p>OtherSize: {{ (formData.Namechange_certificate.size / 1024).toFixed(2) }} KB</p>
      <p>OtherType: {{ formData.Namechange_certificate.type }}</p>
    </div>
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
      @click="showMedicalInfo = !showMedicalInfo"
    >
      คลิกดูไฟล์ที่แนบ
    </v-btn>
    <div style="margin-top: 10px;" v-if="showMedicalInfo">
      <p>MedicalName: {{ formData.Medical_certificate.name }}</p>
      <p>MedicalSize: {{ (formData.Medical_certificate.size / 1024).toFixed(2) }} KB</p>
      <p>MedicalType: {{ formData.Medical_certificate.type }}</p>
    </div>
        </v-col>
      </v-row>
    </v-container>

    <v-row class="custom-left-margin2">
      <v-col cols="12" md="12">
        <h2 class="mb-5 textheader">หลักฐานการสมัครสมาชิกสภาการสาธารณสุขชุมชน</h2>
        <h3 class="mb-5 required2" style="font-weight: 500; margin-top: -15px">
          ข้าพเจ้าได้แนบหลักฐานประกอบการสมัครสมาชิกสภาการสาธาณสุขชุมชน
          ดังต่อไปนี้
        </h3>
        <v-container fluid>
          <v-checkbox v-model="Copyof_houseregistration" label="สำเนาทะเบียนบ้าน 1 ฉบับ" value="สำเนาทะเบียนบ้าน 1 ฉบับ"
            color="success"></v-checkbox>
          <v-checkbox v-model="Copyof_mp_customer_id" label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            value="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ" color="success"></v-checkbox>
          <v-checkbox v-model="selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            color="success" readonly></v-checkbox>
          <div style="margin-left: 30px">
            <v-checkbox v-model="selected2" label="Transcript" value="Transcript" color="success" readonly></v-checkbox>
            <v-checkbox v-model="selected2" label="ปริญญาบัตร" value="ปริญญาบัตร" color="success" readonly></v-checkbox>
            <v-checkbox v-model="selected2" label="อนุปริญญาบัตร" value="อนุปริญญาบัตร" color="success" readonly></v-checkbox>
            <v-checkbox v-model="selected2" label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
              value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา" color="success" readonly></v-checkbox>
          </div>
          <v-checkbox v-model="photo"
            label="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            value="ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ"
            color="success"></v-checkbox>
          <v-checkbox v-model="Medical_certificate" label="ใบรับรองแพทย์" value="ใบรับรองแพทย์" color="success"></v-checkbox>
          <v-checkbox v-model="Namechange_certificate" label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)" value="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
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
      showPhotoInfo: false,
      showHouseInfo: false,
      showCustomerInfo: false,
      showMedicalInfo: false,
      showOtherinfo: false,
      selected2: [
        "สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง",
        "Transcript",
        "ปริญญาบัตร",
        "อนุปริญญาบัตร",
        "วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
      ],
      Copyof_houseregistration: [
        "สำเนาทะเบียนบ้าน 1 ฉบับ",
      ],
      Copyof_mp_customer_id: [
        "สำเนาบัตรประจำตัวประชาชน 1 ฉบับ",
      ],
      photo: [
        "ภาพถ่ายหน้าตรงครึ่งตัวท่าปกติไม่สวมแว่นดำซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว จำนวน 2 ภาพ",
      ],
      Medical_certificate: [
        "ใบรับรองแพทย์",
      ],
      Namechange_certificate: [
        "สำเนาหลักฐานอื่น ๆ(ถ้ามี)",
      ],
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
      me_level: ["master"],

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
     formData: {
      photo: null,
    handler(newVal) {
      let selected = [];

      if (newVal.educationalData1) {
        selected.push("certificate"); // ติ๊กอัตโนมัติ
      }
      if (newVal.educationalData2) {
        selected.push("advanced-certificate"); // ติ๊กอัตโนมัติ
      }
      if (newVal.educationalData3) {
        selected.push("bachelor"); // ติ๊กอัตโนมัติ
      }
      if (newVal.educationalData4) {
        selected.push("master"); // ติ๊กอัตโนมัติ
      }
      if (newVal.educationalData5) {
        selected.push("phd"); // ติ๊กอัตโนมัติ
      }

      this.selectedEducation = selected;
    },
    deep: true,
    immediate: true,
  },
  },
  computed: {
    shouldShowEducationData() {
    return this.formData.educationalData1 ||
           this.formData.educationalData2 ||
           this.formData.educationalData3 ||
           this.formData.educationalData4 ||
           this.formData.educationalData5 ||
           this.transcriptPreview(1) ||
           this.transcriptPreview(2) ||
           this.transcriptPreview(3) ||
           this.transcriptPreview(4) ||
           this.transcriptPreview(5) ||
           this.qualificationPreview(1) ||
           this.qualificationPreview(2) ||
           this.qualificationPreview(3) ||
           this.qualificationPreview(4) ||
           this.qualificationPreview(5);
},
hasEducationalData() {
    return (this.formData.educationalData1 && Object.keys(this.formData.educationalData1).length > 0) ||
           (this.formData.educationalData2 && Object.keys(this.formData.educationalData2).length > 0) ||
           (this.formData.educationalData3 && Object.keys(this.formData.educationalData3).length > 0) ||
           (this.formData.educationalData4 && Object.keys(this.formData.educationalData4).length > 0) ||
           (this.formData.educationalData5 && Object.keys(this.formData.educationalData5).length > 0);
},
  transcriptPreview() {
    return (index) => {
      const transcriptKey = `transcript${index}`;
      if (this.formData[`educationalData${index}`]?.[transcriptKey] instanceof Blob) {
        return URL.createObjectURL(this.formData[`educationalData${index}`][transcriptKey]);
      }
      return null;
    };
  },
  qualificationPreview() {
    return (index) => {
      const qualificationKey = `showing_educational_qualifications${index}`;
      if (this.formData[`educationalData${index}`]?.[qualificationKey] instanceof Blob) {
        return URL.createObjectURL(this.formData[`educationalData${index}`][qualificationKey]);
      }
      return null;
    };
  },
  photoPreview() {
    console.log("📌 Computed photoPreview - formData.photo:", this.formData.photo);
    return this.formData.photo ? URL.createObjectURL(this.formData.photo) : null;
  },
    isEducationDisabled() {
      return (value) => {
        if (value === "certificate") {
            return !!this.formData.educationalData1;
        }
        if (value === "advanced-certificate") {
            return !!this.formData.educationalData2;
        }
        if (value === "bachelor") {
            return !!this.formData.educationalData3;
        }
        if (value === "master") {
            return !!this.formData.educationalData4;
        }
        if (value === "phd") {
            return !!this.formData.educationalData5;
        }
        return false;
    };
  },
    // เช็กว่า educationalData1 มีข้อมูลหรือไม่
    isCertificateDisabled() {
    return !!this.formData.educationalData1;
},
isAdvancedCertificateDisabled() {
    return !!this.formData.educationalData2;
},
isBachelorDisabled() {
    return !!this.formData.educationalData3;
},
isMasterDisabled() {
    return !!this.formData.educationalData4;
},
isPhdDisabled() {
    return !!this.formData.educationalData5;
},
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
