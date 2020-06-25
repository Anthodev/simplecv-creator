<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Intérêts</div>

      <v-row justify="space-around">
        <v-btn class="mb-2" color="amber" outlined v-for="extra in extras" :key="extra">{{ extra }}</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      extras: [
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
