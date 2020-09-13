<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Langues</div>

      <v-row v-for="(language) in languages" :key="language.id">
        <v-col cols="11" class="mx-auto">
          <v-row class="text-h6 font-weight-bold text-uppercase d-flex align-center mb-6" justify="space-between"><span class="my-auto">{{ language.name }}</span><v-btn color="amber" small outlined>{{ language.level }}</v-btn></v-row>
          <v-divider/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataLanguages'],

  data () {
    return {
      languages: this.cvDataLanguages,
    }
  },

  watch: {
    cvDataLanguages: {
      handler(val) {
        this.languages = val
      },
      deep: true
    }
  },
}
</script>
