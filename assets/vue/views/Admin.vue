<template>
  <v-row align="top" justify="center">
    <v-col cols="12" sm="8" md="6" class="text-center" v-if="cvData === null || cvData === undefined">
      <v-progress-circular indeterminate color="amber" />
    </v-col>
    <v-col cols="12" v-else>
      <v-toolbar class="rounded-t-lg" flat>
        <v-toolbar-title>Admin CV</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs slider-color="amber" v-model="tab" centered>
            <v-tab href="#tab-information">My Information</v-tab>
            <v-tab href="#tab-contacts">Contacts</v-tab>
            <v-tab href="#tab-experiences">Experiences</v-tab>
            <v-tab href="#tab-trainings">Trainings</v-tab>
            <v-tab href="#tab-portfolio">Portfolio</v-tab>
            <v-tab href="#tab-aptitudes">Aptitudes</v-tab>
            <v-tab href="#tab-skills">Skills</v-tab>
            <v-tab href="#tab-soft-skills">Soft skills</v-tab>
            <v-tab href="#tab-interests">Interests</v-tab>
            <v-tab href="#tab-languages">Languages</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <app-admin-information :cvDataInfo="cvData.info" />
        <app-admin-contacts :cvDataContacts="cvData.contacts" />
        <app-admin-experiences :cvDataExperiences="cvData.experiences" />
        <app-admin-trainings :cvDataTrainings="cvData.trainings" />
        <app-admin-portfolio />
        <app-admin-aptitudes />
        <app-admin-skills :cvDataSkills="cvData.skills" />
        <app-admin-soft-skills />
        <app-admin-interests />
        <app-admin-languages />
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Admin",
  middleware: 'auth',

  data() {
    return {
      tab: null
    }
  },

  computed: {
    cvData() {
      return this.$store.getters.cvData
    }
  },

  components: {
    appAdminInformation: () => import('../components/admin/Information'),
    appAdminContacts: () => import('../components/admin/Contact'),
    appAdminExperiences: () => import('../components/admin/Experience'),
    appAdminTrainings: () => import('../components/admin/Training'),
    appAdminPortfolio: () => import('../components/admin/Portfolio'),
    appAdminAptitudes: () => import('../components/admin/Aptitude'),
    appAdminSkills: () => import('../components/admin/Skill'),
    appAdminSoftSkills: () => import('../components/admin/SoftSkill'),
    appAdminInterests: () => import('../components/admin/Interest'),
    appAdminLanguages: () => import('../components/admin/Language'),
  },

  created() {
    this.$store.dispatch('FETCH_CV_DATA')
  }
}
</script>

<style>
.ck-editor {
  color: #1e1e1e;
}
</style>
