<template>
    <v-dialog v-model="isVisible" max-width="1090px">
        <v-card class="pa-5">
            <v-card-title style="font-size: 30px;" class="d-flex justify-center font-weight-bold">
                แก้ไขข้อมูลที่อยู่
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-card-title class="font-weight-bold">ที่อยู่ตามทะเบียนบ้าน</v-card-title>
                    <v-row>
                        <v-col md="12">
                            <div class="mb-2">ที่อยู่</div>
                            <v-textarea class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.moa_address"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <div class="mb-2">จังหวัด</div>
                            <v-text-field class="textfield" placeholder="กรอกจังหวัด" outlined
                                v-model="editedAddress.moa_province"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">อำเภอ / เขต</div>
                            <v-text-field class="textfield" placeholder="กรอกอำเภอ / เขต" outlined
                                v-model="editedAddress.moa_amphoe"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">ตำบล / แขวง</div>
                            <v-text-field class="textfield" placeholder="กรอกตำบล / แขวง" outlined
                                v-model="editedAddress.moa_district"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <div class="mb-2">รหัสไปรษณีย์</div>
                            <v-text-field class="textfield" placeholder="กรอกรหัสไปรษณีย์" outlined
                                v-model="editedAddress.moa_zipcode"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div class="mb-2">เบอร์โทรศัพท์</div>
                            <v-text-field class="textfield" placeholder="กรอกรหัสไปรษณีย์" outlined
                                v-model="editedAddress.moa_phone"></v-text-field>
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
            const authToken = localStorage.getItem('authToken');
            if (!authToken) return;

            const userData = JSON.parse(authToken);
            const payload = {
                CustomerID: userData.ml_customer_id,
                moa_address: this.editedAddress.moa_address,
                moa_province: this.editedAddress.moa_province,
                moa_amphoe: this.editedAddress.moa_amphoe,
                moa_district: this.editedAddress.moa_district,
                moa_zipcode: this.editedAddress.moa_zipcode,
                moa_phone: this.editedAddress.moa_phone,
            };

            try {

                const response = await axios.post('http://localhost:8002/ccph/api/update-other-address', payload);
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
</style>
