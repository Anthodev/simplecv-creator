<template>
  <div class="mx-auto d-flex flex-wrap">
    <v-col cols="12" sm="12" md="9" lg="9" xl="9">
      <v-row>
        <v-col cols="12" v-if="Object.keys(cvData.info).length !== 0">
          <p class="text-h3">{{ cvData.info.name }}</p>
          <p class="text-h4 pb-2 section-title">{{ cvData.info.title }}</p>

          <v-card width="100%" v-if="cvData.info.presentation && cvData.info.presentation != ''">
            <v-card-text v-html="cvData.info.presentation"></v-card-text>
          </v-card>
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

        <v-col cols="12" v-if="Object.keys(cvData.portfolios_pro).length > 0">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Portfolio professionnel</div>
          <app-portfolio-pro :cvDataPortfolios="cvData.portfolios_pro" />
        </v-col>

        <v-col cols="12" v-if="Object.keys(cvData.portfolios_perso).length > 0">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Portfolio personnel</div>
          <app-portfolio-perso :cvDataPortfolios="cvData.portfolios_perso" />
        </v-col>

        <v-col cols="12" v-if="Object.keys(cvData.trainings).length > 0">
          <div class="text-h3 font-weight-bold text-uppercase section-title mb-2">Formations</div>
          <app-training :cvDataTrainings="cvData.trainings" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3" xl="3">
      <v-col cols="12" class="mb-3 mx-auto text-center justify-center" v-if="cvData.info.photo">
        <v-img :src="'/uploads/images/' + cvData.info.photo" height="auto" max-height="256" contain />
      </v-col>

      <app-skill v-if="Object.keys(cvData.skills).length > 0" :cvDataSkills="cvData.skills" />
      <app-aptitude v-if="Object.keys(cvData.aptitudes).length > 0" :cvDataAptitudes="cvData.aptitudes" />
      <app-soft-skill v-if="Object.keys(cvData.softs).length > 0" :cvDataSoftSkills="cvData.softs" />
      <app-language v-if="Object.keys(cvData.languages).length > 0" :cvDataLanguages="cvData.languages" />
      <app-interest v-if="Object.keys(cvData.interests).length > 0" :cvDataInterests="cvData.interests" />
      <app-extra v-if="Object.keys(cvData.extras).length > 0" :cvDataExtras="cvData.extras" />
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    getData() {
      this.$store.dispatch("FETCH_CV_DATA").then(() => {
        document.title = 'CV de ' + this.cvData.info.name
      })
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
    appAptitude: () => import('../components/Aptitude'),
  },

  created: function() {
    this.getData()
  },

  mounted: function() {
    if (this.cvData.info?.name != '') document.title = 'CV de ' + this.cvData.info.name
  }
}
</script>

<style lang="sass">
a {
  color: #FFC107 !important;
}

a:hover {
  color: #BDBEC4 !important;
  text-decoration: none !important;
}

.section-title {
  border-bottom: 1px solid gold;
}
</style>
