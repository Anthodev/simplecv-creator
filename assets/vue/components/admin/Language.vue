<template>
  <v-tab-item value="tab-languages">
    <v-card flat>
      <v-card-text>
        <v-form id="languageForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Language</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="5"><v-text-field placeholder="Name" v-model="name" filled></v-text-field></v-col>
            <v-col cols="12" md="5"><v-text-field placeholder="Level" v-model="level" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="languageForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataLanguages).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Languages list</div>
        <v-divider />
        <v-card v-for="(language) in languages" :key="language.id">
          <v-row>
            <v-col cols="12" md="5"><v-text-field placeholder="Name" :value="language.name" v-model="language.name" filled>{{ language.name }}</v-text-field></v-col>
            <v-col cols="12" md="5"><v-text-field placeholder="Level" :value="language.level" v-model="language.level" filled>{{ language.level }}</v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = language.id; loadingEdit=language.id; onEdit(language)" color="amber" :loading="loading && loadingEdit == language.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = language.id; loadingDelete=language.id; onDelete(language)" color="red" :loading="loading && loadingDelete == language.id">Delete</v-btn>
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
  props: ['cvDataLanguages'],

  data () {
    return {
      languages: this.cvDataLanguages,
      name: '',
      level: '',
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
    cvDataLanguages: {
      handler(val) {
        this.languages = val
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

      this.$store.dispatch('ADD_LANGUAGE', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.level = ''
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(language) {
      this.loading = !this.loading

      const formData = {
        id: language.id,
        name: language.name,
        level: language.level,
      }

      this.$store.dispatch('EDIT_LANGUAGE', formData).then(() => {
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

    onDelete(language) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_LANGUAGE', language.id).then(() => {
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
