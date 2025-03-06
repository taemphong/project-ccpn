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
              <td>
                <v-row justify="space-between" align="center">
                  <v-col>
                    {{ item.phonenumber }}
                  </v-col>
                </v-row>
              </td>
              <td>
                <v-row justify="space-between" align="center">
                  <v-col class="text-right">
                    <v-btn icon small>
                      <v-icon color="blue">mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon color="red">mdi-delete-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Address: [],
    };
  },
  mounted() {
    this.fetchAddressData();
  },
  methods: {
    async fetchAddressData() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No auth token found');
        return;
      }

      const userData = JSON.parse(authToken);
      const payload = { CustomerID: userData.ml_customer_id };

      try {
        const response = await axios.post("http://localhost:8002/ccph/api/test-get-house-address", payload);
        const result = response.data;
        if (result.code === 200 && result.data.length > 0) {
          const data = result.data[0];

          this.Address = [
            { type: "ที่อยู่ปัจจุบัน", address: data.mha_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ที่ทำงาน", address: data.moa_address, phonenumber: data.mp_tel },
            { type: "ที่อยู่ตามทะเบียนบ้าน", address: data.mca_address, phonenumber: data.mp_tel },
          ];
        }
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    },
    getBackgroundClass(type) {
      return {
        "ที่อยู่ปัจจุบัน": "bg-purple",
        "ที่อยู่ที่ทำงาน": "bg-orange",
        "ที่อยู่ตามทะเบียนบ้าน": "bg-yellow",
      }[type] || "";
    },
  },
};
</script>

<style scoped>
/* สไตล์พื้นหลังให้เฉพาะตัวอักษร */
.bg-purple {
  background-color: #4C1F7AB2;
  padding: 4px 8px;
  border-radius: 5px;
  display: inline-block;
}

.bg-orange {
  background-color: #FF8000B2;
  padding: 4px 8px;
  border-radius: 5px;
  display: inline-block;
}

.bg-yellow {
  background-color: #287483B2;
  padding: 4px 8px;
  border-radius: 5px;
  display: inline-block;
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
  text-align: center !important;
  font-size: 1.2rem !important;
}
</style>
