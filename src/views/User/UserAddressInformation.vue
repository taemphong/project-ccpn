<template>
  <v-container>
    <v-card style="padding: 50px; margin: 50px; width: 95%; border-radius: 20px;">
     

      <v-simple-table class="custom-table">
        <template v-slot:default>
          <thead>
            <tr >
              <th class="column-type">ประเภท</th>
              <th class="column-address">ที่อยู่</th>
              <th class="column-phone">เบอร์โทร</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="item in Address" :key="item.type">
              <td >
                <span :class="getBackgroundClass(item.type)" style="color: white; margin: 30px;" >
                  <v-icon v-if="item.type === 'ที่อยู่ปัจจุบัน'" color="white">mdi-map-marker</v-icon>
                  <v-icon v-else-if="item.type === 'ที่อยู่ที่ทำงาน'" color="white">mdi-office-building</v-icon>
                  <v-icon v-else-if="item.type === 'ที่อยู่ตามทะเบียนบ้าน'" color="white">mdi-home</v-icon>
                  {{ item.type }}
                </span>
              </td>
              <td>{{ item.address }}</td>
              <td>

    <v-row justify="space-between" align="center">
      <v-col >
        {{ item.phonenumber }}
      </v-col>
      <v-col class="text-right">
        <v-btn icon small @click="editPhoneNumber(item)"> 
          <v-icon color="blue">mdi-square-edit-outline</v-icon>
        </v-btn>
        <v-btn icon small @click="deletePhoneNumber(item)">
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
  editPhoneNumber(item) {
    const newPhone = prompt("แก้ไขเบอร์โทร:", item.phonenumber);
    if (newPhone !== null && newPhone.trim() !== "") {
      item.phonenumber = newPhone;
    }
  },
  deletePhoneNumber(item) {
    const confirmDelete = confirm("คุณต้องการลบเบอร์โทรนี้ใช่หรือไม่?");
    if (confirmDelete) {
      this.Address = this.Address.filter(addr => addr !== item);
    }
  }
}
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

.column-type {
  width: 20%;
  background-color: #6CC54B;
  color: white;
  font-weight: bold;
  text-align: center !important; /* จัดกลางเฉพาะหัวตาราง */
  font-size: 1.2rem !important;;
}
.column-address {
  width: 50%;
  background-color: #6CC54B;
  color: white;
  font-weight: bold;
  text-align: center !important; /* จัดกลางเฉพาะหัวตาราง */
  font-size: 1.2rem !important;;
}

.column-phone {
  width: 30%;
    background-color: #6CC54B;
  color: white;
  font-weight: bold;
  text-align: center !important; /* จัดกลางเฉพาะหัวตาราง */
  font-size: 1.2rem !important;;
}
</style>
