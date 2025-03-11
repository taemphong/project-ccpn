<template>
    <v-container fluid class="pa-0 white-background full-page">
        <!-- Banner image at the top -->
        <div>
            <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
        </div>
        <div class="text-center my-6">
            <p class="font-weight-bold" style="font-size: 28px; color: #48BF6A;">ข้อมูลการชำระเงิน</p>
        </div>

        <!-- QR Code Generator -->
        <div class="text-center">
            <div class="qrcode-container">
                <qrcode-vue :value="paymentUrl" :size="600" level="H" />
            </div>

            <p class="mt-2 expiration-text">
                QR Code นี้จะหมดอายุภายในวันที่
                <span class="text-danger">{{ expirationDate }}</span>
                เวลา
                <span class="text-danger">{{ expirationTime }}</span>
            </p>

            <p>กรณีเกิน 30 นาที QR Code นี้ จะไม่สามารถชำระเงินได้ กรุณา Reload หน้านี้ใหม่อีกครั้ง
            </p>
            <p>ท่านสามารถชำระเงินด้วย QR Code ผ่าน Mobile Banking ได้ทุกธนาคาร</p>
        </div>
    </v-container>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
    name: 'PaymentPage',
    components: {
        QrcodeVue
    },
    data() {
        return {
            paymentUrl: 'https://example.com/payment?amount=100',
            expirationDate: '',
            expirationTime: ''
        };
    },
    created() {
        this.calculateExpiration();
    },
    methods: {
        calculateExpiration() {
            const now = new Date();
            now.setMinutes(now.getMinutes() + 30);

            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            this.expirationDate = now.toLocaleDateString('th-TH', options);
            this.expirationTime = now.toLocaleTimeString('th-TH');
        }
    }
};
</script>

<style scoped>
.white-background {
    background-color: white;
}

.full-page {
    min-height: 100vh;
    width: 100%;
}

.text-center {
    text-align: center;
}

.text-danger {
    color: red;
    font-weight: bold;
}

.qrcode-responsive {
    max-width: 100%;
    width: 500px;
    height: auto;
}

.qrcode-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.qrcode-container>* {
    width: 150px !important;
    height: 150px !important;
    margin-bottom: 50px;
    margin-top: 50px;
}
</style>
