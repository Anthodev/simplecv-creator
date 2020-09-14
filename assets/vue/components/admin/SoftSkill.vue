<template>
  <v-tab-item value="tab-soft-skills">
    <v-card flat>
      <v-card-text>
        <v-form id="softSkillForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Soft-Skill</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="10"><v-text-field v-model="name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="softSkillForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataSoftSkills).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Soft-Skills list</div>
        <v-divider />
        <v-card v-for="(softSkill) in softSkills" :key="softSkill.id">
          <v-row>
            <v-col cols="12" md="10"><v-text-field v-model="softSkill.name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = softSkill.id; loadingEdit=softSkill.id; onEdit(softSkill)" color="amber" :loading="loading && loadingEdit == softSkill.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = softSkill.id; loadingDelete=softSkill.id; onDelete(softSkill)" color="red" :loading="loading && loadingDelete == softSkill.id">Delete</v-btn>
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
  props: ['cvDataSoftSkills'],

  data () {
    return {
      softSkills: this.cvDataSoftSkills,
      name: '',
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
    cvDataSoftSkills: {
      handler(val) {
        this.softSkills = val
      },
      deep: true
    }
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.name,
      }

      this.$store.dispatch('ADD_SOFTSKILL', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(softSkill) {
      this.loading = !this.loading

      const formData = {
        id: softSkill.id,
        name: softSkill.name,
      }

      this.$store.dispatch('EDIT_SOFTSKILL', formData).then(() => {
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

    onDelete(softSkill) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_SOFTSKILL', softSkill.id).then(() => {
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
