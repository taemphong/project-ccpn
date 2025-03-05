<template>
    <v-container>
        <!-- Banner Section -->
        <v-img src="@/assets/images/banner1.png" aspect-ratio="2.2" class="mb-4"></v-img>

        <!-- Content Section -->
        <v-card class="p-4">
            <v-row justify="center" class="mb-4">
                <v-col cols="12" class="text-center">
                    <h2 class="font-weight-bold">สวัสดีคุณ ..... </h2>
                    <p>ตรวจสอบสถานะเอกสาร และตรวจสอบสถานะการชำระเงิน</p>
                </v-col>
            </v-row>

            <!-- Status Table -->
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="text-left">วันที่ลงทะเบียน</th>
                        <th class="text-left">สถานะชำระเงิน</th>
                        <th class="text-left">สถานะเอกสาร</th>
                        <th class="text-left">หมายเหตุ</th>
                        <th class="text-left">ใบชำระเงิน</th>
                        <th class="text-left">ใบสมัคร</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3/4/2025</td>
                        <td class="text-danger">รอชำระเงิน</td>
                        <td class="text-danger">รอตรวจสอบเอกสาร</td>
                        <td></td>
                        <td></td>
                        <td>
                            <v-btn color="yellow darken-2" dark>พิมพ์</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'CommunityPublicHealthPage'
}
</script>

<style>
.v-card {
    border-radius: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
