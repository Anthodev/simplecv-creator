<template>
  <v-tab-item value="tab-extras">
    <v-card flat>
      <v-card-text>
        <v-form id="extraForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Extra</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="3"><v-text-field placeholder="Name" v-model="name" filled></v-text-field></v-col>
            <v-col cols="12" md="7"><v-text-field placeholder="Link" v-model="link" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="extraForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataExtras).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Extras list</div>
        <v-divider />
        <v-card v-for="(extra) in extras" :key="extra.id">
          <v-row>
            <v-col cols="12" md="3"><v-text-field placeholder="Name" :value="extra.name" v-model="extra.name" filled>{{ extra.name }}</v-text-field></v-col>
            <v-col cols="12" md="7"><v-text-field placeholder="Link" :value="extra.link" v-model="extra.link" filled>{{ extra.link }}</v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = extra.id; loadingEdit=extra.id; onEdit(extra)" color="amber" :loading="loading && loadingEdit == extra.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = extra.id; loadingDelete=extra.id; onDelete(extra)" color="red" :loading="loading && loadingDelete == extra.id">Delete</v-btn>
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
  props: ['cvDataExtras'],

  data () {
    return {
      extras: this.cvDataExtras,
      name: '',
      link: '',
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
    cvDataExtras: {
      handler(val) {
        this.extras = val
      },
      deep: true
    }
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.name,
        link: this.link,
      }

      this.$store.dispatch('ADD_EXTRA', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.link = ''
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(extra) {
      this.loading = !this.loading

      const formData = {
        id: extra.id,
        name: extra.name,
        link: extra.link,
      }

      this.$store.dispatch('EDIT_EXTRA', formData).then(() => {
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

    onDelete(extra) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_EXTRA', extra.id).then(() => {
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
