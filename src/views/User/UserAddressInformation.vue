<template>
  <v-container>
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
      <v-simple-table class="custom-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="column-type">ประเภท</th>
              <th class="column-address">ที่อยู่</th>
              <th class="column-phone">เบอร์โทร</th>
              <th class="column-tool">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Address" :key="item.type">
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
                <v-btn icon small @click="openEditAddressModal(item)">
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

      <EditAddressModal :show="showEditAddressModal" :addressData="selectedItem" @close="showEditAddressModal = false"
        @confirmEdit="handleEditAddress" />

      <DeleteAddressModal :show="showDeleteAddressModal" @close="showDeleteAddressModal = false"
        @confirmDelete="handleDeleteAddress" />


    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import EditAddressModal from '@/components/Modal/UserModal/EditAddressModal.vue';
import DeleteAddressModal from '@/components/Modal/UserModal/DeleteAddressModal.vue';

export default {
  components: {
    EditAddressModal,
    DeleteAddressModal
  },
  data() {
    return {
      Address: [],
      showEditAddressModal: false,
      showDeleteAddressModal: false,
      selectedItem: null,
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
        const response = await axios.post("http://localhost:8002/ccph/api/test-get-house-address", payload);
        const result = response.data;
        if (result.code === 200 && result.data.length > 0) {
          const data = result.data[0];
          this.Address = [
            { type: "ที่อยู่ปัจจุบัน", address: data.moa_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ที่ทำงาน", address: data.mha_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ตามทะเบียนบ้าน", address: data.mca_address, phonenumber: data.mp_tel },
          ];
        }
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    },
    openEditAddressModal(item) {
      this.selectedItem = item;
      this.showEditAddressModal = true;
    },
    openDeleteAddressModal(item) {
      this.selectedItem = item;
      this.showDeleteAddressModal = true;
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
      this.showEditAddressModal = false;
    },
    handleDeleteAddress() {
      // Handle the address deletion logic here
      this.showDeleteAddressModal = false;
    }
  },
};
</script>

<style scoped>
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

.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.column-type,
.column-address,
.column-phone,
.column-tool {
  background-color: #6CC54B;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
}
</style>