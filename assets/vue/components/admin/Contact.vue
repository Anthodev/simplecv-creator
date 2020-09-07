<template>
  <v-tab-item value="tab-contacts">
    <v-card flat>
      <v-card-text>
        <v-form id="contactForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <v-text-field placeholder="Name" v-model="name" filled></v-text-field>
          <v-text-field placeholder="Link" v-model="link" filled></v-text-field>
          <v-text-field placeholder="Icon" v-model="icon" filled></v-text-field>
          <v-text-field placeholder="Contact Order" type="number" v-model="order" filled></v-text-field>
          <v-btn form="contactForm" type="submit" color="primary" :loading="loading">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
import Snackbar from '../misc/Snackbar'

export default {
  props: ['cvDataContacts'],

  data () {
    return {
      contacts: this.cvDataContacts,
      name: '',
      link: '',
      icon: '',
      order: 0,
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
        name: this.name,
        link: this.link,
        icon: this.icon,
        order: this.order,
      }

      this.$store.dispatch('ADD_CONTACT', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.name = ''
        this.link = ''
        this.icon = ''
        this.order = ''
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
