<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Compétences</div>

      <v-row>
        <v-col cols="12">
          <div class="text-h6 font-weight-bold text-uppercase mb-2">Language</div>
          <v-rating
            v-model="rating"
            empty-icon="mdi-checkbox-blank-circle-outline"
            full-icon="mdi-checkbox-blank-circle"
            color="amber"
            background-color="white"
            readonly
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rating: 3,
    }
  }
}
</script>
