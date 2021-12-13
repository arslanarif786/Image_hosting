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

        <v-btn class="mr-2" color="teal lighten-2" @click="profile">
          <v-icon> mdi-account </v-icon>
        </v-btn>

        <v-btn class="mr-2" color="teal lighten-2" @click="logout"> logout </v-btn>
      </v-app-bar>
      <v-container>
        <h2 class="text-center mb-10">Dashboard</h2>
        <p class="text-center mb-5">
          To Enter in our system, click on the get started button to upload the
          images
        </p>
        <v-container class="fill-height">
          <v-row justify="center" align="center">
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="grey darken-4"
              class="ma-2 white--text justify-center"
              @click.prevent="image_gallery"
            >
              <!-- <v-icon left dark> mdi-android </v-icon> -->
              Get Started
            </v-btn>
          </v-row>
        </v-container>
      </v-container>
      <!-- <UploadImage /> -->
    </v-app>
  </div>
</template>


<script>
// import HelloWorld from "../components/HelloWorld";
//import UploadImage from "../components/UploadImage.vue";

export default {
  name: "Home",
  data: () => ({
    files: [],
  }),
  components: {
    // HelloWorld,
    //UploadImage,
  },
  methods: {
    display_image() {
      this.files = URL.createObjectURL(this.files[0]);
    },
    image_gallery() {
      this.$router.push({ name: "ImageGallery" });
    },
    logout() {
      this.$store.dispatch("logOut");
      localStorage.removeItem("Token");
      this.$router.push({ name: "Login" });
    },
    profile() {
      this.$router.push({ name: "Profile" });
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