<template>
    <v-container>
      <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
        <v-row>
          <v-col cols="2">
            <v-select :items="items" label="ประเภท" outlined dense></v-select>
          </v-col>
          <v-col cols="2" >
            <v-btn  color="#1cad21" style="width: 150px;">ค้นหา</v-btn>
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
    <td><span :class="getBackgroundClass(item.type)">
      <v-icon v-if="item.type === 'ที่อยู่ปัจจุบัน'" color="black">mdi-map-marker</v-icon>
      <v-icon v-else-if="item.type === 'ที่อยู่ที่ทำงาน'" color="black">mdi-office-building</v-icon>
      <v-icon v-else-if="item.type === 'ที่อยู่ตามทะเบียนบ้าน'" color="black">mdi-home</v-icon>
      {{ item.type }}</span>
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
    background-color: #FADFA1B2;
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
    background-color: #3D8E5699;
    color: white;
    font-weight: bold;
  }
  </style>
  