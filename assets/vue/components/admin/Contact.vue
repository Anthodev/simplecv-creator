<template>
  <v-tab-item value="tab-contacts">
    <v-card flat>
      <v-card-text>
        <v-form id="contactForm" @keyup.native.enter="onSubmit" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Contact</div>
          <v-divider />
          <v-row>
            <v-col cols="12" md="3"><v-text-field placeholder="Name" v-model="name" filled></v-text-field></v-col>
            <v-col cols="12" md="3"><v-text-field placeholder="Link" v-model="link" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Icon" v-model="icon" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Contact Order" type="number" v-model="order" filled></v-text-field></v-col>
            <v-col cols="12" md="2"><v-btn form="contactForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataContacts).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Contacts list</div>
        <v-divider />
        <v-card v-for="(contact) in contacts" :key="contact.id">
          <v-row>
            <v-col cols="12" md="3"><v-text-field placeholder="Name" :value="contact.name" v-model="contact.name" filled>{{ contact.name }}</v-text-field></v-col>
            <v-col cols="12" md="3"><v-text-field placeholder="Link" :value="contact.link" v-model="contact.link" filled>{{ contact.link }}</v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Icon" :value="contact.icon" v-model="contact.icon" filled>{{ contact.icon }}</v-text-field></v-col>
            <v-col cols="12" md="2"><v-text-field placeholder="Order" :value="contact.order" type="number" v-model="contact.order" filled>{{ contact.order }}</v-text-field></v-col>
            <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = contact.id; loadingEdit=contact.id; onEdit(contact)" color="amber" :loading="loading && loadingEdit == contact.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = contact.id; loadingDelete=contact.id; onDelete(contact)" color="red" :loading="loading && loadingDelete == contact.id">Delete</v-btn>
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
  props: ['cvDataContacts'],

  data () {
    return {
      contacts: this.cvDataContacts,
      name: '',
      link: '',
      icon: '',
      order: 0,
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
    cvDataContacts: {
      handler(val) {
        this.contacts = val
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
    },

    onEdit(contact) {
      this.loading = !this.loading

      const formData = {
        id: contact.id,
        name: contact.name,
        link: contact.link,
        icon: contact.icon,
        order: contact.order,
      }

      this.$store.dispatch('EDIT_CONTACT', formData).then(() => {
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

    onDelete(contact) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_CONTACT', contact.id).then(() => {
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
