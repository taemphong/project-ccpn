<template>
    <v-container>
      <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row>
          <v-col cols="12">
            <v-text-field
              background-color="#e0e0e0"
              v-model="search"
              label="ค้นหา..."
              outlined
              clearable
              dense
              class="search-box"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
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
                <th class="table-header">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredEducation" :key="item.type">
                <td>{{ item.Education_level }}</td>
                <td>{{ item.institution }}</td>
                <td>{{ item.Educational_qualification }}</td>
                <td>{{ item.course }}</td>
                <td>{{ item.manage }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: "",
        Education: [
          { Education_level: "ปริญญาตรี", institution: "โรงเรียนจากนรก", Educational_qualification: "โหดสุดๆ", course: "ผู้ควบคุมกระทะทองแดง", manage: "11111111111111" },
          { Education_level: "ปริญญาโท", institution: "โรงเรียนพ่อมดน้อย", Educational_qualification: "โหดมากๆ", course: "วิทยาศาสตร์บัณฑิต", manage: "11111111111111" },
          { Education_level: "ปริญญาเอก", institution: "โรงเรียนอ๊อกฟอร์ดวิทยาคม", Educational_qualification: "โคตรโหด", course: "จรวดอวกาศ", manage: "11111111111111" },
        ],
      };
    },
    computed: {
      filteredEducation() {
        if (!this.search) return this.Education;
        return this.Education.filter((item) =>
          Object.values(item).some(value => 
            String(value).toLowerCase().includes(this.search.toLowerCase())
          )
        );
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
    background-color: #81ee84;
    color: white;
    font-weight: bold;
  }
  </style>
  