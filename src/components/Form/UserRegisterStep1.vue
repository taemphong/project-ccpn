<template>
  <v-container>
    <h2 class="sectionhead">ข้อมูลส่วนตัว</h2>
    <v-row class="v-raw-between">
      <v-col cols="12">
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ </div>
        <v-select :rules="[validateRequired]" v-model="formData.mp_name1" @input="logFormData" :items="prefixOptions"
          outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_name2" @input="logFormData"
          outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_name3" @input="logFormData"
          outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">คำนำหน้าชื่อ (อังกฤษ) </div>
        <v-select :rules="[validateRequired]" v-model="formData.mp_name1_eng" :items="prefixOptionsEn"
          @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ชื่อ (อังกฤษ) </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_name2_eng" @input="logFormData"
          outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">นามสกุล (อังกฤษ) </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_name3_eng" @input="logFormData"
          outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">เพศ </div>
        <v-select :rules="[validateRequired]" v-model="formData.mp_gender" :items="mp_genderOptions"
          @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">สัญชาติ </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_nationality" @input="logFormData"
          outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">เชื้อชาติ </div>
        <v-text-field :rules="[validateRequired]" v-model="formData.mp_ethnicity" @input="logFormData"
          outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ศาสนา </div>
        <v-text-field v-model="formData.mp_religion" @input="logFormData" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">หมู่โลหิต </div>
        <v-select v-model="formData.mp_blood" :items="mp_bloodOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ประเภทหน่วยงาน </div>
        <v-select v-model="formData.mp_company_type" :items="mp_company_typeOptions" @input="logFormData"
          outlined></v-select>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำแหน่ง </div>
        <v-select v-model="formData.mp_position" :items="mp_positionOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์มือถือ </div>
        <v-text-field v-model="formData.mp_tel" @input="logFormData" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field v-model="formData.mp_email" @input="logFormData" outlined></v-text-field>
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
        <v-select v-model="formData.mp_birthday" :items="dayOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">เดือน </div>
        <v-select v-model="formData.mp_birthmonth" :items="monthOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col margin-right">
        <div class="mb-3 required">ปี </div>
        <v-select v-model="formData.mp_birthyear" :items="yearOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">เลขบัตรประชาชน</div>
        <v-text-field v-model="formData.mp_customer_id" @input="logFormData" outlined></v-text-field>
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
        <v-select v-model="formData.ml_expired" :items="dayOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col">
        <div class="mb-3 required">เดือน </div>
        <v-select v-model="formData.ml_expired" :items="monthOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3" class="custom-col margin-right">
        <div class="mb-3 required">ปี </div>
        <v-select v-model="formData.ml_expired" :items="yearOptions2" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3">ออกโดย</div>
        <v-text-field v-model="formData.mp_issued_by" @input="logFormData" outlined></v-text-field>
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
        <v-textarea v-model="formData.mha_address" @input="logFormData" outlined rows="3"></v-textarea>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="formData.mha_province" :items="mha_provinceOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="formData.mha_amphoe" :items="mha_amphoeOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="formData.mha_district" :items="mha_districtOptions" @input="logFormData" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field v-model="formData.mha_zipcode" @input="logFormData" outlined></v-text-field>
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
        <v-text-field v-model="formData.mca_company" @input="logFormData" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <div class="mb-3 required">ที่อยู่ </div>
        <v-text-field v-model="formData.mca_address" @input="logFormData" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="formData.mca_province" :items="mca_provinceOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="formData.mca_amphoe" :items="mca_amphoeOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="formData.mca_district" :items="mca_districtOptions" @input="logFormData" outlined></v-select>
      </v-col>
    </v-row>


    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field v-model="formData.mca_zipcode" @input="logFormData" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">โทรศัพท์ที่ทำงาน </div>
        <v-text-field v-model="formData.mca_phone" @input="logFormData" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 ">อีเมล </div>
        <v-text-field v-model="formData.mca_email" @input="logFormData" outlined></v-text-field>
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
        <v-text-field v-model="formData.moa_address" @input="logFormData" outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="v-raw-between">
      <v-col cols="12" md="3">
        <div class="mb-3 required">จังหวัด </div>
        <v-select v-model="formData.moa_province" :items="moa_provinceOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">อำเภอ/เขต </div>
        <v-select v-model="formData.moa_amphoe" :items="moa_amphoeOptions" @input="logFormData" outlined></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <div class="mb-3 required">ตำบล/แขวง </div>
        <v-select v-model="formData.moa_district" :items="moa_districtOptions" @input="logFormData" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <div class="mb-3 required">รหัสไปรษณีย์ </div>
        <v-text-field v-model="formData.moa_zipcode" @input="logFormData" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="3" class="custom-margin">
        <div class="mb-3 required">โทรศัพท์มือถือ </div>
        <v-text-field v-model="formData.moa_phone" @input="logFormData" outlined></v-text-field>
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
        <Educational1 v-model="formData.educationalData1" />
        <Educational2 v-model="formData.educationalData2" />
        <Educational3 v-model="formData.educationalData3" />
        <Educational4 v-model="formData.educationalData4" />
        <Educational5 v-model="formData.educationalData5" />
      </v-container>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">
          การเป็นสมาชิกสมาคมหรือองค์กรวิชาชีพ ต่างๆ (สมาคมที่เกี่ยวข้องเป็นหลัก)</h2>
        <div class="mb-3 ">โปรดระบุ (ถ้ามี) </div>
        <v-text-field v-model="associations_involved" outlined></v-text-field>
      </v-col>



      <v-col cols="12" md="12">
        <h2 style="  font-size: 1.5rem;
        font-weight: 600;margin-bottom: 20px;">แนบหลักฐานประกอบการพิจารณา</h2>
        <div class="mb-3 required">ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก ซึ่งถ่ายไว้แล้วไม่เกิน 6
          เดือน
          ขนาด 1 นิ้ว </div>
        <v-file-input v-model="photo" outlined placeholder="File input"
          :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png และ .jpeg
        </div>

        <div class="mb-3 required">สำเนาทะเบียนบ้าน</div>
        <v-file-input v-model="Copyof_houseregistration" outlined placeholder="File input"
          :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">
          หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล .jpg .png .jpeg และ .pdf
        </div>

        <div class="mb-3 required">สำเนาบัตรประจำตัวประชาชน </div>
        <v-file-input v-model="Copyof_mp_customer_id" outlined placeholder="File input"
          :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>

        <div class="mb-3 required">ใบรับรองแพทย์ </div>
        <v-file-input v-model="Medical_certificate" outlined placeholder="File input"
          :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
        <div style="text-align: end; margin-top: -20px;">หมายเหตุ : ขอให้ท่านบันทึกไฟล์เป็นนามสกุล.jpg .png .jpeg และ
          .pdf
        </div>

        <div class="mb-3 required">ใบเปลี่ยนชื่อ - นามสกุล หรือ เอกสารอื่นๆ (ถ้ามี) </div>
        <v-file-input v-model="Namechange_certificate" outlined placeholder="File input"
          :accept="['image/jpeg', 'image/png', 'application/pdf']"></v-file-input>
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
            :readonly="!Copyof_houseregistration || selectedhouse_registration" color="light-green"></v-checkbox>

          <v-checkbox :style="checkboxStyle2" v-model="selectedmp_customer_id" label="สำเนาบัตรประจำตัวประชาชน 1 ฉบับ"
            :readonly="!Copyof_mp_customer_id || selectedmp_customer_id" color="light-green"></v-checkbox>

          <v-checkbox color="light-green" v-model="formData.selected2"
            label="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            value="สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง"
            readonly></v-checkbox>

          <div style="margin-left: 30px;">
            <v-checkbox  class="check" color="light-green" v-model="formData.selected2" label="Transcript" value="Transcript"
            readonly ></v-checkbox>

            <v-checkbox color="light-green" v-model="formData.selected2" label="ปริญญาบัตร" value="ปริญญาบัตร"
            readonly></v-checkbox>

            <v-checkbox color="light-green" v-model="formData.anuparinya" label="อนุปริญญาบัตร"
            readonly value="อนุปริญญาบัตร"></v-checkbox>

            <v-checkbox color="light-green" v-model="formData.selected2" label="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
            readonly value="วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"></v-checkbox>

          </div>
          <v-checkbox :style="checkboxStylePhoto" v-model="selectedPhoto"
            label="ภาพถ่ายหน้าตรง ครึ่งตัว ท่าปกติ ไม่สวมแว่นตา ไม่สวมหมวก ซึ่งถ่ายไว้ไม่เกิน 6 เดือน ขนาด 1 นิ้ว"
            :readonly="!photo || selectedPhoto" color="light-green"></v-checkbox>

          <v-checkbox :style="checkboxStyleMedicalCertificate" v-model="selectedMedicalCertificate"
            label="ใบรับรองแพทย์" :readonly="!Medical_certificate || selectedMedicalCertificate" color="light-green"></v-checkbox>

          <v-checkbox :style="checkboxStyleNameChange" v-model="selectedNameChange" label="สำเนาหลักฐานอื่น ๆ(ถ้ามี)"
            :readonly="!Namechange_certificate || selectedNameChange" color="light-green"></v-checkbox>

        </v-container>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <h2 style=" font-size: 1.5rem;
        font-weight: 600;" class="mt-5 required2">การให้ความยินยอม</h2>
        <v-container fluid>
          <v-checkbox color="light-green" v-model="formData.acceptpage"
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
    Copyof_houseregistration(newVal) {
  if (newVal instanceof File) {
    this.formData.Copyof_houseregistration = newVal; // เก็บไฟล์ทั้งก้อน
    this.selectedhouse_registration = true; // ติ๊ก checkbox อัตโนมัติ
  } else if (Array.isArray(newVal) && newVal.length > 0) {
    this.formData.Copyof_houseregistration = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
    this.selectedhouse_registration = true; // ติ๊ก checkbox อัตโนมัติ
  } else {
    this.formData.Copyof_houseregistration = null; // ไม่มีไฟล์
    this.selectedhouse_registration = false; // ยกเลิกติ๊ก checkbox
  }
  console.log("ข้อมูลไฟล์:", this.formData.Copyof_houseregistration);
},
    // เมื่อไฟล์ Copyof_mp_customer_id เปลี่ยนแปลง
    Copyof_mp_customer_id(newVal) {
  if (newVal instanceof File) {
    this.formData.Copyof_mp_customer_id = newVal; // เก็บไฟล์ทั้งก้อน
    this.selectedmp_customer_id = true; // ติ๊ก checkbox อัตโนมัติ
  } else if (Array.isArray(newVal) && newVal.length > 0) {
    this.formData.Copyof_mp_customer_id = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
    this.selectedmp_customer_id = true; // ติ๊ก checkbox อัตโนมัติ
  } else {
    this.formData.Copyof_mp_customer_id = null; // ไม่มีไฟล์
    this.selectedmp_customer_id = false; // ยกเลิกติ๊ก checkbox
  }
  console.log("ข้อมูลไฟล์:", this.formData.Copyof_mp_customer_id);
},
    // เพิ่มการจัดการไฟล์ภาพถ่ายหน้าตรง
    photo(newVal) {
  if (newVal instanceof File) {
    this.formData.photo = newVal; // เก็บไฟล์ทั้งก้อน
    this.selectedPhoto = true; // ติ๊ก checkbox อัตโนมัติ
  } else if (Array.isArray(newVal) && newVal.length > 0) {
    this.formData.photo = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
    this.selectedPhoto = true; // ติ๊ก checkbox อัตโนมัติ
  } else {
    this.formData.photo = null; // ไม่มีไฟล์
    this.selectedPhoto = false; // ยกเลิกติ๊ก checkbox
  }
  console.log("ข้อมูลไฟล์:", this.formData.photo);
},
    // เพิ่มการจัดการใบรับรองแพทย์
    Medical_certificate(newVal) {
  if (newVal instanceof File) {
    this.formData.Medical_certificate = newVal; // เก็บไฟล์ทั้งก้อน
    this.selectedMedicalCertificate = true; // ติ๊ก checkbox อัตโนมัติ
  } else if (Array.isArray(newVal) && newVal.length > 0) {
    this.formData.Medical_certificate = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
    this.selectedMedicalCertificate = true; // ติ๊ก checkbox อัตโนมัติ
  } else {
    this.formData.Medical_certificate = null; // ไม่มีไฟล์
    this.selectedMedicalCertificate = false; // ยกเลิกติ๊ก checkbox
  }
  console.log("ข้อมูลไฟล์:", this.formData.Medical_certificate);
},
    // เพิ่มการจัดการใบเปลี่ยนชื่อ - นามสกุล หรือเอกสารอื่นๆ
    Namechange_certificate(newVal) {
  if (newVal instanceof File) {
    this.formData.Namechange_certificate = newVal; // เก็บไฟล์ทั้งก้อน
    this.selectedNameChange = true; // ติ๊ก checkbox อัตโนมัติ
  } else if (Array.isArray(newVal) && newVal.length > 0) {
    this.formData.Namechange_certificate = newVal[0]; // เก็บไฟล์แรก (ถ้ามีหลายไฟล์)
    this.selectedNameChange = true; // ติ๊ก checkbox อัตโนมัติ
  } else {
    this.formData.Namechange_certificate = null; // ไม่มีไฟล์
    this.selectedNameChange = false; // ยกเลิกติ๊ก checkbox
  }
  console.log("ข้อมูลไฟล์:", this.formData.Namechange_certificate);
},

    formData: {
      handler(newVal) {
        this.$emit("input", newVal);
        const isInvalid = Object.values(newVal).some(value => validateRequired(value) !== true);
        this.$emit("validationChanged", isInvalid);
      },
      deep: true,
    },
    'formData.educationalData1': function () {
      this.updateCheckboxes();
    },
    'formData.educationalData2': function () {
      this.updateCheckboxes2();
    },
    'formData.educationalData3': function () {
      this.updateCheckboxes();
    },
    'formData.educationalData4': function () {
      this.updateCheckboxes();
    },
    'formData.educationalData5': function () {
      this.updateCheckboxes();
    },
    
  },

  components: {
    Educational1,
    Educational2,
    Educational3,
    Educational4,
    Educational5,
  },

  data() {
    return {
      A: '',
      Copyof_houseregistration: null,  // เก็บไฟล์
      selectedhouse_registration: false,  // ค่า Checkbox
      Copyof_mp_customer_id: null,
      selectedmp_customer_id: false,
      photo: null,  // เก็บไฟล์ภาพถ่ายหน้าตรง
      selectedPhoto: false,  // ค่า Checkbox สำหรับภาพถ่ายหน้าตรง
      Medical_certificate: null,  // เก็บไฟล์ใบรับรองแพทย์
      selectedMedicalCertificate: false,  // ค่า Checkbox สำหรับใบรับรองแพทย์
      Namechange_certificate: null,  // เก็บไฟล์ใบเปลี่ยนชื่อ - นามสกุล
      selectedNameChange: false,  // ค่า Checkbox สำหรับใบเปลี่ยนชื่อ - นามสกุล
      formData: this.value,


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
        "01", "02", "03", "04", "05", "06",
        "07", "08", "09", "10", "11", "12"
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
      mha_amphoeOptions: ["ดินแดง", "เมือง"],
      mha_districtOptions: ["รัชดา", "ห้วยขวาง"],

      mca_province: '',
      mca_amphoe: '',
      mca_district: '',
      mca_zipcode: '',
      mca_phone: '',
      mca_email: '',
      mca_address: '',
      mca_company: '',
      mca_provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      mca_amphoeOptions: ["ดินแดง", "เมือง"],
      mca_districtOptions: ["รัชดา", "ห้วยขวาง"],

      moa_address: '',
      moa_province: null,
      moa_amphoe: null,
      moa_district: null,
      moa_zipcode: '',
      moa_phone: '',
      moa_provinceOptions: ["กรุงเทพมหานคร", "เชียงใหม่", "ขอนแก่น", "ภูเก็ต"], // เพิ่มจังหวัดที่ต้องการ
      moa_amphoeOptions: ["ดินแดง", "เมือง"],
      moa_districtOptions: ["รัชดา", "ห้วยขวาง"],

      radios: '',

      selected: [],


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
    checkboxStylePhoto() {
      if (this.photo && this.selectedPhoto) {
        return {
          color: '#4caf50',
        };
      }
      return {};
    },
    checkboxStyleMedicalCertificate() {
      if (this.Medical_certificate && this.selectedMedicalCertificate) {
        return {
          color: '#4caf50',
        };
      }
      return {};
    },
    checkboxStyleNameChange() {
      if (this.Namechange_certificate && this.selectedNameChange) {
        return {
          color: '#4caf50',
        };
      }
      return {};
    },
    // ตรวจสอบว่ามีข้อผิดพลาดในฟอร์มหรือไม่
    hasError() {
      return this.validateForm();
    },
  },
  methods: {
   updateCheckboxes() {
  // ตรวจสอบว่าอย่างน้อยหนึ่งช่องถูกเลือกหรือไม่
  if (
    this.formData.educationalData1 ||
    this.formData.educationalData2 ||
    this.formData.educationalData3 ||
    this.formData.educationalData4 ||
    this.formData.educationalData5
  ) {
    // ถ้ามีการเลือกให้ติ๊ก checkbox ที่เกี่ยวข้อง
    this.formData.selected2 = [
      "สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง",
      "Transcript",
      "ปริญญาบัตร",
      "วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
    ];
  } else {
    // ถ้าไม่มีการเลือกให้ยกเลิกการติ๊ก
    this.formData.selected2 = [];
  }
},
updateCheckboxes2() {
  // ตรวจสอบว่าอย่างน้อยหนึ่งช่องถูกเลือกหรือไม่
  if (
    this.formData.educationalData1 ||
    this.formData.educationalData2 ||
    this.formData.educationalData3 ||
    this.formData.educationalData4 ||
    this.formData.educationalData5
  ) {
    this.formData.anuparinya = [
      "สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง",
      "Transcript",
      "ปริญญาบัตร",
      "อนุปริญญาบัตร",
      "วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
    ];
    // ถ้ามีการเลือกให้ติ๊ก checkbox ที่เกี่ยวข้อง
    this.formData.selected2 = [
      "สำเนาหลักฐานแสดงวุฒิการศึกษา หรือหนังสือรับรองการจบการศึกษาในระดับ ปริญญา ประกาศนียบัตรเทียบเท่าปริญญา อนุปริญญา ประกาศนียบัตร หรือวุฒิบัตรในวิชาชีพการสาธารณสุขชุมชน จากสถาบันการศึกษาที่สภาการสาธารณสุขชุมชนรับรอง",
      "Transcript",
      "ปริญญาบัตร",
      "วุฒิบัตร หนังสือรับรองสำเร็จการศึกษา"
    ];
  } else {
    // ถ้าไม่มีการเลือกให้ยกเลิกการติ๊ก
    this.formData.selected2 = [];
    this.formData.anuparinya = [];
  }
},
    logFormData() {
      console.log("ข้อมูลทั้งหมดที่กรอก: ", this.formData);
    },
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
.checked {
  background-color: #4caf50; /* สีเขียวเมื่อถูกติ๊ก */
  color: white;
}
</style>