<template>
    <v-dialog v-model="isVisible" max-width="400px">
        <v-card>
            <v-card-title class="headline">ยืนยันการลบที่อยู่</v-card-title>
            <v-card-text>คุณแน่ใจหรือไม่ว่าต้องการลบที่อยู่นี้?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closeModal">ยกเลิก</v-btn>
                <v-btn color="red" text @click="confirmDelete">ลบ</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data() {
        return {
            isVisible: this.show,
        };
    },
    watch: {
        show(val) {
            this.isVisible = val;
        },
        isVisible(val) {
            if (!val) this.$emit("close");
        },
    },
    methods: {
        closeModal() {
            this.isVisible = false;
        },
        confirmDelete() {
            this.$emit("confirmDelete");
            this.closeModal();
        },
    },
};
</script>
