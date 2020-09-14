<template>
    <v-row>
      <v-card class="mb-2" elevation="8" v-for="portfolio in portfolios" :key="portfolio.id">
          <v-card-title class="text-h5 font-weight-bold text-uppercase">{{ portfolio.name }}</v-card-title>

          <v-card-text v-html="portfolio.description" />
      </v-card>
    </v-row>
</template>

<script>
export default {
  props: ['cvDataPortfolios'],

  data () {
    return {
      portfolios: this.cvDataPortfolios,
    }
  },

  watch: {
    cvDataPortfolios: {
      handler(val) {
        this.portfolios = val
      },
      deep: true
    }
  },
}
</script>
