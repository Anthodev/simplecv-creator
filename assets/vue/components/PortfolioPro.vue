<template>
  <v-carousel
    cycle
    height="auto"
    continuous
  >
    <v-carousel-item v-for="portfolio in portfolios"
      :key="portfolio.id"
      :src="'/uploads/images/' + portfolio.image"
    >
    </v-carousel-item>
  </v-carousel>
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
