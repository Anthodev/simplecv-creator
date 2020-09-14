<template>
  <v-tab-item value="tab-interests">
    <v-card flat>
      <v-card-text>
        <v-form id="interestForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Interest</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="8"><v-text-field placeholder="Name" v-model="name" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Icon" v-model="icon" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="interestForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataInterests).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Interests list</div>
        <v-divider />
        <v-card v-for="(interest) in interests" :key="interest.id">
          <v-row>
            <v-col cols="12" md="8"><v-text-field placeholder="Name" :value="interest.name" v-model="interest.name" filled>{{ interest.name }}</v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Icon" :value="interest.icon" v-model="interest.icon" filled>{{ interest.icon }}</v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = interest.id; loadingEdit=interest.id; onEdit(interest)" color="amber" :loading="loading && loadingEdit == interest.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = interest.id; loadingDelete=interest.id; onDelete(interest)" color="red" :loading="loading && loadingDelete == interest.id">Delete</v-btn>
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
  props: ['cvDataInterests'],

  data () {
    return {
      interests: this.cvDataInterests,
      name: '',
      icon: '',
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
    cvDataInterests: {
      handler(val) {
        this.interests = val
      },
      deep: true
    }
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.name,
        icon: this.icon,
      }

      this.$store.dispatch('ADD_INTEREST', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.icon = ''
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(interest) {
      this.loading = !this.loading

      const formData = {
        id: interest.id,
        name: interest.name,
        icon: interest.icon,
      }

      this.$store.dispatch('EDIT_INTEREST', formData).then(() => {
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

    onDelete(interest) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_INTEREST', interest.id).then(() => {
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
