<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        :src="require('@/assets/images/logp4.jpg')"
        contain
        max-height="120"
        class="drawer-image"
      ></v-img>
      <v-list dense>
        <template v-for="item in menuItems">
          <v-list-group v-if="item.subItems" :key="item.text">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.subItems"
              :key="subItem.text"
              :to="subItem.to"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.text" :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-avatar size="50">
          <img :src="user.avatar" alt="User Avatar" />
        </v-avatar>
        <v-spacer></v-spacer>
        <div class="ml-3 mr-4 d-flex flex-column">
          <span class="username font-weight-medium">{{ user.name }}</span>
          <span class="user-role text-grey-darken-1 text-caption">{{
            user.role
          }}</span>
        </div>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon class="icon-btn" elevation="0">
              <v-icon :class="{ 'rotate-icon': menu }" color="gray" size="30">
                {{
                  menu
                    ? "mdi-arrow-up-drop-circle-outline"
                    : "mdi-arrow-down-drop-circle-outline"
                }}
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img :src="user.avatar" alt="User Avatar" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action> </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item to="/user-profile">
                <v-list-item-title>
                  <v-icon left>mdi-account</v-icon>
                  Profile
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-icon left>mdi-cog</v-icon>
                  Settings
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn tile color="success" @click="logout">
                <v-icon left> mdi-logout </v-icon>
                Logout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "นาย นรก",
        role: "Admin",
        avatar: require("@/assets/images/bot.png"),
      },
      drawer: false,
      menu: false, // Add this line
      menuItems: [
        { text: "หน้าแรก", icon: "mdi-home", to: "/asd" },
        {
          text: "ข้อมูล",
          icon: "mdi-account-outline",
          subItems: [
            { text: "o ข้อมูลส่วนตัว", to: "/user-information" },
            { text: "o ข้อมูลที่อยู่", to: "/user-address" },
            { text: "o ข้อมูลการศึกษา", to: "/user-education-information" },
          ],
        },
        {
          text: "หลักสูตรที่เปิดอบรม",
          icon: "mdi-book-open-variant",
          to: "/t",
        },
        {
          text: "สมัครสมาชิกสภา",
          icon: "mdi-account-box-outline",
          to: "/y",
        },
        {
          text: "ศูนย์การศึกษาต่อเนื่อง",
          icon: "mdi-school",
          to: "/u",
        },
        { text: "ตรวจสอบคำขอ", icon: "mdi-file-check", to: "/zxc" },
        {
          text: "ติดตามการจัดส่งเอกสาร",
          icon: "mdi-email-outline",
          to: "/zxcd",
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.text {
  color: black;
}

.icon {
  color: black;
}

:deep(.v-list-item.v-list-item--active) {
  background: linear-gradient(45deg, #1cad21, #78e47b) !important;
  box-shadow: 0px 2px 6px rgba(142, 161, 142, 0.3) !important;
  padding: 10px 16px !important;
  border-radius: 8px !important;
  width: 90% !important;
  margin: 6px auto !important;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

:deep(.v-list-item) {
  margin: 6px auto !important;
  padding: 10px 16px !important;
  border-radius: 8px;
  width: 90% !important;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

:deep(.v-list-item:hover) {
  background-color: rgba(120, 228, 123, 0.2) !important;
}

.v-container {
  border-radius: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.drawer-image {
  display: block;
  margin: 20px auto;
  padding: 10px;
  max-width: 90%;
}

:deep(.v-list-group .v-list-item-title) {
  color: #000000 !important;
}

:deep(.v-list-group .v-list-item.v-list-item--active .v-list-item-title) {
  color: #000000 !important;
}

:deep(.v-list-group .v-list-item-title) {
  color: black !important;
}

:deep(.v-list-group .v-list-item.v-list-item--active .v-list-item-title) {
  color: black !important;
}

:deep(.v-list-group .v-list-item) {
  color: black !important;
}

:deep(.v-list-group .v-list-item.v-list-item--active) {
  color: black !important;
}

:deep(.v-list-group .v-list-item.v-list-item--active .v-list-item-title) {
  color: black !important;
}


.icon-btn {
  transition: background-color 0.3s ease;
}

.icon-btn:hover {
  background-color: rgba(120, 228, 123, 0.2) !important;
}

.rotate-icon {
  transition: transform 0.3s ease;
  transform: rotate(360deg);
}

.icon-btn {
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>
