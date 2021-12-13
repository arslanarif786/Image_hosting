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
          <UploadImage />
          <br />

          <v-row justify="center" align="center">
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="grey darken-4"
              class="ma-2 white--text justify-center"
              @click.prevent="gallery"
            >
              <!-- <v-icon left dark> mdi-android </v-icon> -->
              Go To Gallery Page
            </v-btn>
          </v-row>

          <v-row class="my-5">
            <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="4">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import UploadImage from "../components/UploadImage.vue";
export default {
  data() {
    return {
      valid: true,
      listOfImages: [],
      updatedData: {
        name: "",
        email: "",
        age: "",
        profile_picture: "",
      },
      user: [],
      user_img: "",
      dialog: false,
    };
  },

  components: {
    UploadImage,
  },
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
    gallery() {
      this.$router.push({ name: "Gallery" });
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