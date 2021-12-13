import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    email: "",
    token: "",
    refresh: "",
    images: []
  },

  getters: {

  },

  mutations: {
    auth(state, authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken
    },

    SET_IMAGES(state, images) {
      state.images = images;
    }

  },

  actions: {
    //////// response from signup database
    Users({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/register', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'
          }
        })
        .then(response => {
          localStorage.setItem("users", JSON.stringify(response.data.data.user));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },


    //////// response from Login database
    Login({
      commit
    }, payload) {
      console.log(commit)
      //  axios.post('http://image-hosting-sharing-service.herokuapp.com/api/login', {
      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/login', {
          ...payload,
          returnSecureToken: true,

          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            // 'Content-Type': 'text/html; charset=utf-8',   
            'Content-Type': 'Application/json; charset=utf-8',

          }
        })
        .then(response => {
          localStorage.setItem("Token", JSON.stringify(response.data.data.token));
          //setAuthHeader(response.data.Token)
          console.log(response.data.data.token)
        })
        .catch(error => {
          console.log(error)
        })
    },

    ////////////// Log out
    logOut({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/logout")

        .catch((error) => {
          console.log(error.response)
        })

    },



    /////////////// User Profile
    getProfile({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.get("http://image-hosting-sharing-service.herokuapp.com/api/users/myprofile")
        .then(response => {
          localStorage.setItem("userProfile", JSON.stringify(response.data.data));

          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },


    /////////////// List All images
    listAllImages({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.get("https://image-hosting-sharing-service.herokuapp.com/api/images/all")
        .then(response => {
          commit('SET_IMAGES', response.data.data);
          localStorage.setItem("all_images", JSON.stringify(response.data.data));
          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },




    //////////////// Update Profile
    updateProfile({
      commit
    }, payload) {

      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)


      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/users/update", {
          ...payload,
        })
        .then(response => {
          localStorage.setItem("userProfile", JSON.stringify(response.data.data));
          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },



    /////////////// Upload Images
    uploadImages({
      commit
    }, payload) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('https://image-hosting-sharing-service.herokuapp.com/api/image/upload', {
          ...payload
        })
        .then((response) => {
          console.log(response.data)
          // commit('auth', authData)
          // localStorage.setItem('Users', JSON.stringify(response.data[0]))
        })
        .catch((error) => {
          console.log(error.response)
        })
    },





    ///////////////// Remove images
    removeImages({
      commit,
      id
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.delete(`https://image-hosting-sharing-service.herokuapp.com/api/image/delete/${id}`)
        .then(response => {
          //localStorage.setItem("removeImage", JSON.stringify(response.data.data));

          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },




    //////////// Forget Password   

    forget_Pass({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://localhost:3000/forgetpass', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'
          }
        })
        .then(response => {
          localStorage.setItem("forgot_pass", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },


    //////////// OTP and Forget Password
    otp({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://localhost:3000/otp', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'
          }
        })
        .then(response => {
          localStorage.setItem("otp", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },


    //////////// Set New Password
    new_password({
      commit
    }, payload) {
      console.log(commit);
      console.log(payload);
      axios.post('http://localhost:3000/newpassword', {
          ...payload,
          returnSecureToken: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'text/html; charset=utf-8'
          }
        })
        .then(response => {
          localStorage.setItem("newPassword", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },


  }
})