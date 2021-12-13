<template>
  <div>
    <v-app>
      <v-app-bar app color="light-grey" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </div>
        <v-spacer></v-spacer>

        <v-btn class="mr-2" color="teal lighten-2" @click="home">
          <v-icon> mdi-home </v-icon>
        </v-btn>

        <v-btn class="mr-2" color="teal lighten-2" @click="profile">
          <v-icon> mdi-account </v-icon>
        </v-btn>

        <v-btn class="mr-2" color="teal lighten-2" @click="logout">
          logout
        </v-btn>
      </v-app-bar>

      <div class="container">
        <div class="container">
          <ImageList />
        </div>
      </div>
    </v-app>
  </div>
</template>


<script>
import ImageList from "../components/ImageList.vue";
export default {
  name: "Gallery",
  components: { ImageList },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
      localStorage.removeItem("Token");
      this.$router.push({ name: "Login" });
    },
    profile() {
      this.$router.push({ name: "Profile" });
    },
    home() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
#app {
  background: url("../assets/main_bg2.jpg") no-repeat center center fixed !important;
  background-size: cover;
}
</style>