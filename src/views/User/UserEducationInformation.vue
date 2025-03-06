<template>
  <v-container>
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
      <v-row>
        <v-col cols="12">
          <v-text-field background-color="#e0e0e0" v-model="search" label="ค้นหา..." outlined clearable dense
            class="search-box" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>
      </v-row>

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
            <tr v-for="item in filteredEducation" :key="item.me_id">
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
      search: "",
      Education: [],
    };
  },
  mounted() {
    this.fetchEducationData();
  },
  computed: {
    filteredEducation() {
      if (!this.search) return this.Education;
      return this.Education.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(this.search.toLowerCase())
        )
      );
    },
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
.search-box {
  border-radius: 8px;
}

.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.table-header {
  background-color: #3D8E5699;
  color: white;
  font-weight: bold;
}
</style>
