<template>
    <v-dialog v-model="isVisible" max-width="1090px">
        <v-card class="pa-5">
            <v-card-title class="d-flex justify-center">แก้ไขข้อมูลที่อยู่</v-card-title>
            <v-card-text>
                <v-form>
                    <v-card-title>ที่อยู่ปัจจุบัน</v-card-title>
                    <v-row>
                        <v-col md="4">
                            <div class="mb-2">ตึก:</div>
                            <v-text-field class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.moa_address"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">บ้านเลขที่:</div>
                            <v-text-field class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.moa_address"></v-text-field>
                        </v-col>
                        <v-col md="4">
                            <div class="mb-2">หมู่:</div>
                            <v-text-field class="textfield" placeholder="กรอกที่อยู่" outlined
                                v-model="editedAddress.moa_address"></v-text-field>
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
        confirmEdit() {
            this.$emit("confirmEdit", this.editedAddress);
            this.closeModal();
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