<template>
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

      <v-btn class="mr-2" color="teal lighten-2" @click="logout"> logout </v-btn>
    </v-app-bar>

    <v-card
      class="d-flex flex-row flex-wrap ml-13 pt-12"
      min-height="80vh"
      width="95%"
    >
      <v-container>
        <v-row class="text-center">
          <v-col>
            <h1>Profile</h1>

            <v-card class="mx-auto" max-width="434" tile>
              <v-img
                height="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpu9Bp1Pmi2wB-ElZfdKOMuNN75FxAa8CIw&usqp=CAU"
              ></v-img>
              <v-col>
                <v-list-item-avatar size="75">
                  <v-img
                    contain
                    :src="updatedData.profile_picture"
                    @change="captureImage"
                    alt="image"
                  />
                </v-list-item-avatar>
              </v-col>
              <v-list-item color="rgba(0, 0, 0, .4)">
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ updatedData.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Software Engineer</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <br />
            <v-container>
              <v-row align="center" justify="center">
                <v-col col="12" sm="8" md="8">
                  <v-card>
                    <v-row>
                      <v-col col="4" class="brown darken-2">
                        <v-card class="mt-7 text-center">
                          <h2 class="white">Profile</h2>
                        </v-card>
                        <br />
                        <h4 class="text-center">
                          {{ updatedData.name }}
                        </h4>
                        <p>Software Engineer</p>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-card class="mr-3 mt-3 mb-3">
                          <v-row>
                            <v-col class="ml-5 mt-1" cols="4">
                              <u> <strong> Name: </strong> </u>
                            </v-col>
                            <v-col class="mt-1" cols="7">
                              {{ updatedData.name }}
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="ml-5" cols="4">
                              <u> <strong> Email: </strong> </u>
                            </v-col>
                            <v-col class="" cols="7">
                              {{ updatedData.email }}
                            </v-col>
                          </v-row>

                          <!-- <v-row>
                            <v-col class="ml-5" cols="4">
                              <u> <strong> Password: </strong> </u>
                            </v-col>
                            <v-col class="" cols="7" v-model="password">
                              {{ password }}
                            </v-col>
                          </v-row> -->

                          <v-row>
                            <v-col class="ml-5 mb-1" cols="4">
                              <u> <strong> Age: </strong> </u>
                            </v-col>
                            <v-col class="mb-1" cols="7">
                              {{ updatedData.age }} years old
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>

        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey darken-4" dark v-bind="attrs" v-on="on">
                  Update Profile
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Name"
                          hint="Name must be less than 30 characters"
                          v-model="updatedData.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email"
                          hint="Email must be valid"
                          v-model="updatedData.email"
                        ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12">
                        <v-text-field
                          label="Password"
                          type="password"
                          v-model="password"
                          hint="Password must be minimum eight characters, atleast one letter and one number"
                        ></v-text-field>
                      </v-col> -->
                      <v-col cols="12">
                        <v-text-field
                          label="Age"
                          v-model="updatedData.age"
                          hint="Age must be less than 100"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-file-input
                          prepend-icon="mdi-camera"
                          :v-model="updatedData.profile_picture"
                          @change="captureImage"
                          required
                        >
                        </v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey darken-4" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn
                    color="grey darken-4"
                    class="my-5"
                    text
                    @click.prevent="update_profile"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>

        <br />
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      valid: true,
      // name: "",
      // email: "",
      // password: "",
      // age: "",
      // profile: "",
      user_profile: [],
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

  // created() {

  // },

  mounted() {
    this.$store.dispatch("getProfile");
    this.user_profile = JSON.parse(localStorage.getItem("userProfile"));
    this.updatedData.name = this.user_profile.name;
    this.updatedData.email = this.user_profile.email;
    this.updatedData.age = this.user_profile.age;
    //this.password = this.user_profile.password;
    this.updatedData.profile_picture = this.user_profile.profile_picture;
  },

  methods: {
    replace() {
      console.log(this.user_profile.name);
      // localStorage.setItem("users", JSON.stringify(this.user_profile));

      ////-----------------   change in current User   ------------------/////
      localStorage.setItem(
        "user_profile",
        JSON.stringify({
          email: this.email,
          name: this.name,
          password: this.password,
          age: this.age,
          profile: this.profile,
        })
      );

      ////-----------------   change in all the users record after finding specific user   ------------------/////
      let index = this.user.findIndex((x) => x.email == this.email);
      this.user[index] = {
        email: this.email,
        name: this.name,
        password: this.password,
        age: this.age,
        profile: this.profile,
      };
      localStorage.setItem("users", JSON.stringify(this.user));
    },

    update_profile() {
      this.$store.dispatch("updateProfile", this.updatedData);
      localStorage.setItem("update_Profile", JSON.stringify(this.updatedData));
    },

    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.updatedData.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    logout() {
      this.$store.dispatch("logOut");
      localStorage.removeItem("Token");
      this.$router.push({ name: "Login" });
    },
    home() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
