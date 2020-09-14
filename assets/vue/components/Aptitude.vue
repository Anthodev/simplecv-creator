<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Hard Skills</div>
        
      <v-row justify="space-around">
        <v-col cols="12">
          <v-chip-group column>
            <v-chip color="amber" outlined v-for="aptitude in aptitudes" :key="aptitude.id">
              {{ aptitude.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataAptitudes'],

  data () {
    return {
      aptitudes: this.cvDataAptitudes,
    }
  },

  watch: {
    cvDataAptitudes: {
      handler(val) {
        this.aptitudes = val
      },
      deep: true
    }
  },
}
</script>
