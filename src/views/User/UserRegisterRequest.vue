<template>
    <v-row no-gutters class="fill-height">
        <v-col cols="7" class="left-side">
            <v-img :src="require('@/assets/images/logo5.png')" alt="Logo" class="logo" contain max-width="500" />
            <div>
                <h2 class="text1">สภาการสาธารณสุขชุมชน</h2>
            </div>
        </v-col>
        <v-col cols="12" class="right-side d-flex align-center" style="padding-left: 150px">
            <v-col cols="12" sm="6" md="6">
                <p style="font-size: 28px; font-weight: bold;">คำขอเป็นสมาชิก</p>
                <br />
                <v-form class="login-form">
                    <div class="mb-4">เลขบัตรประชาชน</div>
                    <v-text-field v-model="citizenId" filled solo class="custom-input" placeholder="เลขบัตรประชาชน"
                        background-color="#82D6631F" maxlength="13"></v-text-field>
                    <div class="mb-4">รหัสรักษาความปลอดภัย</div>
                    <v-text-field v-model="userBotCode" filled solo class="custom-input"
                        placeholder="ใส่รหัสรักษาความปลอดภัย" background-color="#82D6631F"></v-text-field>

                    <div class="captcha-box d-flex justify-center">
                        <span class="captcha-code">{{ botCode }}</span>
                        <v-btn icon @click="refreshBotCode">
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </div>
                    <v-btn block class="custom-button" @click="handleSearch">
                        <v-icon left size="30">mdi-magnify</v-icon> ค้นหา
                    </v-btn>
                </v-form>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
    data() {
        return {
            userBotCode: "", // เก็บค่าที่ผู้ใช้กรอก
            botCode: this.generateBotCode(),
            citizenId: "", // เพิ่ม input สำหรับเลขบัตรประชาชน
        };
    },
    methods: {
        async handleSearch() {
            if (this.userBotCode.trim() !== this.botCode) {
                this.refreshBotCode(); // สร้างรหัสใหม่ทันทีเมื่อผิด
                this.userBotCode = ""; // เคลียร์ค่าที่ผู้ใช้กรอก
                Swal.fire({
                    icon: "error",
                    title: "ผิดพลาด!",
                    text: "รหัสรักษาความปลอดภัยไม่ถูกต้อง กรุณาลองใหม่",
                });
                return;
            }

            if (!this.citizenId.trim()) {
                Swal.fire({
                    icon: "warning",
                    title: "กรุณากรอกเลขบัตรประชาชน",
                });
                return;
            }

            try {
                const response = await axios.post("http://localhost:8002/ccph/api/get-all-member");
                if (response.data.code === 200) {
                    const members = response.data.data;
                    const exists = members.some(member => member.ml_customer_id === this.citizenId.trim());
                    Swal.fire({
                        icon: exists ? "success" : "info",
                        title: exists ? "พบข้อมูลในระบบ" : "ไม่พบข้อมูลในระบบ",
                        text: exists ? "กำลังนำทาง..." : "โปรดลงทะเบียนใหม่",
                        timer: 1000,
                        showConfirmButton: false,
                    }).then(() => {
                        this.$router.push(exists ? "/" : "/user-register");
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
                });
            }
        },
        generateBotCode() {
            return Math.random().toString(36).substr(2, 6).toUpperCase();
        },
        refreshBotCode() {
            this.botCode = this.generateBotCode();
        },
    },
};
</script>

<style scoped>
.left-side {
    background-image: url("@/assets/images/bgreal.jpg");
    background-size: cover;
    background-position: center;
}

.right-side {
    background-color: white;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 41.666%;
}

.text1 {
    font-size: 3rem;
    font-weight: 1000;
    color: rgb(2, 2, 2);
    margin-top: 200px;
    text-align: center;
}

.login-form {
    max-width: 500px;
    width: 150%;
    margin: auto;
}

.custom-button {
    margin-top: 40px;
    background-color: #48bf6a !important;
    color: white !important;
    font-size: 1.4rem !important;
    height: 56px !important;
    border-radius: 8px;
    box-shadow: 1px 1px 80px 10px #4d47c366 !important;
}

.custom-button:hover {
    background-color: #468041 !important;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.captcha-box {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.captcha-code {
    font-size: 1.5rem;
    font-weight: bold;
    background: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    user-select: none;
    letter-spacing: 3px;
}
</style>