
<template>
  <div>
    <v-app>
      <v-container>
        <h2 class="my-5 text-center">Forget Passcode</h2>
        <v-container>
          <v-row align="center" justify="center">
            <v-col col="12" sm="8" md="8">
              <v-card>
                <v-row>
                  <v-col col="12" md="4" class="indigo lighten-2">
                    <v-card class="mt-6 text-center">
                      <h2 class="white">Forget Passcode</h2>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card class="mr-3">
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          prepend-inner-icon="mdi-email"
                          placeholder="name@example.com"
                          type="email"
                          v-model="data.email"
                          label="email"
                          required
                        >
                        </v-text-field>
                        <v-btn
                          block
                          depressed
                          color="indigo lighten-2"
                          @click.prevent="submit"
                        >
                          Submit
                        </v-btn>
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
  data() {
    return {
      data: {
        email: "",
      },
      newUser: [],
    };
  },

  methods: {
    forgetPassCode() {
      this.newUser = JSON.parse(localStorage.getItem("users"));
      // console.log(this.newUser);
      this.currentUser = this.newUser.find((e) => {
        return e.emailValue == this.email;
      });
      if (this.currentUser) {
        console.log("Check your inbox or spam!");
        this.$router.push({ name: "Login" });
      } else {
        console.log("account not registered!");
      }
    },
    submit() {
      this.$store.dispatch("forget_Pass", this.data);
      this.$router.push({ name: "OTP_Password" });
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