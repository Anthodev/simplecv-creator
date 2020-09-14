<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Particularités</div>

      <v-row justify="space-around">
        <v-btn class="mb-2" color="amber" :href="extra.link" target="_blank" outlined v-for="extra in extras" :key="extra.id">{{ extra.name }}</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataExtras'],

  data () {
    return {
      extras: this.cvDataExtras,
    }
  },

  watch: {
    cvDataExtras: {
      handler(val) {
        this.extras = val
      },
      deep: true
    }
  },
}
</script>
