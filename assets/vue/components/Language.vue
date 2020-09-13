<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Langues</div>

      <v-row v-for="(language) in languages" :key="language.id">
        <v-col cols="12">
          <div class="text-h6 font-weight-bold text-uppercase">{{ language.name }}</div>
          <div class="text-overline text-text-uppercase mb-6">Niveau : <v-btn color="amber" small outlined>{{ language.level }}</v-btn></div>
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
