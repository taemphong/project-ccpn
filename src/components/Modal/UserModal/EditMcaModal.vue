<template>
    <v-dialog v-model="isVisible" max-width="1090px">
        <v-card class="pa-5">
            <v-card-title style="font-size: 30px;" class="d-flex justify-center font-weight-bold">
                แก้ไขข้อมูลที่อยู่
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-card-title class="font-weight-bold">ที่อยู่ที่ทำงาน</v-card-title>
                    <v-row>
                        <v-col md="12">
                            <div class="mb-2">ที่อยู่</div>
                            <v-textarea class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.mca_address" :rules="[validateRequired]"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <div class="mb-2">จังหวัด</div>
                            <v-text-field class="textfield" placeholder="กรอกจังหวัด" outlined
                                v-model="editedAddress.mca_province" :rules="[validateRequired]"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">อำเภอ / เขต</div>
                            <v-text-field class="textfield" placeholder="กรอกอำเภอ / เขต" outlined
                                v-model="editedAddress.mca_amphoe" :rules="[validateRequired]"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">ตำบล / แขวง</div>
                            <v-text-field class="textfield" placeholder="กรอกตำบล / แขวง" outlined
                                v-model="editedAddress.mca_district" :rules="[validateRequired]"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <div class="mb-2">รหัสไปรษณีย์</div>
                            <v-text-field class="textfield" placeholder="กรอกรหัสไปรษณีย์" outlined
                                v-model="editedAddress.mca_zipcode" :rules="[validateRequired]"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div class="mb-2">อีเมล</div>
                            <v-text-field class="textfield" placeholder="กรอกอีเมล" outlined
                                v-model="editedAddress.mca_email" :rules="[validateEmail]"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div class="mb-2">เบอร์โทร</div>
                            <v-text-field class="textfield" placeholder="กรอกเบอร์โทรศัพท์" outlined
                                v-model="editedAddress.mca_phone" :rules="[validatePhone]"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn class="mr-6" elevation="2" color="green" dark rounded style="width: 150px;"
                    @click="confirmEdit">บันทึก</v-btn>
                <v-btn elevation="2" color="grey lighten-1" dark rounded style="width: 150px;"
                    @click="closeModal">ยกเลิก</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { validateRequired, validateEmail, validatePhone } from "../../../plugins/validate.js";


export default {
    props: {
        show: Boolean,
        addressData: Object,
    },
    data() {
        return {
            isVisible: this.show,
            editedAddress: { ...this.addressData },
        };
    },
    watch: {
        show(val) {
            this.isVisible = val;
        },
        isVisible(val) {
            if (!val) this.$emit("close");
        },
        addressData(newData) {
            this.editedAddress = { ...newData };
        },
    },
    methods: {
        closeModal() {
            this.isVisible = false;
        },
        async confirmEdit() {
            if (!this.$refs.form.validate()) {
        Swal.fire({
            icon: 'warning',
            title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            text: 'มีช่องที่ต้องกรอกแต่ยังไม่ได้กรอกหรือกรอกข้อมูลไม่ถูกต้อง',
        });
        return;
    }
            const authToken = localStorage.getItem('authToken');
            if (!authToken) return;

            const userData = JSON.parse(authToken);
            const payload = {
                CustomerID: userData.ml_customer_id,
                mca_address: this.editedAddress.mca_address,
                mca_province: this.editedAddress.mca_province,
                mca_amphoe: this.editedAddress.mca_amphoe,
                mca_district: this.editedAddress.mca_district,
                mca_zipcode: this.editedAddress.mca_zipcode,
                mca_email: this.editedAddress.mca_email,
                mca_phone: this.editedAddress.mca_phone
            };

            try {
                const response = await axios.post('http://localhost:8002/ccph/api/update-company-address', payload);
                console.log('API response:', response.data);

                if (response.data && response.data.code === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ!',
                        text: 'ข้อมูลที่อยู่ของคุณได้ถูกบันทึกเรียบร้อยแล้ว',
                    }).then(() => {
                        this.$emit("confirmEdit", this.editedAddress);
                        this.closeModal();
                        window.location.reload(); // รีโหลดหน้าเว็บหลังจากบันทึกข้อมูล
                    });
                    this.$emit("confirmEdit", this.editedAddress);
                    this.closeModal();
                } else {
                    console.error("Error updating address:", response.data.message || "Unknown error");
                    Swal.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาด',
                        text: response.data.message || 'กรุณากรอกข้อมูล',
                    });
                }
            } catch (error) {
                console.error("Error sending request:", error);

                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
                });
            }
        },
        validateRequired,
        validateEmail,
        validatePhone,
        
    },
};
</script>

<style scoped>
.v-text-field--outlined>>>fieldset {
    border-color: rgba(218, 218, 218, 0.986);
    border-width: 1px;
    background: #f0f2f7;
}

.v-text-field {
    border-radius: 10px;
}
::v-deep(.v-messages__message) {
  color: red !important;
  margin: 5px;
}
</style>
