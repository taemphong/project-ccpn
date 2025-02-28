<template>
    <v-container class="d-flex justify-center align-center">
        <v-card elevation="3" class="pa-5" style="border-radius: 20px; width: 600px;">
            <v-row justify="center">
                <v-avatar style="width: 180px; height: 220px; border-radius: 16px;">
                    <v-img :src="randomProfileImage" alt="User Profile" />
                </v-avatar>
            </v-row>

            <v-list class="mt-5">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">เลขบัตรประชาชน</v-list-item-title>
                        <v-list-item-subtitle>11299-145548-9</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">ชื่อ - นามสกุล</v-list-item-title>
                        <v-list-item-subtitle>นายปิญญา พละศักดิ์</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">อีเมล</v-list-item-title>
                        <v-list-item-subtitle>Pann-ya@hotmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">เบอร์โทรศัพท์</v-list-item-title>
                        <v-list-item-subtitle>089-136-2478</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">เพศ</v-list-item-title>
                        <v-list-item-subtitle>ชาย</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">วัน-เดือน-ปี เกิด</v-list-item-title>
                        <v-list-item-subtitle>22-04-2546</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-row justify="center" class="mt-3">
                <v-btn color="success" class="px-5" elevation="2">
                    Edit
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
            randomProfileImage: `https://picsum.photos/150`
        };
    }
};
</script>

<style scoped>
.font-weight-bold {
    font-weight: bold;
}
</style>
