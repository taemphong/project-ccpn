<template>
    <v-container fluid class="login-container fill-height">
        <v-row no-gutters class="fill-height">
            <v-col cols="7" class="left-side">
                <v-img :src="require('@/assets/images/logo5.png')" alt="Logo" class="logo" contain max-width="500" />
                <div>
                    <h2 class="text1">สภาการสาธารณสุขชุมชน</h2>
                </div>
            </v-col>
            <v-col cols="12" class="right-side d-flex align-center" style="padding-left: 150px">
                <v-col cols="12" sm="6" md="6">
                    <h1>คำขอเป็นสมาชิก</h1>
                    <br />
                    <v-form class="login-form">
                        <div class="mb-4">เลขบัตรประชาชน</div>
                        <v-text-field filled solo class="custom-input" placeholder="เลขบัตรประชาชน"
                            background-color="#82D6631F"></v-text-field>
                        <div class="mb-4">รหัสความปลอดภัย</div>
                        <v-text-field v-model="password" :type="passwordVisible ? 'text' : 'password'" filled solo
                            class="custom-input" placeholder="รหัสผ่าน" background-color="#82D6631F">
                            <template v-slot:append>
                                <v-icon @click="togglePasswordVisibility">
                                    {{ passwordVisible ? "mdi-eye-off" : "mdi-eye" }}
                                </v-icon>
                            </template>
                        </v-text-field>
                        <!-- reCAPTCHA -->
                        <v-container cols="12" class="pa-0 d-flex justify-center">
                            <vue-recaptcha ref="recaptcha" sitekey="6LfC_OkqAAAAAAYVh9H8TbPOZ79HkwntNh0D5lhn"
                                size="normal" @verify="onVerify" @expired="onExpired"></vue-recaptcha>
                        </v-container>
                        <v-btn block class="custom-button" :disabled="!isRecaptchaVerified" @click="handleSearch">
                            <v-icon left size="30">mdi-magnify</v-icon> ค้นหา
                        </v-btn>
                    </v-form>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
    components: {
        VueRecaptcha
    },
    data() {
        return {
            password: "",
            passwordVisible: false,
            isRecaptchaVerified: false
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        },
        onVerify(response) {
            console.log("reCAPTCHA verified:", response);
            this.isRecaptchaVerified = true;
        },
        onExpired() {
            console.log("reCAPTCHA expired");
            this.isRecaptchaVerified = false;
        },
        handleSearch() {
            if (this.isRecaptchaVerified) {
                console.log("ดำเนินการค้นหา...");
            } else {
                alert("กรุณายืนยัน reCAPTCHA ก่อนกดค้นหา");
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    height: 100vh;
}

.left-side {
    background-image: url("@/assets/images/bg3.png");
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
</style>