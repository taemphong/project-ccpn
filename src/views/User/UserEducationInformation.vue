<template>
  <v-container>
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
      <v-simple-table class="custom-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="table-header">ระดับการศึกษา</th>
              <th class="table-header">สถาบัน</th>
              <th class="table-header">ปริญญา/วุฒิการศึกษา</th>
              <th class="table-header">หลักสูตร</th>
              <th class="table-header">วันจบการศึกษา</th>
              <th class="table-header">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Education" :key="item.me_id">
              <td>{{ convertEducationLevel(item.me_level) }}</td>
              <td>{{ item.me_institution }}</td>
              <td>{{ item.me_faculty }}</td>
              <td>{{ item.me_major }}</td>
              <td>{{ item.me_graduated_date.slice(0,10) }}</td>
              <td>
                <v-btn icon small @click="openEditEduModal(item)">
                  <v-icon color="blue">mdi-square-edit-outline</v-icon>
                </v-btn>
                <v-btn icon small @click="openDeleteEduModal(item)">
                  <v-icon color="red">mdi-delete-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <EditEduModal
        v-model="editDialog"
        :item="selectedEducation"
        @save="updateEducation"
        @close="editDialog = false"
      />

      <DeleteEduModal
        v-model="deleteDialog"
        :item="selectedEducation"
        @delete="deleteEducation"
        @close="deleteDialog = false"
      />
    </v-card>
  </v-container>
</template>

<script>
import EditEduModal from '@/components/Modal/UserModal/EditEduModal.vue';
import DeleteEduModal from '@/components/Modal/UserModal/DeleteAddressModal.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  components: {
    EditEduModal,
    DeleteEduModal,
  },
  data() {
    return {
      Education: [],
      selectedEducation: null,
      editDialog: false,
      deleteDialog: false,
    };
  },
  mounted() {
    this.fetchEducationData();
  },
  methods: {
    async fetchEducationData() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No auth token found');
        return;
      }
      const userData = JSON.parse(authToken);
      const payload = { CustomerID: userData.ml_customer_id };

      try {
        const response = await axios.post("http://localhost:8002/ccph/api/get-education-member", payload);
        if (response.data.code === 200 && response.data.data.length > 0) {
          this.Education = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    },
    convertEducationLevel(level) {
      const levelMapping = {
        bachelor: "ปริญญาตรี",
        master: "ปริญญาโท",
        doctorate: "ปริญญาเอก",
      };
      return levelMapping[level] || level;
    },
    openEditEduModal(item) {
      this.selectedEducation = item;
      this.editDialog = true;
    },
    openDeleteEduModal(item) {
  this.selectedEducation = item;
  Swal.fire({
  title: 'ต้องการลบข้อมูลใช่หรือไม่',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'ใช่',
  confirmButtonColor: '#00B69B',
  cancelButtonText: 'ยกเลิก',
  cancelButtonColor: '#FF0000',
  reverseButtons: false,
  didOpen: () => {

    // เปลี่ยนสีข้อความของปุ่ม
    const confirmButton = Swal.getConfirmButton();
    const cancelButton = Swal.getCancelButton();
    confirmButton.style.color = '#FFFFFF';  
    cancelButton.style.color = '#FFFFFF';  
    
    // ปรับขนาดของปุ่ม
    confirmButton.style.width ='158px'
    cancelButton.style.width ='158px'
    confirmButton.style.height ='54px'
    cancelButton.style.height ='54px'

    confirmButton.style.margin = '40px 15px'; 
    cancelButton.style.margin = '40px 15px';  
    confirmButton.style.marginBottom = '80px'; 
    cancelButton.style.marginBottom = '80px'; 


    const title = Swal.getTitle();
    title.style.fontSize = '40px'; 
    
    const popup = Swal.getPopup();  
    popup.style.width = '665px';   
  }
}).then((result) => {
    if (result.isConfirmed) {
      this.deleteEducation(item);
    }
  });
},
    async updateEducation(updatedData) {
      try {
        await axios.post("http://localhost:8002/ccph/api/update-education", updatedData);
        this.fetchEducationData();
        this.$swal("สำเร็จ", "แก้ไขข้อมูลเรียบร้อย", "success");
      } catch (error) {
        this.$swal("เกิดข้อผิดพลาด", "ไม่สามารถแก้ไขข้อมูลได้", "error");
      }
    },
    async deleteEducation(deletedData) {
      console.log("กำลังส่ง API เพื่อลบข้อมูล:", deletedData);

      try {
        const response = await axios.post("http://localhost:8002/ccph/api/delete-education", { id: deletedData.me_id });

        console.log("API Response:", response.data);
        if (response.data.code === 200) {
          this.$swal("สำเร็จ", "ลบข้อมูลเรียบร้อย", "success");
          this.fetchEducationData();
        } else {
          this.$swal("เกิดข้อผิดพลาด", "ไม่สามารถลบข้อมูลได้", "error");
        }
      } catch (error) {
        console.error("ลบข้อมูลไม่สำเร็จ:", error);
        this.$swal("เกิดข้อผิดพลาด", "ไม่สามารถเชื่อมต่อ API", "error");
      }
    },
  },
};
</script>


<style scoped>
.custom-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  /* เพิ่มมุมมนให้กับตาราง */
  overflow: hidden;
  /* ซ่อนส่วนที่เกินจากมุมโค้ง */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้ตาราง */
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center; 
}

/* ทำให้หัวตาราง (thead) เป็นบาร์เดียวที่มีไล่สี */
.custom-table thead {
  background: linear-gradient(to right, #6CC54B, #4FC281);
  color: white;
}

.table-header {
  font-weight: bold;
  font-size: 1rem !important;
  text-align: center !important;
}

.v-card {
  padding: 50px;
  margin: 50px;
  width: 95%;
  border-radius: 20px;
  /* เพิ่มมุมมนให้กับ v-card */
  overflow: hidden;
  /* ซ่อนส่วนเกินที่เกินมุมโค้ง */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* เพิ่มเงาให้ v-card */
}
</style>
