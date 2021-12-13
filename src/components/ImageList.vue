<template>
 <v-card class="d-flex flex-row flex-wrap ml-11 " min-height=100vh width="95%">
    <SingleImage
      v-for="image in images"
      :key="image.id"
      :image="image"
    />
  </v-card>
</template>


<script>
import SingleImage from './SingleImage.vue';
export default {
  name: "ImageList",
  components: {
    SingleImage
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  mounted() {
    this.$store.dispatch("listAllImages");
    this.listOfImages = JSON.parse(localStorage.getItem("all_images"));
  },
};
</script>


