<template>
  <v-tab-item value="tab-experiences">
    <v-card flat>
      <v-card-text>
        <v-form id="experienceForm" @submit.prevent="onSubmit">
          <div class="text-h5 text-uppercase">New Experience</div>
          <v-divider />
          <v-text-field v-model="title" placeholder="Title" filled></v-text-field>
          <v-text-field v-model="company" placeholder="Company" filled></v-text-field>
          <v-text-field v-model="link" placeholder="Company link" type="url" filled></v-text-field>
          <v-text-field v-model="location" placeholder="Location" filled></v-text-field>
          <editor
            id="description_exp"
            color="black"
            v-model="description"
            :apiKey='tiny_mce_api'
            :init="{
              selector: 'v-textarea',
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap',
                'preview anchor media',
                'paste code help wordcount'
              ],
              toolbar: 'formatselect | bold italic | bullist numlist | code'
            }" />
          <v-text-field v-model="date_start" class="mt-7" label="Date start" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
          <v-text-field v-model="date_end" label="Date end" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
          <v-text-field v-model="order" placeholder="List Order" type="number" filled></v-text-field>
          <v-col cols="12" md="2"><v-btn form="experienceForm" type="submit" color="primary" @click="loader = 'loading'; loadingIndex = -1" :loading="loading && loadingIndex == -1">Add</v-btn></v-col>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="Object.keys(cvDataExperiences).length > 0">
      <v-card-text>
        <div class="text-h5 text-uppercase">Experiences list</div>
        <v-divider />
        <v-expansion-panels>
          <v-expansion-panel v-for="(experience) in experiences" :key="experience.id">
            <v-expansion-panel-header>{{ experience.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field v-model="experience.title" placeholder="Title" filled></v-text-field>
              <v-text-field v-model="experience.company" placeholder="Company" filled></v-text-field>
              <v-text-field v-model="experience.company_link" placeholder="Company link" type="url" filled></v-text-field>
              <v-text-field v-model="experience.location" placeholder="Location" filled></v-text-field>
              <editor
                color="black"
                v-model="experience.description"
                :apiKey='tiny_mce_api'
                :init="{
                  selector: 'v-textarea',
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap',
                    'preview anchor media',
                    'paste code help wordcount'
                  ],
                  toolbar: 'formatselect | bold italic | bullist numlist | code'
                }"
                :init-value='experience.description'
              />

              <v-text-field :id="'inputDateStart'+experience.id" :value="formatExpDate(experience.date_start)" class="mt-7" label="Date start" placeholder="jj/mm/aaaa" type="date" filled></v-text-field>
              
              <v-text-field :id="'inputDateEnd'+experience.id" :value="formatExpDate(experience.date_end)" label="Date end" type="date" filled></v-text-field>

              <v-text-field v-model="experience.list_order" placeholder="List Order" type="number" filled></v-text-field>
              <v-col cols="12" md="2">
                <v-btn @click="loader='loading'; loadingIndex = experience.id; loadingEdit=experience.id; onEdit(experience)" color="amber" :loading="loading && loadingEdit == experience.id">Edit</v-btn>
                <v-btn @click="loader='loading'; loadingIndex = experience.id; loadingDelete=experience.id; onDelete(experience)" color="red" :loading="loading && loadingDelete == experience.id">Delete</v-btn>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
import Snackbar from '../misc/Snackbar'
import TinyMCE from '@tinymce/tinymce-vue'
import { format, parseISO } from 'date-fns'

export default {
  props: ['cvDataExperiences'],

  data () {
    return {
      experiences: this.cvDataExperiences,
      title: '',
      company: '',
      link: '',
      location: '',
      description: '',
      date_start: '',
      date_end: '',
      order: 0,
      loading: false,
      loader: null,
      loadingIndex: -1,
      loadingEdit: -1,
      loadingDelete: -1,
      tiny_mce_api: process.env.VUE_APP_TINYMCE_API,
      snackbar: {
        state: false,
        message: ''
      }
    }
  },

  watch: {
    cvDataExperiences: {
      handler(val) {
        this.experiences = val
      },
      deep: true
    }
  },

  methods: {
    formatExpDate(date) {
      return format(parseISO(date), 'yyyy-MM-dd')
    },

    onSubmit() {
      this.loading = !this.loading

      const formData = {
        title: this.title,
        company: this.company,
        link: this.link,
        location: this.location,
        description: this.description,
        date_start: this.date_start,
        date_end: this.date_end,
        order: this.order,
      }

      this.$store.dispatch('ADD_EXPERIENCE', formData).then(() => {
        this.loading = false
        this.snackbar.message = "The changes have been saved."
        this.snackbar.state = true

        this.title = ''
        this.company = ''
        this.link = ''
        this.location = ''
        this.description = ''
        this.date_start = ''
        this.date_end = ''
        this.order = 0
      }).catch((error) => {
        console.error(error)
        this.loading = false
        this.snackbar.message = "Error"
        this.snackbar.state = true
      })
    },

    onEdit(experience) {
      this.loading = !this.loading

      const formData = {
        id: experience.id,
        title: experience.title,
        company: experience.company,
        link: experience.company_link,
        location: experience.location,
        description: experience.description,
        date_start: document.querySelector('#inputDateStart'+experience.id).value,
        date_end: document.querySelector('#inputDateEnd'+experience.id).value,
        order: experience.list_order,
      }

      this.$store.dispatch('EDIT_EXPERIENCE', formData).then(() => {
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

    onDelete(experience) {
      this.loadingDelete = !this.loading

      this.$store.dispatch('DELETE_EXPERIENCE', experience.id).then(() => {
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
    appSnackbar: Snackbar,
    editor: TinyMCE
  }
}
</script>
