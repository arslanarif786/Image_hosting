<template>
  <div>
    <v-app>
      <v-container>
        <h2 class="my-5 text-center">Login</h2>
        <v-container>
          <v-row align="center" justify="center">
            <v-col col="12" sm="8" md="8">
              <v-card>
                <v-row>
                  <v-col col="12" md="4" class="indigo lighten-2">
                    <v-card class="mt-12 text-center">
                      <h2 class="white">Login</h2>
                    </v-card>
                    <br />
                    <h4 class="text-center">
                      To enter in our system, you must be logged in
                    </h4>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card class="mr-3">
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          prepend-inner-icon="mdi-email"
                          placeholder="name@example.com"
                          type="email"
                          v-model="userdata.email"
                          label="email"
                          required
                        >
                        </v-text-field>

                        <v-text-field
                          prepend-inner-icon="mdi-lock"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          label="Password"
                          placeholder="Password must be minimum eight characters, atleast one letter and one number"
                          v-model="userdata.password"
                          required
                        ></v-text-field>

                        <v-btn
                          block
                          depressed
                          color="indigo lighten-2"
                          @click.prevent="checkDataForLogin"
                        >
                          Login
                        </v-btn>

                        <div class="mt-5 text-center">
                          <router-link to="/signup">
                            <div>Create a New Account</div>
                          </router-link>
                        </div>

                        <div class="mt-5 ml-5 text-right">
                          <router-link to="/forgetpass">
                            <div>Forget Password</div>
                          </router-link>
                        </div>
                      </v-form>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      valid: true,
      userdata: {
        email: "",
        password: "",
      },
      newUser: [],
      show1: false,
    };
  },

  mounted() {
    this.$store.dispatch("getUsers");
  },

  methods: {
    async checkDataForLogin() {
      this.$store.dispatch("Login", this.userdata);
      this.$router.push({ name: "Home" });
      // await axios.post("http://localhost:3000/users", {
      //   name: this.name,
      //   password: this.password,
      //   age: this.age,
      //   email: this.email,
      //   profile: this.profile,
      // });
    },

    signup() {
      this.$router.push({ name: "Signup" });
    },
  },
};
</script>

<style scoped>
#app {
  background: url("../assets/bg15.jpg") no-repeat center center fixed !important;
  background-size: cover;
}
</style>