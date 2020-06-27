<template>
  <v-tab-item value="tab-skills">
    <v-card flat>
      <v-card-text>
        <v-text-field placeholder="Name" filled></v-text-field>
        Level: <v-rating
          v-model="rating"
          empty-icon="mdi-checkbox-blank-circle-outline"
          full-icon="mdi-checkbox-blank-circle"
          color="amber"
          background-color="white"
        />
        <v-btn color="primary">Add</v-btn>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
    }
  }
}
</script>
