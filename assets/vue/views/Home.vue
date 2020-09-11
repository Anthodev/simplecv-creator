<template>
  <v-row align="top" justify="center">
    <v-col cols="9">
      <v-row>
        <v-col cols="12" v-if="Object.keys(cvData.info).length !== 0">
          <p class="text-h3">{{ cvData.info.name }}</p>
          <p class="text-h4">{{ cvData.info.title }}</p>
        </v-col>
        <v-col cols="12" v-else>
          <p class="text-h3">Nom</p>
          <p class="text-h4">Title</p>
        </v-col>
        <v-col cols="12" v-if="Object.keys(cvData.contacts).length > 0">
          <app-contact :cvDataContacts="cvData.contacts" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" v-if="Object.keys(cvData.experiences).length > 0">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Expériences</div>
          <app-experience :cvDataExperiences="cvData.experiences" />
        </v-col>

        <v-col cols="12">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Portfolio professionnel</div>
          <app-portfolio-pro />
        </v-col>

        <v-col cols="12">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Portfolio personnel</div>
          <app-portfolio-perso />
        </v-col>

        <v-col cols="12">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Formations</div>
          <app-training />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="3">
      <v-col cols="12" class="mb-3">
        <v-img src="https://www.citationbonheur.fr/wp-content/uploads/2017/08/placeholder-1024x1024.png" />
      </v-col>

      <app-language />
      <app-skill />
      <app-soft-skill />
      <app-interest />
      <app-extra />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",

  methods: {
    getData() {
      this.$store.dispatch("FETCH_CV_DATA")
    }
  },

  computed: {
    cvData() {
      return this.$store.getters.cvData
    }
  },

  components: {
    appContact: () => import('../components/Contact'),
    appExperience: () => import('../components/Experience'),
    appPortfolioPro: () => import('../components/PortfolioPro'),
    appPortfolioPerso: () => import('../components/PortfolioPerso'),
    appTraining: () => import('../components/Training'),
    appLanguage: () => import('../components/Language'),
    appSkill: () => import('../components/Skill'),
    appSoftSkill: () => import('../components/SoftSkill'),
    appInterest: () => import('../components/Interest'),
    appExtra: () => import('../components/Extra'),
  },

  created: function() {
    this.getData()
  }
}
</script>

<style lang="sass">
.section-title {
  border-bottom: 1px solid gold;
}
</style>
