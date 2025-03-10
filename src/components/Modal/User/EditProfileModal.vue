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
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_name1"
                                    placeholder="นาย/นางสาว/นาง" outlined readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>ชื่อจริง</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_name2" outlined
                                    placeholder="กรอกชื่อจริง" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>นามสกุล</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" :value="mp_name3" outlined
                                    placeholder="กรอกนามสกุล" readonly></v-text-field>
                            </v-col>

                        </v-row>

                        <v-row style="justify-content: center;">
                            <v-col cols="12" sm="4">
                                <div>เลขบัตรประชาชน</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_customer_id"
                                    outlined placeholder="กรอกเลขบัตรประชาชน" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>อีเมล</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_email" outlined
                                    placeholder="กรอกอีเมล"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>เบอร์โทรศัพท์</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_tel" outlined
                                    placeholder="กรอกเบอร์โทรศัพท์"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="4">
                                <div>เพศ</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_gender" outlined
                                    placeholder="กรอกเพศ"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div>วัน-เดือน-ปีเกิด</div>
                                <v-text-field class="textfield" background-color="#f0f2f7" v-model="mp_birthday"
                                    outlined placeholder="กรอกวัน-เดือน-ปีเกิด"></v-text-field>
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
import axios from 'axios';

export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mp_name1: '',
            mp_name2: '',
            mp_name3: '',
            mp_customer_id: '',
            mp_email: '',
            mp_tel: '',
            mp_gender: '',
            mp_birthday: ''
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
    mounted() {
        this.fetchUserData();
    },
    methods: {
        async fetchUserData() {
            const authToken = localStorage.getItem('authToken');
            if (!authToken) {
                console.error('No auth token found');
                return;
            }

            const userData = JSON.parse(authToken);
            const payload = { CustomerID: userData.ml_customer_id };

            try {
                const response = await axios.post('http://localhost:8002/ccph/api/get-info-member', payload);
                const userInfo = response.data.data[0];

                this.mp_name1 = userInfo.mp_name1 || '';
                this.mp_name2 = userInfo.mp_name2 || '';
                this.mp_name3 = userInfo.mp_name3 || '';
                this.mp_customer_id = userInfo.mp_customer_id || '';

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        submitData() {
            console.log("Submitted Data:", {
                mp_name1: this.mp_name1,
                mp_name2: this.mp_name2,
                mp_name3: this.mp_name3,
                mp_customer_id: this.mp_customer_id,
                mp_email: this.mp_email,
                mp_tel: this.mp_tel,
                mp_gender: this.mp_gender,
                mp_birthday: this.mp_birthday
            });
            this.dialog = false;
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