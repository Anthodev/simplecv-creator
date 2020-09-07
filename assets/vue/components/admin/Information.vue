<template>
  <v-tab-item value="tab-information">
    <v-card flat>
      <v-card-text>
        <v-form id="infoForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <template v-if="typeof info != 'undefined' && Object.keys(info).length !== 0">
            <v-text-field id="name" name="name" placeholder="Name" v-model="info.name" filled>{{ info.name }}</v-text-field>
            <v-text-field id="title" name="title" placeholder="Title" v-model="info.title" filled>{{ info.title }}</v-text-field>
          </template>
          <template v-else>
            <v-text-field id="name" name="name" placeholder="Name" v-model="info.name" filled></v-text-field>
            <v-text-field id="title" name="title" placeholder="Title" v-model="info.title" filled></v-text-field>
          </template>
          <v-btn form="infoForm" type="submit" color="primary" :loading="loading">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <app-snackbar :data="snackbar" />
  </v-tab-item>
</template>

<script>
import Snackbar from '../misc/Snackbar'

export default {
  props: ['cvDataInfo'],

  data () {
    return {
      info: this.cvDataInfo,
      loading: false,
      snackbar: {
        state: false,
        message: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.loading = !this.loading

      const formData = {
        name: this.info.name,
        title: this.info.title
      }

      this.$store.dispatch('SET_USERINFO', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    }
  },

  components: {
    appSnackbar: Snackbar
  },
}
</script>
