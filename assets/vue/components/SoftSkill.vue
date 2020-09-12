<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Soft Skills</div>
        
      <v-row justify="space-around">
        <v-col cols="12">
          <v-chip-group column>
            <v-chip color="amber" outlined v-for="soft in softs" :key="soft.id">
              {{ soft.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataSoftSkills'],

  data () {
    return {
      softs: this.cvDataSoftSkills,
    }
  },

  watch: {
    cvDataSoftSkills: {
      handler(val) {
        this.softs = val
      },
      deep: true
    }
  },
}
</script>
