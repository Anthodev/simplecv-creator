<template>
  <v-row>
    <v-card min-width="99%" class="mx-auto mb-2" elevation="8" v-for="experience in experiences" :key="experience.id">
        <v-card-title class="text-h5 text-uppercase">{{ experience.title }}</v-card-title>
        <v-card-subtitle class="text-h6 text-uppercase font-weight-bold text-decoration-none"><a :href="experience.company_link" target="_blank" rel="noopener noreferrer">{{ experience.company }}</a></v-card-subtitle>
        <v-card-subtitle><span class="mr-2"><v-icon>mdi-calendar-month</v-icon> {{ formatDate(experience.date_start) }} - {{ formatDate(experience.date_end) }}</span> - <v-icon>mdi-map-marker</v-icon> {{ experience.location }}</v-card-subtitle>

        <v-card-text v-html="experience.description"/>
    </v-card>
  </v-row>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  props: ['cvDataExperiences'],

  data () {
    return {
      experiences: this.cvDataExperiences,
    }
  },

  watch: {
    cvDataContacts: {
      handler(val) {
        this.experiences = val
      },
      deep: true
    }
  },

  methods: {
    formatDate(date) {
      if (date !== null) return format(parseISO(date), 'MM/yyyy')
    },
  }
}
</script>

<style scoped>
a {
  color: #B48A1A !important;
}

a:hover {
  color: #BDBEC4 !important;
  text-decoration: none !important;
}

.v-application a {
  color: #B48A1A;
}

.v-application a:hover {
  color: #BDBEC4;
  text-decoration: none;
}
</style>
