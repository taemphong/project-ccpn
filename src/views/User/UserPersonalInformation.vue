<template>
    <v-container class="px-5 d-flex justify-center align-center ">
        <v-card elevation="3" class="pa-5" style="border-radius: 20px; width: 600px;">
            <v-row class="mt-4" justify="center">
                <v-avatar style="width: 260px; height: 300px; border-radius: 16px;">
                    <v-img :src="require('@/assets/images/bot.png')" alt="User Profile" />
                </v-avatar>
            </v-row>

            <v-list class="mt-5 pa-10">
                <v-list-item v-for="(value, label) in userInfo" :key="label" class="d-flex">
                    <v-list-item-content class="w-50">
                        <v-list-item-title class="font-weight-bold">{{ label }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content class="w-50">
                        <v-list-item-subtitle class="">{{ value }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-row justify="center" class="mt-3">
                <v-btn color="success" class="px-5 mb-8 edit-btn" elevation="2">
                    แก้ไข
                </v-btn>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "UserPersonalInformation",
    data() {
        return {
            userInfo: {
                'เลขบัตรประชาชน': '11299-145548-9',
                'ชื่อ - นามสกุล': 'นายปิญญา พละศักดิ์',
                'อีเมล': 'Pann-ya@hotmail.com',
                'เบอร์โทรศัพท์': '089-136-2478',
                'เพศ': 'ชาย',
                'วัน-เดือน-ปี เกิด': '22-04-2546'
            }
        };
    }
};
</script>

<style scoped>
.font-weight-bold {
    font-weight: bold;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.edit-btn {
    color: white !important;
    background-color: #bebebe !important;
    width: 100px;
    border-radius: 10px;
    font-size: 16px !important;
}
</style>
