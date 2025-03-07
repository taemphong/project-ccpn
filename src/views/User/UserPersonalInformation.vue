<template>
    <v-container class="px-5 d-flex justify-center align-center ">
        <v-card elevation="3" class="pa-5" style="border-radius: 14px; width: 600px;">
            <v-row class="mt-4" justify="center">
                <v-avatar style="width: 200px; height: 260px; border-radius: 16px;">
                    <v-img :src="require('@/assets/images/bot.png')" alt="User Profile" />
                </v-avatar>
            </v-row>

            <v-container class="ml-4">
                <v-list class="pa-10 ml-6">
                    <v-list-item v-for="(value, label) in userInfo" :key="label" class="d-flex align-center">
                        <v-list-item-content class="w-50">
                            <v-list-item-title class="font-weight-bold">{{ label }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content class="w-50 ml-16">
                            <v-list-item-subtitle class="">{{ value }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>

            <v-row justify="center" class="mt-3">
                <v-btn large class="px-5 mb-8 edit-btn" elevation="2" @click="openEditModal">
                    แก้ไข
                </v-btn>
            </v-row>
        </v-card>

        <EditProfileModal :value="editModal" @input="editModal = $event" />
    </v-container>
</template>

<script>
import EditProfileModal from '../../components/Modal/User/EditProfileModal.vue';
import axios from 'axios';

export default {
    name: "UserPersonalInformation",
    components: {
        EditProfileModal
    },
    data() {
        return {
            userInfo: {
                'เลขบัตรประชาชน': '',
                'ชื่อ - นามสกุล': '',
                'อีเมล': '',
                'เบอร์โทรศัพท์': '',
                'เพศ': '',
                'วัน-เดือน-ปี เกิด': ''
            },
            editModal: false
        };
    },
    async mounted() {
        try {
            const authToken = localStorage.getItem('authToken');
            if (!authToken) {
                console.error('No auth token found');
                return;
            }

            const userData = JSON.parse(authToken);
            const payload = { CustomerID: userData.ml_customer_id };

            const response = await axios.post('http://localhost:8002/ccph/api/get-info-member', payload);

            if (response.data.code === 200 && response.data.data.length > 0) {
                const data = response.data.data[0];

                // แปลงวันที่เป็นแบบไทย
                const formatDateThai = (dateStr) => {
                    if (!dateStr) return "-";
                    const date = new Date(dateStr);
                    return date.toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                };

                this.userInfo = {
                    'เลขบัตรประชาชน': data.mp_customer_id,
                    'ชื่อ - นามสกุล': `${data.mp_name2} ${data.mp_name3}`,
                    'อีเมล': data.mp_email,
                    'เบอร์โทรศัพท์': data.mp_tel,
                    'เพศ': data.mp_gender,
                    'วัน-เดือน-ปี เกิด': formatDateThai(data.mp_birthday)
                };
            } else {
                console.error('Data not found');
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    },
    methods: {
        openEditModal() {
            this.editModal = true;
        }
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
    background-color: #2a8f50 !important;
    width: 150px;
    border-radius: 10px;
    font-size: 16px !important;
}
</style>