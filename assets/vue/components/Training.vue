<template>
  <v-row>
    <v-card min-width="99%" class="mx-auto mb-2" elevation="8" v-for="training in trainings" :key="training.id">
        <v-card-title class="text-uppercase">{{ training.title }}</v-card-title>
        <v-card-subtitle class="text-uppercase text-decoration-none"><a :href="training.training_link" target="_blank" rel="noopener noreferrer">{{ training.training }}</a></v-card-subtitle>
        <v-card-subtitle><span class="mr-2"><v-icon>mdi-calendar-month</v-icon> {{ formatDate(training.date_start) }} - {{ formatDate(training.date_end) }}</span> - <v-icon>mdi-map-marker</v-icon> {{ training.location }}</v-card-subtitle>

        <v-card-text v-html="training.description"/>
    </v-card>
  </v-row>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  props: ['cvDataTrainings'],

  data () {
    return {
      trainings: this.cvDataTrainings,
    }
  },

  watch: {
    cvDataContacts: {
      handler(val) {
        this.trainings = val
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
