<template>
    <v-app>
        <v-container fluid class="pa-0">
            <!-- Banner image at the top -->
            <div>
                <v-img :src="require('@/assets/images/banner1.png')" alt="Logo" class="logo" contain max-width="auto" />
            </div>

            <!-- Main content -->
            <div class="text-center my-6">
                <p class="font-weight-bold" style="font-size: 28px;">สวัสดีคุณ ....</p>
                <p class="font-weight-bold" style="font-size: 20px;">ตรวจสอบสถานะเอกสาร และตรวจสอบสถานะการชำระเงิน</p>
            </div>

            <!-- Check Button -->
            <div class="text-center my-4">
                <v-btn color="primary" @click="checkStatus">Check</v-btn>
            </div>

            <!-- Status table -->
            <v-row justify="center" align="center">
                <v-col cols="12" md="8">
                    <v-container class="table-container" style="padding: 50px; width: 100%; border-radius: 20px;">
                        <v-simple-table class="custom-table">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="column-type table-header">วันที่จดทะเบียน</th>
                                        <th class="column-address table-header">สถานะชำระเงิน</th>
                                        <th class="column-phone table-header">สถานะเอกสาร</th>
                                        <th class="column-tool table-header">หมายเหตุ</th>
                                        <th class="column-tool table-header">ใบชำระเงิน</th>
                                        <th class="column-tool table-header">ใบเสร็จ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in items" :key="index">
                                        <td>{{ item['วันที่จดทะเบียน'] }}</td>
                                        <td
                                            :style="{ color: item['สถานะชำระเงิน'] === 'รอชำระเงิน' ? 'red' : 'green' }">
                                            {{
                                                item['สถานะชำระเงิน'] }}</td>
                                        <td :style="{ color: item['สถานะเอกสาร'] === 'ผ่าน' ? 'green' : 'red' }">
                                            {{ item['สถานะเอกสาร'] }}
                                        </td>
                                        <td>{{ item['หมายเหตุ'] }}</td>
                                        <td>
                                            <v-btn to="/payment" v-if="item['ใบชำระเงิน'] === 'พิมพ์'" small
                                                color="warning" class="px-3">
                                                {{ item['ใบชำระเงิน'] }}
                                            </v-btn>
                                        </td>
                                        <td>
                                            <v-btn small color="warning" class="px-3"
                                                v-if="item['ใบเสร็จ'] === 'พิมพ์'">
                                                {{ item['ใบเสร็จ'] }}
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'DocumentStatusTable',
    data() {
        return {
            items: [
                {
                    'วันที่จดทะเบียน': '3/4/2025',
                    'สถานะชำระเงิน': 'รอชำระเงิน',
                    'สถานะเอกสาร': 'รอตรวจสอบเอกสาร',
                    'หมายเหตุ': '',
                    'ใบชำระเงิน': '',
                    'ใบเสร็จ': 'พิมพ์',
                },
            ],
        };
    },
    methods: {
        checkStatus() {
            this.items.forEach(item => {
                item['สถานะเอกสาร'] = 'ผ่าน';
                item['ใบชำระเงิน'] = 'พิมพ์';
            });
        },
    },
};
</script>

<style scoped>
/* Custom table styles */
.custom-table {
    border-collapse: collapse;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
}

.custom-table thead {
    background: linear-gradient(to right, #6CC54B, #4FC281);
    text-align: center;
}

.table-header {
    font-weight: bold;
    font-size: 1rem !important;
    text-align: center !important;
}

.column-type,
.column-address,
.column-phone,
.column-tool {
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
}

.custom-table td {
    background: none;
}

.v-card {
    padding: 50px;
    margin: 50px;
    width: 95%;
    border-radius: 20px;
    overflow: hidden;
}

.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
