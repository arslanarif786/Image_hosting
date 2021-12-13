
<template>
  <div>
    <v-app>
      <v-container>
        <h2 class="my-5 text-center">Set New Password</h2>
        <v-container>
          <v-row align="center" justify="center">
            <v-col col="12" sm="8" md="8">
              <v-card>
                <v-row>
                  <v-col col="12" md="4" class="indigo lighten-2">
                    <v-card class="mt-6 text-center">
                      <h2 class="white">Set New Password</h2>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card class="mr-3">
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          prepend-inner-icon="mdi-lock"
                          label="New Password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          placeholder="Password must be minimum eight characters, atleast one letter and one number"
                          v-model="new_password_obj.password"
                          :rules="passwordRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          prepend-inner-icon="mdi-lock"
                          label="Confirm Password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          placeholder="Password must be minimum eight characters, atleast one letter and one number"
                          v-model="new_password_obj.password_confirmation"
                          :rules="passwordRules"
                          required
                        ></v-text-field>
                        <v-btn
                          block
                          depressed
                          color="indigo lighten-2"
                          @click.prevent="submit"
                        >
                          Save
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
      new_password_obj: {
        password: "",
        password_confirmation: "",
      },
      newUser: [],
      show1:false
    };
  },

  methods: {
    submit() {
      this.$store.dispatch("new_password", this.new_password_obj);
      this.$router.push({ name: "Login" });
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