<template>
  <v-container>
<<<<<<< HEAD
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
=======
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 10px;">
      <v-row>
        <v-col cols="12">
          <v-text-field background-color="#e0e0e0" v-model="search" label="ค้นหา..." outlined clearable dense
            class="search-box" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>
      </v-row>

>>>>>>> 49576da48e05a6efd3223be708f5d36c76a6dbf3
      <v-simple-table class="custom-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="table-header">ระดับการศึกษา</th>
              <th class="table-header">สถาบัน</th>
              <th class="table-header">ปริญญา/วุฒิการศึกษา</th>
              <th class="table-header">หลักสูตร</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Education" :key="item.me_id">
              <td>{{ convertEducationLevel(item.me_level) }}</td>
              <td>{{ item.me_institution }}</td>
              <td>{{ item.me_faculty }}</td>
              <td>{{ item.me_major }}</td>
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
      Education: [],
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
  overflow: hidden;
  /* ซ่อนส่วนเกินที่เกินมุมโค้ง */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* เพิ่มเงาให้ v-card */
}
</style>
