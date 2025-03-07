<template>
    <v-dialog v-model="dialog" width="800">
        <v-card style="border-radius: 14px;">
            <v-container style="padding: 20px;">
                <v-toolbar color="white" flat>
                    <v-spacer></v-spacer>
                    <v-card-title class="card-title d-flex justify-center">แก้ไขข้อมูลส่วนตัว</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-card-text>
                    <v-container>
                        <v-row style="justify-content: center;">
                            <v-col cols="12" sm="4">
                                <div>คำนำหน้าชื่อ</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="prefix"
                                    placeholder="นาย/นางสาว/นาง" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>ชื่อจริง</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="firstName" outlined
                                    placeholder="กรอกชื่อจริง"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>นามสกุล</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="lastName" outlined
                                    label="นามสกุล" placeholder="กรอกนามสกุล"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row style="justify-content: center;">
                            <v-col cols="12" sm="4">
                                <div>เลขบัตรประชาชน</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="IDcardnumber"
                                    outlined placeholder="กรอกเลขบัตรประชาชน"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>อีเมล</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="Email" outlined
                                    placeholder="กรอกอีเมล"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>เบอร์โทรศัพท์</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="Phonenumber"
                                    outlined placeholder="กรอกเบอร์โทรศัพท์"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="4">
                                <div>เพศ</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="Gender" outlined
                                    placeholder="กรอกเพศ"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>วัน-เดือน-ปีเกิด</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="Birthday" outlined
                                    placeholder="กรอกวัน-เดือน-ปีเกิด"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-container class="d-flex justify-center align-center">
                            <v-row justify="center">
                                <v-col cols="auto" class="mx-4 mt-4 mb-4">
                                    <v-btn class="save-btn mr-4" large @click="submitData">
                                        บันทึก
                                    </v-btn>
                                    <v-btn class="cancel-btn" large @click="dialog = false">
                                        ยกเลิก
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-container>
                </v-card-text>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            prefix: '',
            firstName: '',
            lastName: '',
            IDcardnumber: '',
            Email: '',
            Phonenumber: '',
            Gender: '',
            Birthday: ''
        };
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    methods: {
        submitData() {
            // Logic to submit the data
            console.log("Submitted Data:", {
                prefix: this.prefix,
                firstName: this.firstName,
                lastName: this.lastName,
                IDcardnumber: this.IDcardnumber,
                Email: this.Email,
                Phonenumber: this.Phonenumber,
                Gender: this.Gender,
                Birthday: this.Birthday
            });
            this.dialog = false; // Close the dialog after submitting
        }
    }
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

.card-title {
    font-size: 26px;
    font-weight: bold;
}

.cancel-btn {
    color: white !important;
    background-color: #bebebe !important;
    width: 100px;
    border-radius: 10px;
    font-size: 16px !important;
}

.save-btn {
    color: white !important;
    background-color: #2a8f50 !important;
    width: 150px;
    border-radius: 10px;
    font-size: 16px !important;
}
</style>