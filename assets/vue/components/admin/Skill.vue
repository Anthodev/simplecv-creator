<template>
  <v-tab-item value="tab-skills">
    <v-card flat>
      <v-card-text>
        <v-form id="skillForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Skill</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="7"><v-text-field v-model="name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="3">Level: <v-rating
              v-model="level"
              empty-icon="mdi-checkbox-blank-circle-outline"
              full-icon="mdi-checkbox-blank-circle"
              color="amber"
              background-color="white"
            /></v-col>
            <v-col cols="12" md="2"><v-btn form="skillForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataSkills).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Skills list</div>
        <v-divider />
        <v-card v-for="(skill) in skills" :key="skill.id">
          <v-row>
            <v-col cols="12" md="6"><v-text-field v-model="skill.name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="4">Level: <v-rating
              v-model="skill.level"
              empty-icon="mdi-checkbox-blank-circle-outline"
              full-icon="mdi-checkbox-blank-circle"
              color="amber"
              background-color="white"
            /></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = skill.id; loadingEdit=skill.id; onEdit(skill)" color="amber" :loading="loading && loadingEdit == skill.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = skill.id; loadingDelete=skill.id; onDelete(skill)" color="red" :loading="loading && loadingDelete == skill.id">Delete</v-btn>
              </v-col>
          </v-row>
        </v-card>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
import Snackbar from '../misc/Snackbar'

export default {
  props: ['cvDataSkills'],

  data () {
    return {
      skills: this.cvDataSkills,
      name: '',
      level: 0,
      loading: false,
      loader: null,
      loadingIndex: -1,
      loadingEdit: -1,
      loadingDelete: -1,
      snackbar: {
        state: false,
        message: ''
      }
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

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.name,
        level: this.level,
      }

      this.$store.dispatch('ADD_SKILL', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.level = 0
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(skill) {
      this.loading = !this.loading

      const formData = {
        id: skill.id,
        name: skill.name,
        level: skill.level,
      }

      this.$store.dispatch('EDIT_SKILL', formData).then(() => {
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.snackbar.message = "Error"
        this.snackbar.state = true
      }).finally(() => {
        this.loading = false
      })
    },

    onDelete(skill) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_SKILL', skill.id).then(() => {
        this.snackbar.message = "The entry has been deleted."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.snackbar.message = "Error"
        this.snackbar.state = true
      }).finally(() => {
        this.loading = false
      })
    },
  },

  components: {
    appSnackbar: Snackbar
  },
}
</script>
