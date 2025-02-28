<template>
    <v-container>
      <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row>
          <v-col cols="2">
            <v-select :items="items" label="ประเภท" outlined></v-select>
          </v-col>
          <v-col cols="2" >
            <v-btn large color="success">ค้นหา</v-btn>
          </v-col>
        </v-row>
  
        <v-simple-table class="custom-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="table-header">ประเภท</th>
                <th class="table-header">ที่อยู่</th>
                <th class="table-header">เบอร์โทร</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Address" :key="item.type">
                <td>
                  <span :class="getBackgroundClass(item.type)">{{ item.type }}</span>
                </td>
                <td>{{ item.address }}</td>
                <td>{{ item.phonenumber }}</td>
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
        Address: [
          { type: 'ที่อยู่ปัจจุบัน', address: '408หวกวาด่หฟกาเ่ฆซ.ฏษโหกเฆฏฌๆไพๆไำฟหกฟหก', phonenumber: '11111111111111' },
          { type: 'ที่อยู่ที่ทำงาน', address: '452หกดษฆ?๋ฌฐญนไำ่ด"ฐ๗๖ฎโ๊๋จไบคำ่ดฐ"ฎณ๋โบรยนด่หากทด.ฆฏษโ?ยงากด', phonenumber: '12315123123' },
          { type: 'ที่อยู่ตามทะเบียนบ้าน', address: '518บนร่ดบฟนหรกาทงฟหากทดนรบไำ่ดบไ่ดาหรกดทืงาหทกดยาหทดก', phonenumber: '4141414124' },
        ],
        items: ['ที่อยู่ปัจจุบัน', 'ที่อยู่ที่ทำงาน', 'ที่อยู่ตามทะเบียนบ้าน'],
      };
    },
    methods: {
      getBackgroundClass(type) {
        return {
          'ที่อยู่ปัจจุบัน': 'bg-purple',
          'ที่อยู่ที่ทำงาน': 'bg-orange',
          'ที่อยู่ตามทะเบียนบ้าน': 'bg-yellow',
        }[type] || '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* สไตล์พื้นหลังให้เฉพาะตัวอักษร */
  .bg-purple {
    background-color: #D8BFD8;
    padding: 4px 8px;
    border-radius: 5px;
    display: inline-block;
  }
  
  .bg-orange {
    background-color: #FFA500;
    padding: 4px 8px;
    border-radius: 5px;
    display: inline-block;
  }
  
  .bg-yellow {
    background-color: #FFFF99;
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
    text-align: left;
  }
  
  .table-header {
    background-color: #81ee84;
    color: white;
    font-weight: bold;
  }
  </style>
  