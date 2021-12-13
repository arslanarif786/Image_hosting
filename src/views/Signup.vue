<template>
  <div>
    <v-app>
      <v-container>
        <h2 class="my-5 text-center">Sign up</h2>
        <v-container>
          <v-row align="center" justify="center">
            <v-col col="12" sm="8" md="8">
              <v-card>
                <v-row>
                  <v-col col="4" class="indigo lighten-2">
                    <v-card class="mt-15 text-center">
                      <h2 class="white">Sign up</h2>
                    </v-card>
                    <br />
                    <h4 class="text-center">
                      To register in our system, you must have to create an
                      account
                    </h4>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card class="mr-3">
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          prepend-inner-icon="mdi-account"
                          placeholder="Name must be less than 30 characters"
                          type="text"
                          v-model="formdata.name"
                          :rules="nameRules"
                          label="Name"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          prepend-inner-icon="mdi-email"
                          placeholder="name@example.com"
                          type="email"
                          v-model="formdata.email"
                          :rules="emailRules"
                          label="email"
                          required
                        >
                        </v-text-field>

                        <v-text-field
                          prepend-inner-icon="mdi-account"
                          placeholder="age must be in digits"
                          type="text"
                          v-model="formdata.age"
                          :rules="ageRules"
                          label="age"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          prepend-inner-icon="mdi-lock"
                          label="Password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          placeholder="Password must be minimum eight characters, atleast one letter and one number"
                          v-model="formdata.password"
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
                          v-model="formdata.password_confirmation"
                          :rules="passwordRules"
                          required
                        ></v-text-field>

                        <v-file-input
                          prepend-icon="mdi-camera"
                          :v-model="formdata.profile_picture"
                          @change="captureImage"
                          required
                        >
                        </v-file-input>
                        <v-btn
                          block
                          depressed
                          color="indigo lighten-2"
                          @click.prevent="makeDataForSignup"
                        >
                          Sign up
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
import {
  emailRegex,
  nameRegex,
  ageRegex,
  passwordRegex,
} from "@/constants/constant.js";
//import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      ///////////////////////////////////*     Data properties for Regex */
      emailRules: emailRegex,
      nameRules: nameRegex,
      passwordRules: passwordRegex,
      ageRules: ageRegex,

      ////////////////////////////////////*  Data properties for storing data */
      formdata: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        //confirm_password:"",
        age: "",
        profile_picture: "",
      },
      newUser: [],
      show1: false,
    };
  },
  // created() {
  //   this.newUser = JSON.parse(localStorage.getItem("users") || "[]");
  // },
  methods: {
    async makeDataForSignup() {
      if (this.$refs.form.validate()) {
        // let user = {
        //   nameValue: this.name,
        //   emailValue: this.email,
        //   passwordValue: this.password,
        //   ageValue: this.age,
        // };
        // console.log(user);
        // //////////////////////////////////////* duplication checkup by email */
        // if (
        //   this.newUser.some((e) => {
        //     return e.emailValue == this.email;
        //   })
        // ) {
        //   console.log("duplicate data");
        // }

        this.$store.dispatch("Users", this.formdata);
        localStorage.setItem("currentUser", JSON.stringify(this.formdata));
        this.$router.push({ name: "Login" });

        // await axios.post("http://localhost:3000/users", {
        //   name: this.name,
        //   password: this.password,
        //   age: this.age,
        //   email: this.email,
        //   profile: this.profile,
        // });
      } else {
        console.log("Your account is not created");
      }
    },

    login() {
      this.$router.push({ name: "Login" });
    },

    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.formdata.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
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