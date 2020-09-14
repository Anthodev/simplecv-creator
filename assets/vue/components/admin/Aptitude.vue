<template>
  <v-tab-item value="tab-aptitudes">
    <v-card flat>
      <v-card-text>
        <v-form id="aptitudeForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Aptitude</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="10"><v-text-field v-model="name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="aptitudeForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataAptitudes).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Aptitudes list</div>
        <v-divider />
        <v-card v-for="(aptitude) in aptitudes" :key="aptitude.id">
          <v-row>
            <v-col cols="12" md="10"><v-text-field v-model="aptitude.name" placeholder="Name" filled></v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = aptitude.id; loadingEdit=aptitude.id; onEdit(aptitude)" color="amber" :loading="loading && loadingEdit == aptitude.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = aptitude.id; loadingDelete=aptitude.id; onDelete(aptitude)" color="red" :loading="loading && loadingDelete == aptitude.id">Delete</v-btn>
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
  props: ['cvDataAptitudes'],

  data () {
    return {
      aptitudes: this.cvDataAptitudes,
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
    cvDataAptitudes: {
      handler(val) {
        this.aptitudes = val
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

      this.$store.dispatch('ADD_APTITUDE', formData).then(() => {
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

    onEdit(aptitude) {
      this.loading = !this.loading

      const formData = {
        id: aptitude.id,
        name: aptitude.name,
      }

      this.$store.dispatch('EDIT_APTITUDE', formData).then(() => {
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

    onDelete(aptitude) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_APTITUDE', aptitude.id).then(() => {
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
