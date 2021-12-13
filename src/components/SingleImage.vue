<template>
  <v-card id="my-card" class="mx-auto" max-width="270">
    <v-img
      contain
      :aspect-ratio="4 / 3"
      :src="image.path"
    >
    </v-img>

    <v-card-title
      ><router-link
        class="text fontSize black--text"
        :to="{ name: 'image', params: { id: image.id } }"
        >{{ image.name }}</router-link
      >
    </v-card-title>

    <v-card-text>
      <div class="mb-10 mt-2 text-subtitle-1 orange--text">
        {{ image.extension }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <div class="d-flex justify-end align-end">
      <v-btn absolute bottom class="secondary text-light" @click="remove_image">
        Delete
      </v-btn>
    </div>
  </v-card>
</template>


<script>
export default {
  name: "SingleImage",
  props: ["image","id"],
  data: () => {
    return {};
  },
  methods: {
      remove_image(){
          this.$store.dispatch("removeImages",this.id);
      },
  },
};
</script>