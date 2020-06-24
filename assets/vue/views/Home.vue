<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <p class="text-h3">Nom</p>
        <p class="text-h4">Title</p>
      </v-col>
      <v-col cols='2'>
        <v-img src="https://www.citationbonheur.fr/wp-content/uploads/2017/08/placeholder-1024x1024.png" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Expériences</div>
        <app-experience />
      </v-col>

      <v-col cols="12">
        <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Portfolio professionnel</div>
        <app-portfolio-pro />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    appExperience: () => import('../components/Experience'),
    appPortfolioPro: () => import('../components/PortfolioPro')
  }
};
</script>

<style lang="sass" scoped>
.section-title {
  border-bottom: 1px solid gold;
}
</style>
