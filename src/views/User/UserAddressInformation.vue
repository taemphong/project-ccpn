<template>
  <v-container>
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
      <v-simple-table class="custom-table" v-if="Address.length > 0">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="column-type table-header">ประเภท</th>
              <th class="column-address table-header">ที่อยู่</th>
              <th class="column-phone table-header">เบอร์โทร</th>
              <th class="column-tool table-header">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr class="pa-5" v-for="item in Address" :key="item.type">
              <td>
                <span :class="getBackgroundClass(item.type)" style="color: white; margin: 30px;">
                  <v-icon v-if="item.type === 'ที่อยู่ปัจจุบัน'" color="white">mdi-map-marker</v-icon>
                  <v-icon v-else-if="item.type === 'ที่อยู่ที่ทำงาน'" color="white">mdi-office-building</v-icon>
                  <v-icon v-else-if="item.type === 'ที่อยู่ตามทะเบียนบ้าน'" color="white">mdi-home</v-icon>
                  {{ item.type }}
                </span>
              </td>
              <td>{{ item.address }}</td>
              <td>{{ item.phonenumber }}</td>
              <td>
                <v-btn icon small @click="openEditModal(item)">
                  <v-icon color="blue">mdi-square-edit-outline</v-icon>
                </v-btn>
                <v-btn icon small @click="openDeleteAddressModal(item)">
                  <v-icon color="red">mdi-delete-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div v-else style="text-align: center; font-size: 2rem; color: #888;">
        ไม่มีข้อมูล
      </div>

      <EditMoaModal v-if="selectedType === 'ที่อยู่ปัจจุบัน'" :show="showEditModal" :addressData="selectedItem"
        @close="showEditModal = false" @confirmEdit="handleEditAddress" />
      <EditMcaModal v-if="selectedType === 'ที่อยู่ที่ทำงาน'" :show="showEditModal" :addressData="selectedItem"
        @close="showEditModal = false" @confirmEdit="handleEditAddress" />
      <EditMhaModal v-if="selectedType === 'ที่อยู่ตามทะเบียนบ้าน'" :show="showEditModal" :addressData="selectedItem"
        @close="showEditModal = false" @confirmEdit="handleEditAddress" />

    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import EditMoaModal from '@/components/Modal/UserModal/EditMoaModal.vue';
import EditMcaModal from '@/components/Modal/UserModal/EditMcaModal.vue';
import EditMhaModal from '@/components/Modal/UserModal/EditMhaModal.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    EditMoaModal,
    EditMcaModal,
    EditMhaModal,
  },
  data() {
    return {
      Address: [],
      showEditModal: false,
      showDeleteAddressModal: false,
      selectedItem: null,
      selectedType: '',
    };
  },
  mounted() {

    this.fetchAddressData();
  },
  methods: {
    async fetchAddressData() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) return;

      const userData = JSON.parse(authToken);
      const payload = { CustomerID: userData.ml_customer_id };

      try {
        const response = await axios.post("http://localhost:8002/ccph/api/get-house-address", payload);
        const result = response.data;
        if (result.code === 200 && result.data.length > 0) {
          const data = result.data[0];
          this.Address = [
            { type: "ที่อยู่ปัจจุบัน", address: data.moa_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ที่ทำงาน", address: data.mca_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ตามทะเบียนบ้าน", address: data.mha_address, phonenumber: data.mp_tel },
          ];
        }
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    },
    openEditModal(item) {
      this.selectedItem = item;
      this.selectedType = item.type;
      this.showEditModal = true;
    },
    openDeleteAddressModal(item) {
  this.selectedItem = item;
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
      this.handleDeleteAddress(item);  // เรียกฟังก์ชันลบที่อยู่
    }
  });
},

    getBackgroundClass(type) {
      return {
        "ที่อยู่ปัจจุบัน": "bg-purple",
        "ที่อยู่ที่ทำงาน": "bg-orange",
        "ที่อยู่ตามทะเบียนบ้าน": "bg-yellow",
      }[type] || "";
    },
    handleEditAddress(updatedAddress) {
      const index = this.Address.findIndex(addr => addr.type === updatedAddress.type);
      if (index !== -1) {
        this.Address[index] = updatedAddress;
      }
      this.showEditModal = false;
    },
    handleDeleteAddress(item) {
  // ลบที่อยู่จาก array
  const index = this.Address.findIndex(addr => addr.type === item.type);
  if (index !== -1) {
    this.Address.splice(index, 1);  // ลบที่อยู่จาก array
  }
  Swal.fire(
    'ลบสำเร็จ!',
    'ที่อยู่ของคุณถูกลบแล้ว.',
    'success'
  );
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
  /* ซ่อนส่วนที่เกินจากมุมโค้ง */
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
  /* ไล่สีเขียวจากซ้ายไปขวา */
  color: white;
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

/* Style for the background color for different types of address */
.bg-purple {
  background-color: #4C1F7AB2;
  padding: 4px 8px;
  border-radius: 5px;
}

.bg-orange {
  background-color: #FF8000B2;
  padding: 4px 8px;
  border-radius: 5px;
}

.bg-yellow {
  background-color: #287483B2;
  padding: 4px 8px;
  border-radius: 5px;
}

/* Search box styles */
.search-box {
  border-radius: 8px;
}

/* Style for v-card containing table and inputs */
.v-card {
  padding: 50px;
  margin: 50px;
  width: 95%;
  border-radius: 20px;
  /* เพิ่มมุมโค้งให้กับ v-card */
  overflow: hidden;
  /* ซ่อนส่วนเกินที่เกินมุมโค้ง */
}
</style>