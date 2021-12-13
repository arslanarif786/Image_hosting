import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import ForgetPass from "../views/ForgetPass.vue";
import Profile from "../views/Profile.vue";
import ImageGallery from "../views/ImageGallery.vue";
import OTP_Password from "../views/OTP_Password.vue";
import SetNewPassword from "../views/SetNewPassword.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/imagegallery",
    name: "ImageGallery",
    component: ImageGallery,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgetpass",
    name: "ForgetPass",
    component: ForgetPass,
  },
  {
    path: "/otppassword",
    name: "OTP_Password",
    component: OTP_Password,
  },
  {
    path: "/setnewpassword",
    name: "SetNewPassword",
    component: SetNewPassword,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



/////--------------------   Method for >>>>>>>> ROUTER GUARD   (GLOBAL)    ----------------------///////
router.beforeEach((to, from, next) => {

  var isAuthenticated = false;
  if (localStorage.getItem('Token'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (['/login', '/signup', '/forgetpass', '/otppassword', '/setnewpassword', ].includes(to.path) || isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
})

export default router;