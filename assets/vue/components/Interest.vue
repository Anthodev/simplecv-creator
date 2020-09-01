<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Intérêts</div>

      <v-row v-for="interest in interests" :key="interest">
        <v-col cols="12">
          <v-icon class="mr-2">mdi-account</v-icon> {{ interest }}
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      interests: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
