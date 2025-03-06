<template>
    <v-dialog v-model="isVisible" max-width="1090px">
        <v-card class="pa-5">
            <v-card-title class="d-flex justify-center">แก้ไขข้อมูลที่อยู่</v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-card-title>ที่อยู่ปัจจุบัน</v-card-title>
                    <v-row>
                        <v-col md="12">
                            <div class="mb-2">ที่อยู่:</div>
                            <v-text-field class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.moa_address" :rules="[rules.required]"
                                :error-messages="moa_addressErrors"
                                :error="moa_addressErrors.length > 0"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <div class="mb-2">จังหวัด:</div>
                            <v-text-field class="textfield" placeholder="กรอกจังหวัด" outlined
                                v-model="editedAddress.mca" :rules="[rules.required]" :error-messages="mcaErrors"
                                :error="mcaErrors.length > 0"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">อำเภอ / เขต:</div>
                            <v-text-field class="textfield" placeholder="กรอกอำเภอ / เขต" outlined
                                v-model="editedAddress.workplace" :rules="[rules.required]"
                                :error-messages="workplaceErrors" :error="workplaceErrors.length > 0"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">ตำบล / แขวง:</div>
                            <v-text-field class="textfield" placeholder="กรอกตำบล / แขวง" outlined
                                v-model="editedAddress.work_email" :rules="[rules.required]"
                                :error-messages="work_emailErrors" :error="work_emailErrors.length > 0"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">
                            <div class="mb-2">รหัสไปรษณีย์:</div>
                            <v-text-field class="textfield" placeholder="กรอกรหัสไปรษณีย์" outlined
                                v-model="editedAddress.mca" :rules="[rules.required, rules.postalCode]"
                                :error-messages="postalCodeErrors" :error="postalCodeErrors.length > 0"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">โทรศัพท์มือถือ:</div>
                            <v-text-field class="textfield" placeholder="กรอกโทรศัพท์มือถือ" outlined
                                v-model="editedAddress.workplace" :rules="[rules.required, rules.phone]"
                                :error-messages="phoneErrors" :error="phoneErrors.length > 0"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="grey" @click="closeModal">ยกเลิก</v-btn>
                <v-btn color="green" text @click="confirmEdit">บันทึก</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        show: Boolean,
        addressData: Object,
    },
    data() {
        return {
            isVisible: this.show,
            editedAddress: { ...this.addressData },
            moa_addressErrors: [],
            mcaErrors: [],
            workplaceErrors: [],
            work_emailErrors: [],
            postalCodeErrors: [],
            phoneErrors: [],
            rules: {
                required: v => !!v || "จำเป็นต้องกรอกข้อมูล",
                postalCode: v => /^\d{5}$/.test(v) || "รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก",
                phone: v => /^0\d{9}$/.test(v) || "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลักและขึ้นต้นด้วย 0"
            },
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
            // Reset error messages
            this.resetErrors();

            // Validate form
            const isValid = await this.$refs.form.validate();
            if (isValid) {
                this.$emit("confirmEdit", this.editedAddress);
                this.closeModal();
            }
        },
        resetErrors() {
            // Reset all error arrays
            this.moa_addressErrors = [];
            this.mcaErrors = [];
            this.workplaceErrors = [];
            this.work_emailErrors = [];
            this.postalCodeErrors = [];
            this.phoneErrors = [];

            // Check each field for validation errors and add to corresponding error array
            if (!this.editedAddress.moa_address) this.moa_addressErrors.push('จำเป็นต้องกรอกที่อยู่');
            if (!this.editedAddress.mca) this.mcaErrors.push('จำเป็นต้องกรอกจังหวัด');
            if (!this.editedAddress.workplace) this.workplaceErrors.push('จำเป็นต้องกรอกอำเภอ / เขต');
            if (!this.editedAddress.work_email) this.work_emailErrors.push('จำเป็นต้องกรอกตำบล / แขวง');
            if (!/^\d{5}$/.test(this.editedAddress.mca)) this.postalCodeErrors.push('รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก');
            if (!/^0\d{9}$/.test(this.editedAddress.workplace)) this.phoneErrors.push('เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลักและขึ้นต้นด้วย 0');
        }
    },
};
</script>

<style scoped>
.v-input__messages {
    color: red !important;
    /* ทำให้ข้อความผิดพลาดเป็นสีแดง */
}

.v-input--error .v-input__control {
    border-color: red !important;
    /* ทำให้ขอบของฟิลด์เป็นสีแดงเมื่อมีข้อผิดพลาด */
}
</style>
