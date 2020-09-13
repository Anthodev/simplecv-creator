<template>
  <v-row class="mb-2">
    <v-col cols="12">
      <div class="text-h4 font-weight-bold text-uppercase section-title mb-2">Compétences</div>

      <v-row v-for="(skill) in skills" :key="skill.id">
        <v-col cols="12">
          <div class="text-h6 font-weight-bold text-uppercase mb-2">{{ skill.name }}</div>
          <v-rating
            v-model="skill.level"
            empty-icon="mdi-checkbox-blank-circle-outline"
            full-icon="mdi-checkbox-blank-circle"
            color="amber"
            background-color="white"
            readonly
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['cvDataSkills'],

  data () {
    return {
      skills: this.cvDataSkills,
    }
  },

  watch: {
    cvDataSkills: {
      handler(val) {
        this.skills = val
      },
      deep: true
    }
  },
}
</script>
